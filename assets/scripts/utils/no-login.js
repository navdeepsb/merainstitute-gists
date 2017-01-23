/**
 * Purpose
 * -------
 * Reloads cached page.
 * Useful when a page contains some logged-in user controls and we wish to not show them
 * when accessing the page by pressing the Back button of the browser.
 *
 * Add following in markup to trigger 'no-login'
 * ---------------------------------------------
 * <input id="reloadValue" type="hidden" name="reloadValue" value="" />
 *
 */

$(document).ready(function() {
	var $reloadVal = $( '#reloadValue' );
	if( ( $reloadVal.val() || '' ).length === 0 ) {
		// Control not present on page or value not set:
		$reloadVal.val( Date.now() );
	}
	else {
		// Found cached page:
		$reloadVal.val( '' );
		location.reload();
	}
});