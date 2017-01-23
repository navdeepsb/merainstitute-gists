/**
 * @desc Timer utility class
 * @author Navi
 */

var Timer = function( config ) {
	// The element where the result of the timer will be displayed:
	this.targetEl = config.targetEl;

	// The function to be called after the timer has ended:
	this.onTimerEnd = config.onTimerEnd || function() {
		console.log( "Time's up, hoss!" );
	};
};

/**
 * @desc Starts the timer for the give duration
 * @params
 *     - dur {Number} Duration in seconds
 */
Timer.prototype.start = function( dur ) {
	// Local variables:
	var h = 0, m = 0, s = 0, timer = 0;

	// Cache the dur in a variable:
	timer = dur;

	// Preserve the context:
	var _this = this;

	this.interval = setInterval( function () {
		// Get hours, minutes and seconds:
		h = parseInt( timer / ( 60 * 60 ), 10 );
		m = parseInt( ( timer / 60 ) % 60, 10 );
		s = parseInt( timer % 60, 10 );

		// Format them:
		h = h < 10 ? "0" + h : h;
		m = m < 10 ? "0" + m : m;
		s = s < 10 ? "0" + s : s;

		// And the display them:
		_this.targetEl.innerText = h + ":" + m + ":" + s;

		// End condition of the timer:
		if( --timer < 0 ) {
			// Stop the timer:
			_this.stop();
			// Call the 'after timer end' function now:
			_this.onTimerEnd.call( _this );
		}
	}, 1000 );
};

/**
 * @desc Stops the current timer instance
 */
Timer.prototype.stop = function() {
	// Clear the interval so it can exit gracefully:
	clearInterval( this.interval );
};