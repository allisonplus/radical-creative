<?php
/**
 * Custom template tags for this theme.
 *
 * Eventually, some of the functionality here could be replaced by core features.
 *
 * @package Radical Creative Sanctuary 2.0
 */

if ( ! function_exists( 'rcs_posted_on' ) ) :
	/**
	 * Prints HTML with meta information for the current post-date/time and author.
	 */
	function rcs_posted_on() {
		$time_string = '<time class="entry-date published updated" datetime="%1$s">%2$s</time>';
		if ( get_the_time( 'U' ) !== get_the_modified_time( 'U' ) ) {
			$time_string = '<time class="entry-date published" datetime="%1$s">%2$s</time><time class="updated" datetime="%3$s">%4$s</time>';
		}

		$time_string = sprintf( $time_string,
			esc_attr( get_the_date( 'c' ) ),
			esc_html( get_the_date() ),
			esc_attr( get_the_modified_date( 'c' ) ),
			esc_html( get_the_modified_date() )
		);

		$posted_on = sprintf(
			esc_html_x( 'Posted on %s', 'post date', 'rcs' ),
			'<a href="' . esc_url( get_permalink() ) . '" rel="bookmark">' . $time_string . '</a>'
		);

		echo '<span class="posted-on">' . $posted_on . '</span>'; // WPCS: XSS OK.

	}
endif;

if ( ! function_exists( 'rcs_entry_footer' ) ) :
	/**
	 * Prints HTML with meta information for the categories, tags and comments.
	 */
	function rcs_entry_footer() {
		// Hide category and tag text for pages.
		if ( 'post' === get_post_type() ) {
			/* translators: used between list items, there is a space after the comma */
			$categories_list = get_the_category_list( esc_html__( ', ', 'rcs' ) );
			if ( $categories_list && rcs_categorized_blog() ) {
				printf( '<span class="cat-links">' . esc_html__( 'Posted in %1$s', 'rcs' ) . '</span>', $categories_list ); // WPCS: XSS OK.
			}

			/* translators: used between list items, there is a space after the comma */
			$tags_list = get_the_tag_list( '', esc_html__( ', ', 'rcs' ) );
			if ( $tags_list ) {
							printf( '<span class="tags-links">' . esc_html__( 'Tagged %1$s', 'rcs' ) . '</span>', $tags_list ); // WPCS: XSS OK.
			}
		}

		if ( ! is_single() && ! post_password_required() && ( comments_open() || get_comments_number() ) ) {
			echo '<span class="comments-link">';
			comments_popup_link( esc_html__( 'Leave a comment', 'rcs' ), esc_html__( '1 Comment', 'rcs' ), esc_html__( '% Comments', 'rcs' ) );
			echo '</span>';
		}
	}
endif;

/**
 * Returns true if a blog has more than 1 category.
 *
 * @return bool
 */
function rcs_categorized_blog() {
	if ( false === ( $all_the_cool_cats = get_transient( 'rcs_categories' ) ) ) {
		// Create an array of all the categories that are attached to posts.
		$all_the_cool_cats = get_categories( array(
			'fields'     => 'ids',
			'hide_empty' => 1,

			// We only need to know if there is more than one category.
			'number'     => 2,
		) );

		// Count the number of categories that are attached to the posts.
		$all_the_cool_cats = count( $all_the_cool_cats );

		set_transient( 'rcs_categories', $all_the_cool_cats );
	}

	if ( $all_the_cool_cats > 1 ) {
		// This blog has more than 1 category so rcs_categorized_blog should return true.
		return true;
	} else {
		// This blog has only 1 category so rcs_categorized_blog should return false.
		return false;
	}
}

/**
 * Flush out the transients used in rcs_categorized_blog.
 */
function rcs_category_transient_flusher() {
	if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) {
		return false;
	}
	// Like, beat it. Dig?
	delete_transient( 'rcs_categories' );
}
add_action( 'delete_category', 'rcs_category_transient_flusher' );
add_action( 'save_post',     'rcs_category_transient_flusher' );

/**
 * Return SVG markup.
 *
 * @param  array $args {
 *     Parameters needed to display an SVG.
 *
 *     string $icon Required. Use the icon filename, e.g. "facebook-square".
 *     string $title Optional. SVG title, e.g. "Fac
 *     string $desc Optional. SVG description, e.g. "Share this post on Facebook".
 * }.
 * @return string SVG markup.
 */
function rcs_get_svg( $args = array() ) {

	// Make sure $args are an array.
	if ( empty( $args ) ) {
		return esc_html__( 'Please define default parameters in the form of an array.', 'rcs' );
	}

	// YUNO define an icon?
	if ( false === array_key_exists( 'icon', $args ) ) {
		return esc_html__( 'Please define an SVG icon filename.', 'rcs' );
	}

	// Set defaults.
	$defaults = array(
		'icon'  => '',
		'title' => '',
		'desc'  => '',
	);

	// Parse args.
	$args = wp_parse_args( $args, $defaults );

	// Begin SVG markup.
	$svg = '<svg class="icon icon-' . esc_html( $args['icon'] ) . '" aria-hidden="true">';

	// If there is a title, display it.
	if ( $args['title'] ) {
		$svg .= '<title>' . esc_html( $args['title'] ) . '</title>';
	}

	// If there is a description, display it.
	if ( $args['desc'] ) {
		$svg .= '<desc>' . esc_html( $args['desc'] ) . '</desc>';
	}

	$svg .= '<use xlink:href="#icon-' . esc_html( $args['icon'] ) . '"></use>';
	$svg .= '</svg>';

	return $svg;
}

/**
 * Display an SVG.
 *
 * @param  array $args  Parameters needed to display an SVG.
 */
function rcs_do_svg( $args = array() ) {
	echo rcs_get_svg( $args ); // WPCS: XSS OK.
}

/**
 * Trim the title legnth.
 *
 * @param  array $args  Parameters include length and more.
 * @return string        The shortened excerpt.
 */
function rcs_get_the_title( $args = array() ) {

	// Set defaults.
	$defaults = array(
		'length' => 12,
		'more'   => '...',
	);

	// Parse args.
	$args = wp_parse_args( $args, $defaults );

	// Trim the title.
	return wp_trim_words( get_the_title( get_the_ID() ), $args['length'], $args['more'] );
}

/**
 * Limit the excerpt length.
 *
 * @param  array $args Parameters include length and more.
 * @return string       The shortened excerpt.
 */
function rcs_get_the_excerpt( $args = array() ) {

	$button = ' <a class="button more-link" href="' . get_permalink() . '">' . esc_html__( 'Read More', 'rcs' ) . '</a>';

	// Set defaults.
	$defaults = array(
		'length' => 20,
		'more'   => $button,
	);

	// Parse args.
	$args = wp_parse_args( $args, $defaults );

	// Trim the excerpt.
	return wp_trim_words( get_the_excerpt(), absint( $args['length'] ), ( $args['more'] ) );
}

/**
 * Echo an image, no matter what.
 *
 * @param string $size  The image size you want to display.
 */
function rcs_do_post_image( $size = 'thumbnail' ) {

	// If featured image is present, use that.
	if ( has_post_thumbnail() ) {
		return the_post_thumbnail( $size );
	}

	// Check for any attached image.
	$media = get_attached_media( 'image', get_the_ID() );
	$media = current( $media );

	// Set up default image path.
	$media_url = get_stylesheet_directory_uri() . '/assets/images/placeholder.png';

	// If an image is present, then use it.
	if ( is_array( $media ) && 0 < count( $media ) ) {
		$media_url = ( 'thumbnail' === $size ) ? wp_get_attachment_thumb_url( $media->ID ) : wp_get_attachment_url( $media->ID );
	}

	echo '<img src="' . esc_url( $media_url ) . '" class="attachment-thumbnail wp-post-image" alt="' . esc_html( get_the_title() ) . '" />';
}

/**
 * Return an image URI, no matter what.
 *
 * @param  string $size  The image size you want to return.
 * @return string        The image URI.
 */
function rcs_get_post_image_uri( $size = 'thumbnail' ) {

	// If featured image is present, use that.
	if ( has_post_thumbnail() ) {

		$featured_image_id = get_post_thumbnail_id( get_the_ID() );
		$media = wp_get_attachment_image_src( $featured_image_id, $size );

		if ( is_array( $media ) ) {
			return current( $media );
		}
	}

	// Check for any attached image.
	$media = get_attached_media( 'image', get_the_ID() );
	$media = current( $media );

	// Set up default image path.
	$media_url = get_stylesheet_directory_uri() . '/assets/images/placeholder.png';

	// If an image is present, then use it.
	if ( is_array( $media ) && 0 < count( $media ) ) {
		$media_url = ( 'thumbnail' === $size ) ? wp_get_attachment_thumb_url( $media->ID ) : wp_get_attachment_url( $media->ID );
	}

	return $media_url;
}

/**
 * Get an attachment ID from its URL.
 *
 * @param  string $attachment_url  The URL of the attachment.
 * @return int                     The attachment ID.
 */
function rcs_get_attachment_id_from_url( $attachment_url = '' ) {

	global $wpdb;

	$attachment_id = false;

	// If there is no url, return.
	if ( '' == $attachment_url ) {
		return false;
	}

	// Get the upload directory paths.
	$upload_dir_paths = wp_upload_dir();

	// Make sure the upload path base directory exists in the attachment URL, to verify that we're working with a media library image.
	if ( false !== strpos( $attachment_url, $upload_dir_paths['baseurl'] ) ) {

		// If this is the URL of an auto-generated thumbnail, get the URL of the original image.
		$attachment_url = preg_replace( '/-\d+x\d+(?=\.(jpg|jpeg|png|gif)$)/i', '', $attachment_url );

		// Remove the upload path base directory from the attachment URL.
		$attachment_url = str_replace( $upload_dir_paths['baseurl'] . '/', '', $attachment_url );

		// Finally, run a custom database query to get the attachment ID from the modified attachment URL.
		$attachment_id = $wpdb->get_var( $wpdb->prepare( "SELECT wposts.ID FROM $wpdb->posts wposts, $wpdb->postmeta wpostmeta WHERE wposts.ID = wpostmeta.post_id AND wpostmeta.meta_key = '_wp_attached_file' AND wpostmeta.meta_value = '%s' AND wposts.post_type = 'attachment'", $attachment_url ) );
	}

	return $attachment_id;
}

/**
 * Echo the copyright text saved in the Customizer.
 */
function rcs_do_copyright_text() {

	// Grab our customizer settings.
	$copyright_text = get_theme_mod( 'rcs_copyright_text' );

	// Stop if there's nothing to display.
	if ( ! $copyright_text ) {
		return false;
	}

	// Echo the text.
	echo '<span class="copyright-text">	&#169;' . date( 'Y' ) . ' ' . wp_kses_post( $copyright_text ) . '</span>'; // WPCS: XSS OK.
}

/**
 * Echo build text for dev info.
 */
function rcs_do_build_text() {

	// Echo the text.
	echo '<div class="dev-info">' . esc_html( 'Built with ', 'rcs' ) . '<span class="heart">&#9829; </span>' . esc_html( 'by ', 'rcs' ) . '<a class="dev-link" href="' . esc_url('http://www.allisontarr.com', 'rcs') . '">Allison Tarr</a></div>'; // WPCS: XSS OK.
}

/**
 * Build social sharing icons.
 *
 * @return string
 */
function rcs_get_social_share() {

	// Build the sharing URLs.
	$twitter_url  = 'https://twitter.com/share?text=' . urlencode( html_entity_decode( get_the_title() ) ) . '&amp;url=' . rawurlencode( get_the_permalink() );
	$facebook_url = 'https://www.facebook.com/sharer/sharer.php?u=' . rawurlencode( get_the_permalink() );
	$linkedin_url = 'https://www.linkedin.com/shareArticle?title=' . urlencode( html_entity_decode( get_the_title() ) ) . '&amp;url=' . rawurlencode( get_the_permalink() );

	// Start the markup.
	ob_start(); ?>
	<div class="social-share">
		<h5 class="social-share-title"><?php esc_html_e( 'Share This', 'rcs' ); ?></h5>
		<ul class="social-icons menu menu-horizontal">
			<li class="social-icon">
				<a href="<?php echo esc_url( $twitter_url ); ?>" onclick="window.open(this.href, 'targetWindow', 'toolbar=no, location=no, status=no, menubar=no, scrollbars=yes, resizable=yes, top=150, left=0, width=600, height=300' ); return false;">
					<?php rcs_do_svg( array( 'icon' => 'twitter-square', 'title' => 'Twitter', 'desc' => __( 'Share on Twitter', 'rcs' ) ) ); ?>
					<span class="screen-reader-text"><?php esc_html_e( 'Share on Twitter', 'rcs' ); ?></span>
				</a>
			</li>
			<li class="social-icon">
				<a href="<?php echo esc_url( $facebook_url ); ?>" onclick="window.open(this.href, 'targetWindow', 'toolbar=no, location=no, status=no, menubar=no, scrollbars=yes, resizable=yes, top=150, left=0, width=600, height=300' ); return false;">
					<?php rcs_do_svg( array( 'icon' => 'facebook-square', 'title' => 'Facebook', 'desc' => __( 'Share on Facebook', 'rcs' ) ) ); ?>
					<span class="screen-reader-text"><?php esc_html_e( 'Share on Facebook', 'rcs' ); ?></span>
				</a>
			</li>
			<li class="social-icon">
				<a href="<?php echo esc_url( $linkedin_url ); ?>" onclick="window.open(this.href, 'targetWindow', 'toolbar=no, location=no, status=no, menubar=no, scrollbars=yes, resizable=yes, top=150, left=0, width=475, height=505' ); return false;">
					<?php rcs_do_svg( array( 'icon' => 'linkedin-square', 'title' => 'LinkedIn', 'desc' => __( 'Share on LinkedIn', 'rcs' ) ) ); ?>
					<span class="screen-reader-text"><?php esc_html_e( 'Share on LinkedIn', 'rcs' ); ?></span>
				</a>
			</li>
		</ul>
	</div><!-- .social-share -->

	<?php
	return ob_get_clean();
}

/**
 * Echo social sharing icons.
 */
function rcs_do_social_share() {
	echo rcs_get_social_share(); // WPCS: XSS OK.
}

/**
 * Output the mobile navigation
 */
function rcs_do_mobile_navigation_menu() {

	// Figure out which menu we're pulling.
	$mobile_menu = has_nav_menu( 'mobile' ) ? 'mobile' : 'primary';
?>
	<nav id="mobile-menu" class="mobile-nav-menu">
		<button class="close-mobile-menu"><span class="screen-reader-text"><?php esc_html_e( 'Close menu', 'rcs' ); ?></span><?php rcs_do_svg( array( 'icon' => 'close' ) ); ?></button>
		<?php
			wp_nav_menu( array(
				'theme_location' => $mobile_menu,
				'menu_id'        => 'primary-menu',
				'menu_class'     => 'menu dropdown mobile-nav',
				'link_before'    => '<span>',
				'link_after'     => '</span>',
			) );
		?>
	</nav>
<?php
}

/**
 * Output the mobile navigation
 */
function rcs_do_blog_mobile_nav_menu() {

	$mobile_menu = has_nav_menu( 'blog' ) ? 'blog' : 'primary';
?>
	<nav id="mobile-menu" class="mobile-nav-menu">
		<button class="close-mobile-menu"><span class="screen-reader-text"><?php esc_html_e( 'Close menu', 'rcs' ); ?></span><?php rcs_do_svg( array( 'icon' => 'close' ) ); ?></button>
		<?php
			wp_nav_menu( array(
				'theme_location' => $mobile_menu,
				'menu_id'        => 'primary-menu',
				'menu_class'     => 'menu dropdown mobile-nav',
				'link_before'    => '<span>',
				'link_after'     => '</span>',
				'menu_id'         => 'blog-menu primary-menu',
			) );
		?>
	</nav>
<?php
}

/**
 * Social links for the footer.
 */
function rcs_get_footer_social_links() {

	// Set an array of social networks.
	$social_networks = array( 'instagram' );
	$email = get_theme_mod( 'rcs_email_link' );

	ob_start(); ?>

	<ul class="social-networks">

	<?php // If there's no email, don't make this <li> in the first place .?>
	<?php if ( ! empty( $email ) ) : ?>
		<li class="social-network email">
			<a href="mailto:<?php echo esc_attr( $email ); ?>">
				<?php echo rcs_get_svg( array( 'icon' => 'email-square', '' ) ); // WPCS: XSS OK. ?>
			</a>
		</li>
	<?php endif; ?>

	<?php // Continue <li>'s with rest of social networks provided. ?>
	<?php foreach ( $social_networks as $network ) : ?>
		<li class="social-network <?php echo $network; // WPCS: XSS OK. ?>">
			<a href="<?php echo esc_url( get_theme_mod( 'rcs_' . $network . '_link' ) ); ?>">
				<?php echo rcs_get_svg( array( 'icon' => $network . '-square', 'title' => $network . '' ) ); // WPCS: XSS OK. ?>
			</a>
		</li>
	<?php endforeach; ?>
	</ul><!-- .social-networks -->
	<?php
	return ob_get_clean();
}

/**
 * Get meta data for blog/writing post.
 **/
function rcs_get_writing_meta_data() {

	// Hide category and tag text for pages.
	if ( 'post' === get_post_type() ) {
		/* translators: used between list items, there is a space after the comma */
		$categories_list = get_the_category_list( esc_html__( ', ', 'rcs' ) );
		if ( $categories_list && rcs_categorized_blog() ) {
			printf( '<span class="cat-links">' . esc_html__( 'Posted in %1$s', 'rcs' ) . '</span>', $categories_list ); // WPCS: XSS OK.
		}

		/* translators: used between list items, there is a space after the comma */
		$tags_list = get_the_tag_list( '', esc_html__( ', ', 'rcs' ) );
		if ( $tags_list ) {
						printf( '<span class="tags-links">' . esc_html__( 'Tagged %1$s', 'rcs' ) . '</span>', $tags_list ); // WPCS: XSS OK.
		}
	}

	$time_string = '<time class="entry-date published updated" datetime="%1$s">%2$s</time>';
	if ( get_the_time( 'U' ) !== get_the_modified_time( 'U' ) ) {
		$time_string = '<time class="entry-date published" datetime="%1$s">%2$s</time><time class="updated" datetime="%3$s">%4$s</time>';
	}

	$time_string = sprintf( $time_string,
		esc_attr( get_the_date( 'c' ) ),
		esc_html( get_the_date() ),
		esc_attr( get_the_modified_date( 'c' ) ),
		esc_html( get_the_modified_date() )
	);

	$posted_on = sprintf(
		esc_html_x( 'on %s', 'post date', 'rcs' ),
		'<a href="' . esc_url( get_permalink() ) . '" rel="bookmark">' . $time_string . '</a>'
	);

	echo '<span class="posted-on">' . $posted_on . '</span>'; // WPCS: XSS OK.
}


/**
 * Create markup for MadMimi newsletter.
 */
function rcs_newsletter() {

	ob_start(); ?>

	<form accept-charset="UTF-8" action="https://madmimi.com/signups/subscribe/51392" id="ema_signup_form" method="post" target="_blank">
		<div style="margin:0;padding:0;display:inline">
			<input name="utf8" type="hidden" value="✓"/>
		</div>
		<div class="mimi_field">
			<label for="signup_name">Name</label>
			<br/>
			<input id="signup_name" name="signup[name]" type="text" data-required-field="This field is required"/>
		</div>
		<div class="mimi_field required">
			<label for="signup_email">Email*</label>
			<br/>
			<input id="signup_email" name="signup[email]" type="text" data-required-field="This field is required" placeholder="you@example.com"/>
		</div>
		<div class="mimi_field">
			<input type="submit" class="submit" value="Subscribe" id="webform_submit_button" data-default-text="Subscribe" data-submitting-text="Sending..." data-invalid-text="↑ You forgot some required fields" data-choose-list="↑ Choose a list" data-thanks="Thank you!"/>
		</div>
	</form>

	<?php return ob_get_clean();

}

/**
 * Create shortcode for MadMimi newsletter.
 *
 * @param string $passed_values --The title you'd like for the newsletter.
 */
function rcs_newsletter_shortcode( $passed_values ) {

	$attributes = shortcode_atts( array(
		'title' => 'I\'d love to write to you',
	), $passed_values );

	return "<div class='rcs-newsletter'><h3>" . $attributes['title'] . '</h3>' . rcs_newsletter() . '</div>';
}
add_shortcode( 'rcs_newsletter', 'rcs_newsletter_shortcode' );

/**
 * Check if it's the blog.
 */
function rcs_is_blog() {

	return ( is_archive() || is_author() || is_category() || is_home() || is_single() || is_tag()) && 'post' == get_post_type();

}
