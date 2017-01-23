<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<div class="content">
	<div class="container">
		<div class="banner">
			<h1 class="center">Online tests dashboard</h1>
			<hr />
		</div>
		<ul class="bigger">
			<li>
				<span>Question bank</span>
				<p class="big">Create and manage questions for your online tests</p>
				<ul class="big">
					<li>
						<a href="${hostName}institute/online-tests/question-bank">Manage</a>
					</li>
				</ul>
			</li>
			<br />
			<li>
				<span>Online tests</span>
				<p class="big">Create and manage online tests for exams like AIIMS, JEE, etc.</p>
				<ul class="big">
					<li>
						<a href="${hostName}institute/online-tests/save?mode=add">Create a test</a>
					</li>
					<li>
						<a href="${hostName}institute/online-tests/view">View all tests</a>
					</li>
				</ul>
			</li>
			<br />
			<li>
				<span>Test series</span>
				<p class="big">Create and manage test series by adding/removing tests in them and managing test takers</p>
				<ul class="big">
					<li>
						<a href="${hostName}institute/online-tests/test-series/save?mode=add">Create a test series</a>
					</li>
					<li>
						<a href="${hostName}institute/online-tests/test-series/view">View all test series</a>
					</li>
				</ul>
			</li>
		</ul>
	</div>
</div><!-- .content -->

<br />
<br />

<%-- #DEV block --%>
<c:if test="${env == 'dev'}">
	<script type="text/javascript" src="${hostName}assets/scripts/lib/jquery.min.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/utils/site-nav.js?v=${version}"></script>
</c:if>

<%-- #PROD block --%>
<c:if test="${env == 'prod'}">
	<script type="text/javascript" src="${hostName}assets/scripts/dist/jquery.site-nav.min.js?v=${version}"></script>
</c:if>