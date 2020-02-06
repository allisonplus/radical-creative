<?php
/**
 * Radical Creative Sanctuary 2.0 Theme Customizer.
 *
 * @package Radical Creative Sanctuary 2.0
 */

/**
 * Add postMessage support for site title and description for the Theme Customizer.
 *
 * @param WP_Customize_Manager $wp_customize Theme Customizer object.
 */
function rcs_customize_register( $wp_customize ) {
	$wp_customize->get_setting( 'blogname' )->transport         = 'postMessage';
	$wp_customize->get_setting( 'blogdescription' )->transport  = 'postMessage';
	$wp_customize->get_setting( 'header_textcolor' )->transport = 'postMessage';

	// Add our social link options.
	$wp_customize->add_section(
		'rcs_social_links_section',
		array(
			'title'       => esc_html__( 'Social Links', 'rcs' ),
			'description' => esc_html__( 'These are the settings for social links.', 'rcs' ),
			'priority'    => 90,
		)
	);

	// Add our Contact Email field.
	$wp_customize->add_setting(
		'rcs_email_link',
		array(
			'default' => '',
		)
	);
	$wp_customize->add_control(
		'rcs_email_link',
		array(
			'label'       => esc_html__( 'Email', 'rcs' ),
			'section'     => 'rcs_social_links_section',
			'type'        => 'email',
			// 'sanitize'    => 'html',
		)
	);

	// Create an array of our social links for ease of setup.
	$social_networks = array( 'facebook', 'instagram' );

	// Loop through our networks to setup our fields.
	foreach ( $social_networks as $network ) {

		$wp_customize->add_setting(
			'rcs_' . $network . '_link',
			array(
				'default' => '',
				// 'sanitize_callback' => 'rcs_sanitize_customizer_url',
			)
		);
		$wp_customize->add_control(
			'rcs_' . $network . '_link',
			array(
				'label'   => sprintf( esc_html__( '%s Link', 'rcs' ), ucwords( $network ) ),
				'section' => 'rcs_social_links_section',
				'type'    => 'text',
			)
		);
	}

	// Add our Footer Customization section section.
	$wp_customize->add_section(
		'rcs_footer_section',
		array(
			'title'    => esc_html__( 'Footer Customization', 'rcs' ),
			'priority' => 90,
		)
	);

	// Add our copyright text field.
	$wp_customize->add_setting(
		'rcs_copyright_text',
		array(
			'default' => '',
		)
	);
	$wp_customize->add_control(
		'rcs_copyright_text',
		array(
			'label'       => esc_html__( 'Copyright Text', 'rcs' ),
			'description' => esc_html__( 'The copyright text will be displayed beneath the menu in the footer.', 'rcs' ),
			'section'     => 'rcs_footer_section',
			'type'        => 'text',
			'sanitize'    => 'html',
		)
	);
}
add_action( 'customize_register', 'rcs_customize_register' );

/**
 * Binds JS handlers to make Theme Customizer preview reload changes asynchronously.
 */
function rcs_customize_preview_js() {
	wp_enqueue_script( 'rcs_customizer', get_template_directory_uri() . '/assets/js/customizer.js', array( 'customize-preview' ), '20151215', true );
}
add_action( 'customize_preview_init', 'rcs_customize_preview_js' );

/**
 * Sanitize our customizer text inputs.
 */
function rcs_sanitize_customizer_text( $input ) {
	return sanitize_text_field( force_balance_tags( $input ) );
}

/**
 * Sanitize our customizer URL inputs.
 */
function rcs_sanitize_customizer_url( $input ) {
	return esc_url( $input );
}
