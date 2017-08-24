/**
 * File js-enabled.js
 *
 * If Javascript is enabled, replace the <body> class "no-js".
 */
document.body.className = document.body.className.replace( 'no-js', 'js' );
 /**
  * File mobile-nav.js
  *
  * Based on sliding panel from http://refills.bourbon.io/components/
  */
window.RCS_Mobile_Nav_Slide = {};
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
			window: $(window),
			body: $( 'body' ),
			button: $( '.sliding-panel-button' ),
			nav: $( '.menu-primary-menu-container' ),
			panelContent: $( '.sliding-panel-content' ),
		};
	};

	// Combine all events.
	app.bindEvents = function() {
		app.$c.button.on( 'click, touchstart', app.toggleNav );
	};

	// Do we meet the requirements?
	app.meetsRequirements = function() {
		return app.$c.panelContent.length;
	};

	// Toggle the form open and close.
	app.toggleNav = function(e) {
		app.$c.body.toggleClass( 'sidebar-is-open' );
		app.$c.button.toggleClass( 'open' );
		app.$c.panelContent.toggleClass( 'is-visible' );
		app.$c.nav.toggleClass( 'is-visible' );
	};

	// Engage!
	$( app.init );

})( window, jQuery, window.RCS_Mobile_Nav_Slide );

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
			nav: $( '.main-navigation' ),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzLWVuYWJsZWQuanMiLCJtb2JpbGUtbmF2LmpzIiwic2tpcC1saW5rLWZvY3VzLWZpeC5qcyIsInN0aWNreS1uYXYuanMiLCJ3aW5kb3ctcmVhZHkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN4REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InByb2plY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEZpbGUganMtZW5hYmxlZC5qc1xuICpcbiAqIElmIEphdmFzY3JpcHQgaXMgZW5hYmxlZCwgcmVwbGFjZSB0aGUgPGJvZHk+IGNsYXNzIFwibm8tanNcIi5cbiAqL1xuZG9jdW1lbnQuYm9keS5jbGFzc05hbWUgPSBkb2N1bWVudC5ib2R5LmNsYXNzTmFtZS5yZXBsYWNlKCAnbm8tanMnLCAnanMnICk7IiwiIC8qKlxuICAqIEZpbGUgbW9iaWxlLW5hdi5qc1xuICAqXG4gICogQmFzZWQgb24gc2xpZGluZyBwYW5lbCBmcm9tIGh0dHA6Ly9yZWZpbGxzLmJvdXJib24uaW8vY29tcG9uZW50cy9cbiAgKi9cbndpbmRvdy5SQ1NfTW9iaWxlX05hdl9TbGlkZSA9IHt9O1xuKCBmdW5jdGlvbiggd2luZG93LCAkLCBhcHAgKSB7XG5cblx0Ly8gQ29uc3RydWN0b3IuXG5cdGFwcC5pbml0ID0gZnVuY3Rpb24oKSB7XG5cdFx0YXBwLmNhY2hlKCk7XG5cblx0XHRpZiAoIGFwcC5tZWV0c1JlcXVpcmVtZW50cygpICkge1xuXHRcdFx0YXBwLmJpbmRFdmVudHMoKTtcblx0XHR9XG5cdH07XG5cblx0Ly8gQ2FjaGUgYWxsIHRoZSB0aGluZ3MuXG5cdGFwcC5jYWNoZSA9IGZ1bmN0aW9uKCkge1xuXHRcdGFwcC4kYyA9IHtcblx0XHRcdHdpbmRvdzogJCh3aW5kb3cpLFxuXHRcdFx0Ym9keTogJCggJ2JvZHknICksXG5cdFx0XHRidXR0b246ICQoICcuc2xpZGluZy1wYW5lbC1idXR0b24nICksXG5cdFx0XHRuYXY6ICQoICcubWVudS1wcmltYXJ5LW1lbnUtY29udGFpbmVyJyApLFxuXHRcdFx0cGFuZWxDb250ZW50OiAkKCAnLnNsaWRpbmctcGFuZWwtY29udGVudCcgKSxcblx0XHR9O1xuXHR9O1xuXG5cdC8vIENvbWJpbmUgYWxsIGV2ZW50cy5cblx0YXBwLmJpbmRFdmVudHMgPSBmdW5jdGlvbigpIHtcblx0XHRhcHAuJGMuYnV0dG9uLm9uKCAnY2xpY2ssIHRvdWNoc3RhcnQnLCBhcHAudG9nZ2xlTmF2ICk7XG5cdH07XG5cblx0Ly8gRG8gd2UgbWVldCB0aGUgcmVxdWlyZW1lbnRzP1xuXHRhcHAubWVldHNSZXF1aXJlbWVudHMgPSBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gYXBwLiRjLnBhbmVsQ29udGVudC5sZW5ndGg7XG5cdH07XG5cblx0Ly8gVG9nZ2xlIHRoZSBmb3JtIG9wZW4gYW5kIGNsb3NlLlxuXHRhcHAudG9nZ2xlTmF2ID0gZnVuY3Rpb24oZSkge1xuXHRcdGFwcC4kYy5ib2R5LnRvZ2dsZUNsYXNzKCAnc2lkZWJhci1pcy1vcGVuJyApO1xuXHRcdGFwcC4kYy5idXR0b24udG9nZ2xlQ2xhc3MoICdvcGVuJyApO1xuXHRcdGFwcC4kYy5wYW5lbENvbnRlbnQudG9nZ2xlQ2xhc3MoICdpcy12aXNpYmxlJyApO1xuXHRcdGFwcC4kYy5uYXYudG9nZ2xlQ2xhc3MoICdpcy12aXNpYmxlJyApO1xuXHR9O1xuXG5cdC8vIEVuZ2FnZSFcblx0JCggYXBwLmluaXQgKTtcblxufSkoIHdpbmRvdywgalF1ZXJ5LCB3aW5kb3cuUkNTX01vYmlsZV9OYXZfU2xpZGUgKTtcbiIsIi8qKlxuICogRmlsZSBza2lwLWxpbmstZm9jdXMtZml4LmpzLlxuICpcbiAqIEhlbHBzIHdpdGggYWNjZXNzaWJpbGl0eSBmb3Iga2V5Ym9hcmQgb25seSB1c2Vycy5cbiAqXG4gKiBMZWFybiBtb3JlOiBodHRwczovL2dpdC5pby92V2RyMlxuICovXG4oIGZ1bmN0aW9uKCkge1xuXHR2YXIgaXNXZWJraXQgPSBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkuaW5kZXhPZiggJ3dlYmtpdCcgKSA+IC0xLFxuXHQgICAgaXNPcGVyYSAgPSBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkuaW5kZXhPZiggJ29wZXJhJyApICA+IC0xLFxuXHQgICAgaXNJZSAgICAgPSBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkuaW5kZXhPZiggJ21zaWUnICkgICA+IC0xO1xuXG5cdGlmICggKCBpc1dlYmtpdCB8fCBpc09wZXJhIHx8IGlzSWUgKSAmJiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCAmJiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciApIHtcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggJ2hhc2hjaGFuZ2UnLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBpZCA9IGxvY2F0aW9uLmhhc2guc3Vic3RyaW5nKCAxICksXG5cdFx0XHRcdGVsZW1lbnQ7XG5cblx0XHRcdGlmICggISAoIC9eW0EtejAtOV8tXSskLy50ZXN0KCBpZCApICkgKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0ZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCBpZCApO1xuXG5cdFx0XHRpZiAoIGVsZW1lbnQgKSB7XG5cdFx0XHRcdGlmICggISAoIC9eKD86YXxzZWxlY3R8aW5wdXR8YnV0dG9ufHRleHRhcmVhKSQvaS50ZXN0KCBlbGVtZW50LnRhZ05hbWUgKSApICkge1xuXHRcdFx0XHRcdGVsZW1lbnQudGFiSW5kZXggPSAtMTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGVsZW1lbnQuZm9jdXMoKTtcblx0XHRcdH1cblx0XHR9LCBmYWxzZSApO1xuXHR9XG59KSgpOyIsIiAvKipcbiAgKiBGaWxlIHN0aWNreS1uYXYuanNcbiAgKlxuICAqL1xud2luZG93LlJDU19TdGlja3lfTmF2ID0ge307XG4oIGZ1bmN0aW9uKCB3aW5kb3csICQsIGFwcCApIHtcblxuXHQvLyBDb25zdHJ1Y3Rvci5cblx0YXBwLmluaXQgPSBmdW5jdGlvbigpIHtcblx0XHRhcHAuY2FjaGUoKTtcblxuXHRcdGlmICggYXBwLm1lZXRzUmVxdWlyZW1lbnRzKCkgKSB7XG5cdFx0XHRhcHAuYmluZEV2ZW50cygpO1xuXHRcdH1cblx0fTtcblxuXHQvLyBDYWNoZSBhbGwgdGhlIHRoaW5ncy5cblx0YXBwLmNhY2hlID0gZnVuY3Rpb24oKSB7XG5cdFx0YXBwLiRjID0ge1xuXHRcdFx0d2luZG93OiAkKCB3aW5kb3cgKSxcblx0XHRcdGJvZHk6ICQoICdib2R5JyApLFxuXHRcdFx0bmF2OiAkKCAnLm1haW4tbmF2aWdhdGlvbicgKSxcblx0XHR9O1xuXHR9O1xuXG5cdC8vIENvbWJpbmUgYWxsIGV2ZW50cy5cblx0YXBwLmJpbmRFdmVudHMgPSBmdW5jdGlvbigpIHtcblx0XHRhcHAuJGMud2luZG93Lm9uKCAnbG9hZCcsIGFwcC5zdGlja3lOYXYgKTtcblx0fTtcblxuXHQvLyBEbyB3ZSBtZWV0IHRoZSByZXF1aXJlbWVudHM/XG5cdGFwcC5tZWV0c1JlcXVpcmVtZW50cyA9IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBhcHAuJGMubmF2Lmxlbmd0aDtcblx0fTtcblxuXHQvLyBUb2dnbGUgdGhlIGZvcm0gb3BlbiBhbmQgY2xvc2UuXG5cdGFwcC5zdGlja3lOYXYgPSBmdW5jdGlvbihlKSB7XG5cblx0XHR2YXIgbmF2SGVpZ2h0ID0gJCggJy5zaXRlLWJyYW5kaW5nJyApLmhlaWdodCgpO1xuXG5cdFx0Ly8gQWRkIGNsYXNzIG9uY2UgYmVsb3cgbmF2LCBvdGhlcndpc2UsIHJlbW92ZSBpdC5cblx0XHQkKCB3aW5kb3cgKS5zY3JvbGwoIGZ1bmN0aW9uKCkge1xuXHRcdFx0aWYoIGFwcC4kYy53aW5kb3cuc2Nyb2xsVG9wKCkgPiBuYXZIZWlnaHQgKSB7XG5cdFx0XHRcdGFwcC4kYy5uYXYuYWRkQ2xhc3MoICdtYWluLW5hdi1zY3JvbGxlZCcgKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGFwcC4kYy5uYXYucmVtb3ZlQ2xhc3MoICdtYWluLW5hdi1zY3JvbGxlZCcgKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0fTtcblxuXHQvLyBFbmdhZ2UhXG5cdCQoIGFwcC5pbml0ICk7XG5cbn0pKCB3aW5kb3csIGpRdWVyeSwgd2luZG93LlJDU19TdGlja3lfTmF2ICk7XG4iLCIvKipcbiAqIEZpbGUgd2luZG93LXJlYWR5LmpzXG4gKlxuICogQWRkIGEgXCJyZWFkeVwiIGNsYXNzIHRvIDxib2R5PiB3aGVuIHdpbmRvdyBpcyByZWFkeS5cbiAqL1xud2luZG93LldpbmRvd19SZWFkeSA9IHt9O1xuKCBmdW5jdGlvbiggd2luZG93LCAkLCB0aGF0ICkge1xuXG5cdC8vIENvbnN0cnVjdG9yLlxuXHR0aGF0LmluaXQgPSBmdW5jdGlvbigpIHtcblx0XHR0aGF0LmNhY2hlKCk7XG5cdFx0dGhhdC5iaW5kRXZlbnRzKCk7XG5cdH07XG5cblx0Ly8gQ2FjaGUgZG9jdW1lbnQgZWxlbWVudHMuXG5cdHRoYXQuY2FjaGUgPSBmdW5jdGlvbigpIHtcblx0XHR0aGF0LiRjID0ge1xuXHRcdFx0d2luZG93OiAkKHdpbmRvdyksXG5cdFx0XHRib2R5OiAkKGRvY3VtZW50LmJvZHkpLFxuXHRcdH07XG5cdH07XG5cblx0Ly8gQ29tYmluZSBhbGwgZXZlbnRzLlxuXHR0aGF0LmJpbmRFdmVudHMgPSBmdW5jdGlvbigpIHtcblx0XHR0aGF0LiRjLndpbmRvdy5sb2FkKCB0aGF0LmFkZEJvZHlDbGFzcyApO1xuXHR9O1xuXG5cdC8vIEFkZCBhIGNsYXNzIHRvIDxib2R5Pi5cblx0dGhhdC5hZGRCb2R5Q2xhc3MgPSBmdW5jdGlvbigpIHtcblx0XHR0aGF0LiRjLmJvZHkuYWRkQ2xhc3MoICdyZWFkeScgKTtcblx0fTtcblxuXHQvLyBFbmdhZ2UhXG5cdCQoIHRoYXQuaW5pdCApO1xuXG59KSggd2luZG93LCBqUXVlcnksIHdpbmRvdy5XaW5kb3dfUmVhZHkgKTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
