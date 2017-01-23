var getTestStats = function( quesMap ) {
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
};

$(document).ready(function() {
	var $tests = $( '#tests' );
	var instructionsLink = siteConfig.url.front + 'online-tests/instructions?id={testId}';
	var testAttemptsMap = {};

	$.ajax({
		url  : siteConfig.url.front + 'student/testAttempts/get',
		type : 'GET',
		success: function( response ) {
			console.log( 'Response testAttempt/get:', response );

			if( ( response.data || [] ).length ) {
				response.data.forEach( function( el, idx ) {

					testAttemptsMap[ el.testId ] = {
						startTime : el.startTime,
						endTime   : el.endTime,
						timeTaken : ( el.endTime - el.startTime ) / 1000,
						stats     : getTestStats( el.questions )
					};

				});
				console.log( "Test attempt map:", testAttemptsMap );
			}

			$.ajax({
				url  : siteConfig.url.front + 'institute/tests/get',
				type : 'GET',
				success : function( response ) {
					console.log( 'Response for tests is:', response );

					if( response.status === 200 && ( response.data || [] ).length ) {
						$tests.empty();

						response.data.forEach( function( el, idx ) {
							el.takeTestLink = instructionsLink.replace( '{testId}', el._id.$oid );
							el.attemptMeta = testAttemptsMap[ el._id.$oid ];
							Pluto.Templates.renderTemplate( 'test-summary', el, $tests );
						});
					}
				}
			});


		}
	});

});