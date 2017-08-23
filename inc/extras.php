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
function rcs_img_unautop( $content ) {
	$content = preg_replace( '/<p>\\s*?(<a .*?><img.*?><\\/a>|<img.*?>)?\\s*<\\/p>/s', '<div class="figure">$1</div>', $content );
	return $content;
}
add_filter( 'the_content', 'rcs_img_unautop', 30 );

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
