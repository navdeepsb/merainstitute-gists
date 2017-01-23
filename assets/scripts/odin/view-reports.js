/**
 * @desc Shows reports of a test
 * @author Navdeep
 * @dependency jQuery, Handlebars
 */

$(document).ready(function() {

	/******************************************************
	 *
	 * @section Variables, constants and helpers
	 *
	 ******************************************************/

	// Constants:
	var TPL_TEST_SUMMARY = 'test-summary';

	// Variables:
	var pageTestId = '';

	// Variables containing jQuery elements:
	var $testName = $( '#test-name' ),
	    $reports  = $( '#reports' );

	// Helper functions:
	var Helpers = {
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
		getTestStats: function( quesMap ) {
			var eachQues = null;
			var marks = 0;
			var maxMarks = 0;
			var totalQues = 0;
			var attemptedQues = 0;
			var correctQues = 0;
			var incorrectQues = 0;

			var CORRECT_FACTOR = 3;
			var INCORRECT_FACTOR = -1;

			for( var quesId in quesMap ) {
				eachQues = quesMap[ quesId ];
				maxMarks +=  CORRECT_FACTOR;
				totalQues++;
				if( eachQues.optedAnswer < 0 || !eachQues.hasOwnProperty( 'optedAnswer' ) ) {
					// not attempted
				}
				else {
					attemptedQues++;
					if( eachQues.optedAnswer == eachQues.answer ) {
						// correct
						marks += CORRECT_FACTOR;
						correctQues++;
					}
					else {
						// incorrect
						marks += INCORRECT_FACTOR;
						incorrectQues++;
					}
				}
			}

			return {
				marks: marks,
				maxMarks: maxMarks,
				totalQues: totalQues,
				attemptedQues: attemptedQues,
				correctQues: correctQues,
				incorrectQues: incorrectQues
			};
		}
	};



	/******************************************************
	 *
	 * @section onLoad
	 *
	 ******************************************************/
	var onLoad = function() {
		pageTestId = Helpers.getTestIdFromUrl();

		$.ajax({
			url  : siteConfig.url.front + 'institute/tests/get',
			type : 'GET',
			data : { testId: pageTestId },
			success: function( response ) {
				console.log( 'Test data for the test id', pageTestId, 'is:', response );

				if( response.status === 200 ) {
					$testName.text( response.data.name );

					// Now get the test report for this test:
					$.ajax({
						url  : siteConfig.url.front + 'student/testAttempts/get',
						type : 'GET',
						data : { testId: pageTestId },
						success: function( response ) {
							console.log( 'Test reports for the test id', pageTestId, 'is:', response );

							if( response.status === 200 && ( response.data || [] ).length ) {
								$reports.empty();

								response.data.forEach( function( el, idx ) {
									el.attemptMeta = {
										startTime : el.startTime,
										endTime   : el.endTime,
										timeTaken : ( el.endTime - el.startTime ) / 1000,
										stats     : Helpers.getTestStats( el.questions )
									};

									el.studMeta = STUDS[ el.studId ];

									Pluto.Templates.renderTemplate(
										TPL_TEST_SUMMARY,
										el,
										$reports
									);
								});
							}
							else {
								$reports.text( 'No reports yet' );
							}
						}
					});
				}
			}
		});
	};



	/******************************************************
	 *
	 * @section Sassy name
	 *
	 ******************************************************/

	// TODO Write awesome code here



	// At last, call the on load function:
	onLoad();
});