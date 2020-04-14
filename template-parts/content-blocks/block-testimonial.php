<?php
/**
 * The template used for displaying testimonial blocks.
 *
 * @package Radical Creative Sanctuary 2.0
 */

$t_gallery = get_field( 'testimonial_gallery' );
?>

<section class="testimonial">
	<?php 
	if( $t_gallery ): ?>
	    <ul class="testimonials-shell">
	        <?php foreach( $t_gallery as $image ): ?>
	            <li class="testimonial-single">
                    <img src="<?php echo esc_url($image['url']); ?>" alt="<?php echo esc_attr($image['alt']); ?>" />
                </li>
	        <?php endforeach; ?>
	    </ul>
	<?php endif; ?>
</section><!-- .testimonial -->
