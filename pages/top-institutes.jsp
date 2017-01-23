<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="/WEB-INF/config/customFunctions.tld" prefix="util" %>
<div class="content">
	<div class="container">
		<div class="banner">
			<h1 class="center">Top coaching institutes</h1>
			<hr />
		</div>
		<br />
		<div style="padding: 0 20px">
			<p class="msg big center">
				Showing institutes for
				<select class="combo on-light w-auto js-sort-combo" data-type="exam-grp">
					<option value="all-exams">All exams</option>
					<option value="jee-medical-aipmt-aiims">JEE &amp; PMT</option>
					<option value="gate-ies">GATE &amp; IES</option>
				</select>
				and sorted by
				<select class="combo on-light w-auto js-sort-combo" data-type="rating-crtria">
					<optgroup label="MeraInstitute">
						<option value="overall-rating" data-type="">Overall</option>
						<option value="infrastructure-rating" data-type="infra">Infrastructure</option>
						<option value="faculty-rating" data-type="faculty">Faculty</option>
						<option value="study-material-rating" data-type="material">Study Material</option>
					</optgroup>
					<optgroup label="Social">
						<option value="google-rating" data-type="google">Google</option>
						<option value="facebook-rating" data-type="facebook">Facebook</option>
					</optgroup>
				</select>
				rating
			</p>
			<br />
			<div class="js-results"></div>
			<div class="js-res-loader" style="display: none; background: #fff; margin-top: 30px; padding: 10px; border-radius: 5px">
				<p class="msg center big">
					<img src="../../assets/img/loading.gif" alt="loading" width="40">
					<br />
					Getting more institutes...
				</p>
			</div>
			<div class="js-no-res" style="display: none">
				<p class="msg hint medium center">No institutes found</p>
			</div>
			<div class="no-more-srch" style="display: none">
				<p class="msg hint center">No more institutes</p>
			</div>
		</div>
	</div>
</div><!-- .content -->

<br />
<br />

<div class="loader-cntnr" style="display: none">
	<div class="loader-innr center">
		<img src="../../assets/img/loading.gif" alt="loading" width="60">
		<p class="mono">Getting institutes...</p>
	</div><!-- .loader-innr -->
</div><!-- .loader-cntnr -->

<script>
	var inlineData = '${util:escapeJS( inlineData )}';
</script>

<%-- #DEV block --%>
<c:if test="${env == 'dev'}">
	<script type="text/javascript" src="${hostName}assets/scripts/lib/jquery.min.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/utils/site-nav.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/lib/handlebars.runtime.min.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/lib/jquery.lazyload.min.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/compl/hbs-templates.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/utils/templates.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/site/top-inst.js?v=${version}"></script>
</c:if>

<%-- #PROD block --%>
<c:if test="${env == 'prod'}">
	<script type="text/javascript" src="${hostName}assets/scripts/dist/jquery.site-nav.min.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/dist/templates.min.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/dist/top-inst.min.js?v=${version}"></script>
</c:if>