/**
 * @desc Handles saving test basic info
 * @author Navdeep
 * @dependency jQuery, Badger, Pickadate
 */

$(document).ready(function() {

	/******************************************************
	 *
	 * @section Variables, constants and helpers
	 *
	 ******************************************************/

	// Constants:
	var TEST_ID_PLACEHOLDER = '{testId}',
	    PAGE_MODE_ADD       = 'add',
	    PAGE_MODE_EDIT      = 'edit';

	// Variables:
	var pageMode       = getParameterByName( 'mode' ) || PAGE_MODE_ADD,
	    pageTestId     = getParameterByName( 'id' );

	// Variables containing jQuery elements:
	var $testName      = $( '#testName' ),
	    $testDesc      = $( '#testDesc' ),
	    $timeDur       = $( '#timeDur' ),
	    $fromDate      = $( '#aliveFrom' ),
	    $aliveFromTime = $( '#aliveFromTime' ),
	    $toDate        = $( '#aliveTo' ),
	    $aliveToTime   = $( '#aliveToTime' ),
	    $saveTest      = $( '#saveTest' ),
	    $frmSaveTest   = $( '#frmSaveTest' ),
	    $testId        = $( '#testId' ),
	    $testLinks     = $( '.js-test-link' ),
	    $pageLoader    = $( '#page-loader' );

	// Helper functions:
	var Helpers = {
		/**
		 * @desc Returns the milliseconds from midnight for the input time
		 * @params
		 *     - time {string} Time in 24h format. Ex: `10:30`, `16:00`, etc.
		 * @returns Number
		 */
		getMillisecFromMidnight: function( time ) {
			var minutes = 0;
			if( time ) {
				var h = parseInt( time.split( ':' )[ 0 ] );
				var m = parseInt( time.split( ':' )[ 1 ] );
				minutes = ( h * 60 ) + m;
			}
			return minutes * 60 * 1000;
		},
		/**
		 * @desc Returns the minutes from midnight for the input date in long
		 * @params
		 *     - date {long} Date in long format
		 * @returns Number
		 */
		getMinutesFromMidnightFromDate: function( date ) {
			var objDate = new Date( date );
			return objDate.getHours() * 60 + objDate.getMinutes();
		},
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
					$testId.val( extras.testId );
					// Set it in the test links too:
					$testLinks.each( function( idx, el ) {
						var oldHref = $(this).attr( 'href' );
						var newHref = oldHref.replace( TEST_ID_PLACEHOLDER, extras.testId );
						$(this).attr( 'href', newHref );
					});
					// Update URL to reflect the 'edit' mode:
					history.replaceState( null, null, 'save?mode=edit&id=' + extras.testId );
					break;
			}
		},
		/**
		 * @desc Populates form fields with values
		 * @params
		 *     - test {object} The object containing the test data
		 */
		bindTestDataToForm: function( test ) {
			// Local variables:
			var aliveFromDate = test.aliveFrom,
			    aliveToDate   = test.aliveTo;

			// Set basic props:
			$testName.val( test.name );
			$testDesc.val( test.desc );
			$timeDur.val( test.timeDur );

			if( aliveFromDate ) {
				$fromDate.pickadate( 'picker' ).set( 'select', aliveFromDate );
				// Set time from the date that is in long:
				$aliveFromTime.pickatime( 'picker' ).set( 'select',
					this.getMinutesFromMidnightFromDate( aliveFromDate ) );
			}

			if( aliveToDate ) {
				$toDate.pickadate( 'picker' ).set( 'select', aliveToDate );
				// Set time from the date that is in long:
				$aliveToTime.pickatime( 'picker' ).set( 'select',
					this.getMinutesFromMidnightFromDate( aliveToDate ) );
			}
		}
	};



	/******************************************************
	 *
	 * @section onLoad
	 *
	 ******************************************************/
	var onLoad = function() {
		if( pageMode === 'edit' && pageTestId ) {
			$.ajax({
				url     : siteConfig.url.front + 'institute/tests/get?testId=' + pageTestId,
				type    : 'GET',
				success : function( response ) {
					console.log( 'Test data for the test id', pageTestId, 'is:', response );

					if( response.status === 200 ) {
						Helpers.bindTestDataToForm( response.data );
						Helpers.doChangesFor( pageMode, { "testId": pageTestId } );
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
	};



	/******************************************************
	 *
	 * @section Date and time picker
	 *
	 ******************************************************/

	// Some variables:
	var fromDate       = $fromDate.pickadate().pickadate( 'picker' ),
	    toDate         = $toDate.pickadate().pickadate( 'picker' ),
	    aliveFromTime  = $aliveFromTime.pickatime().pickatime( 'picker' ),
	    aliveToTime    = $aliveToTime.pickatime().pickatime( 'picker' );

	// When 'from' date is selected, update the 'to' date and set the formatted value:
	fromDate.on( 'set', function( event ) {
		// Get the dates:
		var from = this.get( 'select' ) || {};   // can be `undefined` when clearing the date
		var to   = toDate.get( 'select' ) || {}; // can be `undefined` when 'to' date not selected at all
		if( event.select ) {
			// Check if user has selected a 'from' date greater than the 'to' date:
			if( Date.parse( from.obj ) > Date.parse( to.obj || 0 ) ) {
				// If yes, set the 'to' date to 'from' date:
				toDate.set( 'select', from );
			}
			// And always, set the 'to' date's min date to 'from' date:
			toDate.set( 'min', from );
		}
		else if( 'clear' in event ) {
			// Clear the min limit on 'to' date when 'from' date is cleared:
			toDate.set( 'min', false );
		}
		$fromDate.data( 'val', from.pick || '' );
	});

	// When 'to' date is selected, set the formatted value:
	toDate.on( 'set', function( event ) {
		$toDate.data( 'val', ( this.get( 'select' ) || {} ).pick || '' );
	});

	// Set milliseconds from midnight for the time picker value:
	aliveFromTime.on( 'set', function( event ) {
		$aliveFromTime.data( 'val', Helpers.getMillisecFromMidnight( this.get( 'select', 'H:i' ) ) );
	});

	// Set milliseconds from midnight for the time picker value:
	aliveToTime.on( 'set', function( event ) {
		$aliveToTime.data( 'val', Helpers.getMillisecFromMidnight( this.get( 'select', 'H:i' ) ) );
	});



	/******************************************************
	 *
	 * @section Edit / save test
	 *
	 ******************************************************/

	// Handle the clicks of editing test's questions:
	$testLinks.on( 'click', function( event ) {
		var href = $(this).attr( 'href' );
		if( href.indexOf( TEST_ID_PLACEHOLDER ) >= 0 ) {
			badger.show( 'Please save this test first', 'warn' );
		 	event.preventDefault();
		}
	});

	// Handle saving test:
	$frmSaveTest.on('submit', function( event ) {
		// Some local variables:
		var isValid       = true,
		    $pacerBtn     = $saveTest,
		    $pacer        = $saveTest.next( '.pacer' ).css({ 'width': '0%' }),
		    testName      = $testName.val().trim(),
		    timeDur       = parseInt( $timeDur.val().trim() ),
		    partialReqUrl = 'institute/tests/create';

		// Validate this form:
		if( !testName ) {
			badger.show( 'Please provide a test name', 'error' );
			$testName.focus();
			isValid = false;
		}
		else if( isNaN( timeDur ) ) {
			badger.show( 'Please provide a numeric duration', 'error' );
			$timeDur.focus();
			isValid = false;
		}
		else if( timeDur === 0 ) {
			badger.show( 'Please provide a non-zero duration', 'error' );
			$timeDur.focus();
			isValid = false;
		}

		if( isValid ) {
			// Form the payload to send to back end:
			var payload = {
				'name'      : testName,
				'desc'      : $testDesc.val().trim(),
				'timeDur'   : timeDur,
				'aliveFrom' : $fromDate.data( 'val' ) + $aliveFromTime.data( 'val' ),
				'aliveTo'   : $toDate.data( 'val' ) + $aliveToTime.data( 'val' )
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
				payload._id   = $testId.val();
				partialReqUrl = 'institute/tests/update';
			}

			console.log( 'Page mode:', pageMode, ' and test obj:', payload );

			$.ajax({
				url  : siteConfig.url.front + partialReqUrl,
				type : 'POST',
				data : JSON.stringify( payload ),
			})
			.done(function( response ) {
				console.log( 'Test save response:', response );

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
					badger.show( 'Test saved successfully' );
					// If page mode is 'add', change it to 'edit':
					if( pageMode === PAGE_MODE_ADD ) {
						pageMode = PAGE_MODE_EDIT;
						Helpers.doChangesFor( pageMode, { "testId": response.data._id } );
					}
				}
			})
			.fail(function( data ) {
				badger.show( 'An error occurred while saving this test', 'error', { stayTime: 4 } );
				console.log( 'Error ocurred with data:', data );
			});
		}

		event.preventDefault();
	});



	// At last, call the on load function:
	onLoad();
});