<script>
	(function(d, s, id) {
		var js, fjs = d.getElementsByTagName(s)[0];
		if (d.getElementById(id)) {
			return;
		}
		js = d.createElement(s);
		js.id = id;
		js.src = "//connect.facebook.net/en_US/sdk.js";
		fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));

	window.fbAsyncInit = function() {
		FB.init({
			appId : '1530654253866204',
			xfbml : true,
			version : 'v2.3'
		});

		if( typeof fbInitComplete !== 'undefined' ) {
			fbInitComplete();
		} else {
			console.warn("FacebookSDK: fbInitComplete function not implemented on page.");
		}

		if( typeof fbShareInit !== 'undefined' ) {
			fbShareInit();
		} else {
			console.warn("FacebookSDK: fbShareInit function not implemented on page.");
		}
	};
</script>