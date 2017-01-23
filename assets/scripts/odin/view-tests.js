/**
 * @desc Renders all the saved online tests
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
	var ELEM_TEST_THUMB  = '.js-test-thumb',
	    ELEM_DELETE_TEST = '.js-delete-test',
	    ELEM_ALL_TESTS   = '#all-tests',
	    TPL_TEST_THUMB   = 'test-thumbnail';

	// Fetching tests related:
	var testFetcher = new Fetcher({
		fetchUrl          : siteConfig.url.front + 'institute/tests/get',
		batchCount        : 6,
		resultsElem       : ELEM_ALL_TESTS,
		fetchMsg          : 'Getting more tests',
		batchCompleteMsg  : 'No more tests',
		loaderImgUrl      : siteConfig.url.front + 'assets/img/loading.gif',
		onSuccessCallback : function( response ) {
			console.log( 'Response from server:', response );
			for( var idx = 0, arr = response.data, len = arr.length; idx < len; idx++ ) {
				Pluto.Templates.renderTemplate( TPL_TEST_THUMB, arr[idx], ELEM_ALL_TESTS );
			}
		}
	});

	// Infinite scroll related:
	var footer = new Footer({
		$footer     : $( '.footr' ),
		onFooterHit : function() {
			if( testFetcher.hasData && !testFetcher.inProgress ) {
				testFetcher.fetch( false );
			}
		}
	});



	/******************************************************
	 *
	 * @section onLoad
	 *
	 ******************************************************/
	var onLoad = function() {
		testFetcher.fetch( true );
	};



	/******************************************************
	 *
	 * @section Test template events
	 *
	 ******************************************************/

	$document.on( 'click', ELEM_DELETE_TEST, function( event ) {
		event.preventDefault();
		$.ajax({
			url     : siteConfig.url.front + 'institute/tests/delete',
			type    : 'POST',
			data    : JSON.stringify({ 'testId' : $( this ).data( 'test-id' ) }),
			success : function( response ) {
				console.log( 'Response for deleting test is:', response );

				if( response.status === 200 ) {
					$( this ).closest( ELEM_TEST_THUMB ).remove();
					badger.show( 'Test deleted successfully!' );
				}
			}.bind( this )
		});
	});



	// At last, call the on load function:
	onLoad();
});