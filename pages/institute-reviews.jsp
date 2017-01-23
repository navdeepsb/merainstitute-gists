<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="/WEB-INF/config/customFunctions.tld" prefix="util" %>
<div id="content" class="content">
	<div class="container">
		<div class="banner">
			<h1 class="center">${inlineData.name} Reviews</h1>
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
			<a href="team">Team</a>
			&nbsp;&nbsp;
			<a href="achievers">Achievers</a>
			&nbsp;&nbsp;
			<a href="courses">Courses</a>
			&nbsp;&nbsp;
			<a href="centers">Centers</a>
			&nbsp;&nbsp;
			<a href="reviews" class="bold">Reviews</a>
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
			<a href="#" id="lnk-review" class="btn-double btn-edt-entity btn-edt-entity-1 btn-edt-entity-lone upper white center js-modal-show" data-target="#mdl-login">
				<span class="frnt"><span class="fa fa-pencil-square-o fa-fw"></span> Review</span>
				<span class="back"><span class="fa fa-pencil-square-o fa-fw"></span> Review</span>
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
			<p class="big center">Other reviews of ${inlineData.name}</p>
			<br />
		</div>
		<div class="js-entity grid-row center entity-cntnr">
			<p class="mono bigger">No reviews yet</p>
		</div>
		<br />
		<br />
	</div>
</div><!-- .content -->

<!-- Modal for adding review -->
<div id="mdl-review" class="modal" style="display: none">
	<form id="frm-review-submit" class="modal-form" data-context="review">
		<p class="center bigger">Your review for @${inlineData.username}</p>
		<br />
		<input type="text" id="tbReviewContent" class="tb tb-light" spellcheck="true" placeholder="please write here..">
		<label for="slCenters" class="lbl-tb upper inline-blk">Select institute center</label>
		<select id="slCenters" class="combo">
			<option value="-1">All centers</option>
		</select>
		<br />
		<label for="rgRatingInfra" class="lbl-tb upper inline-blk">Infrastructure (<span class="usr-rating">0</span>)</label>
		<input id="rgRatingInfra" type="range" class="slidr js-rating-slidr" min="0" max="10" step="1" value="0">
		<label for="rgRatingFaculty" class="lbl-tb upper inline-blk">Faculty (<span class="usr-rating">0</span>)</label>
		<input id="rgRatingFaculty" type="range" class="slidr js-rating-slidr" min="0" max="10" step="1" value="0">
		<label for="rgRatingMaterial" class="lbl-tb upper inline-blk">Study material (<span class="usr-rating">0</span>)</label>
		<input id="rgRatingMaterial" type="range" class="slidr js-rating-slidr" min="0" max="10" step="1" value="0">
		<br />
		<br />
		<p class="center">
			<button class="btn-double upper">
				<span class="frnt">Submit</span>
				<span class="back">Submit</span>
			</button>
			<button class="btn-double btn-double-error upper js-modal-close js-no-click">
				<span class="frnt">Cancel</span>
				<span class="back">Cancel</span>
			</button>
			<button id="btDelReview" class="btn-double btn-double-error upper js-no-click" data-context="review" style="width: 45px; font-size: 14px">
				<span class="frnt"><span class="fa fa-trash fa-fw"></span></span>
				<span class="back"><span class="fa fa-trash fa-fw"></span></span>
			</button>
		</p>
	</form>
</div>

<!-- Modal for logging-in -->
<div id="mdl-login" class="modal" style="display: none">
	<div class="modal-form">
		<p class="center bigger">Please login to continue</p>
		<br />
		<form id="frm-login" data-context="review">
			<label for="tbLoginId" class="lbl-tb upper"><span class="fa fa-envelope-o fa-fw"></span> Email Address / Username</label>
			<input id="tbLoginId" type="text" class="tb tb-light" spellcheck="false" autocomplete="off" placeholder="ex. awesome.username@domain-name.com" tabindex="1001">
			<label for="tbPwd" class="lbl-tb upper"><span class="fa fa-lock fa-fw"></span> Password</label>
			<input id="tbPwd" type="password" class="tb tb-light" spellcheck="false" autocomplete="off" tabindex="1002">
			<br />
			<br />
			<div class="center">
				<div class="pacer-wrappr inline-blk" style="width: 120px">
					<button id="btLogin" class="btn-sheen btn-sheen-small btn-sheen-intrctve upper" tabindex="1003">
						Login
						<span class="sheen"></span>
					</button>
					<div class="pacer"></div>
				</div>
				<button class="btn-double btn-double-error upper js-modal-close js-no-click" style="height: 43px" tabindex="1004">
					<span class="frnt" style="height: 43px">Cancel</span>
					<span class="back" style="height: 43px">Cancel</span>
				</button>
			</div>
		</form>
		<br />
		<br />
		<div class="center">
			<div class="inline-blk" style="width: 50%; padding-right: 5px">
				<div class="pacer-wrappr">
					<button id="btLoginGoogle" class="btn-sheen btn-sheen-small btn-sheen-intrctve btn-social js-no-click" disabled="disabled" tabindex="1005" data-context="review" style="width: 100%">
						<span class="social-ico inline-blk">
							<span class="fa fa-google-plus fa-fw"></span>
						</span><!--
						--><span class="social-txt social-txt-banner inline-blk">
							Contacting Google...
						</span>
						<span class="sheen"></span>
					</button>
					<div id="googlePacer" class="pacer"></div>
				</div>
			</div><!--
			--><div class="inline-blk" style="width: 50%; padding-left: 5px">
				<div class="pacer-wrappr">
					<button id="btLoginFacebook" class="btn-sheen btn-sheen-small btn-sheen-intrctve btn-social js-no-click" disabled="disabled" tabindex="1006" data-context="review" style="width: 100%">
						<span class="social-ico inline-blk">
							<span class="fa fa-facebook fa-fw"></span>
						</span><!--
						--><span class="social-txt social-txt-banner inline-blk">
							Contacting Facebook...
						</span>
						<span class="sheen"></span>
					</button>
					<div id="facebookPacer" class="pacer"></div>
				</div>
			</div>
		</div><!-- social buttons -->
	</div>
</div>

<a id="take-to-top" href="#content" class="none"></a>

<input id="reviewId" type="hidden" name="reloadValue" value="" />
<input id="reloadValue" type="hidden" name="reloadValue" value="" />

<c:if test="${empty pageData}">
	<c:set var="pageData" scope="page" value="{}"/>
</c:if>

<script type="text/javascript">
	var pageData     = ${pageData};
	var currUser     = '${id}';
	var role         = '${role}';
	var instName     = '${util:escapeJS( inlineData.name )}';
	var instUsername = '${inlineData.username}';
	var instImg      = '${inlineData.profileImg}';
</script>

<%-- #DEV block --%>
<c:if test="${env == 'dev'}">
	<script type="text/javascript" src="${hostName}assets/scripts/lib/jquery.min.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/utils/no-login.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/lib/jquery.badger.min.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/utils/site-nav.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/lib/handlebars.runtime.min.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/compl/hbs-templates.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/utils/templates.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/site/inst-entity.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/utils/social-share.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/site/frm-submit.js?v=${version}"></script>
</c:if>

<%-- #PROD block --%>
<c:if test="${env == 'prod'}">
	<script type="text/javascript" src="${hostName}assets/scripts/dist/jquery.site-nav.min.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/dist/templates.min.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/dist/inst-entity.min.js?v=${version}"></script>
</c:if>