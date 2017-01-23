<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<div class="content">
	<div class="container">
		<div class="ovrflw">
			<div id="the-wall" class="box">
				<div class="loader-cntnr abs js-rain-coat">
					<div class="loader-innr loader-innr-abs center">
						<img src="assets/img/loading.gif" alt="loading" width="60">
						<p class="mono">Loading banner...</p>
					</div>
				</div>
				<input id="btCoverUpld" class="none" type="file" accept="image/*"><!-- not visible -->
				<div class="cover">
					<div class="cover-photo img-wrapper">
						<img src="" alt="">
						<div class="msg-cover">
							<p class="center mono">
								<span id="js-cover-upld" class="highlight-dark white">
									<span class="fa fa-upload fa-fw"></span> change hero
								</span>
								&nbsp;&nbsp;
								<span id="js-cover-remove" class="highlight-dark white js-modal-show" data-target="#mdl-img-del">
									<span class="fa fa-times fa-fw"></span> remove hero
								</span>
							</p>
						</div>
						<div class="cover-owner-on-cover show-when-small">
							<p class="center ellipsis">
								<span title="${fn:escapeXml( inlineData.name )}">${inlineData.name}</span>
							</p>
						</div>
					</div>
					<div class="wall-stats center upper">
						<a href="#centers" class="wall-stat">
							<div class="stat-circle">${inlineData.stats.centers}</div>
							<p class="small">Centers</p>
						</a><!--
						--><a href="#courses" class="wall-stat">
							<div class="stat-circle">${inlineData.stats.courses}</div>
							<p class="small">Courses</p>
						</a><!--
						--><a href="#courses" class="wall-stat">
							<div class="stat-circle">${inlineData.stats.exams}</div>
							<p class="small">Exams</p>
						</a><!--
						--><a href="#team" class="wall-stat">
							<div class="stat-circle">${inlineData.stats.staff}</div>
							<p class="small">Staff</p>
						</a><!--
						--><a href="#reviews" class="wall-stat">
							<div class="stat-circle">${inlineData.stats.reviews}</div>
							<p class="small">Reviews</p>
						</a><!--
						--><a href="${inlineData.username}/gallery" class="wall-stat">
							<div class="stat-circle">${inlineData.stats.gallery}</div>
							<p class="small">Photos</p>
						</a>
					</div>
					<div class="rating-bar-wrapper show-when-big">
						<div class="rating-user none" style="width: 90%"></div>
						<input type="range" class="slidr" min="0" max="10" step="1" value="9" style="width: 100%; height: 100%; display: none; background: transparent; position: absolute; top: 0; left: 0">
						<div class="rating-bar js-rating-avg">
							<div class="rating-box center">
								<div class="rating-header upper">
									<span class="underline mono">Rating</span>
								</div>
								<p class="bigger mono">
									<span class="js-rating">-.-</span> / 10
								</p>
								<span class="js-rating-helper small">view details</span>
							</div>
						</div>
					</div>
					<div class="wall-logo show-when-small">
						<c:choose>
							<c:when test="${not empty inlineData.profileImg}">
								<img src="${inlineData.profileImg}" alt="logo">
							</c:when>
							<c:otherwise>
								<img src="assets/img/logo-placeholder.jpg" alt="logo">
							</c:otherwise>
						</c:choose>
					</div>
					<div style="position: absolute; bottom: 70px; left: 50%; width: 190px; height: 40px; margin-left: -95px" class="show-when-small center white ellipsis">@${inlineData.username}</div>
					<div style="position: absolute; bottom: 10px; left: 0; width: 100%; height: 40px" class="show-when-small center white bigger mono"><span class="js-show-rating highlight"><span class="js-rating">-.-</span> / 10</span></div>
				</div>
				<div class="all-rating" style="background: rgba(255, 255, 255, 0.05); display: none">
					<div class="rating-wrpr inline-blk">
						<div class="inline-blk" style="width: 85%; padding: 0 10px 0 0">
							<p class="msg small upper" style="margin-top: 20px">Infrastructure</p>
							<div class="rating-bar-wrapper" style="position: static; background: rgba(0, 0, 0, 0.2); border-radius: 10px; overflow: hidden">
								<div class="rating-bar" style="background: #53777a"></div>
							</div>
							<p class="msg medium t-right"><span class="n-votes">0</span> votes</p>
						</div><!--
						--><div class="inline-blk center" style="width: 15%; line-height: 80px">
							<span class="n-circle inline-blk white" data-rating="infra" style="vertical-align: middle; background: #53777a">-.-</span>
						</div>
					</div><!--
					--><div class="rating-wrpr inline-blk">
						<div class="inline-blk" style="width: 85%; padding: 0 10px 0 0">
							<p class="msg small upper" style="margin-top: 20px">Faculty</p>
							<div class="rating-bar-wrapper" style="position: static; background: rgba(0, 0, 0, 0.2); border-radius: 10px; overflow: hidden">
								<div class="rating-bar" style="background: #3F51B5"></div>
							</div>
							<p class="msg medium t-right"><span class="n-votes">0</span> votes</p>
						</div><!--
						--><div class="inline-blk center" style="width: 15%; line-height: 80px">
							<span class="n-circle inline-blk white" data-rating="faculty" style="vertical-align: middle; background: #3F51B5">-.-</span>
						</div>
					</div><!--
					--><div class="rating-wrpr inline-blk">
						<div class="inline-blk" style="width: 85%; padding: 0 10px 0 0">
							<p class="msg small upper" style="margin-top: 20px">Study material</p>
							<div class="rating-bar-wrapper" style="position: static; background: rgba(0, 0, 0, 0.2); border-radius: 10px; overflow: hidden">
								<div class="rating-bar" style="background: #009688"></div>
							</div>
							<p class="msg medium t-right"><span class="n-votes">0</span> votes</p>
						</div><!--
						--><div class="inline-blk center" style="width: 15%; line-height: 80px">
							<span class="n-circle inline-blk white" data-rating="material" style="vertical-align: middle; background: #009688">-.-</span>
						</div>
					</div>
				</div>
				<div class="wall-main">
					<div class="cover-subtitle">
						<div class="cover-details">
							<div class="ellipsis">
								<span class="dp-inst-logo img-wrapper">
									<c:choose>
										<c:when test="${not empty inlineData.profileImg}">
											<img src="${inlineData.profileImg}" alt="logo">
										</c:when>
										<c:otherwise>
											<img src="assets/img/logo-placeholder.jpg" alt="logo">
										</c:otherwise>
									</c:choose>
								</span>
								<span class="cover-owner" title="${fn:escapeXml( inlineData.name )}">${inlineData.name}</span>
							</div>
							<p class="msg big" style="margin-bottom: 7px">
								@${inlineData.username}
								&nbsp;&nbsp;
								<span class="fa fa-phone fa-fw" style="vertical-align: middle"></span> ${inlineData.contactNum}
								&nbsp;&nbsp;
								<c:choose>
									<c:when test="${fn:contains(inlineData.email, '@mailinator')}">
										<span class="fa fa-envelope-o fa-fw" style="vertical-align: middle"></span> support@merainstitute.com
									</c:when>
									<c:otherwise>
										<span class="fa fa-envelope-o fa-fw" style="vertical-align: middle"></span> ${inlineData.email}
									</c:otherwise>
								</c:choose>
							</p>
							<p style="margin-bottom: 7px">
								<img src="assets/img/loading-tiny.gif" alt="loader">
								<a href="#" style="display: none" class="inline-blk bigger center white share--fb js-fbShare">
									<span class="fa fa-facebook fa-fw" style="vertical-align: middle"></span> <span class="medium"> Share on Facebook</span> <span class="bigger mono share--fb-count js-fbShareCount">--</span>
								</a>
							</p>
							<p class="medium">
								<span id="js-doj">
									Member since <span>Jan 1, 1970</span>
								</span>
								<c:if test="${not empty inlineData.website}">
									&nbsp;&bull;&nbsp;
									<a href="${fn:escapeXml( inlineData.website )}" target="_blank">${inlineData.website}</a>
								</c:if>
								<c:if test="${not empty inlineData.descr}">
									&nbsp;&bull;&nbsp;
									<a href="#" class="js-modal-show" data-target="#mdl-descr">About @${inlineData.username}</a>
								</c:if>
							</p>
						</div>
						<p class="show-when-small center" style="margin-top: 10px; width: 100%">
							<img src="assets/img/loading-tiny.gif" alt="loader">
							<a href="#" style="display: none; width: 100%; height: 47px; line-height: 44px" class="inline-blk bigger center white share--fb js-fbShare">
								<span class="fa fa-facebook fa-fw" style="vertical-align: middle"></span> <span class="medium"> Share on Facebook</span> <span class="bigger mono share--fb-count js-fbShareCount">--</span>
							</a>
						</p>
						<div class="cover-controls js-non-owner">
							<a href="#" id="lnk-review" class="cover-controls-wrapper medium white btn-sheen-only js-modal-show" data-target="#mdl-login">
								<span class="fa fa-pencil-square-o fa-fw"></span> Rate / Write a review
								<span class="sheen"></span>
							</a>
							<div class="cover-controls-wrapper medium">
								<a href="#" class="js-modal-show" data-target="#mdl-error-info">
									<span class="fa fa-times-circle fa-fw"></span> Report error on this page
								</a>
								<br />
								<a href="#" class="js-modal-show" data-target="#mdl-shutdown">
									<span class="fa fa-power-off fa-fw"></span> Report shutdown
								</a>
							</div>
						</div>
					</div>
					<p class="big--gt center easy-nav bold" style="margin-bottom: 30px">
						<span class="highlight-on-light" style="background: rgba(255, 255, 255, 0.4)">
							<a href="${inlineData.username}/team">Team</a>
							&nbsp;&nbsp;
							<a href="${inlineData.username}/achievers">Achievers</a>
							&nbsp;&nbsp;
							<a href="${inlineData.username}/courses">Courses</a>
							&nbsp;&nbsp;
							<a href="${inlineData.username}/centers">Centers</a>
							&nbsp;&nbsp;
							<a href="${inlineData.username}/reviews">Reviews</a>
							&nbsp;&nbsp;
							<a href="${inlineData.username}/gallery">Gallery</a>
						</span>
					</p>
					<div id="team" class="wall-main-cell js-team">
						<div class="caterpillar">
							<a href="${inlineData.username}/team" class="js-caterpillar-team">
								<div class="spiracle head mono white center">
									<p>Team</p>
								</div>
							</a>
						</div>
						<br />
					</div>
					<div id="achievers" class="wall-main-cell js-achvrs">
						<div class="caterpillar">
							<a href="${inlineData.username}/achievers" class="js-caterpillar-achvrs">
								<div class="spiracle head mono white center">
									<p>Achievers</p>
								</div>
							</a>
						</div>
						<br />
					</div>
					<div id="courses" class="wall-main-cell">
						<div class="tab-container"></div><!--
						--><div class="tab-content-container"></div>
					</div>
					<div id="reviews" class="banner no-padding">
						<p class="center">Reviews</p>
						<hr />
					</div>
					<div class="wall-main-cell">
						<div class="wall-cell center js-reviews">
							<!-- Dynamic content to be appended here -->
						</div>
						<p class="t-right"><a href="${inlineData.username}/reviews">view all</a></p>
					</div>
					<div id="centers" class="banner no-padding">
						<p class="center">Centers</p>
						<hr />
					</div>
					<div class="wall-main-cell">
						<div class="wall-cell center js-centers">
							<!-- Dynamic content to be appended here -->
						</div>
						<p class="t-right"><a href="${inlineData.username}/centers">view all</a></p>
					</div>
				</div>
			</div><!-- #the-wall -->
		</div>
		<br />
		<br />
		<div class="ovrflw">
			<p class="center">
				<span class="highlight-on-light">You may also like</span>
			</p>
			<div class="center js-similar" style="padding: 20px">
				<p class="center">
					<img src="assets/img/loading.gif" alt="loading" width="60">
				</p>
			</div>
		</div>
		<br />
		<br />
	</div>
</div><!-- .content -->

<!-- Modal for cropping image -->
<div class="modal" style="display: none">
	<div class="cropper-wrapper">
		<img src="#" alt="cropper-img">
		<button id="btImgCrop" class="btn-double upper">
			<span class="frnt">Crop Image</span>
			<span class="back">Crop Image</span>
		</button>
		<button id="btImgCropCancel" class="btn-double btn-double-error upper">
			<span class="frnt">Cancel</span>
			<span class="back">Cancel</span>
		</button>
	</div>
</div><!-- .modal -->

<!-- Modal for adding review -->
<div id="mdl-review" class="modal" style="display: none">
	<form id="frm-review-submit" class="modal-form" data-context="banner">
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
			<button id="btDelReview" class="btn-double btn-double-error upper js-no-click" data-context="banner" style="width: 45px; font-size: 14px">
				<span class="frnt"><span class="fa fa-trash fa-fw"></span></span>
				<span class="back"><span class="fa fa-trash fa-fw"></span></span>
			</button>
		</p>
	</form>
</div>

<!-- Modal for showing description -->
<div id="mdl-descr" class="modal" style="display: none">
	<div style="padding: 20px">
		<div class="modal-txt" style="padding-bottom: 40px; overflow-y: hidden">
			<p class="bigger center">About @${inlineData.username}</p>
			<br />
			<textarea class="tb tb-light txt-ar" cols="30" rows="10" style="color: #333; background: transparent; padding: 0; height: 100%" disabled="disabled">${inlineData.descr}</textarea>
		</div>
		<button class="btn-double upper js-modal-close">
			<span class="frnt">Close</span>
			<span class="back">Close</span>
		</button>
	</div>
</div>

<!-- Modal for reporting discrepancy in information -->
<div id="mdl-error-info" class="modal" style="display: none">
	<div class="modal-form">
		<p class="center bigger">Error in diplayed information</p>
		<br />
		<label class="lbl-tb upper inline-blk">There's an error in</label>
		<div class="center">
			<div class="check-wrapper t-left">
				<input id="cb-1" type="checkbox" class="cb" data-tag="center">
				<label for="cb-1" class="lbl-cb">
					<span></span> Centers
				</label>
			</div>
			<div class="check-wrapper t-left">
				<input id="cb-2" type="checkbox" class="cb" data-tag="course">
				<label for="cb-2" class="lbl-cb">
					<span></span> Courses
				</label>
			</div>
			<div class="check-wrapper t-left">
				<input id="cb-3" type="checkbox" class="cb" data-tag="staff">
				<label for="cb-3" class="lbl-cb">
					<span></span> Staff (or team)
				</label>
			</div>
			<div class="check-wrapper t-left">
				<input id="cb-4" type="checkbox" class="cb" data-tag="achiever">
				<label for="cb-4" class="lbl-cb">
					<span></span> Achievers
				</label>
			</div>
			<div class="check-wrapper t-left">
				<input id="cb-5" type="checkbox" class="cb" data-tag="review">
				<label for="cb-5" class="lbl-cb">
					<span></span> Reviews
				</label>
			</div>
			<div class="check-wrapper t-left">
				<input id="cb-6" type="checkbox" class="cb" data-tag="other">
				<label for="cb-6" class="lbl-cb">
					<span></span> Other
				</label>
			</div>
		</div>
		<label for="tbErrorInfoText" class="lbl-tb upper inline-blk">Any comments?</label>
		<input id="tbErrorInfoText" type="text" class="tb tb-light" placeholder="please write here..">
		<br />
		<br />
		<p class="center">
			<button id="btErrorInfoSubmit" class="btn-double upper">
				<span class="frnt">Submit</span>
				<span class="back">Submit</span>
			</button>
			<button class="btn-double btn-double-error upper js-modal-close">
				<span class="frnt">Cancel</span>
				<span class="back">Cancel</span>
			</button>
		</p>
	</div>
</div>

<!-- Modal for reporting shutdown -->
<div id="mdl-shutdown" class="modal" style="display: none">
	<div style="padding: 20px; height: 170px">
		<p class="big center">
			Are you sure that ${inlineData.name} has shutdown?
		</p>
		<br />
		<br />
		<div class="inline-blk" style="width: 50%; padding: 10px">
			<button id="btShutdown" class="btn-double upper">
				<span class="frnt">Yes</span>
				<span class="back">Yes</span>
			</button>
		</div><!--
		--><div class="inline-blk" style="width: 50%; padding: 10px">
			<button class="btn-double btn-double-error upper js-modal-close">
				<span class="frnt">No</span>
				<span class="back">No</span>
			</button>
		</div>
	</div>
</div>

<!-- Modal for confirming image deletion -->
<div id="mdl-img-del" class="modal" style="display: none">
	<div style="padding: 20px; height: 170px">
		<p class="big center">
			Are you sure you want to remove your hero?
		</p>
		<br />
		<br />
		<div class="inline-blk" style="width: 50%; padding: 10px">
			<button id="btDelImg" class="btn-double upper">
				<span class="frnt">Yes</span>
				<span class="back">Yes</span>
			</button>
		</div><!--
		--><div class="inline-blk" style="width: 50%; padding: 10px">
			<button class="btn-double btn-double-error upper js-modal-close">
				<span class="frnt">No</span>
				<span class="back">No</span>
			</button>
		</div>
	</div>
</div>

<!-- Modal for logging-in -->
<div id="mdl-login" class="modal" style="display: none">
	<div class="modal-form">
		<p class="center bigger">Please login to continue</p>
		<br />
		<form id="frm-login" data-context="banner">
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
					<button id="btLoginGoogle" class="btn-sheen btn-sheen-small btn-sheen-intrctve btn-social js-no-click" disabled="disabled" tabindex="1005" data-context="banner" style="width: 100%">
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
					<button id="btLoginFacebook" class="btn-sheen btn-sheen-small btn-sheen-intrctve btn-social js-no-click" disabled="disabled" tabindex="1006" data-context="banner" style="width: 100%">
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

<input id="reviewId" type="hidden" name="reloadValue" value="" />
<input id="reloadValue" type="hidden" name="reloadValue" value="" />

<script type="text/javascript">
	var pageData  = ${pageData};
	var wallOwner = '${inlineData.username}';
	var currUser  = '${id}';
	var role      = '${role}';
</script>

<%-- #DEV block --%>
<c:if test="${env == 'dev'}">
	<script type="text/javascript" src="${hostName}assets/scripts/lib/jquery.min.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/utils/no-login.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/lib/jquery.badger.min.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/utils/site-nav.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/lib/cropper.min.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/lib/handlebars.runtime.min.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/compl/hbs-templates.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/utils/templates.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/site/inst-wall.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/utils/social-share.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/site/frm-submit.js?v=${version}"></script>
</c:if>

<%-- #PROD block --%>
<c:if test="${env == 'prod'}">
	<script type="text/javascript" src="${hostName}assets/scripts/dist/jquery.site-nav.min.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/dist/templates.min.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/dist/banner.min.js?v=${version}"></script>
</c:if>