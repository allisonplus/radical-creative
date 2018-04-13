<?php
/**
 * Template part for displaying page content in archive-mindful.php.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package Radical Creative Sanctuary 2.0
 */

?>

<article <?php post_class(); ?>>
	<header class="entry-header">
		<a class="featured-image" href="<?php the_permalink(); ?>" tabindex="-1" aria-hidden="true" role="presentation">
			<?php
			if ( has_post_thumbnail() ) {
				echo the_post_thumbnail( 'medium_large', array( 'class' => 'featured-image' ) );
			} ?>
		</a>

		<?php the_title( sprintf( '<h2 class="entry-title"><a href="%s" rel="bookmark">', esc_url( get_permalink() ) ), '</a></h2>' );?>

	</header><!-- .entry-header -->

	<footer class="entry-footer">
		<?php
			edit_post_link(
				sprintf(
					/* translators: %s: Name of current post */
					esc_html__( 'Edit %s', 'rcs' ),
					the_title( '<span class="screen-reader-text">"', '"</span>', false )
				),
				'<span class="edit-link">',
				'</span>'
			);
		?>
	</footer><!-- .entry-footer -->
</article><!-- #post-## -->
