<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="/WEB-INF/config/customFunctions.tld" prefix="util" %>
<div id="content" class="content">
	<div class="container">
		<div class="banner">
			<h1 class="center">${inlineData.name} Gallery</h1>
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
			<a href="reviews">Reviews</a>
			&nbsp;&nbsp;
			<a href="gallery" class="bold">Gallery</a>
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
			<button class="btn-double btn-edt-entity btn-edt-entity-1 btn-edt-entity-lone upper js-upload js-non-owner">
				<span class="frnt">+ Add Photo</span>
				<span class="back">+ Add Photo</span>
			</button>
			<input class="none js-upload-def" type="file" accept="image/*"><!-- not visible -->
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
			<p class="big center">Other photos of ${inlineData.name}</p>
			<br />
		</div>
		<div class="js-entity grid-row center entity-cntnr">
			<p class="mono bigger">No photos yet</p>
		</div>
		<div class="js-gallery"></div>
		<br />
		<br />
	</div>
</div><!-- .content -->

<div class="loader-cntnr js-non-owner" style="display: none">
	<div class="loader-innr center">
		<img src="../assets/img/loading.gif" alt="loading" width="60">
		<p class="mono">Uploading...</p>
	</div><!-- .loader-innr -->
</div><!-- .loader-cntnr -->

<!-- Modal for reporting discrepancy in information -->
<div id="mdl-edit-photo" class="modal js-non-owner" style="display: none">
	<div class="modal-form">
		<p class="center bigger">
			<img src="#" alt="edit this photo" height="200">
		</p>
		<br />
		<label for="tbPhotoDescr" class="lbl-tb upper inline-blk">Description</label>
		<input id="tbPhotoDescr" type="text" class="tb tb-light" placeholder="please write here..">
		<input id="tbPhotoId" type="hidden">
		<br />
		<br />
		<p class="center">
			<button id="btSavePhoto" class="btn-double upper">
				<span class="frnt">Save</span>
				<span class="back">Save</span>
			</button>
			<button class="btn-double btn-double-error upper js-modal-close">
				<span class="frnt">Cancel</span>
				<span class="back">Cancel</span>
			</button>
		</p>
	</div>
</div><!-- .modal -->

<!-- Modal for confirming image deletion -->
<div id="mdl-img-del" class="modal" style="display: none">
	<div style="padding: 20px; height: 170px">
		<p class="big center">
			Are you sure you want to delete this image?
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

<a id="take-to-top" href="#content" class="none"></a>

<input id="reloadValue" type="hidden" name="reloadValue" value="" />
<input id="ownerPid" type="hidden" name="ownerPid" value="" />
<input id="fileUrl" type="hidden" name="fileUrl" value="" />

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
	<script type="text/javascript" src="${hostName}assets/scripts/utils/no-login.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/lib/jquery.badger.min.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/utils/site-nav.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/lib/handlebars.runtime.min.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/lib/jquery.justifiedGallery.min.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/lib/jquery.swipebox.min.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/compl/hbs-templates.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/utils/templates.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/site/inst-entity.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/utils/uploader.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/utils/social-share.js?v=${version}"></script>
</c:if>

<%-- #PROD block --%>
<c:if test="${env == 'prod'}">
	<script type="text/javascript" src="${hostName}assets/scripts/dist/jquery.site-nav.min.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/dist/templates.min.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/dist/gallery.min.js?v=${version}"></script>
</c:if>