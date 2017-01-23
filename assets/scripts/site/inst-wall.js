/**
 * inst-wall.js
 * ------------
 * @desc Client-side handling for institute banner
 * @author Navi
 */

$(document).ready(function() {

	var blobURL = '';
	var $cropperImage = $( '.cropper-wrapper > img' );
	var wallOwnerId   = pageData && pageData._id && pageData._id.$oid || '';
	var isUserOwner   = currUser == wallOwnerId ? true : false;
	var imgMimeType   = '';
	var $currImg      = $('.cover-photo img');
	// Related to similar institutes:
	var SIMILAR_LIMIT = 8;
	var currLimit     = SIMILAR_LIMIT;
	var currSkip      = -1 * SIMILAR_LIMIT;
	// Institute entity limits:
	var LIMIT_CENTER  = 4;

	// Hide the loader:
	$( '.js-rain-coat' ).hide();

	if( !isUserOwner ) {
		// The user is not the wall owner
		$( '.msg-cover' ).remove();
	}
	else {
		// The user is the wall owner
		$( '.js-non-owner' ).remove();
	}

	var setRating = function( rating ) {
		var className   = '';
		var ratingVal   = 0;
		var ratingNum   = 0;
		var $currRating = null;

		for( var key in rating ) {
			if( !rating[ key ] ) continue;
			$currRating = $('span[data-rating="' + key + '"]');
			ratingVal += rating[key].value;
			// Set rating:
			var curr = getFormattedRating( rating[key].value );
			if( curr ) {
				$currRating.text( curr );
				$currRating.closest('.rating-wrpr').find('.rating-bar').css( { 'width' : curr * 10 + '%' } );
				$currRating.closest('.rating-wrpr').find('.n-votes').text( rating[key].votes );
				ratingNum++;
			}
		}

		var instRating = ratingVal / ratingNum;

		if ( instRating < 4 ) {
			className = 'rating-bad';
		}
		else if ( instRating >= 4 && instRating < 7.5 ) {
			className = 'rating-avg';
		}
		else if ( instRating >= 7.5 ) {
			className = 'rating-good';
		}

		$('.js-rating-avg')
			.addClass( className )
			.animate({'width': instRating * 10 + '%'}, 2000)
			.find('.rating-box')
			.show()
			.animate({'left': instRating * 10 + '%'}, 2000);

		// Set rating:
		instRating = getFormattedRating( instRating );
		if( instRating ) {
			$('.js-rating').text( instRating );
		}
	};

	var getFormattedRating = function( nRating ) {
		// Round off rating to one decimal place:
		nRating = Math.round( nRating * 10 ) / 10;

		if( nRating ) {
			nRating = ( nRating + '' ).length == 2 || ( nRating + '' ).split( '.' ).length > 1 ? nRating : nRating + '.0';
			return nRating;
		}
		else {
			return 0;
		}
	};

	// Call after setting rating:
	var animateEntityLinks = function() {
		var $links = $('.lnk-entity');
		var length = $links.length;
		(function looper( idx ) {
			setTimeout(function () {
				$links.eq( idx ).addClass( 'lnk-entity--dormant' );
				if ( idx++ < length ) looper( idx );
			}, 200);
		})(0);
	};

	var buildWall = function( wallData ) {
		// Set hero:
		if( wallData.heroImg && $('body').innerWidth() > 700 ) {
			$('.cover-photo img').attr('src', wallData.heroImg);
		}

		// Render team members:
		var wSpiracle = 150;
		var tmpWidth  = wSpiracle;
		if( ( wallData.team || [] ).length > 0 ) {
			for( var idx = 0, arr = wallData.team, len = arr.length; idx < len; idx++ ) {
				Pluto.Templates.renderTemplate( 'banner-person-img', arr[idx], '.js-caterpillar-team' );
				tmpWidth += wSpiracle;
			}
			$('.js-caterpillar-team').css({'height': wSpiracle + 'px'});
			// Set width only if there is space available:
			if( tmpWidth < $('body').innerWidth() )
				$('.js-team .caterpillar').css({'width': tmpWidth + 'px'});
		}
		else {
			$( '.js-team' ).remove();
		}

		// Render achivers:
		tmpWidth  = wSpiracle;
		if( ( wallData.achievers || [] ).length > 0 ) {
			for( var idx = 0, arr = wallData.achievers, len = arr.length; idx < len; idx++ ) {
				Pluto.Templates.renderTemplate( 'banner-person-img', arr[idx], '.js-caterpillar-achvrs' );
				tmpWidth += wSpiracle;
			}
			$('.js-caterpillar-achvrs').css({'height': wSpiracle + 'px'});
			// Set width only if there is space available:
			if( tmpWidth < $('body').innerWidth() )
				$('.js-achvrs .caterpillar').css({'width': tmpWidth + 'px'});
		}
		else {
			$( '.js-achvrs' ).remove();
		}

		// Set DOJ:
		if( wallData.dateOfJoining ) {
			var objDoj = new Date( wallData.dateOfJoining );
			$('#js-doj span').text( (function(){ return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][ objDoj.getMonth() ]; })() + ' ' + objDoj.getDate() + ', ' + objDoj.getFullYear() );
		}
		else {
			$('#js-doj').remove();
		}

		// Set rating:
		setRating( wallData.rating );

		// Render reviews:
		if( (wallData.reviews || []).length > 0 ) {
			for( var idx = 0, arr = wallData.reviews, len = arr.length; idx < len; idx++ ) {
				if( arr[idx]._id && arr[idx]._id.$oid )
					arr[idx].pid = arr[idx]._id.$oid;
				Pluto.Templates.renderTemplate( 'inst-review', arr[idx], '.js-reviews' );
			}
		}
		else {
			$( '.js-reviews' ).parent().prev().remove();
			$( '.js-reviews' ).parent().remove();
		}

		// Render courses:
		var $tabContnr       = $('.tab-container');
		var $tabContntContnr = $('.tab-content-container');
		for( var idx = 0, arr = wallData.courseList, len = arr.length; idx < len; idx++ ) {
			$tabContnr
				.append( '<a href="#" class="tab" data-target="tab-content-' + idx + '">' + arr[idx].examName + '</a>' );

			$tabContntContnr
				.append( '<div id="tab-content-' + idx + '" class="tab-content" />' );

			for( var idx2 = 0, arr2 = arr[idx].courses, len2 = arr2.length; idx2 < len2; idx2++ ) {
				arr2[idx2]._id = ( arr2[idx2]._id || {} ).$oid;
				Pluto.Templates.renderTemplate( 'card-crse', arr2[idx2], '#tab-content-' + idx );
			}

		}

		if( wallData.courseList.length ) {
			$('.tab-container').closest('.wall-main-cell').append('<p class="t-right"><a href="' + wallOwner + '/courses">view all</a></p>');

			$('.tab:eq(0)').addClass( 'tab-active' );
		}

		// Render centers:
		var $slCenters = $('#slCenters');
		if( ( wallData.centers || [] ).length > 0 ) {
			for( idx = 0, arr = wallData.centers, len = arr.length; idx < len; idx++ ) {
				if( idx < LIMIT_CENTER )
					// Render center on banner:
					Pluto.Templates.renderTemplate( 'card-cntr', arr[idx], '.js-centers' );
				// Put centers info in review form:
				$slCenters.append('<option value="' + arr[idx].pid + '">' + arr[idx].city + ' - ' + arr[idx].address + '</option>');
			}
		}
		else {
			$( '.js-centers' ).parent().prev().remove();
			$( '.js-centers' ).parent().remove();
		}

		$('.js-centers').find('.srch-result-wrapper').each(function() {
			$(this).addClass('srch-res-prvw');
		});

		// Fix the href of instiute entities:
		$('.js-entity-share').each(function() {
			$(this).attr( 'href', wallOwner + '/' + $(this).attr( 'href' ) );
		});

		// Bind the cover photo click to image upload:
		$('#js-cover-upld').on('click', function( event ){
			$('#btCoverUpld').click();
			event.preventDefault();
		});

		$('#btDelImg').on('click', function( event ) {
			var toSend = {
				instId   : currUser,
				fileUrl  : $('.cover-photo img').attr( 'src' ).trim(),
				type     : 'COVER_IMAGE'
			};

			$.post('institute/delete', JSON.stringify( toSend ) )
				.done(function( response ) {
					if( response.status === 200 ) {
						badger.show( 'Hero removed successfully' );
						$('#mdl-img-del').fadeOut( 'fast' );
						$('.cover-photo img').attr( 'src', '' );
					}
				});
			event.preventDefault();
		});

		$('#btCoverUpld').on('change', function() {
			var files = $(this)[0].files;
			if( files && files[0] ) {
				// Get the image mime type:
				imgMimeType = files[0].type;

				if( blobURL ) {
					URL.revokeObjectURL( blobURL );
				}

				blobURL = URL.createObjectURL( files[0] );
				$cropperImage
					.closest('.modal')
					.show();
				$cropperImage
					.cropper({
						aspectRatio: 16 / 6,
						multiple: false,
						dragCrop: false,
						dashed: false,
						movable: true,
						resizable: true
					})
					.cropper( 'replace', blobURL );

				$(this).val('');
			}
		});

		/**
		 * @args
		 *   uploadType  - [PROFILE_IMAGE, COVER_IMAGE, OTHER]
		 *   description - A sample description
		 */
		var uploadImage = function( uploadType, description, imgData ) {
			var formData = {
				id          : wallOwnerId,
				fileData    : imgData,
				fileFormat  : 'image',
				uploadType  : uploadType,
				description : description,
				mimeType    : imgMimeType
			};

			console.log( 'Uploading hero with:', formData );

			$.post( 'institute/upload', JSON.stringify( formData ) )
				.done(function( response ) {
					console.log( 'Response from server: ' + JSON.stringify( response ) );
					if( response.status === 200 ) {
						// Preview this image on the DOM:
						$currImg.attr( 'src', response.data );
						// Notify user:
						badger.show( 'Hero uploaded successfully' );
					} else {
						badger.show( 'Hero upload failed', 'error', { stayTime: 4 } );
					}
				})
				.fail(function( response ) {
					console.log( 'Hero upload failed with response from server: ' + JSON.stringify( response ) );
					badger.show( 'Hero upload failed', 'error', { stayTime: 4 } );
				});
		};

		$('#btImgCrop').on('click', function() {
			// Hide the modal:
			$cropperImage
				.attr('src', '')
				.closest('.modal')
				.fadeOut();

			// Get the image data:
			var imgData = $cropperImage.cropper('getDataURL');

			// Show loader while image uploads:
			$currImg.attr( 'src', 'assets/img/loading-tiny.gif' );

			// Upload image to server:
			uploadImage( 'COVER_IMAGE', 'Hero', imgData );
		});

		$('#btImgCropCancel').on('click', function() {
			$cropperImage.cropper('destroy');

			// Hide the modal:
			$cropperImage
				.closest('.modal')
				.hide();
		});

		$('#btErrorInfoSubmit').on('click', function() {
			var tags   = [];
			$('.cb:checked').each(function() {
				tags.push( $(this).data('tag') || '' );
			});

			if( tags.length === 0 ) {
				badger.show( 'Please select a field', 'error' );
				return;
			}

			if( tags.length === 1 && tags[0] === 'other' ) {
				badger.show( 'Please write comments also', 'error' );
				return;
			}

			var toSend = {
				instId : wallOwnerId,
				text   : $('#tbErrorInfoText').val().trim(),
				tags   : tags
			};

			$.post('institute/reportError', JSON.stringify( toSend ))
				.done(function( response ) {
					badger.show( 'Error reported successfully', 'success' );
					console.log( 'Response from server:', response );
				})
				.fail(function( response ) {
					console.log( 'Failed:', response );
				});

			$(this).closest('.modal').fadeOut();
		});

		$('#btShutdown').on('click', function() {
			var toSend = { instId: wallOwnerId };

			$.post( 'institute/reportShutdown', JSON.stringify( toSend ) )
				.done(function( response ) {
					badger.show( 'Shutdown report sent successfully', 'success' );
					console.log( 'Response from server:', response );
				})
				.fail(function( response ) {
					console.log( 'Failed:', response );
				});

			$(this).closest('.modal').fadeOut();
		});

		$( '.js-show-rating, .rating-box' ).on('click', function( event ) {
			var $ratingHelper = $(this).find( '.js-rating-helper' );
			var $allRating    = $( '.all-rating' );
			var isVisible     = $allRating.data( 'isVisible' );

			// Slide toggle:
			$allRating.slideToggle('fast');

			if( $ratingHelper.text().indexOf( 'details' ) === -1 ) return;

			// Set text:
			if( !isVisible ) {
				$ratingHelper.text( 'hide details' );
				$allRating.data( 'isVisible', true );
			}
			else {
				$ratingHelper.text( 'view details' );
				$allRating.data( 'isVisible', false );
			}
			event.preventDefault();
		});
	};

	$(document).on('click', '.tab', function( event ) {
		var $this  = $(this);
		var target = $this.data('target');

		$('.tab').removeClass('tab-active');
		$this.addClass('tab-active');

		$('.tab-content').hide();
		$('#' + target).show();

		event.preventDefault();
	});

	$('.js-modal-show').on('click', function( event ) {
		if( $(this).attr('id') !== 'js-cover-remove' || $('.cover-photo img').attr('src') )
			$( $(this).data( 'target' ) || '' ).show();
		event.preventDefault();
	});

	$('.js-modal-close').on('click', function( event ) {
		$(this).closest('.modal').fadeOut();
	});

	// Set the links and properties if the user is logged in:
	if( currUser && role === 'student' ) {
		$( '#lnk-review' ).data( 'target', '#mdl-review' );
		$( '#frm-review-submit' ).data({
			'user-id': currUser,
			'inst-id': wallOwnerId
		});
	}

	// Remove the review link if user is not a student:
	if( role === 'institute' ) {
		$( '#lnk-review' ).remove();
	}

	// If no session variable, stop right there, you super fast train, you:
	if( !wallOwner ) return;

	if( pageData ) {
		// Build the wall, goddammit:
		buildWall( pageData );
	}

	// Set the tab's left property:
	var cumLeft = 0;
	for( var idx = 1, arr = $('.tab'), len = arr.length; idx < len; idx++ ) {
		cumLeft += parseInt( arr.eq( idx - 1 ).css('width').split( 'px' )[0] );
		arr.eq( idx ).css( { 'left': cumLeft + 'px' } );
	}

	// Lastly, get similar institutes:
	if( !currUser || !isUserOwner )
		$.get('institute/getSimilar?exam=' + ( ( pageData.courseList[0] || {} ).examName || '' ) + '&currentInst=' + wallOwnerId + '&skip=' + ( currSkip + SIMILAR_LIMIT ) + '&limit=' + currLimit, function( response ) {
			// Render similar institutes:
			if( response.status === 200 && ( response.data || [] ).length > 0 ) {
				$('.js-similar').html( '' );
				for( idx = 0, arr = response.data, len = arr.length; idx < len; idx++ ) {
					arr[idx].noLazy = true;
					Pluto.Templates.renderTemplate( 'card-inst', arr[idx], '.js-similar' );
				}
				$('.js-similar').find('.srch-result-wrapper').each(function() {
					$(this).addClass('srch-res-prvw');
				});
			}
			else {
				$( '.js-similar' ).parent().prev().remove();
				$( '.js-similar' ).parent().remove();
			}
		});
	else {
		$( '.js-similar' ).parent().prev().remove();
		$( '.js-similar' ).parent().remove();
	}

	// Also get the logged in user's review and rating:
	if( role === 'student' )
		$.get('institute/getUserReview?instituteId=' + wallOwnerId, function( response ) {
			if( response.status === 200 ) {
				$('#tbReviewContent').val( response.data[0].review );
				$('#rgRatingInfra').val( ( response.data[0].rating || {} ).infra ).change();
				$('#rgRatingFaculty').val( ( response.data[0].rating || {} ).faculty ).change();
				$('#rgRatingMaterial').val( ( response.data[0].rating || {} ).material ).change();
				$('#reviewId').val( response.data[0]._id.$oid );
				if( response.data[0].centerId )
					$('#slCenters').val( response.data[0].centerId );
			}
		});
});