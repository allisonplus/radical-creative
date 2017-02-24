<?php
/**
 * The template for displaying the front page.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package Radical Creative Sanctuary 2.0
 */

get_header(); ?>

	<div class="wrap">
		<div class="primary content-area">
			<main id="main" class="site-main" role="main">
				<?php
				while ( have_posts() ) : the_post();

					get_template_part( 'template-parts/content', 'page' );

					echo rcs_get_homepage_services_repeater();

				endwhile; // End of the loop.
				?>

			</main><!-- #main -->
		</div><!-- .primary -->

		<?php get_sidebar( 'sidebar-1' ); ?>

	</div><!-- .wrap -->

<?php get_footer(); ?>
