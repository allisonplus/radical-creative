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

/**
 * File js-enabled.js
 *
 * If Javascript is enabled, replace the <body> class "no-js".
 */
document.body.className = document.body.className.replace( 'no-js', 'js' );
/**
 * File skip-link-focus-fix.js.
 *
 * Helps with accessibility for keyboard only users.
 *
 * Learn more: https://git.io/vWdr2
 */
( function() {
	var isWebkit = navigator.userAgent.toLowerCase().indexOf( 'webkit' ) > -1,
	    isOpera  = navigator.userAgent.toLowerCase().indexOf( 'opera' )  > -1,
	    isIe     = navigator.userAgent.toLowerCase().indexOf( 'msie' )   > -1;

	if ( ( isWebkit || isOpera || isIe ) && document.getElementById && window.addEventListener ) {
		window.addEventListener( 'hashchange', function() {
			var id = location.hash.substring( 1 ),
				element;

			if ( ! ( /^[A-z0-9_-]+$/.test( id ) ) ) {
				return;
			}

			element = document.getElementById( id );

			if ( element ) {
				if ( ! ( /^(?:a|select|input|button|textarea)$/i.test( element.tagName ) ) ) {
					element.tabIndex = -1;
				}

				element.focus();
			}
		}, false );
	}
})();
 /**
  * File sticky-nav.js
  *
  */
window.RCS_Sticky_Nav = {};
( function( window, $, app ) {

	// Constructor.
	app.init = function() {
		app.cache();

		if ( app.meetsRequirements() ) {
			app.bindEvents();
		}
	};

	// Cache all the things.
	app.cache = function() {
		app.$c = {
			window: $( window ),
			body: $( 'body' ),
			nav: $( '.main-nav' ),
		};
	};

	// Combine all events.
	app.bindEvents = function() {
		app.$c.window.on( 'load', app.stickyNav );
	};

	// Do we meet the requirements?
	app.meetsRequirements = function() {
		return app.$c.nav.length;
	};

	// Toggle the form open and close.
	app.stickyNav = function(e) {

		var navHeight = $( '.site-branding' ).height();

		// Add class once below nav, otherwise, remove it.
		$( window ).scroll( function() {
			if( app.$c.window.scrollTop() > navHeight ) {
				app.$c.nav.addClass( 'main-nav-scrolled' );
			} else {
				app.$c.nav.removeClass( 'main-nav-scrolled' );
			}
		});

		e.preventDefault();
	};

	// Engage!
	$( app.init );

})( window, jQuery, window.RCS_Sticky_Nav );

/**
 * File window-ready.js
 *
 * Add a "ready" class to <body> when window is ready.
 */
window.Window_Ready = {};
( function( window, $, that ) {

	// Constructor.
	that.init = function() {
		that.cache();
		that.bindEvents();
	};

	// Cache document elements.
	that.cache = function() {
		that.$c = {
			window: $(window),
			body: $(document.body),
		};
	};

	// Combine all events.
	that.bindEvents = function() {
		that.$c.window.load( that.addBodyClass );
	};

	// Add a class to <body>.
	that.addBodyClass = function() {
		that.$c.body.addClass( 'ready' );
	};

	// Engage!
	$( that.init );

})( window, jQuery, window.Window_Ready );
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcm91c2VsLmpzIiwianMtZW5hYmxlZC5qcyIsInNraXAtbGluay1mb2N1cy1maXguanMiLCJzdGlja3ktbmF2LmpzIiwid2luZG93LXJlYWR5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoicHJvamVjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogRmlsZSBjYXJvdXNlbC5qc1xuICpcbiAqIEZ1bmN0aW9uYWxpdHkgZm9yIHRlc3RpbW9uaWFsczogaHR0cHM6Ly9mbGlja2l0eS5tZXRhZml6enkuY29cbiAqL1xudmFyIGVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnLnRlc3RpbW9uaWFscy1zaGVsbCcgKTtcblxuLy8gQ29uZGl0aW9uYWwgaWYgZWxlbWVudCBleGlzdHMuXG5pZiAoZWxlbSAhPSBudWxsKSB7XG5cdHZhciBmbGt0eSA9IG5ldyBGbGlja2l0eSggZWxlbSwge1xuXHRcdC8vIE9wdGlvbnMuXG5cdFx0Y29udGFpbjogdHJ1ZSxcblx0XHRwYWdlRG90czogdHJ1ZSxcblx0XHRpbWFnZXNMb2FkZWQ6IHRydWUsXG5cdFx0Z3JvdXBDZWxsczogdHJ1ZSxcblx0XHRhdXRvUGxheTogdHJ1ZSxcblx0XHRwcmV2TmV4dEJ1dHRvbnM6IHRydWVcblx0fSk7XG59XG5cbi8vIEVuYWJsZSBwcmV2L25leHQgYnV0dG9ucyBhdCA3NjhweFxuLy8gaWYgKCBtYXRjaE1lZGlhKCdzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KScpLm1hdGNoZXMgKSB7XG4vLyBcdGZsa3R5LnByZXZOZXh0QnV0dG9ucyA9IHRydWU7XG4vLyBcdGZsa3R5LmF1dG9QbGF5ID0gdHJ1ZTtcbi8vIH1cbiIsIi8qKlxuICogRmlsZSBqcy1lbmFibGVkLmpzXG4gKlxuICogSWYgSmF2YXNjcmlwdCBpcyBlbmFibGVkLCByZXBsYWNlIHRoZSA8Ym9keT4gY2xhc3MgXCJuby1qc1wiLlxuICovXG5kb2N1bWVudC5ib2R5LmNsYXNzTmFtZSA9IGRvY3VtZW50LmJvZHkuY2xhc3NOYW1lLnJlcGxhY2UoICduby1qcycsICdqcycgKTsiLCIvKipcbiAqIEZpbGUgc2tpcC1saW5rLWZvY3VzLWZpeC5qcy5cbiAqXG4gKiBIZWxwcyB3aXRoIGFjY2Vzc2liaWxpdHkgZm9yIGtleWJvYXJkIG9ubHkgdXNlcnMuXG4gKlxuICogTGVhcm4gbW9yZTogaHR0cHM6Ly9naXQuaW8vdldkcjJcbiAqL1xuKCBmdW5jdGlvbigpIHtcblx0dmFyIGlzV2Via2l0ID0gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoICd3ZWJraXQnICkgPiAtMSxcblx0ICAgIGlzT3BlcmEgID0gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoICdvcGVyYScgKSAgPiAtMSxcblx0ICAgIGlzSWUgICAgID0gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoICdtc2llJyApICAgPiAtMTtcblxuXHRpZiAoICggaXNXZWJraXQgfHwgaXNPcGVyYSB8fCBpc0llICkgJiYgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQgJiYgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIgKSB7XG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoICdoYXNoY2hhbmdlJywgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgaWQgPSBsb2NhdGlvbi5oYXNoLnN1YnN0cmluZyggMSApLFxuXHRcdFx0XHRlbGVtZW50O1xuXG5cdFx0XHRpZiAoICEgKCAvXltBLXowLTlfLV0rJC8udGVzdCggaWQgKSApICkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggaWQgKTtcblxuXHRcdFx0aWYgKCBlbGVtZW50ICkge1xuXHRcdFx0XHRpZiAoICEgKCAvXig/OmF8c2VsZWN0fGlucHV0fGJ1dHRvbnx0ZXh0YXJlYSkkL2kudGVzdCggZWxlbWVudC50YWdOYW1lICkgKSApIHtcblx0XHRcdFx0XHRlbGVtZW50LnRhYkluZGV4ID0gLTE7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRlbGVtZW50LmZvY3VzKCk7XG5cdFx0XHR9XG5cdFx0fSwgZmFsc2UgKTtcblx0fVxufSkoKTsiLCIgLyoqXG4gICogRmlsZSBzdGlja3ktbmF2LmpzXG4gICpcbiAgKi9cbndpbmRvdy5SQ1NfU3RpY2t5X05hdiA9IHt9O1xuKCBmdW5jdGlvbiggd2luZG93LCAkLCBhcHAgKSB7XG5cblx0Ly8gQ29uc3RydWN0b3IuXG5cdGFwcC5pbml0ID0gZnVuY3Rpb24oKSB7XG5cdFx0YXBwLmNhY2hlKCk7XG5cblx0XHRpZiAoIGFwcC5tZWV0c1JlcXVpcmVtZW50cygpICkge1xuXHRcdFx0YXBwLmJpbmRFdmVudHMoKTtcblx0XHR9XG5cdH07XG5cblx0Ly8gQ2FjaGUgYWxsIHRoZSB0aGluZ3MuXG5cdGFwcC5jYWNoZSA9IGZ1bmN0aW9uKCkge1xuXHRcdGFwcC4kYyA9IHtcblx0XHRcdHdpbmRvdzogJCggd2luZG93ICksXG5cdFx0XHRib2R5OiAkKCAnYm9keScgKSxcblx0XHRcdG5hdjogJCggJy5tYWluLW5hdicgKSxcblx0XHR9O1xuXHR9O1xuXG5cdC8vIENvbWJpbmUgYWxsIGV2ZW50cy5cblx0YXBwLmJpbmRFdmVudHMgPSBmdW5jdGlvbigpIHtcblx0XHRhcHAuJGMud2luZG93Lm9uKCAnbG9hZCcsIGFwcC5zdGlja3lOYXYgKTtcblx0fTtcblxuXHQvLyBEbyB3ZSBtZWV0IHRoZSByZXF1aXJlbWVudHM/XG5cdGFwcC5tZWV0c1JlcXVpcmVtZW50cyA9IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBhcHAuJGMubmF2Lmxlbmd0aDtcblx0fTtcblxuXHQvLyBUb2dnbGUgdGhlIGZvcm0gb3BlbiBhbmQgY2xvc2UuXG5cdGFwcC5zdGlja3lOYXYgPSBmdW5jdGlvbihlKSB7XG5cblx0XHR2YXIgbmF2SGVpZ2h0ID0gJCggJy5zaXRlLWJyYW5kaW5nJyApLmhlaWdodCgpO1xuXG5cdFx0Ly8gQWRkIGNsYXNzIG9uY2UgYmVsb3cgbmF2LCBvdGhlcndpc2UsIHJlbW92ZSBpdC5cblx0XHQkKCB3aW5kb3cgKS5zY3JvbGwoIGZ1bmN0aW9uKCkge1xuXHRcdFx0aWYoIGFwcC4kYy53aW5kb3cuc2Nyb2xsVG9wKCkgPiBuYXZIZWlnaHQgKSB7XG5cdFx0XHRcdGFwcC4kYy5uYXYuYWRkQ2xhc3MoICdtYWluLW5hdi1zY3JvbGxlZCcgKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGFwcC4kYy5uYXYucmVtb3ZlQ2xhc3MoICdtYWluLW5hdi1zY3JvbGxlZCcgKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0fTtcblxuXHQvLyBFbmdhZ2UhXG5cdCQoIGFwcC5pbml0ICk7XG5cbn0pKCB3aW5kb3csIGpRdWVyeSwgd2luZG93LlJDU19TdGlja3lfTmF2ICk7XG4iLCIvKipcbiAqIEZpbGUgd2luZG93LXJlYWR5LmpzXG4gKlxuICogQWRkIGEgXCJyZWFkeVwiIGNsYXNzIHRvIDxib2R5PiB3aGVuIHdpbmRvdyBpcyByZWFkeS5cbiAqL1xud2luZG93LldpbmRvd19SZWFkeSA9IHt9O1xuKCBmdW5jdGlvbiggd2luZG93LCAkLCB0aGF0ICkge1xuXG5cdC8vIENvbnN0cnVjdG9yLlxuXHR0aGF0LmluaXQgPSBmdW5jdGlvbigpIHtcblx0XHR0aGF0LmNhY2hlKCk7XG5cdFx0dGhhdC5iaW5kRXZlbnRzKCk7XG5cdH07XG5cblx0Ly8gQ2FjaGUgZG9jdW1lbnQgZWxlbWVudHMuXG5cdHRoYXQuY2FjaGUgPSBmdW5jdGlvbigpIHtcblx0XHR0aGF0LiRjID0ge1xuXHRcdFx0d2luZG93OiAkKHdpbmRvdyksXG5cdFx0XHRib2R5OiAkKGRvY3VtZW50LmJvZHkpLFxuXHRcdH07XG5cdH07XG5cblx0Ly8gQ29tYmluZSBhbGwgZXZlbnRzLlxuXHR0aGF0LmJpbmRFdmVudHMgPSBmdW5jdGlvbigpIHtcblx0XHR0aGF0LiRjLndpbmRvdy5sb2FkKCB0aGF0LmFkZEJvZHlDbGFzcyApO1xuXHR9O1xuXG5cdC8vIEFkZCBhIGNsYXNzIHRvIDxib2R5Pi5cblx0dGhhdC5hZGRCb2R5Q2xhc3MgPSBmdW5jdGlvbigpIHtcblx0XHR0aGF0LiRjLmJvZHkuYWRkQ2xhc3MoICdyZWFkeScgKTtcblx0fTtcblxuXHQvLyBFbmdhZ2UhXG5cdCQoIHRoYXQuaW5pdCApO1xuXG59KSggd2luZG93LCBqUXVlcnksIHdpbmRvdy5XaW5kb3dfUmVhZHkgKTsiXX0=
