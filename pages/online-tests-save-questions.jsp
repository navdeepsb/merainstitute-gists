<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<div class="content">
	<div class="banner">
		<h1 class="center ellipsis"><span id="test-name">{{testName}}</span> questions</h1>
		<hr />
	</div>
	<br />
	<div class="grid">
		<div class="col col-3">
			<div id="ques-factory" class="tile">
				<div class="tile__inner">
					<div id="ques-factory__controls">
						<label for="selectSubject" class="lbl-tb upper">Subject</label>
						<select id="selectSubject" class="combo btm-margin js-fetch-selects" tabindex="1">
							<option value="Physics,Chemistry,Biology,Other">All</option>
							<option value="Physics">Physics</option>
							<option value="Chemistry">Chemistry</option>
							<option value="Biology">Biology</option>
							<option value="Other">Other</option>
						</select>
						<label for="selectLevel" class="lbl-tb upper">Difficulty level</label>
						<select id="selectLevel" class="combo btm-margin js-fetch-selects" tabindex="2">
							<option value="Easy,Intermediate,Tough">All</option>
							<option value="Easy">Easy</option>
							<option value="Intermediate">Intermediate</option>
							<option value="Tough">Tough</option>
						</select>
						<label for="" class="lbl-tb upper">Questions</label>
					</div>
					<div class="ques__container">
						<div id="curr-ques"></div>
						<p class="center big">
							<a href="#load-more-results" id="load-more" style="display: none">load more questions</a>
						</p>
						<br />
					</div><!-- .ques__container -->
				</div><!-- .tile__inner -->
			</div><!-- .tile -->
		</div><!-- #quesFactory.col -->
		<div class="col col-9">
			<div id="ques-sandbox" class="tile">
				<div class="tile__inner">
					<div id="ques-sandbox__controls" class="big grid">
						<div class="col col-6 no-gutter">
							<a href="#add-a-section" id="add-section">add a section</a> and then add questions in it
						</div><!-- .col -->
						<div class="col col-6 no-gutter t-right">
							<a href="#save-this-test" id="save-test">save test</a>
						</div><!-- .col -->
					</div><!-- .grid -->
					<div id="all-sections" class="scroll--horiz"></div>
				</div><!-- .tile__inner -->
			</div><!-- .tile -->
		</div><!-- .col -->
	</div><!-- .grid -->
</div><!-- .content -->

<div id="page-loader" class="loader-cntnr">
	<div class="loader-innr center">
		<img src="${hostName}assets/img/loading.gif" alt="loading" width="60">
		<p class="mono">Loading questions...</p>
	</div><!-- .loader-innr -->
</div><!-- .loader-cntnr -->

<br />
<br />

<script type="text/javascript" src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML"></script>

<%-- #DEV block --%>
<c:if test="${env == 'dev'}">
	<script type="text/javascript" src="${hostName}assets/scripts/lib/jquery.min.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/lib/handlebars.runtime.min.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/lib/jquery-ui.min.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/lib/jquery.badger.min.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/utils/site-nav.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/utils/templates.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/compl/hbs-templates.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/odin/modules/fetcher.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/odin/save-ques.js?v=${version}"></script>
</c:if>

<%-- #PROD block --%>
<c:if test="${env == 'prod'}">
	<script type="text/javascript" src="${hostName}assets/scripts/dist/jquery.site-nav.min.js?v=${version}"></script>
</c:if>