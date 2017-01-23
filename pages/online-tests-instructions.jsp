<div class="content">
	<div class="container">
		<div class="banner">
			<h1 id="msgTitle" class="mono big center">Online test instructions</h1>
			<hr />
		</div>
		<br />
		<br />
		<p class="big msg">Please read the below instructions carfully and only then proceed to take the test:</p>
		<ul class="big msg">
			<li>During the test, do not press the browser Back button or the Refresh button.</li>
			<li>In case of any difficulty, contact the administrator.</li>
		</ul>
		<br />
		<p class="t-right">
			<a href="${hostName}online-tests/conduct/{testId}" id="beginTestLink" class="bigger">Begin test</a>
		</p>
	</div>
</div><!-- .content -->

<script type="text/javascript" src="${hostName}assets/scripts/lib/jquery.min.js?v=${version}"></script>
<script type="text/javascript" src="${hostName}assets/scripts/utils/site-nav.js?v=${version}"></script>
<script type="text/javascript">
	$(document).ready(function() {
		var $link  = $( '#beginTestLink' );
		var href   = $link.attr( 'href' );
		var testId = getParameterByName( 'id' ) || 'not_found';
		$link.attr( 'href', href.replace( '{testId}', testId ) )
	});
</script>