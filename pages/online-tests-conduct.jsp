<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<div class="grid js-main">
	<div class="col col-3 big scroll--vert">
		<span class="bold">Test name</span>
		<br />
		<span id="test-name" class="humongous"></span>
		<br />
		<br />
		<span id="test-ques-count"></span> questions
		<br />
		<span id="test-dur"></span> mins
		<br />
		<br />
		<br />
		<p class="big">Tap on a ques. no. to go to it</p>
		<div id="ques-jumpers"></div>
		<br />
		<p class="medium">
			<span class="ques__legend ques__jumper--unattempted">?</span> Unattempted
			<br />
			<span class="ques__legend ques__jumper--attempted">?</span> Attempted
			<br />
			<span class="ques__legend ques__jumper--toReview">?</span> Marked for review
			<br />
			<span class="ques__legend ques__jumper--attempted-toReview">?</span> Attempted and marked for review
		</p>
	</div>
	<div class="col col-6 scroll--vert" style="background: #f5f5f5">
		<div id="test-body"></div>
	</div>
	<div class="col col-3 t-right scroll--vert">
		<p>
			<span id="testTimer" class="mono humongous">
				00:00:00
			</span>
		</p>
		<br />
		<br />
		<a href="#" id="finishTest" class="bigger">Finish test</a>
		<br />
		<br />
		<p class="big">
			Attempted: <span id="ques-attempted">0</span>
			<br />
			Marked for review: <span id="ques-to-review">0</span>
			<br />
			Total: <span id="ques-total">0</span>
			<br />
		</p>
	</div>
</div>

<div id="page-loader" class="loader-cntnr">
	<div class="loader-innr center">
		<img src="${hostName}assets/img/loading.gif" alt="loading" width="60">
		<p class="mono">Loading...</p>
	</div><!-- .loader-innr -->
</div><!-- .loader-cntnr -->

<script type="text/javascript">
	var role = '${role}';
</script>
<script type="text/javascript" src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML"></script>

<%-- #DEV block --%>
<c:if test="${env == 'dev'}">
	<script type="text/javascript" src="${hostName}assets/scripts/lib/jquery.min.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/lib/jquery.badger.min.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/lib/handlebars.runtime.min.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/compl/hbs-templates.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/utils/site-nav.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/utils/templates.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/odin/modules/timer.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/odin/conduct-test.js?v=${version}"></script>
</c:if>

<%-- #PROD block --%>
<c:if test="${env == 'prod'}">
	<script type="text/javascript" src="${hostName}assets/scripts/dist/jquery.site-nav.min.js?v=${version}"></script>
</c:if>