/**
 * @desc For performing a task when the footer of a page is hit:
 * @author Navi
 * @dependency jQuery
 */

var $window   = $( window );
var $document = $( document );

var Footer = function( config ) {
	this.$footer     = config.$footer || $( '.footer' );
	this.onFooterHit = config.onFooterHit || function() {
		console.log( 'Footer hit!' );
	};

	// Cache the current context:
	var self = this;

	// Attach a scroll event to the curret window:
	$window.on( 'scroll', function() {
		if( $window.scrollTop() + $window.height() >=
			$document.height() - self.$footer.outerHeight( true ) ) {
			self.isFooterHit = true;
			self.onFooterHit.call( self );
		}
		else {
			self.isFooterHit = false;
		}
	});
};