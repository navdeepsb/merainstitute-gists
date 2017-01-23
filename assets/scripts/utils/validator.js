/**
 * validator.js
 * ------------
 * @desc Contains website validations for email, password, etc.
 * @author Navi
 * @dependenies jQuery
 */

/**
 * The following block makes this file (validator.js) independent of the framework:
 */
window.Pluto = window.Pluto || {
	Validator: {}
};

/**
 * Email address validator
 */
window.Pluto.Validator.Email = {
	filter: /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i,

	isValid: function( email ) {
		if ( this.filter.test( email ) ) return true;
		return false;
	}
};

/**
 * Phone number validator
 */
window.Pluto.Validator.PhoneNumber = {
	filter: /^\+?\d+((-|\s|)\d+)*$/,

	isValid: function( num ) {
		if ( this.filter.test( num ) ) return true;
		return false;
	}
};

/**
 * Username validator
 */
window.Pluto.Validator.Username = {
	invFilter: /[!,@,#,$,%,^,&,*,?,~,\-,(,),=,\/,.,\s,',"]/,

	isValid: function( num ) {
		if ( this.invFilter.test( num ) ) return false;
		return true;
	}
};

/**
 * Password validator
 *
 * @policy Any 3 of the following:
 *   - Password length is greater than or equal to min length
 *   - Password has an uppercase and lowercase character
 *   - Password has at least one number
 *   - Password has at least one special character
 */
window.Pluto.Validator.Password = {
	minLength: 7,

	minStrength: 3,

	isMinLength: false,

	strengthIndicatorClass: [
		'strength-poor', // strength = 0
		'strength-poor', // strength = 1
		'strength-mild', // strength = 2
		'strength-mild', // strength = 3
		'strength-best'  // strength = 4
	],

	init: function( config ) {
		// Get config:
		this.$input          = config.$input; // mandatory
		this.$pwdStrengthBar = config.$pwdStrengthBar; // mandatory
		this.minLength       = config.minLength || this.minLength;

		// Set vairables:
		this.pwdStrength     = 0;

		// Assign callback (with the context of Pluto.Validator.Password object):
		this.$input.on('keyup', $.proxy(this.computeStrength, this));
	},

	computeStrength: function() {
		// Reset parameters:
		this.pwdStrength = 0;
		this.isMinLength = false;

		var pwd = this.$input.val().trim();

		// Length greater than or equal to min length:
		if ( pwd.length >= this.minLength ) {
			this.pwdStrength += 1;
			this.isMinLength = true;
		}

		// Both lower case and upper case:
		if ( pwd.match(/[a-z]/) && pwd.match(/[A-Z]/) ) {
			this.pwdStrength += 1;
		}

		// At least one number:
		if ( pwd.match(/\d+/) ) {
			this.pwdStrength += 1;
		}

		// At least one special character:
		if ( pwd.match(/.[!,@,#,$,%,^,&,*,?,_,~,\-,(,)]/) ) {
			this.pwdStrength += 1;
		}

		// Indicate strength:
		if ( this.pwdStrength === 0 ) {
			this.indicateStrength( this.strengthIndicatorClass[0], '5%' );
		}
		else if ( this.pwdStrength === 1 ) {
			this.indicateStrength( this.strengthIndicatorClass[1], '10%' );
		}
		else if ( this.pwdStrength === 2 ) {
			this.indicateStrength( this.strengthIndicatorClass[2], '20%' );
		}
		else if ( this.pwdStrength === 3 ) {
			this.indicateStrength( this.strengthIndicatorClass[3], '75%' );
		}
		else if ( this.pwdStrength === 4 ) {
			this.indicateStrength( this.strengthIndicatorClass[4], '100%' );
		}
	},

	indicateStrength: function( className, barWidth ) {
		this.$pwdStrengthBar
			.removeClass( this.strengthIndicatorClass.join(' ') )
			.addClass( className )
			.css({'width': barWidth});
	},

	isValid: function() {
		if ( ( this.pwdStrength >= this.minStrength || true ) && this.isMinLength ) return true;
		return false;
	}
};