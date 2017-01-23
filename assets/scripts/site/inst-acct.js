/**
 * inst-acct.js
 * ------------
 * @desc Client-side handling for the institute account page
 * @author Navi
 */

$(document).ready(function() {
	// Set values:
	$('.js-name').text( pageData.name );
	$('.js-email').text( pageData.email );
	$('.js-mob').text( pageData.contactNum );
	$('.js-unm').text( pageData.username );

	$('.js-modal-show').on('click', function( event ) {
		$( $(this).data( 'target' ) || '' ).show();
		event.preventDefault();
	});

	$('.js-modal-close').on('click', function( event ) {
		$(this).closest('.modal').fadeOut();
	});
});