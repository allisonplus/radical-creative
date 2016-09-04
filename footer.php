<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Radical Creative Sanctuary 2.0
 */

?>

	</div><!-- #content -->

	<footer class="site-footer">
		<div class="wrap">
			<aside class="widget-area footer" role="complementary">
				 <?php dynamic_sidebar( 'sidebar-2' ); ?>
			</aside>

			<div class="site-info">
				<?php rcs_do_copyright_text(); ?>
			</div>
		</div><!-- .wrap -->
	</footer><!-- .site-footer -->
</div><!-- #page -->

<?php rcs_do_mobile_navigation_menu(); ?>

<?php wp_footer(); ?>

</body>
</html>
