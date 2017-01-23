/**
 * @desc Renders all the saved test series
 * @author Navdeep
 * @dependency jQuery, Handlebars
 */

var $document = $( document );

$document.ready(function() {

	/******************************************************
	 *
	 * @section Variables, constants and helpers
	 *
	 ******************************************************/

	// Constants:
	var ELEM_TEST_SERIES_THUMB  = '.js-test-series-thumb',
	    ELEM_DELETE_TEST_SERIES = '.js-delete-test-series',
	    ELEM_ALL_TEST_SERIES    = '#all-test-series',
	    TPL_TEST_SERIES_THUMB   = 'test-series-thumbnail';

	// Fetching tests related:
	var testSeriesFetcher = new Fetcher({
		fetchUrl          : siteConfig.url.front + 'institute/testSeries/get',
		batchCount        : 6,
		resultsElem       : ELEM_ALL_TEST_SERIES,
		fetchMsg          : 'Getting more test series',
		batchCompleteMsg  : 'No more test series',
		loaderImgUrl      : siteConfig.url.front + 'assets/img/loading.gif',
		onSuccessCallback : function( response ) {
			console.log( 'Response from server:', response );

			// Render test series on page:
			for( var idx = 0, arr = response.data, len = arr.length; idx < len; idx++ ) {
				Pluto.Templates.renderTemplate(
					TPL_TEST_SERIES_THUMB, // template name
					arr[idx],              // template data
					ELEM_ALL_TEST_SERIES   // element where element will be appended
				);
			}
		}
	});

	// Infinite scroll related:
	var footer = new Footer({
		$footer     : $( '.footr' ),
		onFooterHit : function() {
			if( testSeriesFetcher.hasData && !testSeriesFetcher.inProgress ) {
				testSeriesFetcher.fetch( false );
			}
		}
	});



	/******************************************************
	 *
	 * @section onLoad
	 *
	 ******************************************************/
	var onLoad = function() {
		testSeriesFetcher.fetch( true );
	};



	/******************************************************
	 *
	 * @section Test template events
	 *
	 ******************************************************/

	$document.on( 'click', ELEM_DELETE_TEST_SERIES, function( event ) {
		event.preventDefault();
		$.ajax({
			url     : siteConfig.url.front + 'institute/testSeries/delete',
			type    : 'POST',
			data    : JSON.stringify({ 'testSeriesId' : $( this ).data( 'test-series-id' ) }),
			success : function( response ) {
				console.log( 'Response for deleting test series is:', response );

				if( response.status === 200 ) {
					$( this ).closest( ELEM_TEST_SERIES_THUMB ).remove();
					badger.show( 'Test series deleted successfully!' );
				}
			}.bind( this )
		});
	});



	// At last, call the on load function:
	onLoad();
});