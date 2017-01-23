<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="/WEB-INF/config/customFunctions.tld" prefix="util" %>
<div class="content">
	<div class="container">
		<div class="box srch-filters left">
			<div class="fltr-overlay" style="display: none"></div>
			<div class="srch-filter no-margin" style="display: none" data-fltr="examSubjMap">
				<label class="lbl-tb upper">Exams</label>
				<div id="fltr-01" class="checkbox-combo" style="height: 250px"></div>
			</div>
			<div class="srch-filter" style="display: none" data-fltr="instName">
				<label class="lbl-tb upper">Institute</label>
				<div id="fltr-02" class="checkbox-combo" style="height: 250px"></div>
			</div>
			<div class="srch-filter" style="display: none" data-fltr="courseType">
				<label class="lbl-tb upper">Course Type</label>
				<div id="fltr-03" class="checkbox-combo"></div>
			</div>
			<div class="srch-filter" style="display: none" data-fltr="workingDays">
				<label class="lbl-tb upper">Working days</label>
				<div id="fltr-04" class="checkbox-combo"></div>
			</div>
			<div class="srch-filter" style="display: none" data-fltr="durationz">
				<label class="lbl-tb"><span class="upper">Course duration</span> (in days)</label>
				<div class="inline-blk medium" style="width: 33.33%"><span id="dur-min">0</span></div><!--
				--><div class="inline-blk medium center" style="width: 33.33%"><span id="dur-val" class="highlight highlight-on-light">0</span></div><!--
				--><div class="inline-blk medium t-right" style="width: 33.33%"><span id="dur-max">0</span></div>
				<input type="range" class="slidr" min="0" max="0">
			</div>
			<div class="srch-filter" style="display: none" data-fltr="city">
				<label class="lbl-tb upper">City</label>
				<div id="fltr-05" class="checkbox-combo" style="height: 250px"></div>
			</div>
		</div>
		<div class="box srch-results left">
			<div class="srch-results-wrapper js-srch-results">
				<!-- Dynamic content to be displayed here -->
			</div>
			<div class="js-res-loader" style="display: none; background: #fff; margin-top: 30px; padding: 10px; border-radius: 5px">
				<p class="msg center big">
					<img src="assets/img/loading.gif" alt="loading" width="40">
					<br />
					Getting more results...
				</p>
			</div>
			<div class="no-more-srch" style="display: none">
				<p class="msg hint center">No more results</p>
			</div>
		</div>
	</div>
</div><!-- .content -->

<div class="loader-cntnr">
	<div class="loader-innr center">
		<img src="assets/img/loading.gif" alt="loading" width="60">
		<p class="mono">Getting results...</p>
	</div><!-- .loader-innr -->
</div><!-- .loader-cntnr -->

<script>
	var initFltrs = '${util:escapeJS( allElligibleFilters )}';
	var eligibleFltrs = '${util:escapeJS( elligibleFilters )}';
	var result = '${util:escapeJS( result )}';
	var status = '${status}';
</script>

<%-- #DEV block --%>
<c:if test="${env == 'dev'}">
	<script type="text/javascript" src="${hostName}assets/scripts/lib/jquery.min.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/utils/site-nav.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/lib/handlebars.runtime.min.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/lib/jquery.lazyload.min.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/lib/tinysort.min.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/compl/hbs-templates.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/utils/templates.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/site/filter.js?v=${version}"></script>
</c:if>

<%-- #PROD block --%>
<c:if test="${env == 'prod'}">
	<script type="text/javascript" src="${hostName}assets/scripts/dist/jquery.site-nav.min.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/dist/templates.min.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/dist/filter.min.js?v=${version}"></script>
</c:if>