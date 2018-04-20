<?php
/**
 * Template part for displaying minimal single mindful content.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package Radical Creative Sanctuary 2.0
 */

?>

<article <?php post_class(); ?>>
	<div class="entry-content">
		<?php
			the_content( sprintf(
				/* translators: %s: Name of current post. */
				wp_kses( __( 'Continue reading %s <span class="meta-nav">&rarr;</span>', 'rcs' ), array( 'span' => array( 'class' => array() ) ) ),
				the_title( '<span class="screen-reader-text">"', '"</span>', false )
			) );
		?>
	</div><!-- .entry-content -->
</article><!-- #post-## -->
