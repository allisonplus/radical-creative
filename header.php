<?php
/**
 * The header for our theme.
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Radical Creative Sanctuary 2.0
 */

?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<?php global $is_IE; if ( $is_IE ) : ?>
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
<?php endif; ?>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="profile" href="http://gmpg.org/xfn/11">
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">

<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<span class="svg-defs"><?php rcs_include_svg_icons(); ?></span>
<div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#main"><?php esc_html_e( 'Skip to content', 'rcs' ); ?></a>

	<header class="site-header">
		<div class="wrap">

			<button class="sliding-panel-button mobile-menu-toggle" type="button">
				<span class="mobile-menu-bar line-1"></span>
				<span class="mobile-menu-bar line-2"></span>
				<span class="mobile-menu-bar line-3"></span>
				<span class="screen-reader-text"><?php esc_html_e( 'Menu', 'rcs' ); ?></span>
			</button>

			<div class="navigation-wrapper sliding-panel-content header-mobile">

				<nav id="site-navigation" class="main-nav">
					<?php
						wp_nav_menu( array(
							'theme_location' => 'primary',
							'menu_id'        => 'primary-menu',
							'menu_class'     => 'menu menu-horizontal main-menu',
						) );
					?>
				</nav><!-- #site-navigation -->
			</div>

				<div class="site-branding">

					<?php // BANNER IMAGE PLACED HERE ACROSS ALL PAGES. ?>
					<?php if ( get_header_image() ) : ?>
					<a class="banner-image" href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home">
						<img src="<?php header_image(); ?>" width="<?php echo esc_attr( get_custom_header()->width ); ?>" height="<?php echo esc_attr( get_custom_header()->height ); ?>" alt="Radical Creative Sanctuary">
					</a>
					<?php endif; // End header image check. ?>
				</div><!-- .site-branding -->

		</div><!-- .wrap -->
	</header><!-- #masthead -->

	<div id="content" class="site-content">
