<?php
/**
 * The template for displaying the Writings (Blog) main page.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package Radical Creative Sanctuary 2.0
 */

get_header(); ?>

	<div class="wrap">
		<div class="primary content-area">
			<main id="main" class="site-main" role="main">
				<div class="js-menu-trigger sliding-panel-button">
					<span></span><span></span><span></span><span></span>
				</div>

				<?php
				while ( have_posts() ) : the_post();

					get_template_part( 'template-parts/content', 'blog' );

				endwhile; // End of the loop.
				?>

			</main><!-- #main -->
		</div><!-- .primary -->

		<div class="sidebar-wrapper sliding-panel-content">
			<?php dynamic_sidebar( 'sidebar-2' ); ?>
		</div> <!--/.sidebar-wrapper-->
	</div><!-- .wrap -->

<?php get_footer(); ?>
