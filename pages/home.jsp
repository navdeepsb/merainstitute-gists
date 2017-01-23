<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<div class="home-wrpr">
	<div class="hero">
		<div class="hero-txt">
			<span class="site-name underline">merainstitute.com</span>
			<h1 class="tagline font-merri">The one place to find courses for all popular exams in India</h1>
		</div>
		<div class="center featr-cntnr">
			<a href="${hostName}filter?type=crse" class="inline-blk featre featre-1" tabindex="-1">
				<span class="featr--ico center"><span class="fa fa-file-text-o"></span></span>
				<br />
				<h2 class="featr--heading upper bigger">Find a suitable course</h2>
				<hr />
				<p class="featr--txt">Find the suitable course for the exam you are preparing for. Explore all the options.</p>
			</a>
			<a href="${hostName}filter?type=inst" class="inline-blk featre featre-2" tabindex="-1">
				<span class="featr--ico center"><span class="fa fa-graduation-cap"></span></span>
				<br />
				<h2 class="featr--heading upper bigger">Find a coaching institute</h2>
				<hr />
				<p class="featr--txt">Find the suitable institute by filtering it out on the basis of the city you are living in.</p>
			</a>
		</div>
		<div class="center or-cntnr">
			<div class="inline-blk or big">or</div>
		</div>
		<div class="search-cntnr">
			<h2 class="center">try our powerful search...</h2>
			<form id="frmSearchHome" action="${hostName}institute/search" class="srch-bar-wrpr">
				<input type="text" name="query" tabindex="100" class="srch-tb left center" autocomplete="off" spellcheck="false" placeholder="&#xF002; enter exam name, institute name, etc." list="lstSuggestionsHome">
			</form><!-- #frmSearch.srch-bar-wrpr -->
			<datalist id="lstSuggestionsHome"></datalist>
		</div>
	</div>
	<div class="home-stats2">
		<p class="center"><span class="fa fa-bar-chart fa-3x"></span></p>
		<div class="center">
			<div class="stat2 stat2-1">
				<p class="num center">${stats.institutesCount}</p>
				<p class="txt center">Institutes</p>
			</div>
			<div class="stat2 stat2-2">
				<p class="num center">${stats.coursesCount}</p>
				<p class="txt center">Courses</p>
			</div>
			<div class="stat2 stat2-3">
				<p class="num center">${stats.batchesCount}</p>
				<p class="txt center">Batches</p>
			</div>
			<div class="stat2 stat2-4">
				<p class="num center">${stats.citiesCount}</p>
				<p class="txt center">Cities</p>
			</div>
			<div class="stat2 stat2-5">
				<p class="num center">${stats.centersCount}</p>
				<p class="txt center">Centers</p>
			</div>
			<p class="center mig" style="line-height: 30px">and counting...</p>
		</div>
	</div>
	<div class="page logo-matrix2">
		<style type="text/css" scoped="scoped">
			.scene, .layer { margin: 0; padding: 0; list-style: none }
			.scene { overflow: hidden; height: inherit; box-shadow: inset 0 0 40px black }
			.layer { width: 100%; height: 100%; position: relative }
		</style>
		<ul id="scene" class="scene js-compnt">
			<li class="layer" data-depth="1.5">
				<div class="matrix">
					<div class="loader-cntnr abs">
						<div class="loader-innr center">
							<img src="assets/img/loading.gif" alt="loading" width="100">
						</div>
					</div>
				</div><!-- .matrix -->
			</li>
		</ul>
		<div class="matrix-caption show-when-big">
			<h2 class="center white">
				<span class="highlight-dark">Popular institutes at merainstitute.com</span>
			</h2>
		</div>
	</div>
	<div class="home-login">
		<a href="login" class="btn-sheen btn-sheen-intrctve lure-reg white loose center">
			<span class="fa fa-edit fa-fw fa-2x" style="vertical-align: middle"></span> Connect now
			<span class="sheen"></span>
		</a>
		<p class="center medium">If you're an institute, join <a href="institute/register">here</a></p>
	</div>
</div>

<div id="dev-meta" class="none">Inst = ${stats.institutesCount}; Crses = ${stats.coursesCount}; Btchs = ${stats.batchesCount}; Cts = ${stats.citiesCount}; Cntrs = ${stats.centersCount}; Studs = ${stats.studentsCount}; Rvws = ${stats.reviewsCount}</div>

<%-- #DEV block --%>
<c:if test="${env == 'dev'}">
	<script type="text/javascript" src="${hostName}assets/scripts/lib/jquery.min.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/utils/site-nav.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/lib/jquery.parallax.min.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/site/home.js?v=${version}"></script>
</c:if>

<%-- #PROD block --%>
<c:if test="${env == 'prod'}">
	<script type="text/javascript" src='${hostName}assets/scripts/dist/jquery.site-nav.min.js?v=${version}'></script>
	<script type="text/javascript" src='${hostName}assets/scripts/dist/home.min.js?v=${version}'></script>
</c:if>