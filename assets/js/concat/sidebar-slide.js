 /**
  * File sidebar-slide.js
  *
  * Based on sliding panel from http://refills.bourbon.io/components/
  */
window.RCS_Sidebar_Slide = {};
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
			primaryContent: $( '.blog .primary' ),
			blogNav: $( '.blog .menu-primary-menu-container' ),
			footer: $( '.footer' ),
			closePanel: $( '.sliding-panel-close' ),
			panelContent: $( '.sliding-panel-content' ),
		};
	};

	// Combine all events.
	app.bindEvents = function() {
		app.$c.button.on( 'click touchstart', app.toggleNav );
		app.$c.closePanel.on( 'click touchstart', app.toggleNav );
	};

	// Do we meet the requirements?
	app.meetsRequirements = function() {
		return app.$c.panelContent.length;
	};

	// Toggle the form open and close.
	app.toggleNav = function(e) {

		if ( $( '.sliding-panel-content' ).hasClass( 'is-visible' ) ) {
			app.$c.button.removeClass( 'open' );
			app.$c.panelContent.removeClass( 'is-visible' );
			app.$c.primaryContent.removeClass( 'is-visible' );
			app.$c.blogNav.removeClass( 'is-visible' );
			app.$c.footer.removeClass( 'is-visible' );

		} else {
			app.$c.button.addClass( 'open' );
			app.$c.panelContent.addClass( 'is-visible' );
			app.$c.primaryContent.addClass( 'is-visible' );
			app.$c.blogNav.addClass( 'is-visible' );
			app.$c.footer.addClass( 'is-visible' );
		}

		e.preventDefault();
	};

	// Engage!
	$( app.init );

})( window, jQuery, window.RCS_Sidebar_Slide );
