/**
 * home.js
 * -------
 * @desc Client-side handling for the home page; forms logo matrix, etc.
 * @author Navi
 */

$(document).ready(function() {

	// Variables:
	var $matrix = $( '.matrix' );
	var brdrRad = 0;  // in px
	var bgWidth = 960; // in px
	var hWindow = window.innerHeight;
	var wWindow = $('body').innerWidth();
	var hvrExpd = 10; // amount of width and height to be increased of logo (in px)
	var freshLocThreshold = 24 * 3600 * 1000; // the time threshold after which fresh location is gotten (in milliseconds)

	// Derived variables:
	var wLogo   = wWindow < bgWidth ? 100 : 160;
	var extra   = wWindow < bgWidth ?   0 : 2 * wLogo;
	var spacing = wWindow < bgWidth ?  20 : 50;
	var wMatrix = wWindow + 2 * extra;
	var hMatrix = hWindow + 2 * extra;

	// Adjust the matrix for panning effect:
	$matrix.closest('.page').css( 'height', hWindow + 'px' );
	$matrix.css({
		'width'   : wMatrix + 'px',
		'height'  : hMatrix + 'px',
		'left'    : -1 * extra + 'px',
		'top'     : -1 * extra + 'px',
		'overflow': 'hidden'
	});


	// This method draws the logo matrix on the basis of current city and state:
	var drawLogoMatrix = function( city, state ) {
		$.get( 'home/getImageMatrix?city=' + ( city || '' ) + '&state=' + ( state || '' ) )
			.done( function( response ){
				if( response.status === 'OK' || response.status === 200 ) {
					var arrLogos = response.data;
					var numLogo  = arrLogos.length;

					// Clear the matrix first:
					$matrix.html('');

					// Add logos to matrix:
					var wTmp    = wLogo;
					var hTmp    = wLogo;
					var numHorz = 0;
					var numVert = 0;
					while( hTmp < hMatrix ) {
						wTmp    = wLogo;
						numHorz = 0;
						while( wTmp < wMatrix ) {
							$matrix
								.append( '<div class="logo-matrix__logo inline-blk">' +
									'<a href="#" class="white">' +
										'<img alt="Institute logo">' +
									'</a>' +
								'</div>' );
							wTmp += wLogo;
							numHorz++;
						}
						hTmp += wLogo;
						numVert++;
					}

					$matrix.find( '.logo-matrix__logo' ).each(function( idx, el ) {
						var $this = $(this);
						var randm = Math.ceil( Math.random() * numLogo ) - 1;
						$this
							.css({
								'width'  : ( wWindow < bgWidth ? wMatrix / numHorz : wLogo ) + 'px',
								'height' : ( wWindow < bgWidth ? hMatrix / numVert : wLogo ) + 'px'
							});
						$this.find( 'a' )
							.css({
								'width'         : ( wLogo - spacing ) + 'px',
								'height'        : ( wLogo - spacing ) + 'px',
								'border-radius' : brdrRad + 'px'
							})
							.attr({
								'href'  : arrLogos[ randm ] && arrLogos[ randm ].username || '#',
								'title' : arrLogos[ randm ] && arrLogos[ randm ].name || ''
							});
						$this.find( 'img' )
							.attr( 'src', arrLogos[ randm ] && arrLogos[ randm ].profileImg || 'assets/img/logo-placeholder.jpg' );
					});

					// Go parallax:
					if( wWindow >= bgWidth )
						$('#scene').parallax();
				}
			});
	};

	// Get location data from browser storage otherwise get from server:
	if( typeof localStorage !== 'undefined' ) {
		// Get the timestamp stored:
		var prevT = parseInt( localStorage.getItem( 'prevT' ) );

		// Get current timestamp:
		var currT = Date.now();

		// Check if difference is less than the expiry time:
		var isLocationValid = ( currT - prevT ) <= freshLocThreshold ? true : false;

		if( isLocationValid ) {
			// Draw logo matrix from storage location data:
			drawLogoMatrix( localStorage.getItem( 'city' ), localStorage.getItem( 'state' ) );
		}
		else {
			// Modify the previous reference time:
			localStorage.setItem( 'prevT', currT );

			// Get location data from server:
			$.get( 'http://ipinfo.io/json' )
				.done(function( res ) {
					console.log( '1. Found location - City: ' + res.city + ', State: ' + res.region );
					drawLogoMatrix( res.city, res.region );
					// Store info in storage:
					localStorage.setItem( 'city',  res.city   || '' );
					localStorage.setItem( 'state', res.region || '' );
				})
				.fail(function( err ) {
					drawLogoMatrix();
				});
		}
	}
	else
		$.get( 'http://ipinfo.io/json' )
			.done(function( res ) {
				console.log( '2. Found location - City: ' + res.city + ', State: ' + res.region );
				drawLogoMatrix( res.city, res.region );
			})
			.fail(function( err ) {
				drawLogoMatrix();
			});

	$(document).on('mouseover', '.logo-matrix__logo a', function() {
		$(this).css({
			'width'  : ( ( wLogo - spacing ) + hvrExpd ) + 'px',
			'height' : ( ( wLogo - spacing ) + hvrExpd ) + 'px'
		});
	});
	$(document).on('mouseout', '.logo-matrix__logo a', function() {
		$(this).css({
			'width'  : ( wLogo - spacing ) + 'px',
			'height' : ( wLogo - spacing ) + 'px'
		});
	});

});