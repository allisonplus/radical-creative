<?php
/**
 * The template for displaying the Writings (Blog) main page.
 *
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package Radical Creative Sanctuary 2.0
 */

get_header(); ?>

	<div class="wrap">
		<div class="primary content-area">
			<main id="main" class="site-main" role="main">

			<a class="js-menu-trigger sliding-panel-button" href="javascript.void();">&#9776;</a>

				<?php
				while ( have_posts() ) : the_post();

					get_template_part( 'template-parts/content', 'blog' );

				endwhile; // End of the loop.
				?>

			</main><!-- #main -->
		</div><!-- .primary -->

		<div class="sidebar-wrapper sliding-panel-content">
			<a class=" sliding-panel-close" href="javascript.void();">&#10005;</a>

			<?php get_sidebar( 'sidebar-1' ); ?>
		</div> <!--/.sidebar-wrapper-->
	</div><!-- .wrap -->

<?php get_footer(); ?>
