/**
 * filter.js
 * ---------
 * @desc Sends appropriate filters to back end, receives data and renders it on the page
 * @author Navi
 */

$(document).ready(function() {
	// Constants:
	var REC_LIMIT   = 6;
	var COURSE_TYPE = ['Classroom program', 'Crash course', 'Correspondence course', 'Test series', 'Online course', 'Other'];

	// Variables:
	// The current state of user filters:
	var filters        = {};
	// The current skip for the results to be fetched:
	var currSkip       = 0;
	// The type of filter page (present in the URL). Acceptable values: `inst`, `crse`
	var fltrType       = getParameterByName( 'type' );
	// The URL over which the result request will be made:
	var fltrUrl        = fltrType === 'inst' ? 'institute' : fltrType === 'crse' ? 'course' : '';
	// The name of the template to be applied on each datum:
	var tplName        = fltrType === 'inst' ? 'card-inst' : 'card-crse';
	// The loader that is displayed when fetching results from server:
	var $loader        = $('.loader-cntnr');
	// The element on which Masonry is to be initialized:
	var $masonry       = $('.js-srch-results');
	// The footer of the current page:
	var $footer        = $('.footr');
	// The element showing `No more results available`:
	var $noMoreRes     = $('.no-more-srch');
	// The loader that is displayed when fetching results due to scroll i.e. on the same filters:
	var $moreResLdr    = $('.js-res-loader');
	// The element that is overlayed on the filter sidebar so that user can't change filters when
	// fetching results due to scroll:
	var $fltrOvrlay    = $('.fltr-overlay');
	// Flag telling whether Masonry has been initialized or not:
	var isMsnryInit    = false;
	// Flag telling whether a result request is in process or not:
	var isReqInProcess = false;
	// Flag telling whether more results available or not for the current state of filters:
	var isMoreResults  = true;

	if( !fltrUrl )
		// If the page has received an abnormal filter type, don't go no further:
		return;

	// This function tells if the filters exists in the input collection on the  basis of a `prop`
	// Sample `haystack`:
	// [ { _id : 'Dhamnod' }, { _id : 'Amritsar' } ]
	// or
	// [ { examName: 'IAS', subjects: [...] } ]
	var hasFilter = function( pin, haystack, prop ) {
		for( var idx = 0, len = ( haystack || [] ).length; idx < len; idx++ ) {
			if( pin == haystack[ idx ][ prop ] ) {
				return true;
			}
		}
		return false;
	};

	// This function returns the index of the object in `coll` corresponding to the `examName`
	// If not found, returns `undefined`
	// Sample `coll`:
	// [ { examName: 'IAS', subjects: [...] } ]
	var getIndex = function( coll, examName ) {
		for( var idx = 0, len = ( coll || [] ).length; idx < len; idx++ ) {
			if( examName == coll[ idx ].examName ) {
				return idx;
			}
		}
	};

	// This function slides up/down the subjects nested under an exam:
	var toggleSubjs = function( $context ) {
		var subjsId = $context.data('subjs');

		// Don't process bogus calls:
		if( !subjsId ) return;

		if( $context.is(':checked') )
			$( subjsId ).slideDown('fast');
		else
			$( subjsId ).slideUp('fast', function() {
				$( subjsId + ' input' ).attr('checked', false);
			});
	};

	// This function updates the slider value:
	var updateSliderValue = function( $context ) {
		$('#dur-val').text( $context.val() );
	};

	// This function selects the filters supplied in the argument:
	var selectFilters = function( fltr ) {
		// Some variables will be handy:
		var $curr = null;
		var idx = 0, arr = [], len = 0;

		// Unselect all the filters, first:
		$('.srch-filters .cb').prop( 'checked', false );

		// Go loop:
		for( var key in fltr ) {
			$curr = $('[data-fltr="' + key + '"]');
			if( key === 'city' || key === 'instName' || key === 'courseType' || key === 'examSubjMap' ) {
				// Iterate through the list and select them:
				for( idx = 0, arr = ( fltr[key] || [] ), len = arr.length; idx < len; idx++ ) {
					$curr.find('.cb[data-val="' + ( arr[idx].examName || arr[idx] ) + '"]').prop( 'checked', true );
					toggleSubjs( $curr.find('.cb[data-val="' + ( arr[idx].examName || '' ) + '"]') );
					for( var idx2 = 0, arr2 = ( arr[idx].subjects || [] ), len2 = arr2.length; idx2 < len2; idx2++ ) {
						$curr.find('.cb[data-val="' + arr2[idx2] + '"]').prop( 'checked', true );
					}
				}
			}
			else if( key === 'duration' ) {
				// @TODO
			}
		}

		// Collapse the subjects of unselected exams:
		for( idx = 0, arr = $( '[data-fltr-type="examSubjMap"]:not(:checked)' ), len = arr.length; idx < len; idx++ ) {
			toggleSubjs( $( arr[idx] ) );
		}
	};

	// This function makes the filter elements present in the `fltr` object on the page:
	var makeFilters = function( fltr ) {
		// Some variables will be handy:
		var $curr = null;
		var idx = 0, arr = [], len = 0;

		// Go loop:
		for( var key in fltr ) {
			// Show the corresponding filter:
			$curr = $('[data-fltr="' + key + '"]').show();
			if( key === 'city' ) {
				// Now iterate through this array of cities and show them on page:
				for( idx = 0, arr = fltr[key], len = arr.length; idx < len; idx++ ) {
					$curr.find('.checkbox-combo').append('<div class="ellipsis">' +
						'<input id="city-' + idx + '" type="checkbox" class="cb" data-val="' + arr[idx]._id + '" data-fltr-type="city" data-ineligible="0">' +
						'<label for="city-' + idx + '" class="lbl-cb"><span></span> ' + arr[idx]._id + '</label>' +
					'</div>');
				}
			}
			else if( key === 'examSubjMap' ) {
				// Now iterate through this array of cities and show them on page:
				for( idx = 0, arr = fltr[key] || [], len = arr.length; idx < len; idx++ ) {
					$curr.find('.checkbox-combo').append('<div class="ellipsis">' +
						'<input id="exm-' + idx + '" type="checkbox" class="cb js-exm" data-val="' + arr[idx].examName + '" data-subjs="#subj-' + idx + '" data-fltr-type="examSubjMap" data-ineligible="0">' +
						'<label for="exm-' + idx + '" class="lbl-cb" title="' + arr[idx].examNameAlt + '"><span></span> ' + arr[idx].examName + '</label>' +
					'</div>');
					// Now append subjects:
					$curr.find('.checkbox-combo div:eq(' + idx + ')').append('<ul id="subj-' + idx + '" style="display: none"></ul>');
					for( var idx2 = 0, arr2 = arr[idx].subjects || [], len2 = arr2.length; idx2 < len2; idx2++ ) {
						$( '#subj-' + idx ).append('<li class="ellipsis">' +
								'<input id="subj-' + idx + '-' + idx2 + '" type="checkbox" class="cb" data-val="' + arr2[idx2] + '" data-parent="' + arr[idx].examName + '" data-fltr-type="subject">' +
								'<label for="subj-' + idx + '-' + idx2 + '" class="lbl-cb" title="' + arr2[idx2] + '"><span></span> ' + arr2[idx2] + '</label>' +
							'</li>');
					}
				}
			}
			else if( key === 'courseType' ) {
				// Now iterate through this array of course types and show them on page:
				for( idx = 0, arr = fltr[key], len = arr.length; idx < len; idx++ ) {
					$curr.find('.checkbox-combo').append('<div class="ellipsis">' +
						'<input id="crse-type-' + idx + '" type="checkbox" class="cb" data-val="' + arr[idx]._id + '" data-fltr-type="courseType" data-ineligible="0">' +
						'<label for="crse-type-' + idx + '" class="lbl-cb"><span></span> ' + COURSE_TYPE[ arr[idx]._id - 1 ] + '</label>' +
					'</div>');
				}
			}
			else if( key === 'instName' ) {
				// Now iterate through this array of institute names and show them on page:
				for( idx = 0, arr = fltr[key], len = arr.length; idx < len; idx++ ) {
					$curr.find('.checkbox-combo').append('<div class="ellipsis">' +
						'<input id="inst-' + idx + '" type="checkbox" class="cb" data-val="' + arr[idx]._id + '" data-fltr-type="instName" data-ineligible="0">' +
						'<label for="inst-' + idx + '" class="lbl-cb" title="' + arr[idx]._id + '"><span></span> ' + arr[idx]._id + '</label>' +
					'</div>');
				}
			}
			else if( false && key === 'workingDay' ) {
				// Now iterate through this array of working days and show them on page:
				for( idx = 0, arr = fltr[key], len = arr.length; idx < len; idx++ ) {
					$curr.find('.checkbox-combo').append('<div>' +
						'<input id="day-' + idx + '" type="checkbox" class="cb" data-val="' + arr[idx]._id.slots + '" data-fltr-type="workingDay" data-ineligible="0">' +
						'<label for="day-' + idx + '" class="lbl-cb"><span></span> ' + arr[idx]._id.slots + '</label>' +
					'</div>');
				}
			}
			else if( key === 'duration' ) {
				// Set min and max values on the slider:
				$curr.find('.slidr')
					.attr({
						'min': parseInt( fltr[key].min / 24 ),
						'max': parseInt( fltr[key].max / 24 )
					})
					.data({
						'fltr-type' : 'duration'
					})
					.val( parseInt( fltr[key].max / 24 ) );
				// Show min and max values too:
				$('#dur-min').text( parseInt( fltr[key].min / 24 ) );
				$('#dur-max').text( parseInt( fltr[key].max / 24 ) );
				updateSliderValue( $curr.find('.slidr') );
			}
		}
	};

	// This function updates the current state of filters (to be sent to server):
	var updateFilterState = function( $filter ) {
		// Get the current filter element's specs:
		var type   = $filter.data( 'fltr-type' );
		var val    = $filter.data( 'val' ) || $filter.val();
		var parent = $filter.data( 'parent' );
		var isChkd = $filter.is( ':checked' );

		// Handle various filter types:
		if( !type )
			// Script initiating self-destruct in 10.. 9.. 8.. 7.. run!!!
			return;
		else if( type === 'city' || type === 'instName' ) {
			if( isChkd ) {
				// Create cities array if it is not present:
				if( !filters[type] ) filters[type] = [];
				// Add this value in the array:
				filters[type].push( val );
			}
			else {
				// Remove this value from the array:
				filters[type].splice( filters[type].indexOf( val ), 1 );
				// Check if no elements, exist. Nullify!
				if( !filters[type].length ) filters[type] = null;
			}
		}
		else if( type === 'courseType' ) {
			if( isChkd ) {
				// Create cities array if it is not present:
				if( !filters[type] ) filters[type] = [];
				// Add this value in the array:
				filters[type].push( parseInt( val ) );
			}
			else {
				// Remove this value from the array:
				filters[type].splice( filters[type].indexOf( parseInt( val ) ), 1 );
				// Check if no elements, exist. Nullify!
				if( !filters[type].length ) filters[type] = null;
			}
		}
		else if( type === 'examSubjMap' ) {
			if( isChkd ) {
				// Create exam subject map if it is not present:
				if( !filters[type] ) filters[type] = [];
				// Add the exam in the exam subject map:
				filters[type].push( { examName : val } );
			}
			else {
				// Reject the entire object corresponding to this exam (incl. subjects):
				var index = getIndex( filters[type], val );
				if( index || index === 0 ) { // Can't treat '0' as falsy value
					filters[type].splice( index, 1 );
					// Check if no elements, exist. Nullify!
					if( !filters[type].length ) filters[type] = null;
				}
			}
		}
		else if( type === 'subject' ) {
			// Find the object that contains this subject's parent exam and add/remove subject:
			for( var idx = 0, arr = filters.examSubjMap || [], len = arr.length; idx < len; idx++ ) {
				if( arr[idx].examName === parent ) {
					if( isChkd ) {
						// Create subjects array if it is not present:
						if( !arr[idx].subjects ) arr[idx].subjects = [];
						// Add subject:
						arr[idx].subjects.push( val );
					}
					else {
						// Remove subject:
						arr[idx].subjects.splice( arr[idx].subjects.indexOf( val ), 1 );
						// Check if no elements, exist. Nullify!
						if( !arr[idx].subjects.length ) arr[idx].subjects = null;
					}
					break;
				}
			}
		}
		else if( type === 'duration' ) {
			val = parseInt( val );
			// Create duration object if it is not present:
			if( !filters.duration ) filters.duration = {};
			if( val === 0 )
				filters.duration = null;
			else {
				// Set values (in hours) in this object:
				filters.duration.min = parseInt( $filter.attr( 'min' ) ) * 24;
				filters.duration.max = val * 24;
			}
		}
	};

	// This function keeps only the eligible filter elements on the page, disables the others:
	var renderFilters = function( fltr ) {
		// Some variables will be handy:
		var $curr = null;
		var idx = 0, arr = [], len = 0;

		// Go loop:
		for( var key in fltr ) {
			$curr = $('[data-fltr="' + key + '"]');
			if( key === 'city' || key === 'instName' || key === 'courseType' ) {
				// Iterate through all the cities and enable/disable them:
				for( idx = 0, arr = $curr.find('.cb'), len = arr.length; idx < len; idx++ ) {
					// Find whether the city is present in the eligible filter array:
					if( !hasFilter( $( arr[idx] ).data( 'val' ), fltr[key], '_id' ) ) {
						// This city is ineligible:
						if( $( arr[idx] ).is( ':checked' ) ) {
							// This city is ineligible but it was checked
							// Step 1) Uncheck the filter so that it gets removed:
							$( arr[idx] ).prop( 'checked', false );
							// Step 2) Update the filter state:
							updateFilterState( $( arr[idx] ) );
						}
						// Now disable this city:
						$( arr[idx] )
							.prop( 'disabled', true )
							.attr( 'data-ineligible', '1' );
					}
					else {
						// This city is eligible:
						$( arr[idx] )
							.prop( 'disabled', false )
							.attr( 'data-ineligible', '0' );
					}
				}
			}
			else if( key === 'examSubjMap' ) {
				// Disable all the ineligible filters:
				for( idx = 0, arr = $curr.find('.cb[data-fltr-type="examSubjMap"]'), len = arr.length; idx < len; idx++ ) {
					// Find whether the exam is present in the eligible filter array:
					if( !hasFilter( $( arr[idx] ).data( 'val' ), fltr[key], 'examName' ) ) {
						// This exam is not present in the eligible filter array:
						$( arr[idx] )
							.prop({
								'disabled': true,
								'checked' : false
							})
							.attr( 'data-ineligible', '1' );
						// Update the filter state so that this ineligible filter gets removed:
						updateFilterState( $( arr[idx] ) );
						// Hide the subjects:
						toggleSubjs( $( arr[idx] ) );
					}
				}
				// Now iterate through this array and enable the eligible filters:
				for( idx = 0, arr = fltr[key] || [], len = arr.length; idx < len; idx++ ) {
					$curr.find('.cb[data-val="' + arr[idx].examName + '"]')
						.prop( 'disabled', false )
						.attr( 'data-ineligible', '0' );
				}
			}
			else if( key === 'duration' ) {
				var min = parseInt( ( fltr[key] || {} ).min / 24 );
				var max = parseInt( ( fltr[key] || {} ).max / 24 );
				console.log( 'Eligible duration hash:', fltr[key] );
				if( fltr[key] && ( fltr[key].min === fltr[key].max || !fltr[key].max ) ) {
					$curr.hide();
					var prevVal = $curr.find('.slidr').val();
					$curr.find('.slidr').val( 0 );
					updateFilterState( $curr.find('.slidr') );
					$curr.find('.slidr').val( prevVal );
					updateSliderValue( $curr.find('.slidr') );
				}
				else {
					$curr
						.show()
						.attr({
							'min': min,
							'max': max
						});
					// Show min and max values too:
					$('#dur-min').text( min );
					$('#dur-max').text( max );
					// Reset value if current value is greater than the max value:
					if( parseInt( $curr.find('.slidr').val() ) > max ) {
						$curr.find('.slidr').val( max );
						updateSliderValue( $curr.find('.slidr') );
					}
					updateFilterState( $curr.find('.slidr') );
				}
			}
		}

		// Put the ineligible filters down:
		for( idx = 0, arr = $( '.checkbox-combo' ), len = arr.length; idx < len; idx++ ) {
			var sortSelector = '#' + $( arr[ idx ] ).attr( 'id' ) + ' > div';
			if( $( sortSelector ).length )
				tinysort( sortSelector, { selector: 'input', data: 'ineligible' }, 'label' );
		}
	};

	// This function render the results fetched on the webpage:
	var renderResults = function( results, isReqContinuous ) {
		// Hide the loader and the filter overlay:
		$loader.fadeOut('fast');
		$fltrOvrlay.hide();

		// var resultMarkup = '';

		// Clear the old results to render the fresh results:
		if( !isReqContinuous ) $('.js-srch-results').html('');

		// Check if the result count is less than the limit.
		// In that case, no more results available (at least for this session):
		if( ( results || [] ).length < REC_LIMIT) {
			$noMoreRes.fadeIn();
			isMoreResults = false;
		}

		for( var idx = 0, len = ( results || [] ).length; idx < len; idx++ ) {
			// len = 1;
			Pluto.Templates.renderTemplate( tplName, results[idx], '.js-srch-results' );
			// resultMarkup += Pluto.Templates[ tplName ]( results[idx] );

			// Fix the course cards:
			var $curr = $( '.srch-result-crse' ).last();
			if( $curr.length ) {
				// 1. Modify the 'href' of course heads so that the cards become clickable:
				var $entityLnk = $curr.find( '.js-entity-share' );
					$entityLnk.attr( 'href', $entityLnk.data( 'owner' ) + '/' + $entityLnk.attr( 'href' ) );
				// 2. Fix the banner links:
				var $bannerLnk = $curr.find( '.js-banner' );
					$bannerLnk.attr( 'href', $bannerLnk.attr( 'href' ).split( '../' )[1] );
			}
		}

		// Go masonry:
		// if( !isMsnryInit ) {
		// 	$( resultMarkup ).hide().appendTo( '.js-srch-results' ).fadeIn();
		// 	$masonry = $masonry.masonry({
		// 		itemSelector: '.srch-result-wrapper'
		// 	});
		// 	isMsnryInit = true;
		// }
		// else {
		// 	console.log( 'I want to append this markup in masonry:', $( resultMarkup ) );
		// 	$masonry
		// 		.append( $( resultMarkup ) )
		// 		.masonry( 'appended', $( resultMarkup ) );
		// }

		// Initialize lazy load on images:
		$('img.lazy').lazyload({
			effect: 'fadeIn',
			placeholder: 'assets/img/loading-tiny.gif',
			load: function() {
				$(this).removeClass('lazy');
			}
		});

		// Hide the more results loader (btw this is already hidden for non-continuous fetch requests):
		$moreResLdr.hide();

		// Mark the request flag as false:
		isReqInProcess = false;
	};

	// This function fetches results from server:
	var fetch = function( isReqContinuous ) {
		// Variables:
		var objDataReq     = {};

		if( !isReqInProcess ) $fltrOvrlay.show();

		// Mark the more results available flag and the request flag as true:
		isMoreResults = true;
		isReqInProcess = true;
		$noMoreRes.hide();

		// Update the limit and skip variables:
		if( isReqContinuous ) {
			// More data to be fetched on the same filters:
			currSkip += REC_LIMIT;
			$moreResLdr.fadeIn();
		}
		else {
			// Fresh data request:
			currSkip = 0;
			// Show the loader:
			$loader.show();
		}

		// Make the data request object:
		objDataReq.skip    = currSkip;
		objDataReq.limit   = REC_LIMIT;
		objDataReq.filters = filters;

		// Get data from server:
		// But first, find out whether this request is made for the first time or not.
		// It is crucial to know this because we need to:
		// 1. Initialize the state of the filters with the one present in the URL
		// 2. Make initial filters from inline data and select the filter elements
		// 3. Render filters i.e. disable ineligible filters
		// 4. Get data inline from page to render it on the webpage
		if( !$('body').data('init') ) {
			// Yes, it is the first request!

			// Initialize filter state from URL:
			filters = JSON.parse( getParameterByName( 'filters' ) || '{}' ).filters || {};

			// Make intial filters from inline data:
			makeFilters( JSON.parse( initFltrs || eligibleFltrs || '{}' ) );

			// Select the filters:
			selectFilters( filters );

			// Render the filters too:
			renderFilters( JSON.parse( eligibleFltrs || '{}' ) );

			// Render initial results:
			renderResults( JSON.parse( result || '[]' ) );

			$('body').data('init', true);
		}
		else {
			// No, it is not an initial request, get data via AJAX!

			var payload = JSON.stringify( objDataReq );
			console.log( 'Filter sent:' + payload );
			$.post( fltrUrl + '/filter', payload )
				.done(function( response ) {
					console.log( 'Response from server:', response );

					// Check status:
					if( response.status !== 200 && response.status !== 'OK' ) return;

					// Set page title:
					if( response.title )
						document.title = response.title.trim() + ' | ' + document.title.split( '|' ).pop();

					// Set description:
					if( response.meta && response.meta.description )
						$('meta[name="description"]').attr( 'content', response.meta.description );

					// Render filters:
					renderFilters( response.elligibleFilters );

					// Render data:
					renderResults( response.result, isReqContinuous );
				})
				.error(function() {
					console.log( 'An error occurred while fetching results' );
				});
		}
	};

	// This function curates the filter object i.e. gets rid of null values, etc.:
	var curateFilters = function( filters ) {
		for( var key in filters ) {
			if( !filters[key] )
				try {
					delete filters[key];
				}
				catch( e ) {
					console.error( 'Exception occurred while deleting a key from JSON:', e );
				}
		}
	};

	// Bind callback to select exams and subjects:
	$(document).on('change', '.js-exm', function() {
		toggleSubjs( $(this) );
	});

	// Bind callback to change slider:
	$(document).on('change', '.slidr', function() {
		updateSliderValue( $(this) );
	});

	// Bind callback on all the filters so that data can be fetched whenever a filter is chaged:
	$(document).on('change', '.cb, .slidr', function() {
		// Update the filters object:
		updateFilterState( $( this ) );

		// Get rid of falsy values:
		curateFilters( filters );

		// Update the URL:
		history.pushState( null, null, 'filter?type=' + fltrType + ( $.isEmptyObject( filters ) ? '' : '&filters={"filters":' + JSON.stringify( filters ) + '}' ) );

		console.log( 'Filters:', filters );

		// Request data from server (this is a fresh request):
		fetch();
	});

	// Infinite scroll related:
	$(window).on('scroll', function() {
		if( $(window).scrollTop() + $(window).height() >= $(document).height() - $footer.outerHeight( true ) ) {
			// You've just hit the footer!!
			if( isReqInProcess || !isMoreResults ) return;
			// Fetch results from server (this is a continuous request):
			fetch( true );
		}
	});

	// Related to browser history, this callback handles the pressing of the browser back button:
	$(window).on('popstate', function() {
		// Update the filters object:
		filters = JSON.parse( getParameterByName( 'filters' ) || '{}' ).filters || {};

		// Select the filters:
		selectFilters( filters );

		// Fetch data:
		fetch();
	});

	// Fetch data from server (initial request):
	fetch();

});