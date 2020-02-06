<?php
/**
 * Template part for displaying Shop Item page content in page.php.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package Radical Creative Sanctuary 2.0
 */

?>

<?php

global $post; // if outside the loop

if ( is_page() && $post->post_parent ) { ?>
  <!-- This is a subpage. -->
  <article <?php post_class( 'shop-item' ); ?>>
    <?php echo rcs_get_shopify_item(); ?>
  </article><!-- #post-## -->

<?php } else { ?>
	<!-- // This is not a subpage -->
	<?php the_title( '<h2 class="entry-title">', '</h2>' ); ?>

  <?php

  $args = array(
      'post_type'      => 'page',
      'posts_per_page' => -1,
      'post_parent'    => $post->ID,
      'order'          => 'ASC',
      'orderby'        => 'menu_order'
   );

  $parent = new WP_Query( $args );

  if ( $parent->have_posts() ) : ?>

	<div class="child-article-wrapper">

	<?php while ( $parent->have_posts() ) : $parent->the_post(); ?>

    <article id="child-<?php the_ID(); ?>" class="child-page">
      <header class="entry-header">
        <a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>">
        <?php if ( has_post_thumbnail() ) {
          echo the_post_thumbnail( 'featured-size', array( 'class' => 'featured-image' ) );
        } ?>
        <h2><?php the_title(); ?></h2>
        <h3><?php esc_html_e( '$', 'rcs' ); ?><?php echo get_field( 'shopify_price' ); ?></h3>
        </a>
      </header>
    </article>

	<?php endwhile; ?>

	</div><!--.article-wrapper-->

  <?php endif; wp_reset_postdata(); ?>
<?php } ?>
