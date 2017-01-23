/**
 * course-info.js
 * --------------
 * @desc Contains client-side handling for the courses page
 * @author Navi
 */

 $(document).ready(function() {

	// Variables:
	var allExamSubjectMap  = [],
		selectedExams      = [],
		isUserOwner        = currUser === pageData._id.$oid ? true : false,
		arrCourses         = [];

	// Globals:
	window.collCourses = [];
	window.collBatches = [];
	window.highlight   = getParameterByName( 'highlight' );

	// Dev-defined function(s):
	window.doHighlight = function( highlightee ) {
		if( highlight && highlightee ) {
			// Hide the appender so we can call this function more than once:
			$('.js-highlight').html('').hide();

			// Do some altercations pertaining to highlighted entity:
			highlightee.isEditable     = false;
			highlightee.highlighted    = true;
			highlightee.instName       = instName;
			highlightee.instUsername   = instUsername;
			highlightee.instProfileImg = '../' + ( instImg || 'assets/img/logo-placeholder.jpg' );

			// Render the highlightee:
			Pluto.Templates.renderTemplate( 'card-crse', highlightee, '.js-highlight' );

			// Do some DOM manipulations so attention stays on the highlighted entity:
			$('.share').fadeIn();
			$('.js-txt-other').fadeIn();
			$('#hero').hide();
			$('.js-highlight')
				.fadeIn()
				.find('.srch-result-wrapper')
				.addClass('t-left');
		}
		else {
			$('.share').hide();
			$('.js-txt-other').hide();
			$('#hero').fadeIn();
			$('.js-highlight').html('').hide();
		}
	};
	var getHighlightee = function( coll, identifier ) {
		for( var idx = 0, len = coll.length; idx < len; idx++ ) {
			if( coll[ idx ]._id === identifier )
				return coll[ idx ];
		}
	};

	if( pageData.heroImg && $('body').innerWidth() > 700 ) {
		$('#hero > img').attr( 'src', '../' + pageData.heroImg );
	}

	if( !isUserOwner ) {
		$.get('../institute/course/getCourseOnStartDate?instId=' + pageData._id.$oid, function( response ) {
			if( response.status === 200 ) {
				// Get the courses in a variable:
				arrCourses = response.data;

				$('#n-count').text( arrCourses.length || 0 );
				$('.js-entity p').text( 'No courses yet' );

				if( arrCourses.length ) {
					$('.js-entity').html('<div class="bb-coll-wrapper" />');
					for( var idx = 0, arr = arrCourses, len = arr.length; idx < len; idx++ ) {
						Pluto.Templates.renderTemplate( 'card-crse', arr[idx], '.bb-coll-wrapper' );
					}

					// Go Masonry:
					// #LongLiveDeSandro
					$('.bb-coll-wrapper').masonry({
						itemSelector: '.srch-result-wrapper'
					});
				}

				// Take highlight course up there:
				doHighlight( _.find( arrCourses, { '_id' :  highlight } ) );
			}
		});

		$('.js-non-owner').remove();

		return;
	}

	// Helper functions:
	var getMarkerClassName = function( examCat ) {
			// Replace white spaces with underscore:
			return 'mrkr-' + examCat.replace( new RegExp(' ', 'g'), '_' );
		},
		noSpace = function( val ) {
			return val.replace( new RegExp( ' ', 'g' ), '_' );
		};

	// Ajax callbacks:
	var loadCourses   = function( jsonCourses ) {
			// Get the batches from courses:
			var jsonBatches = jsonCourses ? _.compact( _.flatten( _.pluck( jsonCourses, 'batches' ) ) ) : null;

			// Initialize Backbone collection with the data received:
			collCourses = new Pluto.Collections.Courses( jsonCourses );
			collBatches = new Pluto.Collections.Batches( jsonBatches );

			// Initialize the view that will render this collection on the DOM:
			var vwCourses = new Pluto.CollectionViews.Courses({ collection: collCourses });

			// Render the collection on the DOM:
			$('.js-entity').html( '' ).append( vwCourses.render().el );

			$('.bb-coll-wrapper').masonry({
				itemSelector: '.srch-result-wrapper'
			});

			// Initialize the factory view that will add more models in this collection:
			// 1. Courses:
			new Pluto.FactoryViews.AddCourse({ collection: collCourses });
			// 2. Batches:
			new Pluto.FactoryViews.AddBatch({ collection: collBatches });

			if( !jsonCourses ) return;

			// Take highlight course up there:
			doHighlight( _.find( jsonCourses, { '_id' :  highlight } ) );
		};

 	$.ajax({
 		url: '../institute/getAllExams',
 		type: 'GET'
 	})
 	.done(function( response ) {
 		var allExams = response.data;

	 	$.ajax({
	 		url: '../institute/getInstituteProfile',
	 		type: 'POST',
	 		data: JSON.stringify( { keys: [ 'exams', 'centers' ] } )
	 	})
	 	.done(function( response ) {
	 		if( response.status !== 200 ) return;

	 		// Handle exams:
			var instExams = response.data && response.data.exams || [];
	 		if( instExams.length )
	 			$('.js-staging-exams').html('');
	 		for( var idx = 0, len = allExams.length; idx < len; idx++ ) {
	 			if( _.contains( instExams, allExams[idx].examName ) ) {
	 				allExamSubjectMap.push( allExams[idx] );
					$('.js-staging-exams').append( '<div><input id="op-' + idx + '" type="checkbox" class="cb js-exm" data-exam-id="' + allExams[idx].examName + '"><label for="op-' + idx + '" class="lbl-cb"><span></span>' + allExams[idx].examName + '</label></div>' );
				}
			}

			// Handle centers:
			var instCenters = response.data && response.data.centers || [];
			var uniqCities  = _.uniq( _.pluck( instCenters, 'city' ) );
	 		if( uniqCities.length )
	 			$('.js-staging-cntrs')
	 				.html('')
	 				.append('<div><input id="select-all-01" type="checkbox" class="cb js-select-all"><label for="select-all-01" class="lbl-cb"><span></span>Select all</label></div>');
	 		for( idx = 0, len = uniqCities.length; idx < len; idx++ ) {
				$('.js-staging-cntrs').append( '<div><input id="op-cntr-' + idx + '" type="checkbox" class="cb js-cntr" data-cntr-id="' + uniqCities[idx] + '"><label for="op-cntr-' + idx + '" class="lbl-cb"><span></span>' + uniqCities[idx] + '</label></div>' );
			}

		 	$.ajax({
		 		url: '../institute/course/get',
		 		type: 'POST',
		 		data: toSend
		 	})
		 	.done(function( response ) {
		 		arrCourses = response.data;
				loadCourses( arrCourses );
				$('#n-count').text( arrCourses.length || 0 );
		 	})
		 	.fail(function() {
				console.log("Oops! An error has ocurred, please try again.");
		 		return;
		 	});
	 	})
	 	.fail(function() {
			console.log("Oops! An error has ocurred, please try again..");
	 		return;
	 	});
 	})
 	.fail(function() {
		console.log("Oops! An error has ocurred, please try again...");
 		return;
 	});

 	// Set the institute Id:
 	$('#instId').val( currUser );

	// Initialize pickadate:
	$('#tbCourseStartDate').pickadate();
	$('#tbAdmssnExamDate').pickadate();
	var pkadtRegStrt = $('#tbCourseRegStartDate').pickadate().pickadate('picker');
	var pkadtRegEnd  = $('#tbCourseRegEndDate').pickadate().pickadate('picker');

	// When start or end date is selected, update the 'from' and 'to' limits:
	if( pkadtRegStrt )
	pkadtRegStrt.on('set', function( event ) {
		if( event.select ) {
			if( Date.parse( pkadtRegStrt.get('select').obj ) > Date.parse( ( pkadtRegEnd.get('select') || {} ).obj || 0 ) )
				pkadtRegEnd.set('select', pkadtRegStrt.get('select'));
			pkadtRegEnd.set('min', pkadtRegStrt.get('select'));
		}
	});

	// On date pick, set the long value in that input field:
	$('.js-pickr-dt').on('change', function() {
		var $this = $(this);
		var formattedDt = ( $this.pickadate( 'picker' ).get( 'select' ) || {} ).pick || '';
		$this.data( 'val', formattedDt );
	});

	// Append initial slot to the DOM (do this before binding the callback to '.js-pickr-tm'):
	Pluto.Helpers.cloneSlot();

	// On time pick, set the formatted value in that input field:
	$('.js-pickr-tm').on('change', function() {
		var $this = $(this);
		var formattedTm = $this.pickatime('picker').get( 'select', 'H:i' );
		var h = parseInt( formattedTm.split(':')[0] );
		var m = parseInt( formattedTm.split(':')[1] );
		formattedTm = ( h * 60 ) + m;
		$this.data( 'val', formattedTm );
	});

	// Filling the Course Info section related:
	// @desc Populate/remove the subjects based on the exams selected
	$(document).on('change', '.js-staging-exams .js-exm', function() {
		var $this       = $(this);
		var chkBoxID	= $this.attr('id');
		var examName 	= $('#' + chkBoxID + ' + label').text().trim();
		var objExmSubj  = _.find( allExamSubjectMap, { 'examName': examName } );
		var arrSubj     = null;
		var markerClass = getMarkerClassName( examName );

		if( !objExmSubj ) {
			// No entry found in exam subject map corresponding to the exam ID
			return;
		}

		// Get the subjects:
		arrSubj = objExmSubj.subjects;

		// Append the subjects if corresponding exam is selected else remove it:
		if( $('#' + chkBoxID).is(':checked') ) {
			$this.parent('div').append('<ul class="' + markerClass + '"></ul>');
			for(var idx = 0, len = arrSubj.length; idx < len; idx++) {
				$this.parent('div').find('ul').append('<li><input id="op-subj-' + noSpace( examName ) + '-' + idx + '" type="checkbox" class="cb js-subj" data-subject-id="' + arrSubj[idx] + '"><label for="op-subj-' + noSpace( examName ) + '-' + idx + '" class="lbl-cb"><span></span>' + arrSubj[idx] + '</label></li>');
			}
		}
		else {
			$('ul.' + markerClass).remove();
		}
	});

	// Filling the Course Info section related:
	// @desc Add another slot to the course input card
	$('#btSlotAdd').on('click', function() {
		// Call the cloneSlot helper function:
		Pluto.Helpers.cloneSlot();
	});

	// Filling the Course Info section related:
	// @desc Add another discount criteria to the input card
	$('#btDisctAdd').on('click', function() {
		// Call the cloneSlot helper function:
		Pluto.Helpers.cloneDiscountCriteria();
	});

	// Filling the Course Info section related:
	// @desc Remove the slot from the form
	$('.btSlotRemove').on('click', function() {
		if( $('.slot').size() > 1 ) {
			$(this).closest('.slot').remove();
		}
		else {
			badger.show( 'The default slot can\'t be deleted', 'warn' );
		}
	});

	// Filling the Course Info section related:
	// @desc Remove the discount criteria from the form
	$('.btDisctRemove').on('click', function() {
		if( $('.disct').size() > 1 ) {
			$(this).closest('.disct').remove();
		}
		else {
			badger.show( 'The default discount criteria can\'t be deleted', 'warn' );
		}
	});

	// Filling the Course Info section related:
	// @desc Select/unselect weekday
	$('.week li.wk-intractve').on('click', function() {
		$(this).toggleClass('active-weekday');
	});

	$(document).on('click', '.js-modal-show', function( event ) {
		$( $(this).data( 'target' ) || '' ).show();
		$('.modal').css( { 'position': 'absolute', 'height': $('body').outerHeight(true) + 'px' } );
		// Bring this form to focus, go up, up and up...
		$('#take-to-top').click();
		event.preventDefault();
	});

	$('.js-modal-close').on('click', function( event ) {
		$(this).closest('.modal').hide();
		Pluto.Helpers.resetInputForm();
	});

	$('#btCourseAddDefault').on('click', function() {
		$('#btCourseAdd').click();
	});

	$('#btCourseAdd').on('click', function() {
		// Decide whether a fresh course is being added or an existing one is being edited:
		// #ShitJustGotReal
		var courseId = $('#tbCourseID').val().trim();
		if( !courseId ) {
			// Add course:
			$('#btCourseAddForReal').click();
		}
		else {
			// Save course:
			$( '.btCourseSave_' + courseId ).click(); // now ain't that 'dot netty' style?! ;-P
		}
	});

	$('#btBatchAddDefault').on('click', function() {
		$('#btBatchAdd').click();
	});

	$('#btBatchAdd').on('click', function() {
		var batchId = $('#tbBatchID').val().trim();
		if( !batchId ) {
			// Add batch:
			$('#btBatchAddForReal').click();
		}
		else {
			// Save batch:
			$( '.btBatchSave_' + batchId ).click();
		}
	});

	// Direct admission and admission exam date shall play hide and seek now:
	$('#cbDirectAdmssn').on('change', function() {
		var isChecked = $(this).prop('checked');
		if( isChecked ) {
			$('#tbAdmssnExamDate').pickadate('picker').set('clear');
			$('#tbAdmssnExamDate').data('val', '').prop('disabled', true);
		}
		else {
			$('#tbAdmssnExamDate').data('val', '').prop('disabled', false);
		}
	});
	$('#tbAdmssnExamDate').on('change', function() {
		var val = $(this).data('val');
		if( val ) {
			$('#cbDirectAdmssn').prop( { 'checked': false, 'disabled': true } );
		}
		else {
			$('#cbDirectAdmssn').prop( { 'disabled': false } );
		}
	});

	// Regarding selecting all checkboxes:
	$(document).on('change', '.js-select-all', function() {
		var $this = $(this);
		if( $this.prop( 'checked' ) )
			$this.closest( '.checkbox-combo' ).find( '.cb' ).prop( 'checked', true );
		else
			$this.closest( '.checkbox-combo' ).find( '.cb' ).prop( 'checked', false );
	});

});