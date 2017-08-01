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

		var navHeight = $( '.main-navigation' ).height();

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
