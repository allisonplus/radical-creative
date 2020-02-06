<?php
/**
 * The template for displaying all single Mini-Mindfuls (CPT).
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package Radical Creative Sanctuary 2.0
 */

get_header(); ?>

	<div class="wrap">
		<div class="primary content-area">
			<main id="main" class="site-main" role="main">

			<?php
			while ( have_posts() ) : the_post();

				if ( has_post_thumbnail() ) : ?>
					<a href="<?php the_permalink(); ?>" title="<?php the_title_attribute(); ?>">
						<?php the_post_thumbnail( 'large' ); ?>
					</a>
				<?php endif;

				get_template_part( 'template-parts/content', 'mindful-single' );

			endwhile; // End of the loop.
			?>

			</main><!-- #main -->
		</div><!-- .primary -->

	</div><!-- .wrap -->

<?php get_footer(); ?>
