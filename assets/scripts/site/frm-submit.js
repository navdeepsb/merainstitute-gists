/**
 * frm-submit.js
 * -------------
 * @desc Handling of various 'form submits' through out Pluto, plus social login (FB, G+)
 * @author Navi, Purvesh
 */

$(document).ready(function() {

	// Initialize password validator:
	if( Pluto && Pluto.Validator && Pluto.Validator.Password )
		Pluto.Validator.Password.init({
			$input: $('#tbPwd1'),
			$pwdStrengthBar: $('.pwd-strength-bar')
		});

	// Helper variables (global in this closure):
	var accAvailability = {
		email      : false,
		username   : false,
		contactNum : false
	};
	var context = '';

	$('#frm-reg').on('submit', function( event ) {
		var name      = $('#tbName').val().trim();
		var email     = $('#tbEmail').val().trim();
		var username  = $('#tbUsername').val().trim();
		var contactNo = $('#tbContactNo').val().trim();
		var pwd1      = $('#tbPwd1').val().trim();
		var pwd2      = $('#tbPwd2').val().trim();
		var payload   = {};
		var $pacer    = $(this).find( '.pacer' );
		$pacer.css({'width': '0%'});

		// Initiate check on the current field:
		$('.js-check-me').blur();

		if( name === '' || email === '' || pwd1 === '' || pwd2 === '' || username === '' || contactNo === '' ) {
			badger.show( 'Incomplete form', 'error' );
			$('#tbName').focus();
		}
		else if(pwd1 !== pwd2) {
			badger.show( 'Passwords don\'t match', 'error' );
			$('#tbPwd1').focus();
		}
		else if( !Pluto.Validator.Password.isValid() ) {
			badger.show( 'Password is not strong enough', 'error' );
			$('#tbPwd1').focus();
		}
		else if( !Pluto.Validator.Email.isValid( email ) ) {
			badger.show( 'Please provide a valid email address', 'warn' );
			$('#tbEmail').focus();
		}
		else if( !Pluto.Validator.Username.isValid( username ) ) {
			badger.show( 'Please provide a valid username', 'warn' );
			$('#tbUsername').focus();
		}
		else if( !Pluto.Validator.PhoneNumber.isValid( contactNo ) ) {
			badger.show( 'Please provide a valid mobile number', 'warn' );
			$('#tbContactNo').focus();
		}
		else if( !( accAvailability.email && accAvailability.username && accAvailability.contactNum ) ) {
			badger.show( 'Please correct the unavailable fields', 'error' );
			$('#tbEmail').focus();
		}
		else {
			// Show the pacer:
			$pacer.show().animate({'width': '50%'});
			$('#btRegister').removeClass('btn-sheen-intrctve').prop('disabled', true).text('Registering...');

			payload.name       = name;
			payload.email      = email;
			payload.password   = pwd1;
			payload.username   = username;
			payload.contactNum = contactNo;

			$.post('register', JSON.stringify(payload), function( response ) {
				// Animate the pacer to 100% and hide it:
				$pacer.animate({'width': '100%'}, function() {
					$(this).css({'width': '0%'}).hide();
					$('#btRegister').addClass('btn-sheen-intrctve').prop('disabled', false).text('Register');
				});

				if( response.status === 200 ) {
					window.location.href = '../custommsg?code=MSG08';
				}
				else {
					badger.show( 'Something went wrong, please try again', 'error' );
				}
			});
		}

		event.preventDefault();
	});

	$('.js-check-me').on('blur', function() {
		var $this   = $(this);
		var toCheck = $this.val().trim();
		var entity  = $this.attr( 'name' );

		if( !toCheck ) return;
		if( entity === 'email' && !Pluto.Validator.Email.isValid( toCheck ) ) return;
		if( entity === 'username' && !Pluto.Validator.Username.isValid( toCheck ) ) return;
		if( entity === 'contactNum' && !Pluto.Validator.PhoneNumber.isValid( toCheck ) ) return;

		$this.closest('.tb-hint-wrapper').find('.auto-checker').html('<span class="fa fa-refresh fa-spin"></span>');

		$.get( '../login/checkAvailability?entity=' + entity + '&value=' + toCheck )
			.done(function( response ) {
				if( response.status !== 200 ) {
					$this.closest('.tb-hint-wrapper').find('.auto-checker').html('<span class="fa fa-times-circle" style="color: #fe4365"></span>');
					return;
				}

				if( response.data.result ) {
					$this.closest('.tb-hint-wrapper').find('.auto-checker').html('<span class="fa fa-check-circle"></span>');
					accAvailability[entity] = true;
				}
				else {
					$this.closest('.tb-hint-wrapper').find('.auto-checker').html('<span class="fa fa-times-circle" style="color: #fe4365"></span>');
					accAvailability[entity] = false;
				}
			});
	});

	$('#frm-reg-user').on('submit', function( event ) {
		var name      = $('#tbName').val().trim();
		var email     = $('#tbEmail').val().trim();
		var pwd1      = $('#tbPwd1').val().trim();
		var pwd2      = $('#tbPwd2').val().trim();
		var payload   = {};
		var $pacer    = $(this).find( '.pacer' );
		$pacer.css({'width': '0%'});

		if( name === '' || email === '' || pwd1 === '' || pwd2 === '' ) {
			badger.show( 'Incomplete form', 'error' );
			$('#tbName').focus();
		}
		else if(pwd1 !== pwd2) {
			badger.show( 'Passwords don\'t match', 'error' );
			$('#tbPwd1').focus();
		}
		else if( !Pluto.Validator.Password.isValid() ) {
			badger.show( 'Password is not strong enough', 'error' );
			$('#tbPwd1').focus();
		}
		else if( !Pluto.Validator.Email.isValid( email ) ) {
			badger.show( 'Please provide a valid email address', 'warn' );
			$('#tbEmail').focus();
		}
		else {
			// Show the pacer:
			$pacer.show().animate({'width': '33%'});
			$('#btRegister').removeClass('btn-sheen-intrctve').prop('disabled', true).text('Registering...');

			$.get( 'login/checkAvailability?entity=email&value=' + email )
				.done(function( response ) {
					// Show the pacer:
					$pacer.show().animate({'width': '66%'});

					if( response.status !== 200 ) {
						$pacer.animate({'width': '100%'}, function() {
							$(this).css({'width': '0%'}).hide();
							$('#btRegister').addClass('btn-sheen-intrctve').prop('disabled', false).text('Register');
						});
						return;
					}

					if( !response.data.result ) {
						// Email not available:
						badger.show( 'Email already registered', 'error', { stayTime: 4 } );
						$pacer.animate({'width': '100%'}, function() {
							$(this).css({'width': '0%'}).hide();
							$('#btRegister').addClass('btn-sheen-intrctve').prop('disabled', false).text('Register');
						});
						return;
					}

					payload.name     = name;
					payload.email    = email;
					payload.password = pwd1;

					$.post('user/register', JSON.stringify(payload), function( response ) {
						// Animate the pacer to 100% and hide it:
						$pacer.animate({'width': '100%'}, function() {
							$(this).css({'width': '0%'}).hide();
							$('#btRegister').addClass('btn-sheen-intrctve').prop('disabled', false).text('Register');
						});

						if( response.status === 200 ) {
							window.location.href = 'custommsg?code=MSG01&email=' + email;
						}
						else {
							badger.show( 'Something went wrong, please try again', 'error' );
						}
					});
				});
		}

		event.preventDefault();
	});

	$('#frm-chng-pwd').on('submit', function( event ) {
		var pwdOld   = $('#tbPwdOld').val().trim();
		var pwd1     = $('#tbPwd1').val().trim();
		var pwd2     = $('#tbPwd2').val().trim();
		var payload  = {};
		var _thisFrm = $(this);
		var $pacer   = $(this).find( '.pacer' );
		$pacer.css({'width': '0%'});

		if( _thisFrm.data('no-click') ) {
			_thisFrm.data('no-click', '');
			event.preventDefault();
			return;
		}

		if(pwdOld === '' || pwd1 === '' || pwd2 === '') {
			badger.show( 'Please fill complete form', 'error' );
			$('#tbPwdOld').focus();
		}
		else if(pwd1 !== pwd2) {
			badger.show( 'Passwords don\'t match', 'error' );
			$('#tbPwd1').focus();
		}
		else if( !Pluto.Validator.Password.isValid() ) {
			badger.show( 'Password is not strong enough', 'error' );
			$('#tbPwd1').focus();
		}
		else {
			// Show the pacer:
			$pacer.show().animate({'width': '33%'});
			$('#btChangePwd').removeClass('btn-sheen-intrctve').prop('disabled', true).text('Changing...');

			payload.oldPassword = pwdOld;
			payload.newPassword = pwd1;

			// Now proceed to change password:
			$.post('changePassword', JSON.stringify( payload ), function( response ) {
				// Animate the pacer to 100% and hide it:
				$pacer.animate({'width': '100%'}, function() {
					$(this).css({'width': '0%'}).hide();
					$('#btChangePwd').addClass('btn-sheen-intrctve').prop('disabled', false).text('Change');
				});

				if( response.status === 1003 ) {
					badger.show( 'Old password is not correct', 'error' );
					return;
				}

				if( response.status !== 200 ) {
					badger.show( 'Couldn\'t process request, please try again', 'error' );
					return;
				}

				badger.show( 'Password changed successfully' );

				// Hide the modal and empty the field:
				_thisFrm.closest('.modal').hide();
				_thisFrm.find('input').val('');
			});
		}

		event.preventDefault();
	});

	$('.js-no-click').on('click', function() {
		$(this).closest('form').data('no-click', 'yes');
	});

	$('.js-frm-chng-entity').on('submit', function( event ) {
		var _thisFrm = $(this);
		var entity   = _thisFrm.find('input').eq(0).attr('name').trim();
		var value    = _thisFrm.find('input').eq(0).val().trim();
		var dispName = _thisFrm.find('input').eq(0).data('entity-name').trim();
		var toUpdate = _thisFrm.data('to-update').trim();
		var $frmPwd  = $('#frm-ver-pwd');

		// Focus:
		_thisFrm.find('input').eq(0).focus();

		if( _thisFrm.data('no-click') ) {
			_thisFrm.data('no-click', '');
			event.preventDefault();
			return;
		}

		if( !value ) {
			badger.show( 'Please provide something to change', 'error' );
			_thisFrm.find('input').eq(0).focus();
		}
		else if( ( entity === 'email' && !Pluto.Validator.Email.isValid( value ) ) || ( entity === 'contactNum' && !Pluto.Validator.PhoneNumber.isValid( value ) ) || ( entity === 'username' && !Pluto.Validator.Username.isValid( value ) ) ) { // validate inputs
			badger.show( dispName + ' is not valid', 'warn' );
		}
		else {
			// Set values that will be needed later:
			$frmPwd.data( 'entity', entity );
			$frmPwd.data( 'value', value );
			$frmPwd.data( 'dispName', dispName );
			$frmPwd.data( 'toUpdate', toUpdate );

			// Show verify password form:
			$('#mdl-ver-pwd').show();
		}

		event.preventDefault();
	});

	$('#frm-ver-pwd').on('submit', function( event ) {
		var _thisFrm = $(this);
		var _prevFrm = $('.js-frm-chng-entity');
		var $pwd     = _thisFrm.find('input[type="password"]');
		var $button  = _thisFrm.find('button').eq(0);
		var $pacer   = _thisFrm.find( '.pacer' );
		var entity   = _thisFrm.data( 'entity' );
		var value    = _thisFrm.data( 'value' );
		var dispName = _thisFrm.data( 'dispName' );
		var toUpdate = _thisFrm.data( 'toUpdate' );
		var pwd      = $pwd.val().trim();
		var payload  = {};
		$pacer.css({'width': '0%'});

		// Focus:
		$pwd.focus();

		if( _thisFrm.data('no-click') ) {
			_thisFrm.data('no-click', '');
			// Reset previously set values:
			_thisFrm.data( 'entity', '' );
			_thisFrm.data( 'value', '' );
			_thisFrm.data( 'dispName', '' );
			_thisFrm.data( 'toUpdate', '' );
			$pwd.val('');
			event.preventDefault();
			return;
		}

		if( !pwd ) {
			badger.show( 'Incomplete form', 'error' );
			$pwd.focus();
		}
		else {
			// Show the pacer:
			$pacer.show().animate({'width': '33%'});
			$button.removeClass('btn-sheen-intrctve').prop('disabled', true).text('Verifying...');

			$.post( '../institute/isPasswordValid', JSON.stringify( { password : pwd } ) )
				.done(function( response ) {
					if( response.status !== 200 ) {
						badger.show( 'Couldn\'t process request, please try again', 'error' );
						// Animate the pacer to 100% and hide it:
						$pacer.animate({'width': '100%'}, function() {
							$(this).css({'width': '0%'}).hide();
							$button.addClass('btn-sheen-intrctve').prop('disabled', false).text('Verify');
						});
						return;
					}

					if( response.data ) {
						$.get( '../login/checkAvailability?entity=' + entity + '&value=' + value )
							.done(function( response ) {
								if( response.status !== 200 ) {
									badger.show( 'Couldn\'t process request, please try again', 'error' );
									// Animate the pacer to 100% and hide it:
									$pacer.animate({'width': '100%'}, function() {
										$(this).css({'width': '0%'}).hide();
										$button.addClass('btn-sheen-intrctve').prop('disabled', false).text('Verify');
									});
									return;
								}

								if( response.data.result ) {
									$pacer.show().animate({'width': '66%'});
									payload[entity] = value;

									// Now proceed to change username:
									$.post('updateBasicInfo', JSON.stringify( payload ), function( response ) {
										// Animate the pacer to 100% and hide it:
										$pacer.animate({'width': '100%'}, function() {
											$(this).css({'width': '0%'}).hide();
											$button.addClass('btn-sheen-intrctve').prop('disabled', false).text('Verify');
										});

										if( response.status !== 200 ) {
											badger.show( 'Couldn\'t process request, please try again', 'error' );
											return;
										}

										if( entity === 'email' ) {
											badger.show( 'A verification email has been sent to ' + value, { stayTime: 10 } );
										}
										else
											badger.show( dispName + ' changed successfully' );

										if( entity === 'username' ) window.location.href = '../logout';

										// Hide the modal and empty the field:
										_thisFrm.closest('.modal').hide();
										_prevFrm.closest('.modal').hide();
										_thisFrm.find('input').val('');
										_prevFrm.find('input').val('');
										$( toUpdate ).text( value );
									});
								}
								else {
									badger.show( dispName + ' is unavailable', 'warn' );
									// Animate the pacer to 100% and hide it:
									$pacer.animate({'width': '100%'}, function() {
										$(this).css({'width': '0%'}).hide();
										$button.addClass('btn-sheen-intrctve').prop('disabled', false).text('Verify');
									});
									$pwd.val('').focus();
								}
							});
					}
					else {
						badger.show( 'Wrong password', 'error' );
						// Animate the pacer to 100% and hide it:
						$pacer.animate({'width': '100%'}, function() {
							$(this).css({'width': '0%'}).hide();
							$button.addClass('btn-sheen-intrctve').prop('disabled', false).text('Verify');
						});
						$pwd.val('').focus();
					}
				});
		}

		event.preventDefault();
	});

	$('#frm-login').on('submit', function( event ) {
		var _thisFrm = $(this);
		var loginID  = $('#tbLoginId').val().trim();
		var password = $('#tbPwd').val().trim();
		var $pacer   = _thisFrm.find( '.pacer' );
		$pacer.css({'width': '0%'});

		// Set the context:
		context = _thisFrm.data( 'context' );

		if( _thisFrm.data('no-click') ) {
			_thisFrm.data('no-click', '');
			event.preventDefault();
			return;
		}

		if( loginID === '' || password === '' ) {
			badger.show( 'Incomplete form', 'error' );
			$('#tbLoginId').focus();
		}
		else {
			// Show the pacer:
			$pacer.show().animate({'width': '50%'});
			$('#btLogin').removeClass('btn-sheen-intrctve').prop('disabled', true).text('Logging in...');

			$.post( ( context === 'review' ? '../' : '' ) + 'login', { 'loginID': loginID, 'password': password }, function( data ) {
				// Animate the pacer to 100% and hide it:
				$pacer.animate({'width': '100%'}, function() {
					$(this).css({'width': '0%'}).hide();
					$('#btLogin').addClass('btn-sheen-intrctve').prop('disabled', false).text('Login');
				});

				if ( data.status === 200 ) {
					if( context === 'banner' || context === 'review' ) {
						badger.show( 'Login successful. Please wait..', { persist: true } );
						window.location.reload();
					}
					else
						window.location.replace( 'institute/portfolio' );
				}
				else if ( data.status === 1001 ) {
					window.location.href = 'custommsg?code=MSG06&loginId=' + loginID;
				}
				else if ( data.status === 1002 ) {
					badger.show( 'Invalid credentials', 'error' );
				}
			});
		}

		event.preventDefault();
	});

	$('#frm-forgot-pwd').on('submit', function( event ) {
		var loginId  = $('#tbLoginId').val().trim();
		var $pacer = $(this).find( '.pacer' );
		$pacer.css({'width': '0%'});

		if( loginId === '' ) {
			badger.show( 'Incomplete form', 'error' );
			$('#tbLoginId').focus();
		}
		else {
			// Show the pacer:
			$pacer.show().animate({'width': '50%'});
			$('#btResetPwd').removeClass('btn-sheen-intrctve').prop('disabled', true).text('Submitting...');

			var toSend = { loginID : loginId };
			$.post( 'user/forgotPassword', JSON.stringify( toSend ) )
				.done(function( response ) {
					// Animate the pacer to 100% and hide it:
					$pacer.animate({'width': '100%'}, function() {
						$(this).css({'width': '0%'}).hide();
					});
					$('#btResetPwd').addClass('btn-sheen-intrctve').prop('disabled', false).text('Submit');

					if( response.status === 200 ) {
						// Success!
						window.location.href = 'custommsg?code=MSG03&resendTo=' + response.data.email;
					}
					else if( response.status === 1004 ) {
						// This account not found:
						badger.show( 'We do not recognize any account associated with this login ID', 'error', { stayTime: 4 } );
					}
				});
		}

		event.preventDefault();
	});

	$('#frm-supp').on('submit', function( event ){
		var name     = $('#tbName').val().trim();
		var email    = $('#tbEmail').val().trim();
		var suppType = $('#slSuppType option:selected').text();
		var suppTxt  = $('#tbSuppText').val().trim();
		var payload  = {};
		var _thisFrm = $(this);
		var $pacer   = $(this).find( '.pacer' );
		$pacer.css({'width': '0%'});

		if(name === '' || email === '' || suppTxt === '') {
			badger.show( 'Incomplete form', 'error' );
			$('#tbName').focus();
		}
		else if( !Pluto.Validator.Email.isValid( email ) ) {
			badger.show( 'Please provide a valid email address', 'warn' );
			$('#tbEmail').focus();
		}
		else {
			// Show the pacer:
			$pacer.show().animate({'width': '50%'});
			$('#btSuppSend').removeClass('btn-sheen-intrctve').prop('disabled', true).text('Submitting...');

			payload.name     = name;
			payload.email    = email;
			payload.suppType = suppType;
			payload.suppTxt  = suppTxt;
			payload.addedOn  = Date.now();
			payload.prevUrl  = getParameterByName( 'prevUrl' );

			$.post( 'support', JSON.stringify( payload ) )
			.done(function( response ) {
					// Animate the pacer to 100% and hide it:
					$pacer.animate({'width': '100%'}, function() {
						$(this).css({'width': '0%'}).hide();
						$('#btSuppSend').addClass('btn-sheen-intrctve').prop('disabled', false).text('Submit');
					});
					_thisFrm.find( 'input, textarea' ).val('');
					badger.show( 'merainstitute.com support contacted successfully', { persist : true } );
			})
			.fail(function( response ) {
				console.error( 'Error occurred:', response );
			});
		}

		event.preventDefault();
	});

	$('#frm-advertise').on('submit', function( event ){
		var name     = $('#tbName').val().trim();
		var email    = $('#tbEmail').val().trim();
		var phoneNum = $('#tbContactNo').val().trim();
		var query    = $('#tbQuery').val().trim();
		var payload  = {};
		var _thisFrm = $(this);
		var $pacer   = $(this).find( '.pacer' );
		$pacer.css({'width': '0%'});

		if( name === '' || email === '' || phoneNum === '' || query === '' ) {
			badger.show( 'Incomplete form', 'error' );
			$('#tbName').focus();
		}
		else if( !Pluto.Validator.Email.isValid( email ) ) {
			badger.show( 'Please provide a valid email address', 'warn' );
			$('#tbEmail').focus();
		}
		else if( !Pluto.Validator.PhoneNumber.isValid( phoneNum ) ) {
			badger.show( 'Please provide a valid contact number', 'warn' );
			$('#tbContactNo').focus();
		}
		else {
			// Show the pacer:
			$pacer.show().animate({'width': '50%'});
			$('#btAdvReq').removeClass('btn-sheen-intrctve').prop('disabled', true).text('Submitting...');

			payload.name       = name;
			payload.email      = email;
			payload.contactNum = phoneNum;
			payload.query      = query;

			$.post( 'advertise', JSON.stringify( payload ) )
				.done(function( response ) {
					// Animate the pacer to 100% and hide it:
					$pacer.animate({'width': '100%'}, function() {
						$(this).css({'width': '0%'}).hide();
						$('#btAdvReq').addClass('btn-sheen-intrctve').prop('disabled', false).text('Submit');
					});

					if( response.status === 200 ) {
						_thisFrm.find( 'input, textarea' ).val( '' );
						badger.show( 'Request submitted successfully', { persist : true } );
					}
					else {
						badger.show( 'Couldn\'t submit request, please try again', 'warn' );
					}
				})
				.fail(function( response ) {
					console.error( 'Error occurred:', response );
				});
		}

		event.preventDefault();
	});




	/*****************************************************
	 *
	 * Review submission
	 *
	 *****************************************************/
	$('.js-rating-slidr').on('change', function() {
		$(this).prev('label').find('.usr-rating').text( $(this).val() );
	});

	$('#frm-review-submit').on('submit', function( event ) {
		var _thisFrm     = $(this);
		var reviewTxt    = $('#tbReviewContent').val().trim();
		var currRating1  = parseInt( $('#rgRatingInfra').val() );
		var currRating2  = parseInt( $('#rgRatingFaculty').val() );
		var currRating3  = parseInt( $('#rgRatingMaterial').val() );
		var instCenterId = $('#slCenters option:selected').val();
		var instCenter   = instCenterId === '-1' ? '' : $('#slCenters option:selected').text();
		var currUserId   = _thisFrm.data( 'user-id' );
		var currInstId   = _thisFrm.data( 'inst-id' );

		// Get the context:
		context = _thisFrm.data( 'context' );

		if( _thisFrm.data('no-click') ) {
			_thisFrm.data('no-click', '');
			event.preventDefault();
			return;
		}

		// Pre-check:
		if( !currUserId || !currInstId ) {
			badger.show( 'Review can\'t be submitted right now', 'error' );
			event.preventDefault();
			return;
		}

		// Validate:
		if( !reviewTxt && !currRating1 && !currRating2 && !currRating3 ) {
			badger.show( 'Please write a review or rate before submiting', 'error' );
			event.preventDefault();
			return;
		}

		// Form the JSON, boy:
		var toSend = {
			userId     : currUserId,
			instId     : currInstId,
			reviewedOn : Date.now(),
			review 	   : reviewTxt,
			center     : instCenter,
			centerId   : instCenterId,
			rating     : {
				infra    : currRating1,
				faculty  : currRating2,
				material : currRating3
			}
		};

		$.post( ( context === 'review' ? '../' : '' ) + 'institute/reviewAndRating', JSON.stringify( toSend ) )
			.done(function( response ) {
				if( response.status === 200 ) {
					badger.show( 'Review submitted for verification', { stayTime : 5 } );
					$('#reviewId').val( response.data._id && response.data._id.$oid );
				}
			})
			.fail(function(response) {
				console.log( 'Failed:', response );
			});

		_thisFrm.closest('.modal').fadeOut();
		event.preventDefault();
	});

	$('#btDelReview').on('click', function() {
		var _thisFrm = $(this);
		var reviewId = $('#reviewId').val().trim();

		// Get the context:
		context = _thisFrm.data( 'context' );

		// Validate:
		if( !reviewId ) {
			badger.show( 'You need to add a review before deleting it', 'error' );
			return;
		}

		// Form the JSON, boy:
		var toSend = {
			_id       : reviewId,
			isDeleted : true
		};

		$.post( ( context === 'review' ? '../' : '' ) + 'institute/reviewAndRating', JSON.stringify( toSend ) )
			.done(function( response ) {
				if( response.status === 200 ) {
					badger.show( 'Review deleted successfully' );
					$('#reviewId').val('');
				}
			})
			.fail(function(response) {
				console.log( 'Failed:', response );
			});

		_thisFrm.closest('.modal').fadeOut();

		// Reset review and rating:
		$('#tbReviewContent').val('');
		$('#slCenters').val('-1');
		$('.js-rating-slidr').val(0).change();
		$('#reviewId').val('');
	});




	/*****************************************************
	 *
	 * Social login
	 *
	 *****************************************************/
	window.googleInitComplete = function() {
		$( '#btLoginGoogle' )
			.prop( 'disabled', false)
			.find( '.social-txt' ).text( 'Connect with Google' );
	};

	window.fbInitComplete = function() {
		$( '#btLoginFacebook' )
			.prop( 'disabled', false)
			.find( '.social-txt' ).text( 'Connect with Facebook' );
	};

	// Facebook login callback:
	$( '#btLoginFacebook' ).on('click', function() {
		var $pacer = $( '#facebookPacer' );
		context = $(this).data( 'context' );

		$pacer
			.css( { 'width': '0%' } )
			.show()
			.animate( { 'width': '25%' } )
			.prev( 'button' )
			.prop( 'disabled', true )
			.find( '.social-txt' )
			.text( 'Connecting with Facebook...' );

		// Fire up the oAuth dialog:
		FB.login( function( response ) {
			if( response.authResponse ) {
				$pacer.show().animate( { 'width': '50%' } );
				FB.api('/me?fields=id,name,email,gender,age_range,birthday', function(user) {
					$pacer.show().animate( { 'width': '75%' } );
					fbLogin( user );
				});
			} else {
				/** response has no data, which indicates that the user cancelled the authorization,
				 ** Note: skipping permission(s) won't cause this or lead to this,
				 ** you need to use FB.api('/me/permission')
				 ** to check the requeired permission(s) **/
				$pacer
					.animate( { 'width': '0%' } )
					.hide()
					.prev( 'button' )
					.prop( 'disabled', false )
					.find( '.social-txt' )
					.text( 'Connect with Facebook' );
			}
		},{
			/** put permissions you need in scope parameter in this schema:
			 ** 'scope_1, scope_2, scope_3 ..etc'
			 ** in this example the app won't request any extra permission rather than the
			 ** public_profile, so the scope is empty in our case **/
			scope     : 'public_profile,email',
			auth_type : 'rerequest'
		});
	});

	// Facebook login handler:
	var fbLogin = function( user ) {
		var $pacer = $( '#facebookPacer' );

		if( user.email ) {
			// Get profile image:
			FB.api( '/me/picture',
				{
					'redirect' : false,
					'type'     : 'large'
				},
				function( response ) {
					$pacer.show().animate({'width': '90%'});
					socialRegister( user.email, user.name, response.data.url, user.gender, user.birthday, user.age_range, user.id, 'facebook' );
			});
		} else {
			// User declined the email permission. Can't proceed.
			$pacer
				.animate( { 'width': '0%' } )
				.hide()
				.prev( 'button' )
				.prop( 'disabled', false )
				.find( '.social-txt' )
				.text( 'Connect with Facebook' );
		}
	};

	// Google login callback:
	$('#btLoginGoogle').on('click', function() {
		context = $(this).data( 'context' );
		gapi.auth.signIn({
			'clientid'     : '408132528531-f5o8j8fnff057qca7fjn9qc5ga9h7i1g.apps.googleusercontent.com',
			'cookiepolicy' : 'single_host_origin',
			'callback'     : googleLogin,
			'scope'        : 'https://www.googleapis.com/auth/plus.profile.emails.read https://www.googleapis.com/auth/plus.login'
		});
	});

	// Google login handler:
	var googleLogin = function( result ) {
		var $pacer = $( '#googlePacer' );

		if( result.error === 'immediate_failed' ) {
			// Do nothing
		} else {
			$pacer
				.css( { 'width': '0%' } )
				.show()
				.animate( { 'width': '25%' } )
				.prev( 'button' )
				.prop( 'disabled', true )
				.find( '.social-txt' )
				.text( 'Connecting with Google...' );

			if( result.status.signed_in ) {
				if( result.status.method === 'PROMPT' ) {
					var request = gapi.client.plus.people.get({
						'userId': 'me',
						'fields': 'id,displayName,image,gender,birthday,ageRange,emails'
					});
					$pacer.show().animate( { 'width': '65%' } );
					request.execute(function( resp ) {
						$pacer.show().animate( { 'width': '80%' } );

						// Get email:
						var email = '';
						for( var i = 0, arr = resp.emails || [], len = arr.length; i < len; i++) {
							if( resp.emails[i].type === 'account' ) {
								email = resp.emails[i].value;
							}
						}

						// Get other attributes:
						var userId     = resp.id;
						var name       = resp.displayName;
						var gender     = resp.gender;
						var profileImg = resp.image.url;
						var ageRange   = resp.ageRange;
						var birthday   = resp.birthday;

						$pacer.show().animate( { 'width' : '90%' } );

						// Reister the user:
						socialRegister( email, name, profileImg, gender, birthday, ageRange, userId, 'googlePlus' );
					});
				}
			} else {
				if( result.error === 'access_denied' ) {
					$pacer
						.animate( { 'width': '0%' } )
						.hide()
						.prev( 'button' )
						.prop( 'disabled', false )
						.find( '.social-txt' )
						.text( 'Connect with Google' );
				}
			}
		}
	};

	// Common method called by Google and Facebook SDK for register:
	var socialRegister = function( email, name, profileImg, gender, birthday, ageRange, socialId, socialType ) {
		var registerRequest = {
			loginId     : email,
			name        : name,
			profileImg  : profileImg,
			gender      : gender,
			birthday    : birthday,
			ageRange    : ageRange,
			socialId    : socialId,
			socialType  : socialType
		};

		$.post( ( context === 'review' ? '../' : '' ) + 'user/regin', JSON.stringify(registerRequest), function( response ) {
			if ( response.status === 200 ) {
				if(response.data.role === 'student' || response.data.role === 'STUDENT') {
					if( context === 'banner' || context === 'review' )
						window.location.reload();
					else
						window.location.href = '.';
				} else {
					window.location.href = 'institute/portfolio';
				}
			}
			else {
				console.log( 'Error in register. Status:', response.status, '; Desc:', response.statusDesc );
			}
		});
	};

});