/**
 * @desc Handles saving test series
 * @author Navdeep
 * @dependency jQuery, Badger
 */

$(document).ready(function() {

	/******************************************************
	 *
	 * @section Variables, constants and helpers
	 *
	 ******************************************************/

	// Constants:
	var TEST_SERIES_ID_PLACEHOLDER = '{testSeriesId}',
	    PAGE_MODE_ADD              = 'add',
	    PAGE_MODE_EDIT             = 'edit',
	    TPL_CHECKBOX               = 'checkbox';

	// Variables:
	var pageMode         = getParameterByName( 'mode' ) || PAGE_MODE_ADD,
	    pageTestSeriesId = getParameterByName( 'id' );

	// Variables containing jQuery elements:
	var $testSeriesName    = $( '#testSeriesName' ),
	    $testSeriesDesc    = $( '#testSeriesDesc' ),
	    $saveTestSeries    = $( '#saveTestSeries' ),
	    $frmSaveTestSeries = $( '#frmSaveTestSeries' ),
	    $testSeriesId      = $( '#testSeriesId' ),
	    $testSeriesLinks   = $( '.js-test-series-link' ),
	    $tests             = $( '#tests' ),
	    $pageLoader        = $( '#page-loader' );

	// Helper functions:
	var Helpers = {
		/**
		 * @desc Perform necessary changes for the page mode
		 * @params
		 *     - thisMode {string} Intended page mode; 'add' or 'edit'
		 *     - extras   {object} Extra info required in the change
		 */
		doChangesFor: function( thisMode, extras ) {
			// To all the 'if-else-if' lovers,
			// I am using `switch` statement only for the code to be readable.
			// #IfElseIfPatron here
			switch( thisMode ) {
				case PAGE_MODE_ADD :
					break;
				case PAGE_MODE_EDIT:
					// Set the test id in the hidden field:
					$testSeriesId.val( extras.testSeriesId );
					// Set it in the test links too:
					$testSeriesLinks.each( function( idx, el ) {
						var oldHref = $(this).attr( 'href' );
						var newHref = oldHref.replace( TEST_SERIES_ID_PLACEHOLDER, extras.testSeriesId );
						$(this).attr( 'href', newHref );
					});
					// Update URL to reflect the 'edit' mode:
					history.replaceState( null, null, 'save?mode=edit&id=' + extras.testSeriesId );
					break;
			}
		},
		/**
		 * @desc Populates form fields with values
		 * @params
		 *     - testSeries {object} The object containing the test series data
		 */
		bindTestSeriesDataToForm: function( testSeries ) {
			// Set props:
			$testSeriesName.val( testSeries.name );
			$testSeriesDesc.val( testSeries.desc );

			// Select tests:
			( testSeries.tests || [] ).forEach( function( el, idx ) {
				$( '#' + el ).prop( 'checked', true );
			});
		},
		/**
		 * @desc Returns the selected tests from the checkboxes
		 * @return Array
		 */
		getSelectedTests: function() {
			var arr = [];

			if( $tests.find( '.cb:checked' ).length ) {
				$tests.find( '.cb:checked' ).each( function() {
					arr.push( $( this ).attr( 'id' ) );
				});
			}

			return arr;
		},
		/**
		 * @desc Appends tests on the page, if no tests show reqd. message
		 * @param
		 *     - data {Array} Tests
		 */
		handleTestsData: function( data ) {
			var NO_TESTS_MARKUP = '<p class="msg warn"><span class="fa fa-exclamation-circle fa-fw"></span> No tests yet</p>';

			$tests.empty();
			if( data.length ) {
				data.forEach(function( el ) {
					Pluto.Templates.renderTemplate(
						TPL_CHECKBOX,
						el,
						$tests
					);
				});
			}
			else {
				$tests.append( NO_TESTS_MARKUP );
			}
		}
	};



	/******************************************************
	 *
	 * @section onLoad
	 *
	 ******************************************************/
	var onLoad = function() {
		// Fetch tests and add their names as checkboxes:
		$.ajax({
			url     : siteConfig.url.front + 'institute/tests/get',
			type    : 'GET',
			success : function( response ) {
				console.log( 'Tests:', response.data );

				if( response.status === 200 ) {
					Helpers.handleTestsData( response.data );
				}

				// Now fetch test series data.
				// This is to avoid race codition.
				if( pageMode === 'edit' && pageTestSeriesId ) {
					$.ajax({
						url     : siteConfig.url.front + 'institute/testSeries/get?testSeriesId=' + pageTestSeriesId,
						type    : 'GET',
						success : function( response ) {
							console.log( 'Test series data for the id', pageTestSeriesId, 'is:', response );

							if( response.status === 200 ) {
								Helpers.bindTestSeriesDataToForm( response.data );
								Helpers.doChangesFor( pageMode, { "testSeriesId": pageTestSeriesId } );
							}

							// Hide the page loader:
							$pageLoader.hide();
						}
					});
				}
				else {
					// Hide the page loader:
					$pageLoader.hide();
				}
			}
		});
	};



	/******************************************************
	 *
	 * @section Edit / save test series
	 *
	 ******************************************************/

	// Handle the clicks of editing test's questions:
	$testSeriesLinks.on( 'click', function( event ) {
		var href = $(this).attr( 'href' );
		if( href.indexOf( TEST_SERIES_ID_PLACEHOLDER ) >= 0 ) {
			badger.show( 'Please save this test series first', 'warn' );
		 	event.preventDefault();
		}
	});

	// Handle saving test:
	$frmSaveTestSeries.on( 'submit', function( event ) {
		// Some local variables:
		var isValid        = true,
		    $pacerBtn      = $saveTestSeries,
		    $pacer         = $saveTestSeries.next( '.pacer' ).css({ 'width': '0%' }),
		    testSeriesName = $testSeriesName.val().trim(),
		    partialReqUrl  = 'institute/testSeries/create';

		// Validate this form:
		if( !testSeriesName ) {
			badger.show( 'Please provide a test series name', 'error' );
			$testSeriesName.focus();
			isValid = false;
		}

		if( isValid ) {
			// Form the payload to send to back end:
			var payload = {
				'name'  : testSeriesName,
				'desc'  : $testSeriesDesc.val().trim(),
				'tests' : Helpers.getSelectedTests()
			};

			// Animate the pacer to 50%:
			$pacer
				.show()
				.animate({ 'width': '50%' })
				.prev( 'button' )
				.removeClass( 'btn-sheen-intrctve' )
				.prop( 'disabled', true )
				.text( $pacerBtn.data( 'text-alt' ) );

			if( pageMode === PAGE_MODE_EDIT ) {
				payload._id   = $testSeriesId.val();
				partialReqUrl = 'institute/testSeries/update';
			}

			console.log( 'Page mode:', pageMode, ' and test series obj:', payload );

			$.ajax({
				url  : siteConfig.url.front + partialReqUrl,
				type : 'POST',
				data : JSON.stringify( payload ),
			})
			.done(function( response ) {
				console.log( 'Test series save response:', response );

				// Animate the pacer to 100% and hide it:
				$pacer
					.animate({ 'width': '100%' }, function() {
						$pacer
							.css({ 'width': '0%' })
							.hide()
							.prev( 'button' )
							.addClass( 'btn-sheen-intrctve' )
							.prop( 'disabled', false )
							.text( $pacerBtn.data( 'text' ) );
					});

				if( response.status === 200 ) {
					// Show notification:
					badger.show( 'Test series saved successfully' );

					// If page mode is 'add', change it to 'edit':
					if( pageMode === PAGE_MODE_ADD ) {
						pageMode = PAGE_MODE_EDIT;
						Helpers.doChangesFor( pageMode, { "testSeriesId": response.data._id } );
					}
				}
			})
			.fail(function( data ) {
				badger.show( 'An error occurred while saving this test series', 'error', { stayTime: 4 } );
				console.log( 'Error ocurred with data:', data );
			});
		}

		event.preventDefault();
	});



	// At last, call the on load function:
	onLoad();
});