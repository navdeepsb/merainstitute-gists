<script type="text/javascript">
	function onLoadCallback() {
		gapi.client.setApiKey('AIzaSyDERxSsR6XcHMcg644EulJtEv4SOCaf6mk');
		gapi.client.load('plus', 'v1', function() {});

		if( typeof googleInitComplete !== 'undefined' ) {
			googleInitComplete();
		} else {
			console.warn("GoogleSDK: googleInitComplete function not implemented on page.");
		}
	}

	(function() {
		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.async = true;
		script.src = 'https://apis.google.com/js/client.js?onload=onLoadCallback';
		var s = document.getElementsByTagName('script')[0];
		s.parentNode.insertBefore(script, s);
	})();
</script>