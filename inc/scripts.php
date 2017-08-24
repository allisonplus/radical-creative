<?php
/**
 * Custom scripts and styles.
 *
 * @package Radical Creative Sanctuary 2.0
 */

/**
 * Register Google font.
 *
 * @link http://themeshaper.com/2014/08/13/how-to-add-google-fonts-to-wordpress-themes/
 */
function rcs_font_url() {

	$fonts_url = '';

	/**
	 * Translators: If there are characters in your language that are not
	 * supported by the following, translate this to 'off'. Do not translate
	 * into your own language.
	 */
	// $roboto = _x( 'on', 'Roboto font: on or off', 'rcs' );
	$libre = _x( 'on', 'Libre Baskerville font: on or off', 'rcs' );
	$open_sans = _x( 'on', 'Open Sans font: on or off', 'rcs' );
	// $montserrat = _x( 'on', 'Montserrat font: on or off', 'rcs' );

	if ( 'off' !== $libre || 'off' !== $open_sans ) {
		$font_families = array();

		if ( 'off' !== $libre ) {
			$font_families[] = 'Libre Baskerville:400,700';
		}

		if ( 'off' !== $open_sans ) {
			$font_families[] = 'Open Sans:400,300,700';
		}

		$query_args = array(
			'family' => urlencode( implode( '|', $font_families ) ),
		);

		$fonts_url = add_query_arg( $query_args, '//fonts.googleapis.com/css' );
	}

	return $fonts_url;
}

/**
 * Enqueue scripts and styles.
 */
function rcs_scripts() {
	/**
	 * If WP is in script debug, or we pass ?script_debug in a URL - set debug to true.
	 */
	$debug = ( defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG == true ) || ( isset( $_GET['script_debug'] ) ) ? true : false;

	/**
	 * If we are debugging the site, use a unique version every page load so as to ensure no cache issues.
	 */
	$version = '1.0.0';

	/**
	 * Should we load minified files?
	 */
	$suffix = ( true === $debug ) ? '' : '.min';

	// Register styles.
	wp_register_style( 'rcs-google-font', rcs_font_url(), array(), null );

	// Enqueue styles.
	wp_enqueue_style( 'rcs-google-font' );
	wp_enqueue_style( 'animate.css' );
	wp_enqueue_style( 'rcs-style', get_stylesheet_directory_uri() . '/style' . $suffix . '.css', array(), $version );

	// Enqueue scripts.
	wp_enqueue_script( 'rcs-scripts', get_template_directory_uri() . '/assets/js/project' . $suffix . '.js', array( 'jquery' ), $version, true );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}

	// Enqueue the mobile nav script
	// Since we're showing/hiding based on CSS and wp_is_mobile is wp_is_imperfect, enqueue this everywhere.
	wp_enqueue_script( 'rcs-mobile-nav', get_template_directory_uri() . '/assets/js/mobile-nav-menu' . $suffix . '.js', array( 'jquery' ), $version, true );
}
add_action( 'wp_enqueue_scripts', 'rcs_scripts' );


if ( class_exists( 'WDS_Simple_Page_Builder' ) && version_compare( WDS_Simple_Page_Builder::VERSION, '1.6', '>=' ) ) :

	/**
	 * Conditionally enqueue styles & scripts via Page Builder.
	 */
	function rcs_enqueue_page_builder_scripts() {

		// Get the page builder parts
		$parts = get_page_builder_parts();

		// // If page builder part exsists, enqueue script
		// if ( in_array( 'cover-flow' , $parts ) ) {
		// 	wp_register_script( 'cover-flow', get_stylesheet_directory_uri() . '/js/cover-flow-script.js', array(), $version, true );
		// 	wp_enqueue_script( 'cover-flow' );
		// }

	}
	add_action( 'wds_page_builder_after_load_parts', 'rcs_enqueue_page_builder_scripts' );

endif;

/**
 * Add SVG definitions to <head>.
 */
function rcs_include_svg_icons() {

	// Define SVG sprite file.
	$svg_icons = get_template_directory() . '/assets/images/svg-icons.svg';

	// If it exsists, include it.
	if ( file_exists( $svg_icons ) ) {
		require_once( $svg_icons );
	}
}



add_action( 'wp_footer', 'rcs_google_analytics' );
/**
 * Add Google Analytics Tracking.
 */
function rcs_google_analytics() {
	// Hook into the footer. ?>
	<script>
		(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
		ga('create', 'UA-105139927-1', 'auto');
		ga('send', 'pageview');
	</script>

	<?php
}
