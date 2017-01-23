/**
 * social-share.js
 * ---------------
 * @desc Contains social share function(s)
 * @author Navi, Purvesh
 */

window.fbShareInit = function() {
	// Cache the FB share button controls:
	var $fbShare = $( '.js-fbShare' );
	var $nShare  = $( '.js-fbShareCount' );

	// Get the URL to be shared:
	var urlToShare = 'http://www.facebook.com/sharer/sharer.php?u=' + document.URL;

	// Remove the loader:
	$fbShare.prev( 'img' ).remove();

	// Bind callback:
	$fbShare
		.show()
		.attr( 'href', urlToShare )
		.on('click', function( event ) {
			window.open( $(this).attr( 'href' ), 'popupWindow', 'width=540,height=300,scrollbars=yes' );
			event.preventDefault();
		});

	// Reset share counter:
	$nShare.text( '--' );

	// Get the share count:
	$.get('https://api.facebook.com/method/links.getStats?urls=' + document.URL + '&format=json', function( data ) {
		if( data && data.length ) {
			$nShare.text( data[0].share_count );
		}
	});
};