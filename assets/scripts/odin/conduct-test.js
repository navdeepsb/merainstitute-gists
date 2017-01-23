/**
 * @desc Conduct / preview test
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
	var ELEM_SEC_QUES               = '.sec-ques',
	    ELEM_ID_TIMER               = 'testTimer',
	    ELEM_MAIN_COLS              = '.js-main > .col',
	    ELEM_QUES_JUMPER            = '#ques-jumpers',
	    ELEM_QUES                   = '.js-question',
	    ELEM_QUES_OPTION            = '.js-option',
	    ELEM_RESET_OPTION           = '.js-reset-options',
	    ELEM_MARK_FOR_REVIEW        = '.js-mark-review',
	    QUES_JUMPR_CLASS            = 'ques__jumper',
	    QUES_JUMPR_ATTMPT_CLASS     = 'ques__jumper--attempted',
	    QUES_JUMPR_RVW_CLASS        = 'ques__jumper--toReview',
	    QUES_JUMPR_ATTMPT_RVW_CLASS = 'ques__jumper--attempted-toReview',
	    DATA_ATTR_MARKED            = 'marked',
	    DATA_ATTR_ATTMPT            = 'attempted',
	    TPL_SECTION                 = 'test-section-ro',
	    TPL_QUES_JUMPER             = 'question-jumper',
	    TPL_QUESTION                = 'question-ro',
	    USER_ROLE_INSTITUTE         = 'institute',
	    USER_ROLE_STUDENT           = 'student',
	    // This constant is equal to the no. of parallel
	    // AJAX requests on the page:
	    FINAL_LOAD_SCORE            = 2;

	// Variables:
	var pageTestId = '',
	    quesStats  = {
	    	attempted: 0,
	    	toReview: 0,
	    	total: 0
	    },
	    // This variable will be incremented after every
	    // AJAX call and then passed to a helper function
	    // to find whether to hide the loader or not by
	    // comparing it with the final load score.
	    loadScore     = 0,
	    testAttemptId = '';

	// Variables containing jQuery elements:
	var $testName      = $( '#test-name' ),
	    $testQuesCount = $( '#test-ques-count' ),
	    $testDur       = $( '#test-dur' ),
	    $testBody      = $( '#test-body' ),
	    $finishTest    = $( '#finishTest' ),
	    $pageLoader    = $( '#page-loader' );

	// Helper functions:
	var Helpers = {
		/**
		 * @desc Returns the role of currently logged-in user
		 * @returns String
		 */
		getUserRole: function() {
			return role; // defined in the JSP
		},
		/**
		 * @desc Extracts test id from the current URL
		 * @returns String
		 */
		getTestIdFromUrl: function() {
			// Local constants:
			var URL_PATH       = location.pathname,
			    PATH_SEPARATOR = '/';

			// Local variables:
			var lastIdx = URL_PATH.lastIndexOf( PATH_SEPARATOR ),
			    length  = URL_PATH.length;

			return URL_PATH.substr( lastIdx + 1, length );
		},
		/**
		 * @desc Returns the no. of keys in an object
		 * @params
		 *     - obj {Object}
		 * @returns Number
		 */
		getKeysCount: function( obj ) {
			var len = 0;
			for( var key in obj ) {
				len++;
			}
			return len;
		},
		/**
		 * @desc Renders LaTeX syntaxes on the page
		 */
		renderLatex: function() {
			try {
				// Following API will render only the non-rendered
				// LaTeX syntaxes on the page:
				MathJax.Hub.Queue([ 'Typeset', MathJax.Hub ]);
			}
			catch( ex ) {
				console.warn( 'MathJax couldn\'t be run.\nException:', ex );
			}
		},
		/**
		 * @desc Renders the sections and questions on DOM
		 * @params
		 *     - sections  {Array}  The sections of the test
		 *     - questions {Object} Map containing questions
		 */
		renderSections: function( sections, questions ) {
			var counter = 0;

			( sections || [] ).forEach( function( sec ) {
				// Render this section:
				Pluto.Templates.renderTemplate(
					TPL_SECTION,
					sec,
					$testBody
				);

				// Append questions to this section:
				( sec.ques || [] ).forEach( function( ques ) {
					var quesData = questions[ ques ];
					if( quesData ) {
						quesData.quesIdx = ++counter;
						quesData.quesId  = ques;
						Pluto.Templates.renderTemplate(
							TPL_QUESTION,
							quesData,
							$( '#' + sec.secId ).find( ELEM_SEC_QUES )
						);
					}
				});
			});
		},
		/**
		 * @desc Sets up the DOM
		 */
		setupDom: function() {
			// Make the main columns' height equal to available
			// window height:
			$( ELEM_MAIN_COLS ).each(function() {
				$( this ).css( 'height', '100vh' );
			});
		},
		/**
		 * @desc Hides the page loader when all the AJAX requests
		 *       have been completed.
		 */
		hideLoader: function( currLoadScore ) {
			if( currLoadScore === FINAL_LOAD_SCORE ) {
				$pageLoader.hide();
			}
		},
		/**
		 * @desc Refreshes the ques stats on the DOM
		 */
		refreshQuesStats: function() {
			$( '#ques-attempted' ).text( quesStats.attempted );
			$( '#ques-to-review' ).text( quesStats.toReview );
			$( '#ques-total' ).text( quesStats.total );
		},
		/**
		 * @desc Calculates and sets the appropriate ques jumper class
		 * @params
		 *     - $jumper     {jQuery}  The jQuery element represeting
		 *                             the ques jumper in context
		 *     - isMarked    {Boolean} The final intended marked state
		 *                             of the jumper
		 *     - isAttempted {Boolean} The final intended attempted
		 *                             state of the jumper
		 */
		setJumperClass: function( $jumper, isMarked, isAttempted ) {
			var calculatedClass = '';

			if( isMarked && isAttempted ) {
				calculatedClass = ' ' + QUES_JUMPR_ATTMPT_RVW_CLASS;
			}
			else if( isMarked && !isAttempted ) {
				calculatedClass = ' ' + QUES_JUMPR_RVW_CLASS;
			}
			else if( !isMarked && isAttempted ) {
				calculatedClass = ' ' + QUES_JUMPR_ATTMPT_CLASS;
			}
			else if( !isMarked && !isAttempted ) {
				calculatedClass = '';
			}

			$jumper.attr( 'class', $jumper.data( 'orig-class' ) + calculatedClass );
		},
		/**
		 * @desc Sends the ques response to the backend
		 * @params
		 *     - $ques {jQuery} The jQuery element representing the ques
		 *     - resp  {Number} The response choosen by the student
		 */
		saveQuesResponse: function( $ques, resp ) {
			var quesId  = $ques.data( 'quesid' );
			var payload = {
				testAttemptId : testAttemptId,
				quesId        : quesId,
				optionIndex   : parseInt( resp, 10 )
			};

			$ques.find( '.js-anw-loader' ).fadeIn();

			console.log( 'saveQuesResponse(): Payload:', payload );
			$.ajax({
				url     : siteConfig.url.front + 'student/addQuestionResponse',
				type    : 'POST',
				data    : JSON.stringify( payload ),
				success : function( response ) {
					console.log( 'saveQuesResponse(): QuesId:', quesId, '; Response:', response );

					if( response.status === 200 ) {
						console.log( 'saveQuesResponse(): QuesId:', quesId, '; Response saved successfully' );
						$ques.find( '.js-anw-loader' ).fadeOut();
					}
					else {
						console.log( 'saveQuesResponse(): QuesId:', quesId, '; Response could not be saved successfully' );
					}
				}
			});
		}
	};

	/******************************************************
	 *
	 * @section onLoad
	 *
	 ******************************************************/
	var onLoad = function() {
		var testTimer = new Timer({
			targetEl   : document.getElementById( ELEM_ID_TIMER ),
			onTimerEnd : function() {
				console.log( 'Time up!!' );
				$finishTest.click();
			}
		});

		Helpers.setupDom();

		pageTestId = Helpers.getTestIdFromUrl();

		// AJAX call to get test info:
		$.ajax({
			url     : siteConfig.url.front + 'institute/tests/get?testId=' + pageTestId,
			type    : 'GET',
			success : function( response ) {
				console.log( 'Test data for the test id', pageTestId, 'is:', response );
				var quesCount = 0;

				if( response.status === 200 ) {
					quesCount = Helpers.getKeysCount( response.data.questions );

					$testName.text( response.data.name );
					$testQuesCount.text( quesCount );
					$testDur.text( response.data.timeDur );
					Helpers.renderSections( response.data.body, response.data.questions );
					Helpers.renderLatex();

					// Form the ques. index:
					for( var idx = 0; idx < quesCount; idx++ ) {
						Pluto.Templates.renderTemplate(
							TPL_QUES_JUMPER,
							{ num: idx + 1 },
							ELEM_QUES_JUMPER
						);
					}

					// Refresh ques stats after updating them:
					quesStats.total = quesCount;
					Helpers.refreshQuesStats();

					// Start the timer:
					testTimer.start( response.data.timeDur * 60 );
				}

				// Hide the page loader:
				Helpers.hideLoader( ++loadScore );
			}
		});

		if( Helpers.getUserRole() === USER_ROLE_INSTITUTE ) {
			// Call the hide loader function on behalf of the AJAX
			// request down below:
			Helpers.hideLoader( ++loadScore );
			// Return the call to the function so that it does not
			// proceed any further:
			return;
		}

		// AJAX call to prepare test attempt and start the test:
		$.ajax({
			url     : siteConfig.url.front + 'student/prepareTest',
			type    : 'POST',
			data    : JSON.stringify({ testId: pageTestId }),
			success : function( response ) {
				console.log( 'Response for prepareTest:', response );

				if( response.status === 200 ) {
					testAttemptId = response.data._id.$oid;

					// AJAX call to start the test:
					$.ajax({
						url     : siteConfig.url.front + 'student/startTest',
						type    : 'POST',
						data    : JSON.stringify({ testAttemptId: testAttemptId }),
						success : function( response ) {
							console.log( 'Response for startTest:', response );

							if( response.status === 200 ) {
								// Hide the page loader:
								Helpers.hideLoader( ++loadScore );
							}
							else {
								console.log( 'Something went wrong while starting test for testAttemptId:', testAttemptId );
							}
						}
					});
				}
				else {
					console.log( 'Something went wrong while preparing test.' );
				}
			}
		});

	};



	/******************************************************
	 *
	 * @section Test controls
	 *
	 ******************************************************/

	 // Scrolling the question to the viewport:
	 // OR Jumping to a question
	$document.on( 'click', '.' + QUES_JUMPR_CLASS, function() {
		var target = $( this.hash );
		var adjustParam = $testBody.offset().top;
		if( target.length ) {
			$testBody.parent().animate({
				scrollTop: target.offset().top - ( adjustParam < 0 ? adjustParam : 0 )
			}, 500);
			return false;
		}
	});

	// Selecting an option:
	$document.on( 'click', ELEM_QUES_OPTION, function() {
		// Local variables:
		var $this        = $( this );
		var $ques        = $this.closest( ELEM_QUES );
		var value        = $this.val(); // [ 0, 1, 2, 3 ]
		var quesIdx      = $this.attr( 'name' ).split( '-' ).pop();
		var isMarked     = $ques.data( DATA_ATTR_MARKED );
		var wasAttempted = $ques.data( DATA_ATTR_ATTMPT );

		if( !wasAttempted ) {
			// Calculate ques stats:
			quesStats.attempted += 1;
			Helpers.refreshQuesStats();
		}

		// And then, mark the ques attempted state as 'true':
		$ques.data( DATA_ATTR_ATTMPT, true );

		// The final attempted ques state is going to be
		// true, so pass it to the function:
		Helpers.setJumperClass( $( '#jumper-' + quesIdx ), isMarked, true );

		// For students, send this response to backend:
		if( Helpers.getUserRole() === USER_ROLE_STUDENT ) {
			Helpers.saveQuesResponse( $ques, value );
		}
	});

	// Reseting options to a question:
	$document.on( 'click', ELEM_RESET_OPTION, function( event ) {
		// Local variables:
		var $this        = $( this );
		var $ques        = $this.closest( ELEM_QUES );
		var quesIdx      = $this.data( 'ques-idx' );
		var isMarked     = $ques.data( DATA_ATTR_MARKED );
		var wasAttempted = $ques.data( DATA_ATTR_ATTMPT );

		if( wasAttempted ) {
			// Calculate ques stats:
			quesStats.attempted -= 1;
			Helpers.refreshQuesStats();
		}

		// Mark the ques as unattempted and uncheck the options:
		$ques
			.data( DATA_ATTR_ATTMPT, false )
			.find( ELEM_QUES_OPTION )
			.prop( 'checked', false );

		// The final attempted ques state is always going to be
		// false, so pass it to the function:
		Helpers.setJumperClass( $( '#jumper-' + quesIdx ), isMarked, false );

		// For students, send this response to backend:
		if( Helpers.getUserRole() === USER_ROLE_STUDENT ) {
			Helpers.saveQuesResponse( $ques, -1 );
		}

		event.preventDefault();
	});

	// Marking a question for review:
	$document.on( 'click', ELEM_MARK_FOR_REVIEW, function( event ) {
		// Variables:
		var $this       = $(this);
		var $ques       = $this.closest( ELEM_QUES );
		var quesIdx     = $this.data( 'ques-idx' );
		var wasMarked   = $ques.data( DATA_ATTR_MARKED );
		var isAttempted = $ques.data( DATA_ATTR_ATTMPT );

		// Calculate ques stats:
		if( wasMarked ) {
			quesStats.toReview -= 1;
		}
		else {
			quesStats.toReview += 1;
		}
		Helpers.refreshQuesStats();

		// Change the text:
		$this.text( !wasMarked ? 'remove from review' : 'mark for review' );

		// And the state of the ques:
		// (which will be the toggled one)
		$ques.data( DATA_ATTR_MARKED, !wasMarked );

		// The final marked ques state is going to be the
		// toggled one, so pass it to the function:
		Helpers.setJumperClass( $( '#jumper-' + quesIdx ), !wasMarked, isAttempted );

		event.preventDefault();
	});

	// Finish the test:
	$finishTest.on( 'click', function( event ) {
		event.preventDefault();

		// Only students can finish a test:
		if( Helpers.getUserRole === USER_ROLE_INSTITUTE ) return;

		// Show the page loader:
		$pageLoader.show();

		// Tell backend that we are done with this test:
		$.ajax({
			url     : siteConfig.url.front + 'student/finishTest',
			type    : 'POST',
			data    : JSON.stringify({ testAttemptId: testAttemptId }),
			success : function( response ) {
				console.log( 'Response after finishing test:', response );

				if( response.status === 200 ) {
					// Navigate to the student account page:
					location.href = siteConfig.url.front + 'student/account';
				}
			}
		});
	});



	// At last, call the on load function:
	onLoad();
});