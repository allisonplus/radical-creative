/**
 * File carousel.js
 *
 * Functionality for testimonials: https://flickity.metafizzy.co
 */
var elem = document.querySelector( '.testimonials-shell' );

// Conditional if element exists.
if (elem != null) {
	var flkty = new Flickity( elem, {
		// Options.
		contain: true,
		pageDots: true,
		imagesLoaded: true,
		groupCells: true,
		autoPlay: true,
		prevNextButtons: true
	});
}

// Enable prev/next buttons at 768px
// if ( matchMedia('screen and (min-width: 768px)').matches ) {
// 	flkty.prevNextButtons = true;
// 	flkty.autoPlay = true;
// }
