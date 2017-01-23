/**
 * templates.js
 * ------------
 * @desc Contains Handlebars templates related functions
 * @author Navi
 * @dependenies jQuery, Handlebars
 */

/**
 * The following block makes this file (templates.js) independent of the framework:
 */
window.Pluto = window.Pluto || {};
Pluto.Templates = Pluto.Templates || {};

/**
 * @desc Renders templates on the DOM
 */
Pluto.Templates.renderTemplate = function( templateName, templateData, adoptingParentSelector, doPrepend ) {
	// Add `hostName` info in the object, this prop is used to create static links:
	templateData.hostName = siteConfig.url.front;

	var toRender = '';
	if( Array.isArray( templateData ) )
		toRender = templateData.length > 0 ? Pluto.Templates[templateName]( templateData ) : '';
	else
		toRender = Pluto.Templates[templateName]( templateData );
	// Render on DOM:
	if( !doPrepend )
		$( toRender ).hide().appendTo( adoptingParentSelector ).fadeIn();
	else
		$( toRender ).hide().prependTo( adoptingParentSelector ).fadeIn();
};

/**
 * Handlebars helper
 * @desc Returns the rating after manipulating it
 * @arg Sample `rating` object:
 * {
 *     overall : 9.33,
 *     infra   : 9,
 *     material: 9,
 *     faculty : 10,
 *     google  : 8,
 *     facebook: 9
 * }
 */
Handlebars.registerHelper( 'getRating', function( rating, type ) {
	if( !type )
		return rating.overall * 10;
	else
		return ( rating[ type ] || 0 ) * 10;
});

/**
 * Handlebars helper
 * @desc Performs basic subtraction
 * #generic
 */
Handlebars.registerHelper( 'sub', function( num1, num2 ) {
	return num1 - num2;
});

/**
 * Handlebars helper
 * @desc Reduces the course description
 */
Handlebars.registerHelper( 'lessDescr', function( description ) {
	var charsToShow = 65;
	var lessDescription = (description || '').substring(0, charsToShow);
	return (description || '').length <= charsToShow ? lessDescription : lessDescription + '...';
});

/**
 * Handlebars helper
 * @desc Checks if needle present in haystack or not
 * #generic
 */
Handlebars.registerHelper( 'contains', function( array, val, options ) {
	var isContains = false;
	for(var idx = 0, len = array.length; idx < len; idx++) {
		if( array[idx] === val ) {
			isContains = true;
			break;
		}
	}
	return isContains ? options.fn(this) : options.inverse(this);
});

/**
 * Handlebars helper
 * @arg
 *    + duration - in hours
 * @desc Returns course duration in readbale format
 */
Handlebars.registerHelper( 'courseDur', function( duration, durUnit ) {
	var durSuffix = '';
	if( durUnit == 5 ) {
		// Convert hours into years:
		duration  = Math.ceil( duration / ( 365 * 24 ) );
		durSuffix = duration > 1 ? ' years' : ' year';
		duration += durSuffix;
	}
	else if( durUnit == 4 ) {
		// Convert hours into months:
		duration  = Math.ceil( duration / ( 30 * 24 ) );
		durSuffix = duration > 1 ? ' months' : ' month';
		duration += durSuffix;
	}
	else if( durUnit == 3 ) {
		// Convert hours into weeks:
		duration  = Math.ceil( duration / ( 7 * 24 ) );
		durSuffix = duration > 1 ? ' weeks' : ' week';
		duration += durSuffix;
	}
	else if( durUnit == 2 ) {
		// Convert hours into days:
		duration  = Math.ceil( duration / 24 );
		durSuffix = duration > 1 ? ' days' : ' day';
		duration += durSuffix;
	}
	else {
		// Hours:
		durSuffix = duration > 1 ? ' hours' : ' hour';
		duration += durSuffix;
	}
	return duration;
});

/**
 * Handlebars helper
 * @arg
 *    + courseDur - in hours
 * @desc Returns course duration in days
 */
Handlebars.registerHelper( 'courseDurInDays', function( courseDur ) {
	return Math.ceil( courseDur / 24 );
});

/**
 * Handlebars helper
 * @arg
 *    + dateStart - milliseconds elapsed since Jan 1, 1970 00:00:00 UTC
 *    + dur       - hours
 * @desc Returns course progress %age
 */
Handlebars.registerHelper( 'courseProgress', function( dateStart, dur ) {
	var dateNow = Date.now();
	// Convert duration from hours to milliseconds:
	dur = dur * 3600 * 1000;
	if( dateStart > dateNow )
		// Course yet to start:
		return 0;
	else if( ( dur + dateStart ) <= dateNow )
		// Course completed:
		return 100;
	else {
		// Course in progress:
		var progress = ( dateNow - dateStart ) / dur;
		return Math.round( progress * 100 );
	}
});

/**
 * Handlebars helper
 * @arg
 *    + time - minutes from midnight
 * @desc Returns slot times in readable format
 */
Handlebars.registerHelper( 'slotTime', function( time ) {
	if( !time && time !== 0 ) return 'N.A.';
	var hour   = Math.floor( time / 60 );
	var suffix = hour < 12 ? ' AM' : ' PM';
	hour = hour <= 12 ? hour : hour - 12;
	if( time % 60 === 0 ) return ( hour || 12 ) + ':00' + suffix;
	return ( hour || 12 ) + ':' + ( time % 60 ) + suffix;
});

/**
 * Handlebars helper
 * @desc Removes white space
 */
Handlebars.registerHelper( 'noSpace', function( val ) {
	return val.replace( new RegExp( ' ', 'g' ), '_' );
});

/**
 * Handlebars helper
 * @desc Gets human readable date from long number
 */
Handlebars.registerHelper( 'getDate', function( dateInLong ) {
	var objDate = new Date( dateInLong );
	return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][ objDate.getMonth() ] + ' ' + objDate.getDate() + ', ' + objDate.getFullYear();
});

/**
 * Handlebars helper
 * @desc Gets human readable date and time from long number
 */
Handlebars.registerHelper( 'getDateAndTime', function( dateInLong ) {
	var date = Handlebars.helpers.getDate( dateInLong );
	// Now append time:
	var objDate = new Date( dateInLong );
	return date + " " + ( objDate.getHours() || '00' ) + ":" + ( objDate.getMinutes() || '00' );
});

/**
 * Handlebars helper
 * @desc Increments input number
 */
Handlebars.registerHelper( 'incr', function( num ) {
	return ++num;
});

/**
 * Handlebars helper
 * @arg
 *    + arr - array of values
 * @desc Returns comma separated string
 */
Handlebars.registerHelper( 'csv', function( arr ) {
	return arr.join(', ');
});

/**
 * Handlebars helper
 * @desc Returns true if all the supplied arguments are falsy
 */
Handlebars.registerHelper( 'isAllFalsy', function() {
	var len = arguments.length;
	// Listen up!
	// The arguments array's last value is a Handlebars hash, we call it 'options'
	var options = arguments[len - 1];
	for( var idx = 0; idx < len - 1; idx++ ) {
		if( arguments[idx] )
			// A value found truthy
			return options.inverse(this);
	}
	return options.fn(this);
});

/**
 * Handlebars helper
 * @desc Processes username and gets rid of URL characters
 */
Handlebars.registerHelper( 'processUnm', function( unm ) {
	return unm.substr( unm.lastIndexOf( '/' ) + 1 );
});

/**
 * Handlebars helper
 * @desc Returns no. of questions in a test
 */
Handlebars.registerHelper( 'getQuesCount', function( testSections ) {
	var num = 0;

	for( var idx = 0, len = ( testSections || [] ).length; idx < len; idx++ ) {
		num += ( testSections[ idx ].ques || [] ).length;
	}

	return num;
});

/**
 * Handlebars helper
 * @desc Returns seconds in hh:mm:ss format
 */
Handlebars.registerHelper( 'formatSeconds', function( seconds, isMinutes ) {
	var h = 0, m = 0, s = 0;

	seconds = isMinutes ? seconds * 60 : seconds;

	// Get hours, minutes and seconds:
	h = parseInt( seconds / ( 60 * 60 ), 10 );
	m = parseInt( ( seconds / 60 ) % 60, 10 );
	s = parseInt( seconds % 60, 10 );

	// Format them:
	h = h < 10 ? '0' + h : h;
	m = m < 10 ? '0' + m : m;
	s = s < 10 ? '0' + s : s;

	// And the return them:
	return h + ":" + m + ":" + s;
});

/**
 * Handlebars helper
 * @desc Plain operators implemented
 */
Handlebars.registerHelper( 'ifCond', function( v1, operator, v2, options ) {
	switch( operator ) {
		case '==':
			return ( v1 == v2 ) ? options.fn(this) : options.inverse(this);
		case '===':
			return ( v1 === v2 ) ? options.fn(this) : options.inverse(this);
		case '<':
			return ( v1 < v2 ) ? options.fn(this) : options.inverse(this);
		case '<=':
			return ( v1 <= v2 ) ? options.fn(this) : options.inverse(this);
		case '>':
			return ( v1 > v2 ) ? options.fn(this) : options.inverse(this);
		case '>=':
			return ( v1 >= v2 ) ? options.fn(this) : options.inverse(this);
		case '&&':
			return ( v1 && v2 ) ? options.fn(this) : options.inverse(this);
		case '||':
			return ( v1 || v2 ) ? options.fn(this) : options.inverse(this);
		default:
			return options.inverse(this);
	}
});

/**
 * Some event bindings related to the tempates:
 */
$(document).ready(function() {
	// Course description expansion related:
	$(document).on('click', '.js-toggle-descr', function( event ) {
		var $this = $(this);
		if( !parseInt( $this.data('expanded') ) ) {
			$this.text('show less');
			$this.data('expanded', '1');
		}
		else {
			$this.text('show more');
			$this.data('expanded', '0');
		}
		$this.parent().prev('.js-crse-descr').toggleClass('ellipsis');
		if( typeof Masonry !== 'undefined' )
			$('.bb-coll-wrapper').masonry().masonry( 'layout' );
		event.preventDefault();
	});

	// Course batch expansion related:
	$(document).on('click', '.batch-head', function() {
		$(this).find('span').toggleClass('rotate-180');
		$(this).next().slideToggle('fast', function() {
			if( typeof Masonry !== 'undefined' )
				$('.bb-coll-wrapper').masonry().masonry( 'layout' );
		});
	});

	// Showing answer to a question related:
	$(document).on('click', '.js-view-answ', function( event ) {
		// Variables:
		var $this      = $(this);
		var answer     = $this.data( 'answer' );
		var isRevealed = $this.data( 'revealed' );

		// Go change DOM now:
		$this
			.text( !isRevealed ? 'hide answer' : 'view answer' )
			.data( 'revealed', !isRevealed )
			.closest( '.tile__inner' )
			.find( '.answ[data-index="' +  answer + '"]' )
			.toggleClass( 'answ--correct' );

		event.preventDefault();
	});

	// Showing options to an answer:
	$(document).on('click', '.js-show-options', function() {
		// Variables:
		var $this      = $(this);
		var isRevealed = $this.data( 'revealed' );

		// Go change DOM now:
		$this
			.text( !isRevealed ? 'hide options' : 'show options' )
			.data( 'revealed', !isRevealed )
			.closest( '.tile__inner' )
			.find( '.js-options' )
			.slideToggle( 'fast' );

		event.preventDefault();
	});
});