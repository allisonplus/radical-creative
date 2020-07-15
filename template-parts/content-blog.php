<?php
/**
 * Template part for displaying page content in page.php.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package Radical Creative Sanctuary 2.0
 */

?>

<article <?php post_class(); ?>>
	<header class="entry-header">
		<?php if ( has_post_thumbnail() ) { the_post_thumbnail( 'blog' ); }
		else echo '<div class="thumbnail-filler"></div>';
		?>
	</header><!-- .entry-header -->

	<div class="entry-content">
		<?php the_title( sprintf( '<h2 class="entry-title"><a href="%s" rel="bookmark">', esc_url( get_permalink() ) ), '</a></h2>' ); ?>
		<?php //rcs_get_writing_meta_data(); ?>

		<?php
			echo rcs_get_the_excerpt( $args = array( 'length' => 55 ) ); // WPCS: XSS OK.
		?>
	</div><!-- .entry-content -->
</article><!-- #post-## -->
