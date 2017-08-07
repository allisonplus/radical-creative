/**
 * File js-enabled.js
 *
 * If Javascript is enabled, replace the <body> class "no-js".
 */
document.body.className = document.body.className.replace( 'no-js', 'js' );
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzLWVuYWJsZWQuanMiLCJzaWRlYmFyLXNsaWRlLmpzIiwic2tpcC1saW5rLWZvY3VzLWZpeC5qcyIsInN0aWNreS1uYXYuanMiLCJ3aW5kb3ctcmVhZHkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ25FQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDeERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJwcm9qZWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBGaWxlIGpzLWVuYWJsZWQuanNcbiAqXG4gKiBJZiBKYXZhc2NyaXB0IGlzIGVuYWJsZWQsIHJlcGxhY2UgdGhlIDxib2R5PiBjbGFzcyBcIm5vLWpzXCIuXG4gKi9cbmRvY3VtZW50LmJvZHkuY2xhc3NOYW1lID0gZG9jdW1lbnQuYm9keS5jbGFzc05hbWUucmVwbGFjZSggJ25vLWpzJywgJ2pzJyApOyIsIiAvKipcbiAgKiBGaWxlIHNpZGViYXItc2xpZGUuanNcbiAgKlxuICAqIEJhc2VkIG9uIHNsaWRpbmcgcGFuZWwgZnJvbSBodHRwOi8vcmVmaWxscy5ib3VyYm9uLmlvL2NvbXBvbmVudHMvXG4gICovXG53aW5kb3cuUkNTX1NpZGViYXJfU2xpZGUgPSB7fTtcbiggZnVuY3Rpb24oIHdpbmRvdywgJCwgYXBwICkge1xuXG5cdC8vIENvbnN0cnVjdG9yLlxuXHRhcHAuaW5pdCA9IGZ1bmN0aW9uKCkge1xuXHRcdGFwcC5jYWNoZSgpO1xuXG5cdFx0aWYgKCBhcHAubWVldHNSZXF1aXJlbWVudHMoKSApIHtcblx0XHRcdGFwcC5iaW5kRXZlbnRzKCk7XG5cdFx0fVxuXHR9O1xuXG5cdC8vIENhY2hlIGFsbCB0aGUgdGhpbmdzLlxuXHRhcHAuY2FjaGUgPSBmdW5jdGlvbigpIHtcblx0XHRhcHAuJGMgPSB7XG5cdFx0XHR3aW5kb3c6ICQod2luZG93KSxcblx0XHRcdGJvZHk6ICQoICdib2R5JyApLFxuXHRcdFx0YnV0dG9uOiAkKCAnLnNsaWRpbmctcGFuZWwtYnV0dG9uJyApLFxuXHRcdFx0cHJpbWFyeUNvbnRlbnQ6ICQoICcuYmxvZyAucHJpbWFyeScgKSxcblx0XHRcdGJsb2dOYXY6ICQoICcuYmxvZyAubWVudS1wcmltYXJ5LW1lbnUtY29udGFpbmVyJyApLFxuXHRcdFx0Zm9vdGVyOiAkKCAnLmZvb3RlcicgKSxcblx0XHRcdGNsb3NlUGFuZWw6ICQoICcuc2xpZGluZy1wYW5lbC1jbG9zZScgKSxcblx0XHRcdHBhbmVsQ29udGVudDogJCggJy5zbGlkaW5nLXBhbmVsLWNvbnRlbnQnICksXG5cdFx0fTtcblx0fTtcblxuXHQvLyBDb21iaW5lIGFsbCBldmVudHMuXG5cdGFwcC5iaW5kRXZlbnRzID0gZnVuY3Rpb24oKSB7XG5cdFx0YXBwLiRjLmJ1dHRvbi5vbiggJ2NsaWNrIHRvdWNoc3RhcnQnLCBhcHAudG9nZ2xlTmF2ICk7XG5cdFx0YXBwLiRjLmNsb3NlUGFuZWwub24oICdjbGljayB0b3VjaHN0YXJ0JywgYXBwLnRvZ2dsZU5hdiApO1xuXHR9O1xuXG5cdC8vIERvIHdlIG1lZXQgdGhlIHJlcXVpcmVtZW50cz9cblx0YXBwLm1lZXRzUmVxdWlyZW1lbnRzID0gZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIGFwcC4kYy5wYW5lbENvbnRlbnQubGVuZ3RoO1xuXHR9O1xuXG5cdC8vIFRvZ2dsZSB0aGUgZm9ybSBvcGVuIGFuZCBjbG9zZS5cblx0YXBwLnRvZ2dsZU5hdiA9IGZ1bmN0aW9uKGUpIHtcblxuXHRcdGlmICggJCggJy5zbGlkaW5nLXBhbmVsLWNvbnRlbnQnICkuaGFzQ2xhc3MoICdpcy12aXNpYmxlJyApICkge1xuXHRcdFx0YXBwLiRjLmJ1dHRvbi5yZW1vdmVDbGFzcyggJ29wZW4nICk7XG5cdFx0XHRhcHAuJGMucGFuZWxDb250ZW50LnJlbW92ZUNsYXNzKCAnaXMtdmlzaWJsZScgKTtcblx0XHRcdGFwcC4kYy5wcmltYXJ5Q29udGVudC5yZW1vdmVDbGFzcyggJ2lzLXZpc2libGUnICk7XG5cdFx0XHRhcHAuJGMuYmxvZ05hdi5yZW1vdmVDbGFzcyggJ2lzLXZpc2libGUnICk7XG5cdFx0XHRhcHAuJGMuZm9vdGVyLnJlbW92ZUNsYXNzKCAnaXMtdmlzaWJsZScgKTtcblxuXHRcdH0gZWxzZSB7XG5cdFx0XHRhcHAuJGMuYnV0dG9uLmFkZENsYXNzKCAnb3BlbicgKTtcblx0XHRcdGFwcC4kYy5wYW5lbENvbnRlbnQuYWRkQ2xhc3MoICdpcy12aXNpYmxlJyApO1xuXHRcdFx0YXBwLiRjLnByaW1hcnlDb250ZW50LmFkZENsYXNzKCAnaXMtdmlzaWJsZScgKTtcblx0XHRcdGFwcC4kYy5ibG9nTmF2LmFkZENsYXNzKCAnaXMtdmlzaWJsZScgKTtcblx0XHRcdGFwcC4kYy5mb290ZXIuYWRkQ2xhc3MoICdpcy12aXNpYmxlJyApO1xuXHRcdH1cblxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0fTtcblxuXHQvLyBFbmdhZ2UhXG5cdCQoIGFwcC5pbml0ICk7XG5cbn0pKCB3aW5kb3csIGpRdWVyeSwgd2luZG93LlJDU19TaWRlYmFyX1NsaWRlICk7XG4iLCIvKipcbiAqIEZpbGUgc2tpcC1saW5rLWZvY3VzLWZpeC5qcy5cbiAqXG4gKiBIZWxwcyB3aXRoIGFjY2Vzc2liaWxpdHkgZm9yIGtleWJvYXJkIG9ubHkgdXNlcnMuXG4gKlxuICogTGVhcm4gbW9yZTogaHR0cHM6Ly9naXQuaW8vdldkcjJcbiAqL1xuKCBmdW5jdGlvbigpIHtcblx0dmFyIGlzV2Via2l0ID0gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoICd3ZWJraXQnICkgPiAtMSxcblx0ICAgIGlzT3BlcmEgID0gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoICdvcGVyYScgKSAgPiAtMSxcblx0ICAgIGlzSWUgICAgID0gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoICdtc2llJyApICAgPiAtMTtcblxuXHRpZiAoICggaXNXZWJraXQgfHwgaXNPcGVyYSB8fCBpc0llICkgJiYgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQgJiYgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIgKSB7XG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoICdoYXNoY2hhbmdlJywgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgaWQgPSBsb2NhdGlvbi5oYXNoLnN1YnN0cmluZyggMSApLFxuXHRcdFx0XHRlbGVtZW50O1xuXG5cdFx0XHRpZiAoICEgKCAvXltBLXowLTlfLV0rJC8udGVzdCggaWQgKSApICkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggaWQgKTtcblxuXHRcdFx0aWYgKCBlbGVtZW50ICkge1xuXHRcdFx0XHRpZiAoICEgKCAvXig/OmF8c2VsZWN0fGlucHV0fGJ1dHRvbnx0ZXh0YXJlYSkkL2kudGVzdCggZWxlbWVudC50YWdOYW1lICkgKSApIHtcblx0XHRcdFx0XHRlbGVtZW50LnRhYkluZGV4ID0gLTE7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRlbGVtZW50LmZvY3VzKCk7XG5cdFx0XHR9XG5cdFx0fSwgZmFsc2UgKTtcblx0fVxufSkoKTsiLCIgLyoqXG4gICogRmlsZSBzdGlja3ktbmF2LmpzXG4gICpcbiAgKi9cbndpbmRvdy5SQ1NfU3RpY2t5X05hdiA9IHt9O1xuKCBmdW5jdGlvbiggd2luZG93LCAkLCBhcHAgKSB7XG5cblx0Ly8gQ29uc3RydWN0b3IuXG5cdGFwcC5pbml0ID0gZnVuY3Rpb24oKSB7XG5cdFx0YXBwLmNhY2hlKCk7XG5cblx0XHRpZiAoIGFwcC5tZWV0c1JlcXVpcmVtZW50cygpICkge1xuXHRcdFx0YXBwLmJpbmRFdmVudHMoKTtcblx0XHR9XG5cdH07XG5cblx0Ly8gQ2FjaGUgYWxsIHRoZSB0aGluZ3MuXG5cdGFwcC5jYWNoZSA9IGZ1bmN0aW9uKCkge1xuXHRcdGFwcC4kYyA9IHtcblx0XHRcdHdpbmRvdzogJCggd2luZG93ICksXG5cdFx0XHRib2R5OiAkKCAnYm9keScgKSxcblx0XHRcdG5hdjogJCggJy5tYWluLW5hdmlnYXRpb24nICksXG5cdFx0fTtcblx0fTtcblxuXHQvLyBDb21iaW5lIGFsbCBldmVudHMuXG5cdGFwcC5iaW5kRXZlbnRzID0gZnVuY3Rpb24oKSB7XG5cdFx0YXBwLiRjLndpbmRvdy5vbiggJ2xvYWQnLCBhcHAuc3RpY2t5TmF2ICk7XG5cdH07XG5cblx0Ly8gRG8gd2UgbWVldCB0aGUgcmVxdWlyZW1lbnRzP1xuXHRhcHAubWVldHNSZXF1aXJlbWVudHMgPSBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gYXBwLiRjLm5hdi5sZW5ndGg7XG5cdH07XG5cblx0Ly8gVG9nZ2xlIHRoZSBmb3JtIG9wZW4gYW5kIGNsb3NlLlxuXHRhcHAuc3RpY2t5TmF2ID0gZnVuY3Rpb24oZSkge1xuXG5cdFx0dmFyIG5hdkhlaWdodCA9ICQoICcuc2l0ZS1icmFuZGluZycgKS5oZWlnaHQoKTtcblxuXHRcdC8vIEFkZCBjbGFzcyBvbmNlIGJlbG93IG5hdiwgb3RoZXJ3aXNlLCByZW1vdmUgaXQuXG5cdFx0JCggd2luZG93ICkuc2Nyb2xsKCBmdW5jdGlvbigpIHtcblx0XHRcdGlmKCBhcHAuJGMud2luZG93LnNjcm9sbFRvcCgpID4gbmF2SGVpZ2h0ICkge1xuXHRcdFx0XHRhcHAuJGMubmF2LmFkZENsYXNzKCAnbWFpbi1uYXYtc2Nyb2xsZWQnICk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRhcHAuJGMubmF2LnJlbW92ZUNsYXNzKCAnbWFpbi1uYXYtc2Nyb2xsZWQnICk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdH07XG5cblx0Ly8gRW5nYWdlIVxuXHQkKCBhcHAuaW5pdCApO1xuXG59KSggd2luZG93LCBqUXVlcnksIHdpbmRvdy5SQ1NfU3RpY2t5X05hdiApO1xuIiwiLyoqXG4gKiBGaWxlIHdpbmRvdy1yZWFkeS5qc1xuICpcbiAqIEFkZCBhIFwicmVhZHlcIiBjbGFzcyB0byA8Ym9keT4gd2hlbiB3aW5kb3cgaXMgcmVhZHkuXG4gKi9cbndpbmRvdy5XaW5kb3dfUmVhZHkgPSB7fTtcbiggZnVuY3Rpb24oIHdpbmRvdywgJCwgdGhhdCApIHtcblxuXHQvLyBDb25zdHJ1Y3Rvci5cblx0dGhhdC5pbml0ID0gZnVuY3Rpb24oKSB7XG5cdFx0dGhhdC5jYWNoZSgpO1xuXHRcdHRoYXQuYmluZEV2ZW50cygpO1xuXHR9O1xuXG5cdC8vIENhY2hlIGRvY3VtZW50IGVsZW1lbnRzLlxuXHR0aGF0LmNhY2hlID0gZnVuY3Rpb24oKSB7XG5cdFx0dGhhdC4kYyA9IHtcblx0XHRcdHdpbmRvdzogJCh3aW5kb3cpLFxuXHRcdFx0Ym9keTogJChkb2N1bWVudC5ib2R5KSxcblx0XHR9O1xuXHR9O1xuXG5cdC8vIENvbWJpbmUgYWxsIGV2ZW50cy5cblx0dGhhdC5iaW5kRXZlbnRzID0gZnVuY3Rpb24oKSB7XG5cdFx0dGhhdC4kYy53aW5kb3cubG9hZCggdGhhdC5hZGRCb2R5Q2xhc3MgKTtcblx0fTtcblxuXHQvLyBBZGQgYSBjbGFzcyB0byA8Ym9keT4uXG5cdHRoYXQuYWRkQm9keUNsYXNzID0gZnVuY3Rpb24oKSB7XG5cdFx0dGhhdC4kYy5ib2R5LmFkZENsYXNzKCAncmVhZHknICk7XG5cdH07XG5cblx0Ly8gRW5nYWdlIVxuXHQkKCB0aGF0LmluaXQgKTtcblxufSkoIHdpbmRvdywgalF1ZXJ5LCB3aW5kb3cuV2luZG93X1JlYWR5ICk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
