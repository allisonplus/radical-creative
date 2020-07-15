<?php
/**
 * Custom functions that act independently of the theme templates.
 *
 * Eventually, some of the functionality here could be replaced by core features.
 *
 * @package Radical Creative Sanctuary 2.0
 */

/**
 * Adds custom classes to the array of body classes.
 *
 * @param array $classes Classes for the body element.
 * @return array
 */
function rcs_body_classes( $classes ) {

	global $is_IE;

	// If it's IE, add a class.
	if ( $is_IE ) {
		$classes[] = 'ie';
	}

	// Give all pages a unique class.
	if ( is_page() ) {
		$classes[] = 'page-' . basename( get_permalink() );
	}

	// Adds a class of hfeed to non-singular pages.
	if ( ! is_singular() ) {
		$classes[] = 'hfeed';
	}

	// Adds a class of group-blog to blogs with more than 1 published author.
	if ( is_multi_author() ) {
		$classes[] = 'group-blog';
	}

	// Adds "no-js" class. If JS is enabled, this will be replaced (by javascript) to "js".
	$classes[] = 'no-js';

	return $classes;
}
add_filter( 'body_class', 'rcs_body_classes' );

/**
 * Replace <p> tag around image with figure div.
 *
 * @param string $content <p> tag around image.
 */
/**function rcs_img_unautop( $content ) {
	$content = preg_replace( '/<p>\\s*?(<a .*?><img.*?><\\/a>|<img.*?>)?\\s*<\\/p>/s', '<div class="figure">$1</div>', $content );
	return $content;
}
add_filter( 'the_content', 'rcs_img_unautop', 30 );
*/

function filter_ptags_on_images($content) {
    $content = preg_replace('/<p>\s*(<a .*>)?\s*(<img .* \/>)\s*(<\/a>)?\s*<\/p>/iU', '\1\2\3', $content);
    return preg_replace('/<p>\s*(<iframe .*>*.<\/iframe>)\s*<\/p>/iU', '\1', $content);
}
add_filter('acf_the_content', 'filter_ptags_on_images');
add_filter('the_content', 'filter_ptags_on_images');

add_action( 'login_enqueue_scripts', 'rcs_custom_login' );
/**
 * Customize the login screen styles.
 */
function rcs_custom_login() {
	?>

	<style type="text/css">
		.login {
			align-items: center;
			background: linear-gradient(to top, #80f9e2, #7d90f9 70%);
			display: flex;
			flex-direction: column;
			height: 100vh;
			justify-content: center;
		}
		#login {
			padding: 0 !important;
		}
		#login h1 a,
		.login h1 a {
			background-image: url( <?php echo get_stylesheet_directory_uri() . '/assets/images/rcs-logo.png'; ?> );
			background-size: contain;
			height: 150px;
			width: 150px;
		}
		.login #nav a,
		#login #nav a,
		.login #backtoblog a,
		#login #backtoblog a {
			color: #111;
		}
		.login #nav a:hover,
		#login #nav a:hover,
		.login #backtoblog a:hover,
		#login #backtoblog a:hover {
			color: #111;
		}

		.login #backtoblog, .login #nav {
			padding: 0!important;
		}
	</style>
	<?php
}

add_action('admin_init', function () {
    // Redirect any user trying to access comments page
    global $pagenow;
    
    if ($pagenow === 'edit-comments.php') {
        wp_redirect(admin_url());
        exit;
    }

    // Remove comments metabox from dashboard
    remove_meta_box('dashboard_recent_comments', 'dashboard', 'normal');

    // Disable support for comments and trackbacks in post types
    foreach (get_post_types() as $post_type) {
        if (post_type_supports($post_type, 'comments')) {
            remove_post_type_support($post_type, 'comments');
            remove_post_type_support($post_type, 'trackbacks');
        }
    }
});

// Close comments on the front-end
add_filter('comments_open', '__return_false', 20, 2);
add_filter('pings_open', '__return_false', 20, 2);

// Hide existing comments
add_filter('comments_array', '__return_empty_array', 10, 2);

// Remove comments page in menu
add_action('admin_menu', function () {
    remove_menu_page('edit-comments.php');
});
