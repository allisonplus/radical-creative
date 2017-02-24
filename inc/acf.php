<?php
/**
 * Custom ACF functions.
 *
 * @package Radical Creative Sanctuary 2.0
 */

/**
 * Adds ACF Site Options Page.
 */
if ( function_exists( 'acf_add_options_page' ) ) {

	acf_add_options_page( array(
		'page_title' => 'Site Options',
		'menu_title' => 'Site Options',
	));
}
