/**
 * inst-entity.js
 * --------------
 * @desc Client-side handling for entity pages like team, achiever, centers, etc. (except courses)
 * @author Navi
 */

$(document).ready(function() {

	// Constants:
	var N_BANNER_ENTITIES = 5;

	// Variables:
	var arrEntity = pageData.team || pageData.achievers || pageData.centers || pageData.reviews || pageData.gallery || [];
	var isContextCenters = pageData.centers ? true : false;
	var isContextReviews = pageData.reviews ? true : false;
	var isContextGallery = pageData.gallery ? true : false;
	var ownerId     = pageData._id.$oid;
	var isUserOwner = currUser === ownerId ? true : false;
	var tmplName    = 'inst-person';
	var highlight   = getParameterByName( 'highlight' );
	var highlightee = null;
	var idx = 0, arr = [], len = -1;

	// Functions:
	var doHighlight = function( highlightee ) {
		if( highlight && highlightee ) {
			$('.js-highlight').html('').hide();
			highlightee.highlighted = true;
			highlightee.galleryImgThumb = highlightee.galleryImg;
			highlightee.owner = {
				name       : instName,
				username   : instUsername,
				profileImg : '../' + ( instImg || 'assets/img/logo-placeholder.jpg' )
			};
			Pluto.Templates.renderTemplate( tmplName, highlightee, '.js-highlight' );
			$('.share').fadeIn();
			$('.js-txt-other').fadeIn();
			$('#hero').hide();
			$('.js-highlight')
				.fadeIn()
				.find('.gallery-img button, .gallery-img .gallery-img-share')
				.remove();
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
			if( coll[ idx ].pid === identifier )
				return coll[ idx ];
		}
	};
	var fixReviewerImgLink = function( $elem ) {
		var imgUrl = $elem.attr('src');
		if( imgUrl.indexOf( 'user.svg' ) !== -1 ) {
			$elem.attr( 'src', '../' + imgUrl );
		}
	};

	// Set count:
	$('#n-count').text( arrEntity.length || 0 );

	// Set hero:
	if( pageData.heroImg && $('body').innerWidth() > 700 ) {
		$('#hero > img').attr( 'src', '../' + pageData.heroImg );
	}

	if( isContextCenters ) tmplName = 'card-cntr';
	if( isContextReviews ) tmplName = 'inst-review';
	if( isContextGallery ) tmplName = 'gallery-img';

	if( arrEntity.length ) $('.js-entity').html('');

	if( isContextGallery ) {
		var $currImg = null;

		for( idx = 0, arr = arrEntity, len = arr.length; idx < len; idx++ ) {
			// Find the highlighted entity and store it in a variable:
			if( arr[idx].pid === highlight )
				highlightee = arr[idx];
			// Render photos on the page:
			Pluto.Templates.renderTemplate( tmplName, arr[idx], '.js-gallery' );
		}

		// Do awesome gallery stuff here:
		$('.js-gallery').justifiedGallery( { rowHeight: 120 } );
		$('.swipebox').swipebox( { useSVG: false } );

		// Handle highlighted entity:
		doHighlight( highlightee );

		$(document).on('click', '.gallery-img-edt', function( event ) {
			var $this       = $(this);
			var $modal      = $( $this.data( 'target' ) || '' );
			var $galleryImg = $this.closest('.gallery-img').find('a');
			$modal.find('#tbPhotoDescr').val( $galleryImg.attr('title') );
			$modal.find('#tbPhotoId').val( $galleryImg.data('pid') );
			$modal.find('img').attr( 'src', $galleryImg.attr('href') );
			$modal.find('#tbPhotoDescr').focus();
			$currImg = $this.closest('.gallery-img');
			event.preventDefault();
		});

		$(document).on('click', '.gallery-img-del', function( event ) {
			var $galleryImg = $(this).closest('.gallery-img').find('a');
			$('#ownerPid').val( $galleryImg.data('pid') );
			$('#fileUrl').val( $galleryImg.attr('href') );
			$currImg = $(this).closest('.gallery-img');
			event.preventDefault();
		});

		$('#btSavePhoto').on('click', function() {
			var _pid    = $('#tbPhotoId').val().trim();
			var _descr  = $('#tbPhotoDescr').val().trim();

			var toSend = {
				pid   : _pid,
				descr : _descr
			};

			$.post( '../institute/galleryImageInfo', JSON.stringify( toSend ) )
			 	.done(function( response ) {
			 		if( response.status === 200 ) {
						badger.show( 'Photo updated successfully' );
						$currImg.find('a').attr( 'title', _descr );
						$currImg.find('img').attr( 'alt', _descr );
						if( $currImg.find('.caption').length )
							$currImg.find('.caption').text( _descr );
						else
							$currImg.append('<div class="caption" style="display: block; opacity: 0;">' + _descr + '</div>');
						if( !_descr ) $currImg.find('.caption').remove();
						$('#mdl-edit-photo').fadeOut( 'fast' );
						$('.js-gallery').justifiedGallery( {} );
			 		}
			 	})
			 	.fail(function() {
					console.log("Oops! An error has ocurred, please try again.");
			 		return;
			 	});
		});

		$('#btDelImg').on('click', function() {
			var toSend = {
				instId   : currUser,
				fileUrl  : $('#fileUrl').val().trim(),
				type     : 'GALLERY_IMAGE',
				ownerPid : $('#ownerPid').val().trim()
			};

			$.post('../institute/delete', JSON.stringify( toSend ) )
				.done(function( response ) {
					if( response.status === 200 ) {
						badger.show( 'Photo deleted successfully' );
						$('#mdl-img-del').fadeOut( 'fast' );
						$currImg.remove();
						$('.js-gallery').justifiedGallery();
						$('#n-count').text( parseInt( $('#n-count').text() ) - 1 );
					}
				});

			$('#fileUrl').val('');
			$('#ownerPid').val('');
		});
	}
	else {
		// For drag and drop sorting:
		var $sortable = $('.sortable');
		var sortedIDs = [];
		var arrEntitySorted = [];

		// Render on DOM:
		for( idx = 0, arr = arrEntity, len = arr.length; idx < len; idx++ ) {
			// Set the 'pid' for share feature:
			if( arr[idx]._id && arr[idx]._id.$oid )
				arr[idx].pid = arr[idx]._id.$oid;
			// Render this entity on the page:
			Pluto.Templates.renderTemplate( tmplName, arr[idx], '.js-entity' );
			// Find the highlighted entity and store it in a variable:
			if( arr[idx].pid === highlight )
				highlightee = arr[idx];
			// Make the sortable item:
			if( $sortable.length && isUserOwner )
				$sortable.append('<div id="' + arr[idx].pid + '" class="sortable-item">' +
						'<div class="ellipsis">' +
							'<span class="dp-tiny dp-tiny-medi">' +
								'<img src="../' + ( arr[idx].profileImg || 'assets/img/vectors/user.svg' ) + '" alt="img">' +
							'</span>' +
							'<span class="msg big">' + arr[idx].name + '</span> ' +
							'<span class="msg big mono">(' + ( arr[idx].achievement || arr[idx].title ) + ')</span>' +
						'</div>' +
					'</div>');
		}

		// Handle highlighted entity:
		doHighlight( highlightee );

		// Function to fix the share links:
		var fixShareLinks = function() {
			$( '.js-entity-share' ).each(function() {
				if( $(this).data( 'pid' ) )
					$(this).attr( 'href', '?highlight=' + $(this).data( 'pid' ) );
			});
		};

		// Fix share links initially:
		fixShareLinks();

		// Function to bookmark top n sortable items:
		var bookmarkSome = function( n ) {
			$sortable.find( '.sortable-item' ).removeClass('sortable-item-bookmark');
			for( idx = 0, arr = $sortable.find( '.sortable-item' ), len = arr.length; idx < len; idx++ ) {
				if( idx < n )
					$( arr[idx] ).addClass('sortable-item-bookmark');
				else
					break;
			}
		};

		// Call the bookmark function initially:
		bookmarkSome( N_BANNER_ENTITIES );

		// Initialize jQuery UI's sortable event:
		if( $sortable.length && isUserOwner )
			$sortable
				.sortable({
					cursor: 'move',
					placeholder: 'sortable-item-placeholder',
					containment: 'body',
					handle: '.dp-tiny',
					update: function( event, ui ) {
						bookmarkSome( N_BANNER_ENTITIES );
						sortedIDs = $(this).sortable( 'toArray' );
					}
				})
				.disableSelection();

		// Bind callback to toggle reordering container:
		$('#reorder').on('click', function( event ) {
			$('#reorder-container').slideToggle();
			event.preventDefault();
		});

		// Bind callback to save order:
		$('#save-order').on('click', function( event ) {
			// Which entity are we dealing with?
			var entity = $(this).data( 'entity' );

			if( sortedIDs.length && entity ) {
				arrEntitySorted = [];
				$('.js-entity').html('');
				// A 'for' loop is so beautiful:
				for( idx = 0, len = sortedIDs.length; idx < len; idx++ ) {
					// Find the entity corresponding to this Id:
					for( var idx2 = 0; idx2 < len; idx2++ ) {
						if( sortedIDs[idx] === arrEntity[idx2].pid ) {
							// Push in the sorted array:
							arrEntitySorted.push( arrEntity[idx2] );
							// Render:
							Pluto.Templates.renderTemplate( tmplName, arrEntity[idx2], '.js-entity' );
							break;
						}
					}
				}

				// Fix share links:
				fixShareLinks();

				// Save this updated array:
				var jsonToSave = { _id: pageData._id.$oid };
				jsonToSave[entity] = arrEntitySorted;
				$.ajax({
					url  : '../institute/updateBasicInfo',
					type : 'POST',
					data : JSON.stringify( jsonToSave ),
				})
				.done(function( data ) {
					badger.show( 'Saved successfully!' );
				})
				.fail(function() {
					badger.show( 'Couldn\'t save, please try again', 'error', { stayTime: 4 } );
				});
			}
			event.preventDefault();
		});
	}

	if( isContextReviews ) {
		// Fix image links:
		$('.reviewer-img img').each(function() {
			fixReviewerImgLink( $(this) );
		});

		// Set the links and properties if the user is logged in:
		if( currUser ) {
			$( '#lnk-review' ).data( 'target', '#mdl-review' );
			$( '#frm-review-submit' ).data({
				'user-id': currUser,
				'inst-id': ownerId
			});
		}

		// Remove the review link if user is not a student:
		if( role === 'institute' ) {
			$( '#lnk-review' ).remove();
		}

		// Also get the logged in user's review and rating (after getting centers):
		if( role === 'student' )
			$.get('../institute/center?instId=' + ownerId, function( response ) {
				if( response.status === 200 ) {
					var $slCenters = $('#slCenters');
					for( idx = 0, arr = ( response.data || {} ).centers || [], len = arr.length; idx < len; idx++ ) {
						// Put centers info in review form:
						$slCenters.append('<option value="' + arr[idx].pid + '">' + arr[idx].city + ' - ' + arr[idx].address + '</option>');
					}
				}

				$.get('../institute/getUserReview?instituteId=' + ownerId, function( response ) {
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
	}

	if( !isUserOwner ) $('.js-non-owner').remove();

	$(document).on('click', '.js-modal-show', function( event ) {
		$( $(this).data( 'target' ) || '' ).show();
		event.preventDefault();
	});

	$(document).on('click', '.js-modal-close', function( event ) {
		$(this).closest( '.modal' ).fadeOut();
	});

});