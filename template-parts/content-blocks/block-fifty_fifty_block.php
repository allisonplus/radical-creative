<?php
/**
 * The template used for displaying fifty/fifty blocks.
 *
 * @package Radical Creative Sanctuary 2.0
 */
// Get the block layout field so we can conditionally load our block template.
$block_layout = get_sub_field( 'block_layout' );

switch ( $block_layout ) {

	case 'text_media' :
		get_template_part( 'template-parts/content-blocks/block', 'fifty_text_media' );
		break;

	case 'media_text' :
		get_template_part( 'template-parts/content-blocks/block', 'fifty_media_text' );
		break;

	case 'text_text' :
		get_template_part( 'template-parts/content-blocks/block', 'fifty_text_only' );
		break;

	default :
		get_template_part( 'template-parts/content-blocks/block', 'fifty_text_media' );
}
