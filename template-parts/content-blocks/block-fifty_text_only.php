<?php
/**
 * The template used for displaying fifty/fifty text only.
 *
 * @package Radical Creative Sanctuary 2.0
 */

?>

<section class="fifty-text-only">

	<div class="fifty-wrap">
		<div class="fifty-text-left">
			<?php echo force_balance_tags( get_sub_field( 'text_primary' ) ); // WPCS: XSS OK. ?>
		</div><!-- .fifty-text-left-->

		<div class="fifty-text-right">
			<?php echo force_balance_tags( get_sub_field( 'text_secondary' ) ); // WPCS: XSS OK. ?>
		</div><!-- .fifty-text-right-->
	</div><!-- .fifty-wrap-->

</section><!-- .fifty-text-only -->
