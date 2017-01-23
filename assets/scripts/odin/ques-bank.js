$(document).ready(function() {

	// Variables:
	var isEditAlive = false;
	var fetchSubj   = $( '#slFetchSubject' ).val();
	var fetchLevel  = $( '#slFetchDiffLevel' ).val();
	var isInitRequest = true;

	// Constants:
	var TPL_QUESTION = 'question';

	// Masonry related hash:
	var Masonry = {
		$el: $('#all-ques'),
		init: function() {
			this.$el.masonry({
				itemSelector: '.padbox',
				hiddenStyle: {
					opacity: 0
				}
			});
		},
		layout: function() {
			this.$el.masonry( 'reloadItems' ).masonry( 'layout' );
		},
		append: function( domEl ) {
			this.$el.append( domEl ).masonry( 'appended', domEl );
		}
	};

	// Initialize MathJax previews:
	var previewQues = MathJaxPreview();
	previewQues.init( 'tbQues', 'quesPreview', 'quesBuffer', 'quesPreviewPlaceholder' );

	var previewOpA  = MathJaxPreview();
	previewOpA.init( 'tbOptionA', 'opAPreview', 'opABuffer', 'opAPreviewPlaceholder' );

	var previewOpB  = MathJaxPreview();
	previewOpB.init( 'tbOptionB', 'opBPreview', 'opBBuffer', 'opBPreviewPlaceholder' );

	var previewOpC  = MathJaxPreview();
	previewOpC.init( 'tbOptionC', 'opCPreview', 'opCBuffer', 'opCPreviewPlaceholder' );

	var previewOpD  = MathJaxPreview();
	previewOpD.init( 'tbOptionD', 'opDPreview', 'opDBuffer', 'opDPreviewPlaceholder' );

	// Create previews:
	$( '#tbQues' ).on('keydown', function() {
		// Create the MathJax preview:
		previewQues.create();
	});
	$( '#tbOptionA' ).on('keydown', function() {
		// Create the MathJax preview:
		previewOpA.create();
	});
	$( '#tbOptionB' ).on('keydown', function() {
		// Create the MathJax preview:
		previewOpB.create();
	});
	$( '#tbOptionC' ).on('keydown', function() {
		// Create the MathJax preview:
		previewOpC.create();
	});
	$( '#tbOptionD' ).on('keydown', function() {
		// Create the MathJax preview:
		previewOpD.create();
	});

	$( '#tbAssertion' ).on('keydown', function() {
		var val = $(this).val().trim();
		if( val ) {
			$( '#assertionPreviewPlaceholder' ).hide();
		}
		else {
			$( '#assertionPreviewPlaceholder' ).show();
		}
		$( '#assertionPreview' ).text( val );
	});
	$( '#tbReason' ).on('keydown', function() {
		var val = $(this).val().trim();
		if( val ) {
			$( '#reasonPreviewPlaceholder' ).hide();
		}
		else {
			$( '#reasonPreviewPlaceholder' ).show();
		}
		$( '#reasonPreview' ).text( val );
	});

	$( '.js-no-click' ).on('click', function() {
		$(this).closest( 'form' ).data( 'no-click', 'yes' );
	});

	$( '#frm-add-ques' ).on('submit', function( event ) {
		var $this      = $(this);
		var quesId     = $('#tbQuesId').val().trim();
		var quesTypeId = $('#slQuesType').val();
		var quesType   = $('#slQuesType option:selected').text();
		var ques       = $('#tbQues').val().trim();
		var assertion  = $('#tbAssertion').val().trim();
		var reason     = $('#tbReason').val().trim();
		var optionATxt = $('#tbOptionA').val().trim();
		var optionBTxt = $('#tbOptionB').val().trim();
		var optionCTxt = $('#tbOptionC').val().trim();
		var optionDTxt = $('#tbOptionD').val().trim();
		var subject    = $('#slSubject').val();
		var level      = $('#slDiffLevel').val();
		var $pacingBtn = $('#btAddQues');
		var $pacer     = $pacingBtn.next( '.pacer' );

		var hasOptionAImg = $('#tbOptionA').data( 'has-img' );
		var hasOptionBImg = $('#tbOptionB').data( 'has-img' );
		var hasOptionCImg = $('#tbOptionC').data( 'has-img' );
		var hasOptionDImg = $('#tbOptionD').data( 'has-img' );

		var isObjctveQues = quesTypeId === '1' ? true : false;
		var isAssrtnReasn = quesTypeId === '2' ? true : false;

		$pacer.css({'width': '0%'});

		if( $this.data('no-click') ) {
			$this.data('no-click', '');
			event.preventDefault();
			return;
		}

		if( isObjctveQues && !ques ) {
			badger.show( 'Please provide the question', 'error' );
			$('#tbQues').focus();
		}
		else if( isObjctveQues && ( // this condition is valid only for 4 option objective questions
					!( optionATxt || hasOptionAImg ) || // either text should be present or an img
					!( optionBTxt || hasOptionBImg ) || // either text should be present or an img
					!( optionCTxt || hasOptionCImg ) || // either text should be present or an img
					!( optionDTxt || hasOptionDImg ) )  // either text should be present or an img
				) {
			badger.show( 'Incomplete options', 'error' );
			$('#tbOptionA').focus();
		}
		else if( isAssrtnReasn && !assertion ) {
			badger.show( 'Please provide an assertion', 'error' );
			$('#tbAssertion').focus();
		}
		else if( isAssrtnReasn && !reason ) {
			badger.show( 'Please provide a reason', 'error' );
			$('#tbReason').focus();
		}
		else if( !subject ) {
			badger.show( 'Please provide a subject', 'error' );
			$('#slSubject').focus();
		}
		else if( !level ) {
			badger.show( 'Please provide the difficulty level', 'error' );
			$('#slDiffLevel').focus();
		}
		else {

			var getImgData = function( elemId ) {
				var src = $( elemId ).find( 'img' ).attr( 'src' );
				if( src && src.indexOf( siteConfig.url.front ) === -1 )
					return src;
			};

			// Form the JSON to save:
			var toSend = {
				'instId'      : instId,
				'ques'        : ques,
				'assertion'   : assertion,
				'reason'      : reason,
				'quesImgs'    : [],
				'quesImgsData': (function() {
					var retVal = [];
					$( '#quesImgs' ).find( 'img' ).each(function() {
						var src = $(this).attr( 'src' );
						if( src.indexOf( siteConfig.url.front ) === -1 )
							retVal.push( src );
					});
					return retVal;
				})(),
				'quesType'    : quesType,
				'quesTypeId'  : quesTypeId,
				'options'     : !isObjctveQues ? [] : [{
					text      : optionATxt,
					img       : '',
					imgData   : getImgData( '#opAImg' ) || '',
					index     : 0
				},{
					text      : optionBTxt,
					img       : '',
					imgData   : getImgData( '#opBImg' ) || '',
					index     : 1
				},{
					text      : optionCTxt,
					img       : '',
					imgData   : getImgData( '#opCImg' ) || '',
					index     : 2
				},{
					text      : optionDTxt,
					img       : '',
					imgData   : getImgData( '#opDImg' ) || '',
					index     : 3
				}],
				'answer'      : $('#slAnswer').val(),
				'subject'     : subject,
				'level'       : level
			};

			if( !quesId ) {
				// Adding a new question:

				// Show the pacer:
				$pacer.show().animate({'width': '50%'});
				$pacingBtn.removeClass('btn-sheen-intrctve').prop('disabled', true).text('Adding...');

				$.ajax({
					url  : siteConfig.url.front + 'institute/questions/createSpecial',
					type : 'POST',
					data : JSON.stringify( toSend ),
				})
				.done(function( response ) {
					// Animate the pacer to 100% and hide it:
					$pacer.animate({'width': '100%'}, function() {
						$pacer.css({'width': '0%'}).hide();
						$pacingBtn.addClass('btn-sheen-intrctve').prop('disabled', false).text('+ Add');
					});

					console.log( 'Response from server:', response );
					if( response.status === 200 ) {

						// Now check whether this question qualifies the currently selected criteria:
						if( fetchSubj.indexOf( toSend.subject ) >= 0 &&
							fetchLevel.indexOf( toSend.level  ) >= 0 ) {
							toSend._id = { $oid : response.data._id };
							toSend.isEditable  = true;
							toSend.showOptions = true;
							toSend.hostName    = siteConfig.url.front;

							// Render the question on the DOM:
							Pluto.Templates.renderTemplate( TPL_QUESTION, toSend, '#all-ques', true );

							// Render the LaTeX syntaxes:
							MathJax.Hub.Queue( [ 'Typeset', MathJax.Hub ], [ 'layout', Masonry ] );
						}

						// Reset the form:
						$( '#btResetQues' ).click();

						badger.show( 'Question added successfully!' );
					}
				})
				.fail(function( data ) {
					badger.show( 'There was an error while adding this question', 'error', { stayTime : 4 } );
					console.log( 'Error ocurred with data:', data );
				});
			}
			else {
				// Saving an existing question:
				toSend._id = quesId;

				// Show the pacer:
				$pacer.show().animate({'width': '50%'});
				$pacingBtn.removeClass('btn-sheen-intrctve').prop('disabled', true).text('Saving...');

				$.ajax({
					url  : siteConfig.url.front + 'institute/questions/update',
					type : 'POST',
					data : JSON.stringify( toSend ),
				})
				.done(function( response ) {
					// Animate the pacer to 100% and hide it:
					$pacer.animate({'width': '100%'}, function() {
						$pacer.css({'width': '0%'}).hide();
						$pacingBtn.addClass('btn-sheen-intrctve').prop('disabled', false).text('+ Add');
					});

					isEditAlive = false;

					console.log( 'Response from server for saving ques:', response );
					if( response.status === 200 ) {

						// Check if this question exists in the DOM:
						if( $( '#' + quesId ).length ) {
							// Update the question tile:
							var tempClass = 'tmp_' + Date.now();
							var $quesTileParent = $( '#' + quesId ).parent().addClass( tempClass );

							$quesTileParent.html('');

							toSend._id = { $oid : quesId };
							toSend.isEditable  = true;
							toSend.showOptions = true;
							toSend.hostName    = siteConfig.url.front;
							Pluto.Templates.renderTemplate( TPL_QUESTION, toSend, '.' + tempClass );

							$quesTileParent.find( '.tile' ).unwrap();

							// Render the LaTeX syntaxes:
							MathJax.Hub.Queue( [ 'Typeset', MathJax.Hub ], [ 'layout', Masonry ] );
						}

						// Reset the form:
						$( '#btResetQues' ).click();

						badger.show( 'Question saved successfully!' );
					}
				})
				.fail(function( data ) {
					badger.show( 'There was an error while adding this question', 'error', { stayTime : 4 } );
					console.log( 'Error ocurred with data:', data );
				});
			}
		}

		event.preventDefault();
	});

	$( '#btResetQues' ).on('click', function() {
		// Reset form fields:
		$( '#frm-add-ques' ).find( 'input, textarea' ).val( '' );
		$( '#frm-add-ques' ).find( 'select:not(#slQuesType)' ).each(function() {
			var $this = $(this);
			$this.val( $this.find( 'option' ).first().val() );
		});
		// as well as the MathJax previews:
		previewQues.reset();
		previewOpA.reset();
		previewOpB.reset();
		previewOpC.reset();
		previewOpD.reset();
		// and the assertion reason previews:
		$( '#assertionPreviewPlaceholder' ).show();
		$( '#assertionPreview' ).text( '' );
		$( '#reasonPreviewPlaceholder' ).show();
		$( '#reasonPreview' ).text( '' );
		// and the images too:
		$( '.js-prvw-img-wrpr' ).html( '' );
	});

	$( '#slQuesType' ).on('change', function() {
		var val = $(this).val();
		$( '.js-ques-entity' ).hide();
		$( '.js-ques-entity[data-ques-type="' + val + '"]' ).show();
		$( '#btResetQues' ).click();
	});
	$( '#slQuesType' ).change();

	$(document).on('click', '.js-delete-ques', function( event ) {
		var $this  = $(this);
		var quesId = $this.data( 'ques-id' );

		$.ajax({
			url  : siteConfig.url.front + 'institute/questions/delete',
			type : 'POST',
			data : JSON.stringify( { 'questionId' : quesId } ),
		})
		.done(function( response ) {
			console.log( 'Response from server for deletion:', response );
			if( response.status === 200 ) {
				badger.show( 'Question deleted successfully!' );

				// Remove this question from the DOM:
				$this.closest( '.padbox' ).remove();

				// Layout the questions:
				Masonry.layout();
			}
			else {
				badger.show( 'There was an error while deleting this question', 'error', { stayTime : 4 } );
				console.log( 'Error ocurred with response:', response );
			}
		})
		.fail(function( data ) {
			badger.show( 'There was an error while deleting this question', 'error', { stayTime : 4 } );
			console.log( 'Error ocurred with data:', data );
		});

		event.preventDefault();
	});

	$(document).on('click', '.js-edit-ques', function( event ) {
		var $quesTile = $(this).closest( '.js-question' );

		if( !isEditAlive ) {
			var quesType = $quesTile.find( '.js-ques-type' ).val();

			// Set the select boxes:
			$( '#slQuesType' ).val( quesType ).change();
			$( '#slAnswer' ).val( $quesTile.find( '.js-view-answ' ).data( 'answer' ) );
			$( '#slSubject' ).val( $quesTile.find( '.js-ques-subj' ).text() );
			$( '#slDiffLevel' ).val( $quesTile.find( '.js-ques-level' ).text() );

			// Set the ques. id:
			$( '#tbQuesId' ).val( $quesTile.attr( 'id' ) );

			if( quesType === '1' ) {
				// 4 option objective:
				$( '#tbQues' ).val( $quesTile.find( '.js-ques' ).html() ).keydown();
				$( '#tbOptionA' ).val( $quesTile.find( '.js-op0' ).html() ).keydown();
				$( '#tbOptionB' ).val( $quesTile.find( '.js-op1' ).html() ).keydown();
				$( '#tbOptionC' ).val( $quesTile.find( '.js-op2' ).html() ).keydown();
				$( '#tbOptionD' ).val( $quesTile.find( '.js-op3' ).html() ).keydown();
				// Preview images:
				var src = '';
				src = $quesTile.find( '.answ[data-index="0"]' ).find( 'img' ).attr( 'src' );
				if( src )
					$( '#opAImg' )
						.append( '<img src="' + src + '" alt="options image" width="100" class="js-prvw-img" style="margin: 10px;">' );
				src = $quesTile.find( '.answ[data-index="1"]' ).find( 'img' ).attr( 'src' );
				if( src )
					$( '#opBImg' )
						.append( '<img src="' + src + '" alt="options image" width="100" class="js-prvw-img" style="margin: 10px;">' );
				src = $quesTile.find( '.answ[data-index="2"]' ).find( 'img' ).attr( 'src' );
				if( src )
					$( '#opCImg' )
						.append( '<img src="' + src + '" alt="options image" width="100" class="js-prvw-img" style="margin: 10px;">' );
				src = $quesTile.find( '.answ[data-index="3"]' ).find( 'img' ).attr( 'src' );
				if( src )
					$( '#opDImg' )
						.append( '<img src="' + src + '" alt="options image" width="100" class="js-prvw-img" style="margin: 10px;">' );
				$quesTile.find( '.js-ro-ques-imgs img' ).each(function() {
					$( '#quesImgs' )
						.append( '<img src="' + $(this).attr( 'src' ) + '" alt="question image" width="100" class="js-prvw-img" style="margin: 10px;">' );
				});
			}
			else if( quesType === '2' ) {
				// Assertion reason:
				$( '#tbAssertion' ).val( $quesTile.find( '.js-assertion' ).text() ).keydown();
				$( '#tbReason' ).val( $quesTile.find( '.js-reason' ).text() ).keydown();
			}

			$( '#btAddQues' ).text( 'Save' );

			isEditAlive = true;
		}
		else {
			badger.show( 'A question is already being edited', 'warn' );
		}

		$( '#take-to-top' ).click();
		event.preventDefault();
	});

	$( '.js-upload' ).on('click', function( event ) {
		$(this).next( '.js-upload-def' ).click();
		event.preventDefault();
	});

	$( '.js-upload-def' ).on('change', function() {
		var input       = $(this)[0];
		var appenderEl  = $(this).data( 'appender' );
		var uploadType  = $(this).data( 'upload-type' );
		var inputTxtBox = $(this).data( 'input-field' );
		var MAX_IMG_SIZE       = 5;   // in `Mb`
		var PREVIEW_IMG_WIDTH  = 100; // in `px`

		if ( input.files && input.files[0] ) {
			// Get the image mime type:
			imgMimeType = input.files[0].type;

			if( input.files[0].size < MAX_IMG_SIZE * 1024 * 1024 ) { // Convert Mb to bytes
				var reader = new FileReader();

				reader.onload = function( event ) {
					// uploadImage( 'GALLERY_IMAGE', '', e.target.result, 'ownerID' );
					// For options:
					if( uploadType === 'QUESTION_OPTION_IMAGE' ) {
						// Remove any previously previewed images:
						$( appenderEl ).find( 'img' ).remove();
					}

					// Append the preview image:
					$( '<img>' )
						.attr({
							'src'   : event.target.result,
							'alt'   : uploadType === 'QUESTION_IMAGE' ? 'question image' : 'options image',
							'width' : PREVIEW_IMG_WIDTH
						})
						.data({
							'mime-type'   : imgMimeType,
							'upload-type' : uploadType,
							'input-field' : inputTxtBox
						})
						.css({
							'margin' : '10px'
						})
						.addClass( 'js-prvw-img' )
						.appendTo( appenderEl );

					// For options:
					// Depict that an image has been uploaded so text field input is not required
					if( inputTxtBox ) {
						$( inputTxtBox ).data( 'has-img', true );
					}
				};

				reader.readAsDataURL( input.files[0] );
			}
			else {
				badger.show( 'Image size greater than ' + MAX_IMG_SIZE + ' Mb', 'error', { stayTime: 4 } );
			}
		}
	});

	$(document).on('click', '.js-prvw-img', function() {
		// Depict that the input field doesn't have an associated image now:
		$( $(this).data( 'input-field' ) ).data( 'has-img', false );
		// Then remove the preview image:
		$(this).remove();
	});

	var quesFetcher = new Fetcher({
		fetchUrl          : siteConfig.url.front + 'institute/questions/get',
		batchCount        : 3,
		resultsElem       : '#all-ques',
		fetchMsg          : 'Getting more questions',
		batchCompleteMsg  : 'No more questions',
		loaderImgUrl      : siteConfig.url.front + 'assets/img/loading.gif',
		onSuccessCallback : function( response ) {
			console.log( 'Response from server:', response );
			for( var idx = 0, arr = response.data, len = arr.length; idx < len; idx++ ) {
				arr[idx].isEditable  = true;
				arr[idx].showOptions = true;
				arr[idx].hostName    = siteConfig.url.front;
				if( isInitRequest )
					Pluto.Templates.renderTemplate( TPL_QUESTION, arr[idx], '#all-ques' );
				else
					Masonry.append( $( Pluto.Templates.question( arr[idx] ) )[0] );
			}
			// Render the LaTeX syntaxes:
			if( isInitRequest )
				MathJax.Hub.Queue( [ 'Typeset', MathJax.Hub ], [ 'init', Masonry ] );
			else
				MathJax.Hub.Queue( [ 'Typeset', MathJax.Hub ], [ 'layout', Masonry ] );
			isInitRequest = false;
		},
		onBeforeFetch     : function() {
			$( '.js-fetch-combos' ).prop( 'disabled', true );
		},
		onAfterFetch      : function() {
			$( '.js-fetch-combos' ).prop( 'disabled', false );
		}
	});

	// Infinite scroll related:
	var footer = new Footer({
		$footer     : $( '.footr' ),
		onFooterHit : function() {
			if( quesFetcher.hasData && !quesFetcher.inProgress ) {
				quesFetcher.fetch( false, { 'subjects': fetchSubj, 'diffLevels': fetchLevel } );
			}
		}
	});

	$( '.js-fetch-combos' ).on('change', function() {
		fetchSubj  = $('#slFetchSubject').val();
		fetchLevel = $('#slFetchDiffLevel').val();
		quesFetcher.fetch( true, { 'subjects': fetchSubj, 'diffLevels': fetchLevel } );
	});

	quesFetcher.fetch( true, { 'subjects': fetchSubj, 'diffLevels': fetchLevel } );

});