/**
 * @desc Handles saving questions of an already saved test
 * @author Navdeep
 * @dependency jQuery, Handlebars
 */

var $document = $(document);

$document.ready(function() {

	/******************************************************
	 *
	 * @section Variables, constants and helpers
	 *
	 ******************************************************/

	// Constants:
	var ELEM_QUES               = '.js-question',
	    ELEM_CURR_QUES          = '#curr-ques',
	    ELEM_CURR_QUES_CNTNR    = '.ques__container',
	    ELEM_QUES_MOVE_TO       = '.js-move-to',
	    ELEM_REMOVE_QUES        = '.js-remove-ques',
	    ELEM_TEST_SECTION       = '.test-section',
	    ELEM_ALL_SECTIONS       = '#all-sections',
	    ELEM_RENAME_SECTION     = '.js-rename-section',
	    ELEM_RENAME_SECTION_FRM = '.js-frm-rename-section',
	    ELEM_DELETE_SECTION     = '.js-delete-section',
	    ELEM_SECTION_NAME       = '.js-sec-name',
	    ELEM_SECTION_QUES       = '.section-ques',
	    DATA_ATTR_QUES_ID       = 'ques-id',
	    DATA_ATTR_SECTION_ID    = 'sec-id',
	    TPL_QUES                = 'question',
	    TPL_TEST_SECTION        = 'test-section';

	// Variables:
	var testId           = '',
	    fetchSubj        = '',
	    fetchLevel       = '',
	    sectionCounter   = 0,
	    arrSections      = [],
	    arrCandidateQues = [],
	    arrSelectedQues  = [];

	// Variables containing jQuery elements:
	var $testName        = $( '#test-name' ),
	    $quesFactory     = $( '#ques-factory' ),
	    $quesSandbox     = $( '#ques-sandbox' ),
	    $addSection      = $( '#add-section' ),
	    $loadMoreLink    = $( '#load-more' ),
	    $selectSubject   = $( '#selectSubject' ),
	    $selectLevel     = $( '#selectLevel' ),
	    $fetchSelects    = $( '.js-fetch-selects' ),
	    $saveTest        = $( '#save-test' ),
	    $header          = $( '.headr' ),
	    $pageLoader      = $( '#page-loader' );

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
			var lastIdx        = -1,
			    secondLastIdx  = -1;

			// Get the indexes:
			lastIdx = URL_PATH.lastIndexOf( PATH_SEPARATOR );
			secondLastIdx = URL_PATH.lastIndexOf( PATH_SEPARATOR, lastIdx - 1 );

			return URL_PATH.substr( secondLastIdx + 1, lastIdx - secondLastIdx - 1 );
		},
		/**
		 * @desc Fetches questions from backend and sets the fetch query parameter variables
		 * @params
		 *     - isNewReq {boolean} Whether to fetch data continuously or not
		 */
		fetchQuestions: function( isNewReq ) {
			// Set the fetch query patameters:
			fetchSubj  = $selectSubject.val();
			fetchLevel = $selectLevel.val();

			// And fetch data from backend:
			quesFetcher.fetch( isNewReq, {
				'subjects'   : fetchSubj,
				'diffLevels' : fetchLevel
			});

			// And hide the page loader:
			// The loader is actually hidden only the first time when
			// the first batch of questions is fetched. For successive
			// iterations, this loader is already hidden.
			$pageLoader.hide();
		},
		/**
		 * @desc Returns the height of an element
		 * @params
		 *     - $elem {jQuery object} The element whose height is to be found
		 */
		getHeight: function( $elem ) {
			return $elem.outerHeight( true );
		},
		/**
		 * @desc Generates an id for a new test section
		 * @returns String
		 */
		getNewSectionId: function() {
			return 'sec-' + Date.now();
		},
		/**
		 * @desc Sets the height of a test section
		 */
		setSectionHeight: function( $section ) {
			// Local variables:
			var breathingSpace         = 20,
			    sectionContainerHeight = this.getHeight( $( ELEM_ALL_SECTIONS ) );
			// Set the height:
			$section
				.find( ELEM_TEST_SECTION )
				.height( sectionContainerHeight - 3 * breathingSpace );
		},
		/**
		 * @desc Toggles between the section name and edit section form
		 * @params
		 *     - secId {string} The id of the section in context
		 */
		toggleEditSectionForm: function( secId ) {
			// Local variables:
			var $secForm      = $( '#' + secId ).find( ELEM_RENAME_SECTION_FRM ),
			    $secCaption   = $( '#' + secId ).find( ELEM_SECTION_NAME ),
			    secName       = $secForm.find( 'input' ).first().val().trim(),
			    isFormVisible = $secForm.css( 'display' ) === 'none' ? false : true;

			if( isFormVisible ) {
				// Hide the form and show the caption:
				$secCaption.text( secName ).show();
				$secForm.hide();
			}
			else {
				// Show the form and hide the caption:
				$secCaption.hide();
				$secForm.show().find( 'input' ).focus();
			}
		},
		/**
		 * @desc Adjusts the question element to be shown on this page
		 * @params
		 *     - $parentElem {jQuery object} The element which contains the ques elements
		 */
		adjustQuestionElems: function( $parentElem ) {
			$parentElem
				.find( ELEM_QUES )
				.removeClass( 'col-4' );
		},
		/**
		 * @desc Removes an item from an array
		 * @params
		 *     - arr  {array}  The array from which the item is to be removed
		 *     - item {string} The item to be removed
		 */
		removeItemFromArray: function( arr, item ) {
			arr.splice( arr.indexOf( item ), 1 );
		},
		/**
		 * @desc Restores / shows the question if it is present in the factory
		 * @params
		 *     - quesId {string} The id / selector of the question
		 */
		restoreQuesInFactory: function( quesId ) {
			$( '#' + quesId ).find( '.tile' )
				// Restore by sliding down:
				.slideDown( 'fast' )
				// And reset the 'move to' select box:
				.find( ELEM_QUES_MOVE_TO  )
				.val( '-1' );
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
		 * @desc Sets up the DOM by:
		 *     - letting the question editor attain the maximum height
		 *     - setting maximum height of the test sections
		 *     - etc.
		 */
		initDom: function() {
			// Local variables:
			var headerHeight   = this.getHeight( $header ),
			    windowHeight   = this.getHeight( $(window) ),
			    breathingSpace = 20, // in `px`
			    $tmpElem       = null;

			// Calculate the maximum height that can be attained in the current window:
			var maxHeight = ( windowHeight - headerHeight ) - breathingSpace;

			// Set this maximum height to the question factory (where all questions are fetched):
			$quesFactory.height( maxHeight );
			// And also to the sandbox where all test sections will be housed:
			$quesSandbox.height( maxHeight );

			$tmpElem = $( ELEM_CURR_QUES_CNTNR );
			$tmpElem
				.height( maxHeight - this.getHeight( $tmpElem.prev() ) - breathingSpace );

			$tmpElem = $( ELEM_ALL_SECTIONS );
			$tmpElem
				.height( maxHeight - this.getHeight( $tmpElem.prev() ) - breathingSpace );

			// Set all the test sections' height:
			$( ELEM_TEST_SECTION ).each(function( idx, el ) {
				this.setSectionHeight( $( el ) );
			}).bind( this );
		},
		/**
		 * @desc The callback that will be called when a question is dragged and dropped
		 */
		afterQuesDragDrop: function( event, ui ) {
			// Some variables:
			// `ui.item` is the jQuery object for the element that is dragged
			// and dropped. It represents the item's final state after being
			// drag-drop.
			var quesId = ui.item.attr( 'id' ),
			    secId  = ui.item.closest( ELEM_SECTION_QUES ).data( DATA_ATTR_SECTION_ID );

			// `ui.sender` is the jQuery object for the element where the `item`
			// was present before the drag-drop. It will be null when the `item`
			// is dropped in the same element where it was present before.
			if( ui.sender ) {
				// Entering this code block means that the destination element
				// is different from the source element.
				// QUICKIE: This block will be hit in the second call to the
				//     `update` function.
				// Update the section id so the destination section's questions
				// can be recalculated.
				secId = ui.sender.data( DATA_ATTR_SECTION_ID );
			}

			// Recalculate the section's questions:
			for( var idx = 0, len = arrSections.length; idx < len; idx++ ) {
				// Find the desired section from the collection:
				if( arrSections[ idx ].secId === secId ) {
					// Reset the ques array:
					arrSections[ idx ].ques = [];

					// Some more variables for the inner for loop:
					var $arr2 = $( '#' + secId ).find( ELEM_QUES ),
					    len2  = $arr2.length;

					// Reform the ques array:
					for( var idx2 = 0; idx2 < len2; idx2++ ) {
						arrSections[ idx ].ques.push(
							$arr2.eq( idx2 ).attr( 'id' )
						);
					}
					break;
				}
			}
		},
		/**
		 * @desc Renders a test section
		 * @params
		 *     - secId   {string} The section id of this section
		 *     - secName {string} The section name of this section
		 */
		renderSection: function( secId, secName ) {
			// Add a new section to the DOM:
			Pluto.Templates.renderTemplate( TPL_TEST_SECTION, {
				'secId'   : secId,
				'secName' : secName
			}, ELEM_ALL_SECTIONS );

			// Set the section element now:
		    var $section = $( '#' + secId );

			// Enable drag-n-drop on the questions in this section:
			$section.find( ELEM_SECTION_QUES )
				.sortable({
					'cursor'      : 'move',
					'connectWith' : ELEM_SECTION_QUES,
					'placeholder' : 'ques__placeholder',
					'containment' : 'document',
					// The `update` function is called when the drag-drop results in an
					// overall DOM change. In our case, we can drag an item from one list
					// and drop it in either the same list or a different list. The former
					// case will result in this method being called just once whereas the
					// latter case will result in two `update` method calls.
					// @purpose
					//     To reform the question id arrays of each section modified.
					'update'      : Helpers.afterQuesDragDrop
				})
				.disableSelection();

			// And set the height of this section:
			Helpers.setSectionHeight( $section );
		},
		/**
		 * @desc Renders a question on a section
		 * @params
		 *     - quesData {object} The question object
		 *     - quesId   {string} The id of the question to render
		 *     - secId    {string} The section id on which this question is to be rendered
		 */
		renderQuesOnSection: function( quesData, quesId, secId ) {
			// Local variables:
			var $section = $( '#' + secId );

			// Modify some props:
			quesData._id         = { $oid: quesId };
			quesData.isMovable   = false;
			quesData.isRemovable = true;
			quesData.hide        = false;
			quesData.secId       = secId;

			// Render the question in the section:
			Pluto.Templates.renderTemplate(
				TPL_QUES,
				quesData,
				$section.find( ELEM_SECTION_QUES )
			);

			// Render the LaTeX syntaxes:
			this.renderLatex();

			// Adjust the ques. elements:
			this.adjustQuestionElems( $section );

			// Push this question's id in a collection:
			// This will be used to decide which questions to show/hide
			// in the question factory.
			arrSelectedQues.push( quesId );
		}
	};

	// Fetching tests related:
	var quesFetcher = new Fetcher({
		fetchUrl          : siteConfig.url.front + 'institute/questions/get',
		batchCount        : 3,
		resultsElem       : ELEM_CURR_QUES,
		fetchMsg          : 'Getting more questions',
		batchCompleteMsg  : 'No more questions',
		loaderImgUrl      : siteConfig.url.front + 'assets/img/loading.gif',
		onSuccessCallback : function( response ) {
			console.log( 'Response from server:', response );
			// Reset the candidate question collection
			// so it can be populated again with this fresh data:
			arrCandidateQues = [];

			for( var idx = 0, arr = response.data, len = arr.length; idx < len; idx++ ) {
				// Add run-time props to the question template data:
				arr[ idx ].isMovable = true;
				arr[ idx ].sections  = arrSections;
				arr[ idx ].hide      = Boolean( arrSelectedQues.indexOf( arr[ idx ]._id.$oid ) + 1 );

				// Render this question on the DOM:
				Pluto.Templates.renderTemplate(
					TPL_QUES,
					arr[ idx ],
					ELEM_CURR_QUES
				);

				// Push this question data in a collection too:
				// This will be later used to retrieve question data when it is
				// added to a section.
				arrCandidateQues.push( arr[ idx ] );
			}

			// Render the LaTeX syntaxes:
			Helpers.renderLatex();

			// Adjust the ques. elements:
			Helpers.adjustQuestionElems( $( ELEM_CURR_QUES ) );

			$loadMoreLink.show();

			if( ( response.data || [] ).length < quesFetcher.config.batchCount ) {
				// Hide the 'load more' link upon batch completion:
				$loadMoreLink.hide();
			}
		},
		onBeforeFetch     : function() {
			$fetchSelects.prop( 'disabled', true );
		},
		onAfterFetch      : function() {
			$fetchSelects.prop( 'disabled', false );
		}
	});



	/******************************************************
	 *
	 * @section onLoad
	 *
	 ******************************************************/
	var onLoad = function() {
		// Set the test id for this session:
		testId = Helpers.getTestIdFromUrl();

		// Adjust the DOM:
		Helpers.initDom();

		// Fetch test information:
		$.ajax({
			url     : siteConfig.url.front + 'institute/tests/get?testId=' + testId,
			type    : 'GET',
			success : function( response ) {
				console.log( 'Test data for the test id', testId, 'is:', response );

				if( response.status === 200 ) {
					// Set the test name on the page:
					$testName.text( response.data.name );

					// Render test sections:
					arrSections = response.data.body || [];
					for( var idx = 0, len = arrSections.length; idx < len; idx++ ) {
						// Get the section id:
						var secId = arrSections[ idx ].secId;

						// Render each section:
						Helpers.renderSection( secId, arrSections[ idx ].secName );

						// And then render the questions too:
						var ques = arrSections[ idx ].ques || [];
						for( var idx2 = 0, len2 = ques.length; idx2 < len2; idx2++ ) {
							// First, get the data for this question:
							var quesId   = ques[ idx2 ],
							    quesData = response.data.questions[ quesId ];

							if( quesData ) {
								Helpers.renderQuesOnSection(
									quesData, // the question data (not having _id)
									quesId,   // id of this question
									secId     // the section where to render this ques.
								);
							}
							else {
								console.log( 'The question', quesId, 'was not found in the questions map of this test.' );
							}
						}
					}
				}

				// Fetch questions:
				Helpers.fetchQuestions( true );
			}
		});
	};



	/******************************************************
	 *
	 * @section Fetching questions
	 *
	 ******************************************************/

	$loadMoreLink.on( 'click', function( event ) {
		event.preventDefault();
		if( !quesFetcher.inProgress ) {
			// And fetch questions:
			Helpers.fetchQuestions( false );
		}
	});

	$fetchSelects.on( 'change', function() {
		// Hide the anchor as it looks odd with the fetch loader:
		$loadMoreLink.hide();
		// And fetch questions:
		Helpers.fetchQuestions( true );
	});



	/******************************************************
	 *
	 * @section Adding / removing / editing sections
	 *
	 ******************************************************/

	$addSection.on( 'click', function( event ) {
		event.preventDefault();

		// Local variables:
		var secId    = Helpers.getNewSectionId(),
		    secName  = 'Sample section #' + ( ++sectionCounter );

		// Render a new section:
		Helpers.renderSection( secId, secName );

		// Push this section in the array housing all the section info:
		arrSections.push({ 'secId': secId, 'secName': secName, 'ques': [] });

		// Add this section information in every 'move to' select on each question:
		$( ELEM_QUES_MOVE_TO ).each(function( idx, el ) {
			$( '<option>' )
				.val( secId )
				.text( secName )
				.appendTo( el );
		});
	});

	$document.on( 'click', ELEM_RENAME_SECTION, function( event ) {
		event.preventDefault();
		// Toggle the edit section form:
		Helpers.toggleEditSectionForm( $( this ).data( DATA_ATTR_SECTION_ID ) );
	});

	$document.on( 'submit', ELEM_RENAME_SECTION_FRM, function( event ) {
		event.preventDefault();

		// Local variables:
		var secId   = '',
		    secName = '';

		// Get the section id:
		secId = $( this ).data( DATA_ATTR_SECTION_ID );

		// Toggle the edit section form:
		Helpers.toggleEditSectionForm( secId );

		// Get the new section name:
		secName = $( '#' + secId ).find( ELEM_SECTION_NAME ).text();

		// Modify this section info in the array housing all the section info:
		for( var idx = 0, len = arrSections.length; idx < len; idx++ ) {
			if( arrSections[ idx ].secId === secId ) {
				arrSections[ idx ].secName = secName;
				break;
			}
		}

		// Update this section information in every 'move to' select on each question:
		$( ELEM_QUES_MOVE_TO ).each(function( idx, el ) {
			$( el )
				.find( 'option[value="' + secId + '"]' )
				.text( secName );
		});
	});

	$document.on( 'click', ELEM_DELETE_SECTION, function( event ) {
		event.preventDefault();

		// Get the section id:
		var secId = $( this ).data( DATA_ATTR_SECTION_ID );

		// Restore the questions in this section by showing
		// back the ones that still exist in the DOM but are
		// hidden due to being selected:
		for( var idx = 0, len = arrSections.length; idx < len; idx++ ) {
			if( arrSections[ idx ].secId === secId ) {
				// Get this section's questions:
				var tmpQues = arrSections[ idx ].ques;

				// Iterate over all and restore each question:
				for( var idx2 = 0, len2 = tmpQues.length; idx2 < len2; idx2++ ) {
					Helpers.restoreQuesInFactory( tmpQues[ idx2 ] );
				}

				// And get rid of this section in the collection:
				arrSections.splice( idx, 1 );

				break;
			}
		}

		// Finally, remove this section:
		$( '#' + secId ).remove();
	});



	/******************************************************
	 *
	 * @section Adding / removing questions to sections
	 *
	 ******************************************************/

	$document.on( 'change', ELEM_QUES_MOVE_TO, function() {
		// Local variables:
		var $this     = $( this ),
		    destSecId = $this.val(),
		    $question = $this.closest( ELEM_QUES ),
		    quesId    = $question.attr( 'id' );

		// Get this question data from the question collection:
		for( var idx = 0, len = arrCandidateQues.length; idx < len; idx++ ) {
			if( arrCandidateQues[ idx ]._id.$oid == quesId ) {
				// And render it on the destination section:
				Helpers.renderQuesOnSection(
					arrCandidateQues[ idx ],
					quesId,
					destSecId );
				break;
			}
		}

		// And push this question id in the section collection:
		for( idx = 0, len = arrSections.length; idx < len; idx++ ) {
			if( arrSections[ idx ].secId === destSecId ) {
				arrSections[ idx ].ques.push( quesId );
				break;
			}
		}

		// Hide this question so it can't be re-added:
		$question.slideUp( 'fast' );
	});

	$document.on( 'click', ELEM_REMOVE_QUES, function( event ) {
		event.preventDefault();

		// Local variables:
		var $this  = $( this ),
		    quesId = $this.data( DATA_ATTR_QUES_ID ),
		    secId  = $this.data( DATA_ATTR_SECTION_ID );

		// Show the question in the factory (if it is there):
		Helpers.restoreQuesInFactory( quesId );

		// Remove the question from the section:
		$this.closest( ELEM_QUES ).remove();

		// Also remove the question from the section collection:
		for( var idx = 0, len = arrSections.length; idx < len; idx++ ) {
			if( arrSections[ idx ].secId === secId ) {
				Helpers.removeItemFromArray( arrSections[ idx ].ques, quesId );
				break;
			}
		}

		// And finally, remove this question from the
		// selected questions collection:
		Helpers.removeItemFromArray( arrSelectedQues, quesId );
	});



	/******************************************************
	 *
	 * @section Saving test
	 *
	 ******************************************************/

	$saveTest.on( 'click', function( event ) {
		event.preventDefault();

		// Form the payload to send to back end:
		var payload = {
			'_id'  : testId,
			'body' : arrSections
		};

		$.ajax({
			url  : siteConfig.url.front + 'institute/tests/update',
			type : 'POST',
			data : JSON.stringify( payload ),
		})
		.done(function( response ) {
			console.log( 'Test save response:', response );

			if( response.status === 200 ) {
				badger.show( 'Test saved successfully' );
			}
		})
		.fail(function( data ) {
			badger.show( 'An error occurred while saving this test', 'error', { stayTime: 4 } );
			console.log( 'Error ocurred with data:', data );
		});
	});



	// At last, call the on load function:
	onLoad();
});