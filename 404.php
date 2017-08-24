<?php
/**
 * The template for displaying 404 pages (not found).
 *
 * @link https://codex.wordpress.org/Creating_an_Error_404_Page
 *
 * @package Radical Creative Sanctuary 2.0
 */

get_header(); ?>

	<div class="wrap">
		<div class="primary content-area">
			<main id="main" class="site-main" role="main">

				<section class="error-404 not-found">
					<header class="page-header">
						<h1 class="page-title"><?php esc_html_e( 'Oops! That page can&rsquo;t be found.', 'rcs' ); ?></h1>
					</header><!-- .page-header -->

					<div class="page-content">
						<p><?php esc_html_e( 'I can’t find what you’re looking for. Let\'s start over on', 'rcs' ); ?><a href="<?php echo home_url(); ?>"><?php esc_html_e( ' the homepage.', 'rcs' ); ?></a></p>
					</div><!-- .page-content -->
				</section><!-- .error-404 -->

			</main><!-- #main -->
		</div><!-- .primary -->
	</div><!-- .wrap -->

<?php
get_footer();
