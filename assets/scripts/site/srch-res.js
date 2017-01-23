/**
 * srch-res.js
 * -----------
 * @desc Free text search results handling
 * @author Navi
 */

$(document).ready(function() {
	// Constants:
	var REC_LIMIT = 8;

	// Variables:
	var currSkip    = -1 * REC_LIMIT;
	var objDataReq  = {};
	var $moreResLdr = $('.js-res-loader');
	var $noMoreRes  = $('.no-more-srch');
	var $noRes      = $('.js-no-res');
	var $footer     = $('.footr');
	var q = getParameterByName( 'q' ) || '';
	var isReqInProcess = false;
	var isMoreResults  = true;

	var fetch = function() {
		// Mark the request flag as true:
		isReqInProcess = true;

		// Update the skip:
		currSkip += REC_LIMIT;

		if( !$('body').data('init') )
			// Set the init flag:
			$('body').data('init', true);
		else
			// Show the loader:
			$moreResLdr.fadeIn();

		// Make the data request object:
		objDataReq.skip  = currSkip;
		objDataReq.limit = REC_LIMIT;
		objDataReq.query = q;

		$.post( siteConfig.url.front + 'institute/search', JSON.stringify( objDataReq ) )
			.done(function( response ) {
				if( response.status === 200 ) {
					// Set the search string on page so user can know what he searched:
					$('#verb').text( 'Showing results' );

					// Check if the result count is 0 or less than the limit.
					if( !response.data.length && $('.js-results > p > img').size() ) {
						// Zero results and initial request:
						$noRes.fadeIn();
						isMoreResults = false;
					}
					else if( response.data.length < REC_LIMIT ) {
						// No more results available:
						$noMoreRes.fadeIn();
						isMoreResults = false;
					}

					// Hide the initial loader:
					if( $('.js-results > p > img').size() ) $('.js-results > p > img').remove();

					for( var idx = 0, arr = response.data || [], len = arr.length; idx < len; idx++ ) {
						Pluto.Templates.renderTemplate( 'card-inst', arr[idx], '.js-results' );
						// Accomodate 4 cards in a row:
						var $curr = $( '.srch-result-wrapper' ).last();
						if( $curr.length )
							$curr.addClass('srch-res-prvw');
					}

					// Initialize masonry to render the varied height search results:
					// $('.js-results').masonry({
					// 	itemSelector: '.srch-result-wrapper'
					// });

					// Initialize lazy load on images:
					$('img.lazy').lazyload({
						effect: 'fadeIn',
						placeholder: 'assets/img/loading-tiny.gif',
						load: function() {
							$(this).removeClass('lazy');
						}
					});

					// Mark the request flag as false:
					isReqInProcess = false;

					// Hide the more results loader:
					$moreResLdr.hide();
				}
			});
	};

	// Infinite scroll related:
	$(window).on('scroll', function() {
		if( $(window).scrollTop() + $(window).height() >= $(document).height() - $footer.outerHeight( true ) ) {
			// You've just hit the footer!!
			if( isReqInProcess || !isMoreResults ) return;
			// Fetch results from server (this is a continuous request):
			fetch();
		}
	});

	// Set the search string on page so user can know what he searched:
	$('#qry').text( q );

	// Fetch data from server (initial request):
	fetch();

});