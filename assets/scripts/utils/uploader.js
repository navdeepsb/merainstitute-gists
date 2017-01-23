/**
 * uploader.js
 * -----------
 * @desc Uploading images to server
 * @author Navi
 * @dependenies jQuery
 */

$(document).ready(function() {

	var MAX_IMG_SIZE_IN_MB = 5;
	var imgMimeType        = '';

	$('.js-upload').on('click', function() {
		$('.js-upload-def').click();
	});

	$('.js-upload-def').on('change', function() {
		var input   = $(this)[0];
		if ( input.files && input.files[0] ) {
			// Get the image mime type:
			imgMimeType = input.files[0].type;

			if( input.files[0].size < MAX_IMG_SIZE_IN_MB * 1024 * 1024 ) { // Convert Mb to bytes
				var reader = new FileReader();

				reader.onload = function (e) {
					uploadImage( 'GALLERY_IMAGE', '', e.target.result, 'ownerID' );
				};

				reader.readAsDataURL( input.files[0] );
			}
			else {
				badger.show( 'Image size greater than ' + MAX_IMG_SIZE_IN_MB + ' Mb', 'error', { stayTime: 4 } );
			}
		}
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

		$('.loader-cntnr').show();

		$.post( '../institute/upload', JSON.stringify( formData ) )
			.done(function( response ) {
				$('.loader-cntnr').hide();
				if( response.status === 200 ) {
					$('#n-count').text( parseInt( $('#n-count').text() ) + 1 );
					$('.js-entity').html('');
					Pluto.Templates.renderTemplate( 'gallery-img', response.data, '.js-gallery' );
					$('.js-gallery').justifiedGallery( {} ).justifiedGallery('norewind');
				} else {
					badger.show( 'Image upload failed', 'error', { stayTime: 4 } );
				}
			})
			.error(function( data) {
				badger.show( 'Image upload failed', 'error', { stayTime: 4 } );
			});
	}

});