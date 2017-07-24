<?php
/**
 * Custom ACF functions.
 *
 * @package Radical Creative Sanctuary 2.0
 */

/**
 * Loop through and output ACF flexible content blocks for the current page.
 */
function rcs_display_page_flexible_content_blocks() {

	if ( have_rows( 'content_blocks' ) ) {

		while ( have_rows( 'content_blocks' ) ) {

			the_row();

			// Template part name MUST match layout ID.
			get_template_part( 'template-parts/content-blocks/block', get_row_layout() );
		}

		wp_reset_postdata();
	}
}

/**
 * Output the mobile navigation
 */
function rcs_get_services_repeater() {

	if ( have_rows( 'featured_work' ) ) : ?>

		<ul class="featured-work">

		<?php while ( have_rows( 'featured_work' ) ) : the_row();

			// Variables for featured services.
			$image = get_sub_field( 'associated_image' );
			$title = get_sub_field( 'title' );
			$subtitle = get_sub_field( 'subtitle' );
			$link = get_sub_field( 'link' );
			$excerpt = get_sub_field( 'excerpt' );

			?>

			<li class="featured-work-single">

			<?php if ( $image ) : ?>
				<div class="featured-work-img-wrapper">
					<a href="<?php echo esc_url( $link ); ?>"><img src="<?php echo esc_url( $image['sizes']['featured-size'] ); ?>" alt="<?php echo esc_html( $image['alt'] ); ?>"></a>
				</div>
			<?php endif; ?>

				<div class="featured-work-content">
					<h3 class="work-title"><?php echo esc_html( $title ); ?></h3>
					<h4 class="work-subtitle"><a href="<?php echo esc_url( $link ); ?>"><?php echo esc_html( $subtitle ); ?></a></h4>
					<?php echo wp_kses_post( $excerpt ); ?>
				</div><!--/.featured-work-content-->
			</li>

		<?php endwhile; ?>

		</ul>

	<?php endif; ?>


<?php
}

/**
 * Replace <p> tag around image with figure div.
 *
 * @param string $content <p> tag around image.
 */
function img_unautop( $content ) {
	$content = preg_replace( '/<p>\\s*?(<a .*?><img.*?><\\/a>|<img.*?>)?\\s*<\\/p>/s', '<div class="figure">$1</div>', $content );
	return $content;
}
add_filter( 'acf_the_content', 'img_unautop', 30 );
