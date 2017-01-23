<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="/WEB-INF/config/customFunctions.tld" prefix="util" %>
<div id="content" class="content">
	<div class="container">
		<div class="banner">
			<h1 class="center">${inlineData.name} Team</h1>
			<hr />
		</div>
		<br />
		<p class="big center easy-nav">
			<a href="../${inlineData.username}">Banner</a>
			&nbsp;&nbsp;
			<span class="show-when-big">
			|
			&nbsp;&nbsp;
			</span>
			<a href="team" class="bold">Team</a>
			&nbsp;&nbsp;
			<a href="achievers">Achievers</a>
			&nbsp;&nbsp;
			<a href="courses">Courses</a>
			&nbsp;&nbsp;
			<a href="centers">Centers</a>
			&nbsp;&nbsp;
			<a href="reviews">Reviews</a>
			&nbsp;&nbsp;
			<a href="gallery">Gallery</a>
		</p>
		<div id="hero" class="box tm-owner-hero inline-blk img-wrapper">
			<img src="" alt="">
			<div class="overlay"></div>
			<div class="tm-owner-logo">
				<c:choose>
					<c:when test="${not empty inlineData.profileImg}">
						<img src="../${inlineData.profileImg}" alt="logo">
					</c:when>
					<c:otherwise>
						<img src="../assets/img/logo-placeholder.jpg" alt="logo">
					</c:otherwise>
				</c:choose>
			</div>
			<span id="n-count" class="count-badge center">0</span>
			<a href="../institute/portfolio?edit=4" class="btn-double btn-edt-entity btn-edt-entity-1 upper white center js-non-owner">
				<span class="frnt"><span class="fa fa-pencil-square-o fa-fw"></span> Edit</span>
				<span class="back"><span class="fa fa-pencil-square-o fa-fw"></span> Edit</span>
			</a>
			<a href="#" id="reorder" class="btn-double btn-edt-entity btn-edt-entity-2 upper white center js-non-owner">
				<span class="frnt"><span class="fa fa-arrows fa-fw"></span> Reorder</span>
				<span class="back"><span class="fa fa-arrows fa-fw"></span> Reorder</span>
			</a>
		</div>
		<div class="center share">
			<img src="../assets/img/loading-tiny.gif" alt="loader">
			<a href="#" class="inline-blk bigger center white share--fb js-fbShare" style="display: none">
				<span class="fa fa-facebook fa-fw" style="vertical-align: middle"></span> <span class="medium"> Share on Facebook</span> <span class="bigger mono share--fb-count js-fbShareCount">--</span>
			</a>
		</div>
		<div class="center js-highlight" style="display: none; padding: 0 20px"></div>
		<br />
		<div class="js-txt-other" style="display: none">
			<br />
			<br />
			<p class="big center">Other team members of ${inlineData.name}</p>
			<br />
		</div>
		<div id="reorder-container">
			<a href="#" id="save-order" class="btn-double upper white center js-non-owner" style="display: block; width: 130px; margin: 0 auto 20px auto" data-entity="team">
				<span class="frnt"><span class="fa fa-check fa-fw"></span> Save Order</span>
				<span class="back"><span class="fa fa-check fa-fw"></span> Save Order</span>
			</a>
			<p class="msg medium center">Drag and drop by image to arrange</p>
			<br />
			<div class="sortable"></div>
		</div>
		<div class="js-entity grid-row center entity-cntnr">
			<p class="mono bigger">No team members yet</p>
		</div>
		<br />
		<br />
	</div>
</div><!-- .content -->

<a id="take-to-top" href="#content" class="none"></a>

<input id="reloadValue" type="hidden" name="reloadValue" value="" />

<c:if test="${empty pageData}">
	<c:set var="pageData" scope="page" value="{}"/>
</c:if>

<script type="text/javascript">
	var pageData     = ${pageData};
	var currUser     = '${id}';
	var instName     = '${util:escapeJS( inlineData.name )}';
	var instUsername = '${inlineData.username}';
	var instImg      = '${inlineData.profileImg}';
</script>

<%-- #DEV block --%>
<c:if test="${env == 'dev'}">
	<script type="text/javascript" src="${hostName}assets/scripts/lib/jquery.min.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/lib/jquery-ui.min.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/lib/jquery.ui.touch-punch.min.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/utils/no-login.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/lib/jquery.badger.min.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/utils/site-nav.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/lib/handlebars.runtime.min.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/compl/hbs-templates.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/utils/templates.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/site/inst-entity.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/utils/social-share.js?v=${version}"></script>
</c:if>

<%-- #PROD block --%>
<c:if test="${env == 'prod'}">
	<script type="text/javascript" src="${hostName}assets/scripts/dist/jquery.site-nav.min.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/dist/templates.min.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/dist/inst-entity-touch-punch.min.js?v=${version}"></script>
</c:if>