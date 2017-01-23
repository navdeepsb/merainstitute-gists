<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<div class="content">
	<div class="container">
		<div class="banner">
			<h1 class="center">Search results</h1>
			<hr />
		</div>
		<br />
		<div style="padding: 0 20px">
			<p class="msg big center"><span id="verb">Searching</span> for &quot;<span id="qry">query</span>&quot;</p>
			<br />
			<div class="js-results">
				<p class="center">
					<img src="assets/img/loading.gif" alt="loader" width="60">
				</p>
			</div>
			<div class="js-res-loader" style="display: none; background: #fff; margin-top: 30px; padding: 10px; border-radius: 5px">
				<p class="msg center big">
					<img src="assets/img/loading.gif" alt="loading" width="40">
					<br />
					Getting more results...
				</p>
			</div>
			<div class="js-no-res" style="display: none">
				<p class="msg hint medium center">No results found</p>
			</div>
			<div class="no-more-srch" style="display: none">
				<p class="msg hint center">No more results</p>
			</div>
		</div>
	</div>
</div><!-- .content -->

<br />
<br />

<%-- #DEV block --%>
<c:if test="${env == 'dev'}">
	<script type="text/javascript" src="${hostName}assets/scripts/lib/jquery.min.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/utils/site-nav.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/lib/handlebars.runtime.min.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/lib/jquery.lazyload.min.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/compl/hbs-templates.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/utils/templates.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/site/srch-res.js?v=${version}"></script>
</c:if>

<%-- #PROD block --%>
<c:if test="${env == 'prod'}">
	<script type="text/javascript" src="${hostName}assets/scripts/dist/jquery.site-nav.min.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/dist/templates.min.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/dist/srch-res.min.js?v=${version}"></script>
</c:if>