<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<div class="content">
	<div class="container">
		<div class="banner">
			<h1 id="msgTitle" class="mono big center">Error 404</h1>
			<hr />
		</div>
		<div class="box center">
			<br />
			<br />
			<p id="msgSubtitle" class="msg big">
				The resource you are trying to access is not found on merainstitute.com
				<br />
				You can go to <a id="home" href="home">home</a> and start over again or clean up the nasty URL
			</p>
			<br />
			<br />
			<p class="small mint">
				<span class="fa fa-circle fa-fw"></span>
				<span class="fa fa-circle fa-fw"></span>
				<span class="fa fa-circle fa-fw"></span>
			</p>
		</div>
	</div>
</div><!-- .content -->

<%-- #DEV block --%>
<c:if test="${env == 'dev'}">
	<script type="text/javascript" src="${hostName}assets/scripts/lib/jquery.min.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/utils/site-nav.js?v=${version}"></script>
</c:if>

<%-- #PROD block --%>
<c:if test="${env == 'prod'}">
	<script type="text/javascript" src="${hostName}assets/scripts/dist/jquery.site-nav.min.js?v=${version}"></script>
</c:if>

<script>
	$(document).ready(function() {
		$('#home').attr( 'href', siteConfig.url.front );
	});
</script>