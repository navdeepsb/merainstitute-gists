/**
 * site-nav.js
 * -----------
 * @desc Contains site nav handling and other global helpers
 * @author Navi
 */

// The site nav closure starts here:
$(document).ready(function() {

	$('.js-menu').on('click', function( event ) {
		$('.srch-bar-cntnr').slideUp('fast');
		$('.headr-lowr').slideToggle('fast');

		event.preventDefault();
	});

	$('.js-srch').on('click', function( event ) {
		$('.srch-bar-cntnr').slideToggle('fast');
		$('.srch-bar-cntnr input').focus();
		if( $(this).data('hide-menu') )
			$('.headr-lowr').slideUp('fast');

		event.preventDefault();
	});

	$('.js-nav-option').on('click', function( event ) {
		var child = $(this).data('child');

		if(window.innerWidth < 960) {
			$('#' + child).slideToggle();
		}

		event.preventDefault();
	});

	$(window).resize(function() {
		if(window.innerWidth >= 960) {
			$('.headr-lowr').removeAttr('style');
			$('.nav ul ul, .nav .nav-innr').removeAttr('style');
		}
	});

	$('#frmSearch, #frmSearchHome').on('submit', function( event ) {
		location.href = siteConfig.url.front + 'search?' + $.param( { q: $(this).find('input').eq(0).val().trim() } );
		event.preventDefault();
	});

	// This function executes a callback after a fixd no. of milliseconds:
	var custDelay = (function(){
		var timer = null;
		return function( callback, millis ) {
			clearTimeout( timer );
			timer = setTimeout( callback, millis );
		};
	})();

	$('#frmSearch input, #frmSearchHome input').on('keyup', function( event ) {
		// Don't do nothing for 'up' and 'down' arrows:
		var keyCode = event.keyCode || event.which;
		if( keyCode === 38 || keyCode == 40 ) return;

		// Get the target datalist:
		var dataList = $(this).attr( 'list' ) || 'lstSuggestions';

		// Get results:
		var qry = $(this).val().trim();
		custDelay(function() {
			$( '#' + dataList ).html('');
			if( qry ) {
				$.get( siteConfig.url.front + 'institute/searchSuggestions?query=' + qry + '&limit=10' )
					.done(function( response ) {
						if( response.status === 200 ) {
							for( var idx = 0, arr = response.data, len = arr.length; idx < len; idx++ ) {
								$( '#' + dataList ).append( '<option value="' + arr[idx].name + '">' + arr[idx].username + '</option>' );
							}
						}
					});
			}
		}, 1000);
	});

});

// Badger config (can be used site-wide):
if( typeof Badger !== 'undefined' ) {
	window.badger = Badger();
	badger.init({
		stayTime: 2,
		fontSize: '0.8em'
	});
}

// Helper function - to get the parameter from query string:
window.getParameterByName = function( name ) {
	name = name.replace( /[\[]/, "\\[" ).replace( /[\]]/, "\\]" );
	var regex   = new RegExp( "[\\?&]" + name + "=([^&#]*)" ),
		results = regex.exec( location.search );
	return results === null ? "" : decodeURIComponent( results[1].replace( /\+/g, " " ) );
};

// Helper event - smooth anchor scroll
// http://css-tricks.com/snippets/jquery/smooth-scrolling/
$( 'a[href*=#]:not([href=#])' ).on('click', function() {
	if( location.pathname.replace( /^\//, '' ) == this.pathname.replace( /^\//, '' ) && location.hostname == this.hostname ) {
		var target = $( this.hash );
		target = target.length ? target : $( '[name=' + this.hash.slice( 1 ) + ']' );
		if( target.length ) {
			$( 'html, body' ).animate({
				scrollTop: target.offset().top
			}, 800);
			return false;
		}
	}
});