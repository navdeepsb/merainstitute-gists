/**
 * inst-profile.js
 * ---------------
 * @desc Client-side handling for institute portfolio. This is the first ever custom JS file on Pluto.
 * @author Navi
 */

$(document).ready(function() {

	'use strict';

	// Related to setting the active tab according to the edit type:
	var currType = parseInt( getParameterByName( 'edit' ) || 1 );

	// Constant(s):
	var WIDTH_LEGEND	  = $('.legend').innerWidth(),
		WIDTH_FORM		  = $('.form').innerWidth(),
		MAX_PROF_IMG_SIZE_IN_MB = 5;

	// Variable(s):
	var iPrevForm		  = [1, 2, 3, 4, 5].indexOf( currType ) !== -1 ? currType : 1,
		instituteID       = null,
		iCurrLegendLeft   = WIDTH_LEGEND * ( iPrevForm - 1 ),
		arrForms          = [],
		arrFormLeft       = [],
		allExamSubjectMap = [],
		selectedExams     = [],
		selectedExamIds   = [],
		collCenters       = [],
		collMembers       = [],
		collAchievers     = [],
		loadingScore      = 0,
		loadedScore       = 5,
		$loader           = $('.loader-cntnr'),
		$cropperImage     = $('.cropper-wrapper > img'),
		blobURL           = '',
		_basicInfo        = {},
		arrObjCities      = [],
		$currImg          = null,
		imgMimeType       = '';

	// Helper functions:
	var checkLoader = function() {
			if( ++loadingScore === loadedScore ) {
				$loader.fadeOut('fast', function() {
					$(this).remove();
					// Adjust the parent form height:
					Pluto.Helpers.adjustParentHeight( 'frm-' + iPrevForm );
				});
			}
		},
		noSpace     = function( val ) {
			return val.replace( new RegExp( ' ', 'g' ), '_' );
		},
		renderExams = function( examsList, cat ) {
			// Bring the exam category out:
			_.map(examsList, function( exam ) {
				exam.catGroup = _.find( exam.category, { 'type': cat } ).name;
			});

			// Group the exams on the basis of a category:
			var catg = _.uniq( _.pluck( examsList, 'catGroup' ) );
			var formattedExamList = [];
			for( var idx = 0, len = catg.length; idx < len; idx++ ) {
				formattedExamList.push({
					'catName': catg[idx],
					'exams'  : _.where( examsList, { 'catGroup': catg[idx] } )
				});
			}

			$('.js-exams').find('.cb-grp-container').remove();
			Pluto.Templates.renderTemplate( 'profile-exams', formattedExamList, '.js-exams' );

			// Now select the current exams:
			for( idx = 0, len = selectedExamIds.length; idx < len; idx++ ) {
				$( '#' + selectedExamIds[idx] ).prop( 'checked', 'true' );
			}
		};


	// Functions/callbacks for AJAX requests:
	var loadBasicInfo = function( basicInfo ) {
			// Set the global institute ID:
			instituteID = basicInfo._id.$oid;

			// Set the hidden input field too:
			$('#instId').val( instituteID );
			$('#imgInstLogo').data( 'owner', instituteID );

			// Set value on DOM:
			$('#tbInstNm').val( basicInfo.name );
			$('#tbInstDescr').val( basicInfo.descr );
			$('#tbWebsite').val( basicInfo.website );
			if( basicInfo.profileImg ) {
				$('#imgInstLogo')
					.attr( 'src', "../" + basicInfo.profileImg )
					.css({
						'width': '100%',
						'margin': 0
					});
			}

			// Set these valus in a local object:
			_basicInfo._id = basicInfo._id;
			_basicInfo.name = basicInfo.name;
			_basicInfo.username = basicInfo.username;
			_basicInfo.descr = basicInfo.descr;
			_basicInfo.contactNum = basicInfo.contactNum;
			_basicInfo.contactEmail = basicInfo.contactEmail;
			_basicInfo.website = basicInfo.website;

			// Check the loader i.e. hide it if all AJAX requests done:
			checkLoader();
			loadCenters( basicInfo.centers );
			loadMembers( basicInfo.team );
			loadAchievers( basicInfo.achievers );
		},
		loadCenters   = function( jsonCenters ) {
			// Initialize Backbone collection with the data received:
			collCenters = new Pluto.Collections.Centers( jsonCenters );

			// Initialize the view that will render this collection on the DOM:
			var vwCenters = new Pluto.CollectionViews.Centers({ collection: collCenters });

			// Render the collection on the DOM:
			$('#frm-cntr').after( vwCenters.render().el );

			// Initialize the factory view that will add more models in this collection:
			new Pluto.FactoryViews.AddCenter({ collection: collCenters });

			// Remove the 'href' so that the cards become non-clickable:
			// Reason for this nonchalant behavior - the center is right there; to highlight it, edit it!!
			$('.js-entity-share').removeAttr('href');

			// Check the loader i.e. hide it if all AJAX requests done:
			checkLoader();
		},
		loadMembers   = function( jsonMembers ) {
			// Initialize Backbone collection with the data received:
			collMembers = new Pluto.Collections.InstMembers( jsonMembers );

			// Initialize the view that will render this collection on the DOM:
			var vwMembers = new Pluto.CollectionViews.InstMembers({ collection: collMembers });

			// Render the collection on the DOM:
			$('#frm-mmbr').after( vwMembers.render().el );

			// Initialize the factory view that will add more models in this collection:
			new Pluto.FactoryViews.AddInstMember({ collection: collMembers });

			// Check the loader i.e. hide it if all AJAX requests done:
			checkLoader();
		},
		loadAchievers = function( jsonMembers ) {
			// Initialize Backbone collection with the data received:
			collAchievers = new Pluto.Collections.Achievers( jsonMembers );

			// Initialize the view that will render this collection on the DOM:
			var vwAchievers = new Pluto.CollectionViews.Achievers({ collection: collAchievers });

			// Render the collection on the DOM:
			$('#frm-achv').after( vwAchievers.render().el );

			// Initialize the factory view that will add more models in this collection:
			new Pluto.FactoryViews.AddAchiever({ collection: collAchievers });

			// Check the loader i.e. hide it if all AJAX requests done:
			checkLoader();
		},
		loadExams     = function( examsList, instExams ) {
			// Get the selected exams Ids out:
			for( var idx = 0, arr = instExams || [], len = arr.length; idx < len; idx++ ) {
				selectedExams.push( arr[idx] );
				selectedExamIds.push( 'cb-' + noSpace( arr[idx] ) );
			}

			// Render the exams:
			renderExams( examsList, 'secondary' );

			// Bind the callback to the exam checkbox change event:
			$(document).on('change', '#frm-2 .cb', function( event ) {
				var $this         = $(this);
				var chkBoxID	  = $this.attr('id');
				var examName	  = $('#' + chkBoxID + ' + label').text().trim();

				// Show the loader:
				$('#frm-2 .count-badge').fadeIn();

				if( $('#' + chkBoxID).is(':checked') ) {
					selectedExams.push( examName );
					selectedExamIds.push( chkBoxID );
				}
				else {
					selectedExams.splice( selectedExams.indexOf( examName ), 1 );
					selectedExamIds.splice( selectedExamIds.indexOf( chkBoxID ), 1 );
				}

				// Save these exams in the institute doc:
				var jsonToSave = {
					_id: $('#instId').val().trim(),
					exams: selectedExams
				};

				$.ajax({
					url:  'updateBasicInfo',
					type: 'POST',
					data: JSON.stringify( jsonToSave ),
				})
				.done(function( data ) {
					// Hide the loader:
					$('#frm-2 .count-badge').fadeOut();
				})
				.fail(function() {
					console.log( 'Couldn\'t save exams, please try again' );
				});

			});

			// Check the loader i.e. hide it if all AJAX requests done:
			checkLoader();
		};

 	$.ajax({
 		url: 'getInstituteProfile',
 		type: 'POST',
 		data: stringifiedPayload
 	})
 	.done(function( response ) {
		loadBasicInfo( response.data );

		// Get the exams out to render them:
		var instExams = response.data && response.data.exams || [];

	 	$.ajax({
	 		url: 'getAllExams',
	 		type: 'GET'
	 	})
	 	.done(function( response ) {
			allExamSubjectMap = response.data;
			// Render the exams:
			loadExams( allExamSubjectMap, instExams );
	 	})
	 	.fail(function() {
			console.log("Oops! An error has ocurred, please try again.");
	 		return;
	 	});

 	})
 	.fail(function() {
		console.log("Oops! An error has ocurred, please try again.");
 		return;
 	});

 	$.ajax({
 		url: 'getAllCities',
 		type: 'GET'
 	})
 	.done(function( response ) {
		// Load the cities in the autocomplete input field:
		arrObjCities  = JSON.parse( response.data );
		var arrCities = _.flatten( _.pluck( arrObjCities, 'cities' ) ).sort();
		for( var idx = 0, len = arrCities.length; idx < len; idx++ ) {
			$('#lstCities').append( '<option value="' + arrCities[idx] + '">' );
		}
 	})
 	.fail(function() {
		console.log("Oops! An error has ocurred, please try again.");
 		return;
 	});

	// Set the maximum size image in image upload hint:
	$('#max-image-size').text( MAX_PROF_IMG_SIZE_IN_MB );

	// Populate the arrForms array with the IDs of the forms:
	for( var idx = 0, arr = $('.form'), len = arr.length; idx < len; idx++ ) {
		arrForms.push( arr[idx].id );
	}

	// Calculate the 'left' property values of the forms:
	for( idx = 0, len = arrForms.length; idx < len; idx++ ) {
		// Populate the arrFormLeft array:
		arrFormLeft.push( WIDTH_FORM * ( idx - ( iPrevForm - 1 ) ) );
		// Move the forms accordingly:
		$('#' + arrForms[idx]).css( {'left': WIDTH_FORM * ( idx - ( iPrevForm - 1 ) ) + 'px'} );
	}

	// Move the active legend overlay to the correct position:
	$('.active-legend-overlay').css( {'left': iCurrLegendLeft + 'px'} );

	// Mark the active legend:
	$('#lg-' + iPrevForm).addClass('legend-active');

	// Slide navigation related:
	// @desc The forms and the active legend overlay will slide accordingly
	$('.legend').on('click', function() {
		var $this = $(this);
		var id	  = $this.attr('id');
		var iCurr = id.split('-').pop();

		// Slide the active legend overlay;
		iCurrLegendLeft += ( iCurr - iPrevForm ) * WIDTH_LEGEND;
		$('.active-legend-overlay').css( {'left': iCurrLegendLeft + 'px'} );

		// Slide all the forms:
		for( var idx = 0, len = arrForms.length; idx < len; idx++ ) {
			$('#' + arrForms[idx]).css( {'left': ( arrFormLeft[idx] - ( iCurr - iPrevForm ) * WIDTH_FORM ) + 'px'} );
			arrFormLeft[idx] -= ( iCurr - iPrevForm ) * WIDTH_FORM;
		}

		// Show active legend:
		$('.legend').removeClass('legend-active');
		$this.addClass('legend-active');

		// Adjust the parent form height:
		Pluto.Helpers.adjustParentHeight( 'frm-' + iCurr );

		iPrevForm = iCurr;
	});

	// Institute logo upload related:
	// @desc The click of input[type="file"] button to be executed on the visible image upload button
	$(document).on('click', '.btLogoUpload', function() {
		$(this).closest('.js-img-upload-ctrl').find('.btLogoUploadDefault').click();
		$currImg = $(this).closest('.js-img-upload-ctrl').find('.js-img-upload');
	});

	// Institute logo upload related:
	// @desc Preview the selected image on the form if it is eligible for submission
	$(document).on('change', '.btLogoUploadDefault', function() {
		var files = $(this)[0].files;
		if( files && files[0] ) {
			// Get the image mime type:
			imgMimeType = files[0].type;

			if( files[0].size < MAX_PROF_IMG_SIZE_IN_MB * 1024 * 1024 ) { // Convert Mb to bytes
				if( blobURL ) {
					URL.revokeObjectURL( blobURL );
				}

				blobURL = URL.createObjectURL( files[0] );
					$cropperImage
						.closest('.modal')
						.show();
				$cropperImage
					.cropper({
						aspectRatio: 1,
						multiple: false,
						dragCrop: false,
						dashed: false,
						movable: true,
						resizable: true
					})
					.cropper( 'replace', blobURL );

				$(this).val('');
			}
			else {
				$currImg.removeAttr( 'style' );
				badger.show( 'Image size greater than ' + MAX_PROF_IMG_SIZE_IN_MB + ' Mb', 'error', { stayTime: 4 } );
			}
		}
	});

	$('#btImgCrop').on('click', function() {
		// Hide the modal:
		$cropperImage
			.attr('src', '')
			.closest('.modal')
			.hide();

		// Get the image data:
		var imgData = $cropperImage.cropper('getDataURL', {
			width  : 200,
			height : 200
		});

		// Show loader while image uploads:
		$currImg.attr({
			'src'    : '../assets/img/loading-tiny.gif'
		})
		.css({
			'width'  : '20px',
			'margin' : ( parseInt( $currImg.closest('.js-img-upload-ctrl').css('height').split('px')[0] ) - 20 ) / 2 + 'px'
		});

		// Upload image to server:
		uploadImage( $currImg.data( 'upload-type' ), 'profile photo', imgData, $currImg.data( 'owner' ) );
	});

	$('#btImgCropCancel').on('click', function() {
		$cropperImage.cropper('destroy');

		// Hide the modal:
		$cropperImage
			.closest('.modal')
			.hide();
	});

	/**
	 * @args
	 *   uploadType  - [PROFILE_IMAGE, COVER_IMAGE, OTHER]
	 *   description - A sample description
	 */
	function uploadImage( uploadType, description, imgData, ownerID ) {
		var formData = {
			id          : ownerID,
			fileData    : imgData,
			fileFormat  : 'image',
			uploadType  : uploadType,
			description : description,
			mimeType    : imgMimeType
		};

		$.post( 'upload', JSON.stringify( formData ) )
			.done(function( response ) {
				if( response.status === 200 ) {
					// Preview this image on the DOM:
					$currImg
						.attr('src', '../' + response.data )
						.css({
							'width': '100%',
							'margin': 0
						});
					// Also set the image in the hidden field:
					$currImg.closest('.tm-membr').find('.js-membr-img, .js-achvr-img').val( response.data );
					// Notify user:
					badger.show( 'Image uploaded successfully' );
				} else {
					badger.show( 'Image upload failed', 'error', { stayTime: 4 } );
				}
			})
			.error(function( data) {
				badger.show( 'Image upload failed', 'error', { stayTime: 4 } );
			});
	}

	// Institute logo upload related:
	// @desc Remove the preview image and show the demo image
	$('#btDelImg').on('click', function() {
		var toSend = {
			instId   : instituteID,
			fileUrl  : $currImg.attr( 'src' ).trim(),
			type     : $currImg.data( 'upload-type' ),
			ownerPid : $currImg.data( 'owner' )
		};

		$.post('delete', JSON.stringify( toSend ) )
			.done(function( response ) {
				if( response.status === 200 ) {
					var imgPlaceholder = $currImg.data( 'upload-type' ) === 'PROFILE_IMAGE' ? 'logo-placeholder.jpg' : 'vectors/user.svg';
					badger.show( 'Image removed successfully' );
					$('#mdl-img-del').fadeOut( 'fast' );
					$currImg
						.attr( 'src', '../assets/img/' + imgPlaceholder )
						.removeAttr( 'style' );
				}
			});
	});

	// Filling the Center Info section related:
	// @desc Add another address card to the form
	$('.js-auto-comp-city').on('change keyup paste click', function() {
		var $this  = $(this);
		var cardID = $this.closest('.card').attr('id');
		var city   = $this.val();
		var state  = '';

		$('#' + cardID + ' .js-auto-comp-state').val('');

		for( var idx1 = 0, len1 = arrObjCities.length; idx1 < len1; idx1++ ) {
			state = arrObjCities[idx1].state;
			for( var idx2 = 0, len2 = arrObjCities[idx1].cities.length; idx2 < len2; idx2++ ) {
				if(arrObjCities[idx1].cities[idx2] === city) {
					$('#' + cardID + ' .js-auto-comp-state').val(state);
					break;
				}
			}
		}
	});

	// Click save form when basic info field changes:
	$('#frm-1 input, #frm-1 textarea').on('blur', function() {
		var jsonToSave = { _id: $('#instId').val().trim() };
		if( _basicInfo[ $(this).attr('name') ] != $(this).val().trim() ) {
			jsonToSave = _.extend( jsonToSave, _basicInfo );
			jsonToSave[ $(this).attr('name') ]  = $(this).val().trim();

			// Validate object:
			if( !( jsonToSave.name || '' ).trim() ) {
				badger.show( 'Please provide your institute name', 'error', { stayTime: 4 } );
				return;
			}

			if( jsonToSave.website && !/^http:|https:/.test( jsonToSave.website.trim() ) ) {
				badger.show( 'Website link must begin with http:// or https://', 'error', { stayTime: 4 } );
				return;
			}

			var _this = $(this);
			_this.closest('.tb-hint-wrapper').find('.auto-checker').fadeIn();
			$.ajax({
				url:  'updateBasicInfo',
				type: 'POST',
				data: JSON.stringify( jsonToSave ),
			})
			.done(function( data ) {
				_this.closest('.tb-hint-wrapper').find('.auto-checker').fadeOut();
				_basicInfo[ _this.attr('name') ] = _this.val().trim();
			})
			.fail(function() {
				_this.val( _basicInfo[ _this.attr('name') ] );
				badger.show( 'Couldn\'t save, please try again', 'error', { stayTime: 4 } );
			});

		}
	});

	// Saving the form related:
	// @desc Find which form is open and send corresponding JSON to server via Ajax
	$('#btSaveForm').on('click', function() {
		var jsonToSave = {
			_id: $('#instId').val().trim(),
			centers: collCenters.toJSON()
		};

		$.ajax({
			url:  'updateBasicInfo',
			type: 'POST',
			data: JSON.stringify( jsonToSave ),
		})
		.done(function( data ) {
			badger.show( 'Saved successfully!' );
		})
		.fail(function() {
			badger.show( 'Couldn\'t save, please try again', 'error', { stayTime: 4 } );
		});
	});

	$(document).on('click', '.js-modal-show', function( event ) {
		$currImg = $(this).closest('.js-img-upload-ctrl').find('.js-img-upload');
		if( $('#imgInstLogo').attr('src').indexOf( 'user.svg' ) === -1 )
			$( $(this).data( 'target' ) || '' ).show();
		event.preventDefault();
	});

	$('.js-modal-close').on('click', function( event ) {
		$(this).closest('.modal').fadeOut();
	});

	// Exams section:
	$('#slCat').on('change', function() {
		renderExams( allExamSubjectMap, $(this).val() );
	});
});