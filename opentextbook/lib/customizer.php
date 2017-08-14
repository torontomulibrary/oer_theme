<?php

namespace Roots\Sage\Customizer;

use Roots\Sage\Assets;

/**
 * Add postMessage support
 */
function customize_register( $wp_customize ) {
	$wp_customize->get_setting( 'blogname' )->transport = 'postMessage';
	$wp_customize->get_setting( 'blogdescription' )->transport = 'postMessage';
	$wp_customize->add_section(
		'opentextbook_publisher_intro_box',
		array(
			'title' => __( 'About Us', 'opentextbook' ),
			'description' => __( 'Add a description of your collection or institution below.', 'opentextbook' ),
			'priority' => 35,
		)
	);

	$wp_customize->add_setting(
		'opentextbook_publisher_intro_textbox',
		array(
			'default' => '',
			'sanitize_callback' => __NAMESPACE__ . '\\sanitize_text',
		)
	);

	$wp_customize->add_control(
		'opentextbook_publisher_intro_textbox',
		array(
			'label' => __( 'About Us', 'opentextbook' ),
			'section' => 'opentextbook_publisher_intro_box',
			'type' => 'textarea',
		)
	);

	$wp_customize->add_setting(
		'opentextbook_publisher_intro_text_col',
		array(
			'default' => 'one-column',
		)
	);

	$wp_customize->add_control(
		'opentextbook_publisher_intro_text_col',
		array(
			'label' => __( 'Columns', 'opentextbook' ),
			'description' => __( 'Display your intro text in one or two columns.', 'opentextbook' ),
			'section' => 'opentextbook_publisher_intro_box',
			'type' => 'radio',
			'choices' => array(
				'one-column' => __( 'One column', 'opentextbook' ),
				'two-column' => __( 'Two columns', 'opentextbook' ),
			),
		)
	);

	$wp_customize->remove_section( 'static_front_page' );
}

add_action( 'customize_register', __NAMESPACE__ . '\\customize_register' );

/**
* Sanitize callback
*/
function sanitize_text( $input ) {
	return wp_kses_post( force_balance_tags( $input ) );
}

/**
* Customizer JS
*/
function customize_preview_js() {
	wp_enqueue_script( 'opentextbook-publisher/customizer', Assets\asset_path( 'scripts/customizer.js' ), [ 'customize-preview' ], null, true );
}
add_action( 'customize_preview_init', __NAMESPACE__ . '\\customize_preview_js' );
