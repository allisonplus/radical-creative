<?php
/**
 * The template used for displaying fifty/fifty media/text.
 *
 * @package Radical Creative Sanctuary 2.0
 */

// Grab the media data.
$media_data = get_sub_field( 'media_left' );

// This may be an embed, which for some reason doesn't return a formatted array.
// It may also just be empty, however.
if ( ! $media_data ) {
	$video_url = get_sub_field( 'media_left', false );

	// If there is a video_url, then we can somewhat safely assume the embed field was filled in.
	// Update $media_data with pertinent data to display the embed.
	if ( $video_url ) {
		$media_data['type'] = 'embed';
		$media_data['url'] = $video_url;
	}
}

?>

<section class="fifty-media-text">

	<div class="fifty-wrap">
		<div class="fifty-media-wrap">
			<?php
			switch ( $media_data['type'] ) {
				case 'video':
					echo '<video id="mp4-video" class="fifty-media-video" autoplay muted loop preload="auto"><source src="' . esc_url( $media_data['url'] ) . '" type="video/mp4"></video>';
					break;
				case 'image':
					echo '<img class="fifty-media-image" src="' . esc_url( $media_data['sizes']['fifty-fifty-media'] ) . '" alt="' . esc_html( $media_data['alt'] ) . '">';
					break;
				case 'embed':
					echo '<div class="fluid-embed">' . wp_oembed_get( esc_url( $media_data['url'] ), array( 'width' => 640 ) ) . '</div>'; // WPCS XSS OK.
					break;
				default:
					break;
			}
			?>
		</div><!-- .fifty-media-wrap -->

		<div class="fifty-text-wrap">
			<?php echo force_balance_tags( get_sub_field( 'text_primary' ) ); // WPCS XSS OK. ?>
		</div><!-- .fifty-text-wrap -->
	</div><!-- .fifty-wrap -->

</section><!-- .fifty-media-text -->
