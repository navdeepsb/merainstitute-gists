<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<div class="content">
	<div class="container">
		<div class="banner">
			<h1 class="center">Save online test</h1>
			<hr />
		</div>
		<br />
		<br />
		<div class="center">
			<div class="col-6 inline-blk">
				<form id="frmSaveTest" class="tile t-left">
					<div class="tile__inner">
						<div class="grid">
							<div class="col col-4">
								<label for="testName" class="lbl-tb upper">Test name <sup class="error">*</sup></label>
							</div>
							<div class="col col-8">
								<input id="testName" name="testName" type="text" class="tb tb-light" spellcheck="false" autocomplete="off" placeholder="ex. AIIMS simulation - part 1" tabindex="1">
							</div>
						</div>
						<div class="grid">
							<div class="col col-4">
								<label for="testDesc" class="lbl-tb upper">Description</label>
							</div>
							<div class="col col-8">
								<textarea id="testDesc" name="testDesc" rows="4" class="tb tb-light txt-ar" spellcheck="true" placeholder="ex. This test is a simulation for AIIMS exam" tabindex="2"></textarea>
							</div>
						</div>
						<div class="grid">
							<div class="col col-4">
								<label for="timeDur" class="lbl-tb upper">Duration (in minutes) <sup class="error">*</sup></label>
							</div>
							<div class="col col-8">
								<input id="timeDur" name="timeDur" type="text" class="tb tb-light" spellcheck="false" autocomplete="off" placeholder="ex. 180" tabindex="2">
							</div>
						</div>
						<div class="grid">
							<div class="col col-4">
								<label for="aliveFrom" class="lbl-tb upper">Alive range</label>
							</div><!-- .col -->
							<div class="col col-8">
								<div class="grid">
									<div class="col col-8 no-gutter">
										<input id="aliveFrom" name="aliveFrom" type="text" class="tb tb-light" data-val="0" spellcheck="false" autocomplete="off" placeholder="ex. 15 Jul, 2015" tabindex="3">
									</div><!-- .col -->
									<div class="col col-4 no-gutter" style="padding-left: 10px">
										<input id="aliveFromTime" name="aliveFromTime" type="text" class="tb tb-light" data-val="0" spellcheck="false" autocomplete="off" placeholder="ex. 10:00 AM" tabindex="3">
									</div><!-- .col -->
								</div><!-- .grid -->
								<p class="center medium" style="line-height: 3">to</p>
								<div class="grid">
									<div class="col col-8 no-gutter">
										<input id="aliveTo" name="aliveTo" type="text" class="tb tb-light" data-val="0" spellcheck="false" autocomplete="off" placeholder="ex. 15 Aug, 2015" tabindex="4">
									</div><!-- .col -->
									<div class="col col-4 no-gutter" style="padding-left: 10px">
										<input id="aliveToTime" name="aliveToTime" type="text" class="tb tb-light" data-val="0" spellcheck="false" autocomplete="off" placeholder="ex. 10:00 AM" tabindex="4">
									</div><!-- .col -->
								</div><!-- .grid -->
							</div><!-- .col -->
						</div><!-- .grid -->
						<div class="grid none">
							<div class="col col-4">
								<label for="testSeries" class="lbl-tb upper">Test series</label>
							</div><!-- .col -->
							<div class="col col-8">
								<div id="testSeries" class="checkbox-combo">
									<div class="center" role="loader">
										<img src="${hostName}assets/img/loading.gif" alt="loader" width="30">
									</div>
								</div>
							</div><!-- .col -->
						</div><!-- .grid -->
						<div class="grid">
							<div class="col col-4"></div><!-- .col -->
							<div class="col col-8">
								<div class="pacer-wrappr">
									<button id="saveTest" class="btn-sheen btn-sheen-small btn-sheen-intrctve upper" data-text="Save test" data-text-alt="Saving test..." tabindex="6">
										Save test
										<span class="sheen"></span>
									</button>
									<div class="pacer"></div>
								</div>
							</div><!-- .col -->
						</div><!-- .grid -->
					</div><!-- .tile__inner -->
				</form><!-- .tile -->
				<div class="grid" style="margin-top: 20px">
					<div class="col col-6 no-gutter" style="padding-right: 10px">
						<div class="tile">
							<div class="tile__inner">
								<a href="${hostName}institute/online-tests/{testId}/questions" class="big js-test-link" tabindex="7">Edit questions</a>
							</div>
						</div>
					</div>
					<div class="col col-6 no-gutter" style="padding-left: 10px">
						<div class="tile">
							<div class="tile__inner">
								<a href="${hostName}online-tests/reports/{testId}" class="big js-test-link" tabindex="8">View reports</a>
							</div>
						</div>
					</div>
				</div><!-- .grid -->
			</div><!-- .inline-blk -->
		</div><!-- .center -->
	</div>
</div><!-- .content -->

<input id="testId" type="hidden">

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
	<script type="text/javascript" src="${hostName}assets/scripts/lib/jquery.pickadate.min.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/lib/handlebars.runtime.min.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/compl/hbs-templates.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/utils/site-nav.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/utils/templates.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/odin/save-test.js?v=${version}"></script>
</c:if>

<%-- #PROD block --%>
<c:if test="${env == 'prod'}">
	<script type="text/javascript" src="${hostName}assets/scripts/dist/jquery.site-nav.min.js?v=${version}"></script>
</c:if>