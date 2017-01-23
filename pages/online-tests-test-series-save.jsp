<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<div class="content">
	<div class="container">
		<div class="banner">
			<h1 class="center">Save test series</h1>
			<hr />
		</div>
		<br />
		<br />
		<div class="center">
			<div class="col-6 inline-blk">
				<form id="frmSaveTestSeries" class="tile t-left">
					<div class="tile__inner">
						<div class="grid">
							<div class="col col-4">
								<label for="testSeriesName" class="lbl-tb upper">Test series name <sup class="error">*</sup></label>
							</div>
							<div class="col col-8">
								<input id="testSeriesName" name="testSeriesName" type="text" class="tb tb-light" spellcheck="false" autocomplete="off" placeholder="ex. AIIMS test series" tabindex="1">
							</div>
						</div>
						<div class="grid">
							<div class="col col-4">
								<label for="testSeriesDesc" class="lbl-tb upper">Description</label>
							</div>
							<div class="col col-8">
								<textarea id="testSeriesDesc" name="testSeriesDesc" rows="4" class="tb tb-light txt-ar" spellcheck="true" placeholder="ex. This test series is for preparation of AIIMS exam" tabindex="2"></textarea>
							</div>
						</div>
						<div class="grid">
							<div class="col col-4">
								<label for="tests" class="lbl-tb upper">Tests</label>
							</div><!-- .col -->
							<div class="col col-8">
								<div id="tests" class="checkbox-combo">
									<div class="center" role="loader">
										<img src="${hostName}assets/img/loading.gif" alt="loader" width="30">
									</div>
								</div><!-- .checkbox-combo -->
							</div><!-- .col -->
						</div><!-- .grid -->
						<div class="grid">
							<div class="col col-4"></div><!-- .col -->
							<div class="col col-8">
								<div class="pacer-wrappr">
									<button id="saveTestSeries" class="btn-sheen btn-sheen-small btn-sheen-intrctve upper" data-text="Save test series" data-text-alt="Saving test series..." tabindex="6">
										Save test series
										<span class="sheen"></span>
									</button>
									<div class="pacer"></div>
								</div>
							</div><!-- .col -->
						</div><!-- .grid -->
					</div><!-- .tile__inner -->
				</form><!-- .tile -->
			</div><!-- .inline-blk -->
		</div><!-- .center -->
	</div>
</div><!-- .content -->

<input id="testSeriesId" type="hidden">

<div id="page-loader" class="loader-cntnr">
	<div class="loader-innr center">
		<img src="${hostName}assets/img/loading.gif" alt="loading" width="60">
		<p class="mono">Loading...</p>
	</div><!-- .loader-innr -->
</div><!-- .loader-cntnr -->

<br />
<br />

<%-- #DEV block --%>
<c:if test="${env == 'dev'}">
	<script type="text/javascript" src="${hostName}assets/scripts/lib/jquery.min.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/lib/jquery.badger.min.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/lib/handlebars.runtime.min.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/compl/hbs-templates.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/utils/site-nav.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/utils/templates.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/odin/save-test-series.js?v=${version}"></script>
</c:if>

<%-- #PROD block --%>
<c:if test="${env == 'prod'}">
	<script type="text/javascript" src="${hostName}assets/scripts/dist/jquery.site-nav.min.js?v=${version}"></script>
</c:if>