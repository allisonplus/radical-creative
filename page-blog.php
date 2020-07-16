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

				<?php 

				$args= array(
					'post_type'        => 'post',
					'category__not_in' => array( 5 ),
				);

				$blog = new WP_Query( $args  ); ?>
				
				<?php if ( $blog->have_posts() ) : ?>
				
					<?php while ( $blog->have_posts() ) : $blog->the_post();

					get_template_part( 'template-parts/content', 'blog' );
				
					endwhile; ?>
				
				<?php wp_reset_postdata(); ?>
				
				<?php endif; ?>

			</main><!-- #main -->
		</div><!-- .primary -->

		<!-- <div class="sidebar-wrapper sliding-panel-content"> -->
			<?php // dynamic_sidebar( 'sidebar-3' ); ?>
		<!-- </div> /.sidebar-wrapper -->
	</div><!-- .wrap -->

<?php get_footer(); ?>
