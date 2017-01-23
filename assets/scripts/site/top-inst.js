/**
 * top-rated-inst.js
 * -----------------
 * @desc Handling for top rated institutes results
 * @author Navi
 */

$(document).ready(function() {
	// Constants:
	var REC_LIMIT = 8;

	// Variables:
	var currSkip    = 0;
	var $loader     = $('.loader-cntnr');
	var $moreResLdr = $('.js-res-loader');
	var $noMoreRes  = $('.no-more-srch');
	var $noRes      = $('.js-no-res');
	var $footer     = $('.footr');
	var isReqInProcess = false;
	var isMoreResults  = true;
	var isSkipIncrmntd = false;
	var currRatingCrtria = '';
	var currExamGroup    = '';
	var ratingType       = '';

	var renderResults = function( results, isReqContinuous ) {
		// Hide the loader:
		$loader.fadeOut('fast');

		// Enable the sorting criterias:
		$( 'select' ).prop( 'disabled', false );

		// Clear the old results to render the fresh results:
		if( !isReqContinuous ) $('.js-results').html('');

		// Check if the result count is 0 or less than the limit.
		if( ( results || [] ).length < REC_LIMIT ) {
			// No more results available:
			$noMoreRes.fadeIn();
			isMoreResults = false;
		}

		for( var idx = 0, len = ( results || [] ).length; idx < len; idx++ ) {
			// Modify image URLs to make them independent of relative path:
			results[idx].heroImg      = results[idx].heroImg      ? siteConfig.url.front + results[idx].heroImg      : '';
			results[idx].heroImgThumb = results[idx].heroImgThumb ? siteConfig.url.front + results[idx].heroImgThumb : '';
			results[idx].profileImg   = results[idx].profileImg   ? siteConfig.url.front + results[idx].profileImg   : '';

			// Modify username too; for the same reason as above:
			results[idx].username     = siteConfig.url.front + results[idx].username;

			// Set the rating type:
			results[idx].ratingType = ratingType;

			// Render the institute:
			Pluto.Templates.renderTemplate( 'card-inst', results[idx], '.js-results' );

			// Accomodate 4 cards in a row:
			var $curr = $( '.srch-result-wrapper' ).last();
			if( $curr.length )
				$curr.addClass('srch-res-prvw');
		}

		// Initialize lazy load on images:
		$('img.lazy').lazyload({
			effect: 'fadeIn',
			placeholder: siteConfig.url.front + 'assets/img/loading-tiny.gif',
			load: function() {
				$(this).removeClass('lazy');
			}
		});

		// Mark the request flag as false:
		isReqInProcess = false;

		// Hide the more results loader:
		$moreResLdr.hide();
	};

	var fetch = function( isReqContinuous ) {
		// Variables:
		var objDataReq = {};

		// Disable the sorting criteria:
		if( !isReqInProcess ) $( 'select' ).prop( 'disabled', true );

		// Mark the more results available flag and the request flag as true:
		isMoreResults  = true;
		isReqInProcess = true;
		$noMoreRes.hide();

		// Update the limit and skip variables:
		if( isReqContinuous ) {
			// More data to be fetched on the same state:
			if( isSkipIncrmntd ) {
				isSkipIncrmntd = false;
			}
			else {
				currSkip += REC_LIMIT;
			}
			$moreResLdr.fadeIn();
		}
		else {
			// Fresh data request:
			currSkip = 0;
			// Show the loader:
			$loader.show();
		}

		// Make the data request object:
		objDataReq.ratingType = currRatingCrtria;
		objDataReq.examGroup  = currExamGroup;
		objDataReq.skip       = currSkip;
		objDataReq.limit      = REC_LIMIT;

		// Get data from server:
		// But first, find out whether this request is made for the first time or not.
		if( !$('body').data('init') ) {
			// Yes, it is the first request!

			// Get the current state:
			var urlElems = document.URL.split( '/' );
			currRatingCrtria = urlElems.pop();
			currExamGroup    = urlElems.pop();

			// Select the combo criteria:
			$( 'select[data-type="rating-crtria"]' ).val( currRatingCrtria );
			$( 'select[data-type="exam-grp"]' ).val( currExamGroup );

			// Set the rating type:
			ratingType = $( 'select[data-type="rating-crtria"] option:selected' ).data( 'type' );

			var initResults = JSON.parse( inlineData || '[]' );
			if( initResults.length < REC_LIMIT )
				REC_LIMIT = initResults.length;
			currSkip = initResults.length;
			isSkipIncrmntd = true;
			renderResults( initResults );

			$('body').data('init', true);
		}
		else {
			// No, it is not an initial request, get data via AJAX!
			$.post( siteConfig.url.front + 'institute/topInstitute', JSON.stringify( objDataReq ) )
				.done(function( response ) {
					if( response.status === 200 ) {
						// Render data:
						renderResults( JSON.parse( response.data ), isReqContinuous );
					}
				})
				.error(function() {
					console.log( 'An error occurred while fetching results' );
				});
		}
	};

	// Infinite scroll related:
	$(window).on('scroll', function() {
		if( $(window).scrollTop() + $(window).height() >= $(document).height() - $footer.outerHeight( true ) ) {
			// You've just hit the footer!!
			if( isReqInProcess || !isMoreResults ) return;
			// Fetch results from server (this is a continuous request):
			fetch( true );
		}
	});

	// Sorting top rated institutes related:
	$('.js-sort-combo').on('change', function() {
		// Update state:
		currRatingCrtria = $( 'select[data-type="rating-crtria"] option:selected' ).val();
		currExamGroup    = $( 'select[data-type="exam-grp"] option:selected' ).val();

		ratingType = $( 'select[data-type="rating-crtria"] option:selected' ).data( 'type' );

		// Update the URL:
		history.pushState( null, null, '../' + currExamGroup + '/' + currRatingCrtria );

		isSkipIncrmntd = false;

		// Fetch results:
		fetch();
	});

	// Related to browser history, this callback handles the pressing of the browser back button:
	$(window).on('popstate', function() {
		// Update state:
		var urlElems = document.URL.split( '/' );
		currRatingCrtria = urlElems.pop();
		currExamGroup    = urlElems.pop();

		// Select the combo criteria:
		$( 'select[data-type="rating-crtria"]' ).val( currRatingCrtria );
		$( 'select[data-type="exam-grp"]' ).val( currExamGroup );

		// Set the rating type:
		ratingType = $( 'select[data-type="rating-crtria"] option:selected' ).data( 'type' );

		isSkipIncrmntd = false;

		// Fetch data:
		fetch();
	});

	// Fetch data from server (initial request):
	fetch();

});