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

			<a class="js-menu-trigger sliding-panel-button" href="javascript.void();"><?php esc_html_e( '&#9776;', 'rcs' ); ?></a>

				<?php
				while ( have_posts() ) : the_post();

					get_template_part( 'template-parts/content', 'blog' );

				endwhile; // End of the loop.
				?>

			</main><!-- #main -->
		</div><!-- .primary -->

		<div class="sidebar-wrapper sliding-panel-content">
			<a class=" sliding-panel-close" href="javascript.void();"><?php esc_html_e( '&#10005;', 'rcs' ); ?></a>

			<?php dynamic_sidebar( 'sidebar-2' ); ?>

		</div> <!--/.sidebar-wrapper-->
	</div><!-- .wrap -->

<?php get_footer(); ?>
