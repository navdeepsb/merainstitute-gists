/**
 * cust-msg.js
 * ------------
 * @desc Contains handling for various custom messages on Pluto
 * @author Navi
 */

$(document).ready(function() {
	var currCode = '',
		emailId  = '',
		loginId  = '',
		resendTo = '';

	var custMsgs = [{
		"code": "MSG01",
		"title": "Signup Successful",
		"subtitle": "An activation email has been sent to <span id=\"email\" class=\"highlight-on-light\">your email address.</span> <br /> Follow the steps from there to activate your account. <br /><br /> <span class=\"fa fa-envelope-o fa-2x\"></span>"
	},{
		"code": "MSG02",
		"title": "Activation Successful",
		"subtitle": "Your account has been activated successfully. Click <a href=\"login\">here</a> to login."
	},{
		"code": "MSG03",
		"title": "Password Reset",
		"subtitle": "The details to access your account have been sent to <span id=\"crypto\" class=\"highlight-on-light\">your email address</span>"
	},{
		"code": "MSG04",
		"title": "Coming Soon",
		"subtitle": "This feature is coming very soon on <br/ > merainstitute.com"
	},{
		"code": "MSG06",
		"title": "Account not activated",
		"subtitle": "Your account has not yet been activated. Please check your inbox (as well as spam) folder for the activation email. <br /> If you haven't received the activation email at all, click <a href=\"#\" id=\"lnk-resend-email\">here</a> to resend it."
	},{
		"code": "MSG07",
		"title": "Resend activation email successful",
		"subtitle": "An activation email has been successfully resent to <span id=\"crypto\" class=\"highlight-on-light\">your email address</span> <br /> Please follow the instructions from there to activate your account. <br /><br /> <span class=\"fa fa-envelope-o fa-2x\"></span>"
	},{
		"code": "MSG08",
		"title": "Registration successful",
		"subtitle": "We have successfully registered your account but you won\'t be able to access it until we verify your details. <br /> We will get in touch shortly. <br /><br /> <span class=\"fa fa-smile-o fa-3x\"></span>"
	},{
		"code": "MSG09",
		"title": "About merainstitute.com",
		"subtitle": "merainstitute.com is a platform to help students choose the best coaching institute and courses for various competitive exams in India. A student can come on our website and view various coaching institutes' profile which includes courses, faculty members, achievers, centers, reviews and gallery. On the basis of this information and his/her convenience, the student can then decide which coaching institute he/she wants to join."
	}];

	// Get query params from the URL:
	currCode = getParameterByName( 'code' );
	emailId  = getParameterByName( 'email' );
	loginId  = getParameterByName( 'loginId' );
	resendTo = getParameterByName( 'resendTo' );

	// Find the message details and render on DOM:
	for( var idx = 0, len = custMsgs.length; idx < len; idx++ ) {
		if( custMsgs[idx].code && custMsgs[idx].code === currCode ) {
			document.title = custMsgs[idx].title + ' | ' + document.title.split( '|' ).pop();
			$('#msgTitle').text( custMsgs[idx].title );
			$('#msgSubtitle').html( custMsgs[idx].subtitle );
			break;
		}
	}

	// Set email ID if the corresponding adoptee exists:
	// MSG01
	if( $('#email').length && emailId ) $('#email').text( emailId );

	// Create link if the corresponding adoptee exists:
	// MSG06
	if( $('#lnk-resend-email').length && loginId ) {
		$(document).on('click', '#lnk-resend-email', function( event ) {
			var toSend = { loginID : loginId };
			$('#addMsg').html('<img src="assets/img/loading.gif" alt="loader" width="35">');
			$.post( 'institute/resendActivationMail', JSON.stringify( toSend ) )
				.done(function( response ) {
					if( response.status === 200 ) {
						// Success!
						window.location.href = 'custommsg?code=MSG07&resendTo=' + response.data.email;
					}
					else if( response.status === 1002 ) {
						// This account not found:
						$('#addMsg').html('<p class="msg big error">We do not recognize any account associated with the login ID <span class="underline">' + loginId + '</span></p>');
					}
				});
			event.preventDefault();
		});
	}

	// Do resend stuff:
	// MSG03 & MSG07
	if( $('#crypto').length && resendTo ) $('#crypto').text( resendTo );
});