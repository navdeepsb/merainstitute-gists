<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<div class="content">
   <div class="container">
		<div class="banner">
			<h1 class="center">Institute Portfolio</h1>
			<hr />
		</div>
		<div id="inst-profile-wrapper">
			<div class="legend-container">
				<div id="lg-1" class="legend left lg-accent-up-1">
					<p>Basic Info</p>
				</div>
				<div id="lg-2" class="legend left lg-accent-up-2">
					<p>Exams</p>
				</div>
				<div id="lg-3" class="legend left lg-accent-up-3">
					<p>Centers</p>
				</div>
				<div id="lg-4" class="legend left lg-accent-up-4">
					<p>Team</p>
				</div>
				<div id="lg-5" class="legend left lg-accent-up-5">
					<p>Achievers</p>
				</div>
				<div id="active-legend-overlay-top" class="active-legend-overlay"></div>
			</div>

			<div id="form-container">
				<div id="frm-1" class="form">
					<input id="instId" type="hidden" name="_id" value="" />
					<div class="frm-inner-wrapper">
						<div class="frm-fields-container">
							<div class="frm-ctrl-wrapper">
								<label for="tbInstNm" class="lbl-tb lbl-tb-light upper left"><span class="fa fa-edit fa-fw"></span> Institute Name</label>
								<div class="tb-hint-wrapper left">
									<input id="tbInstNm" name="name" type="text" class="tb tb-light left" spellcheck="false" autocomplete="off" placeholder="ex. Institute XYZ" tabindex="1">
									<p class="msg hint">The official name of your institute. We will be using this name to represent you on our website.</p>
									<div class="auto-checker" style="display: none">
										<span class="fa fa-refresh fa-spin"></span>
									</div>
								</div>
							</div>
							<div class="frm-ctrl-wrapper">
								<label for="tbInstDescr" class="lbl-tb lbl-tb-light upper left"><span class="fa fa-info-circle fa-fw"></span> Description</label>
								<div class="tb-hint-wrapper left">
									<textarea id="tbInstDescr" name="descr" rows="4" class="tb tb-light txt-ar" spellcheck="true" placeholder="ex. Institute XYZ is the home of excellence where students are bound to have success." tabindex="2"></textarea>
									<p class="msg hint">This description will be displayed on your virtual website (institute wall)</p>
									<div class="auto-checker" style="display: none">
										<span class="fa fa-refresh fa-spin"></span>
									</div>
								</div>
							</div>
							<div class="frm-ctrl-wrapper">
								<label for="tbWebsite" class="lbl-tb lbl-tb-light upper left"><span class="fa fa-globe fa-fw"></span> Website</label>
								<div class="tb-hint-wrapper left">
									<input id="tbWebsite" name="website" type="url" class="tb tb-light left" spellcheck="false" autocomplete="off" placeholder="ex. http://www.instituteXYZ.com" tabindex="6">
									<p class="msg hint">The official website of your institute. Students visiting our website will be directed to this URL.</p>
									<div class="auto-checker" style="display: none">
										<span class="fa fa-refresh fa-spin"></span>
									</div>
								</div>
							</div>
						</div>
						<div class="prtf-logo-container">
							<div class="prtf-logo-stuff">
								<div class="prtf-logo-box js-img-upload-ctrl">
									<img id="imgInstLogo" class="js-img-upload" src="../assets/img/logo-placeholder.jpg" alt="sample logo" data-upload-type="PROFILE_IMAGE" data-owner="">
									<button class="btLogoUpload"><span class="fa fa-upload fa-fw"></span> Upload</button>
									<button class="btLogoRemove js-modal-show" data-target="#mdl-img-del"><span class="fa fa-times-circle fa-fw"></span></button>
									<input class="btLogoUploadDefault none" type="file" accept="image/*"><!-- not visible -->
								</div>
								<p class="msg hint">Upload a high quality image of your institute's logo. Maximum file size is <span id="max-image-size">5</span>Mb.</p>
							</div>
						</div>
					</div>
				</div>
				<div id="frm-2" class="form">
					<span class="count-badge center" style="display: none"><span class="fa fa-refresh fa-spin"></span></span>
					<div class="form-inner-wrapper">
						<p class="msg medium">Select the exams that your institute targets. The selected exams will appear in your course form</p>
						<br />
						<p class="medium t-right">
							Group exams by
							<select name="slCat" id="slCat" class="combo" style="width: 170px; margin-bottom: 15px">
								<option value="primary">Graduation</option>
								<option value="secondary" selected="true">Stream</option>
							</select>
						</p>
						<br />
						<div class="js-exams"></div>
						<br />
						<a href="#" class="medium">Request an exam that is not in this list</a>
					</div>
				</div>
				<div id="frm-3" class="form">
					<span class="count-badge center">0</span>
					<form id="frm-cntr" class="card card-dark">
						<input id="tbCenterPid" type="hidden" value="">
						<div class="factory-wrapper">
							<div class="conveyor-12x">
								<label for="tbAddress" class="lbl-tb upper">Address</label>
								<input id="tbAddress" name="adressLine1" type="text" class="tb tb-light" spellcheck="false" autocomplete="off" placeholder="ex. 221-B Baker Street">
							</div>
							<div class="conveyor-6x">
								<label for="tbCity" class="lbl-tb upper">City</label>
								<input id="tbCity" name="cityName" type="text" class="tb tb-light js-auto-comp-city" spellcheck="false" autocomplete="off" placeholder="type the city name" list="lstCities">
							</div>
							<div class="conveyor-6x conveyor-last">
								<label for="tbState" class="lbl-tb upper">State</label>
								<input id="tbState" name="stateName" type="text" class="tb tb-light js-auto-comp-state" spellcheck="false" autocomplete="off" placeholder="enter a city, state will automatically appear here">
							</div>
							<div class="conveyor-12x conveyor-wrapper">
								<div>
									<label for="tbPin" class="lbl-tb upper">Pincode</label>
									<input id="tbPin" name="pin" type="text" class="tb tb-light" spellcheck="false" autocomplete="off" placeholder="ex. 452001">
								</div>
							</div>
							<div class="conveyor-6x">
								<label for="tbContactNo1" class="lbl-tb upper">Contact No. 1</label>
								<input id="tbContactNo1" name="contactNumber1" type="text" class="tb tb-light" spellcheck="false" autocomplete="off" placeholder="ex. 9876543210">
							</div>
							<div class="conveyor-6x conveyor-last">
								<label for="tbContactNo2" class="lbl-tb upper">Contact No. 2</label>
								<input id="tbContactNo2" name="contactNumber2" type="text" class="tb tb-light" spellcheck="false" autocomplete="off" placeholder="ex. 011-6543210">
							</div>
							<div class="factory-control">
								<button id="btCenterAdd" class="btn-double upper">
									<span class="frnt">+ Save Center</span>
									<span class="back">+ Save Center</span>
								</button>
							</div>
							<datalist id="lstCities"></datalist>
						</div>
					</form>
				</div>
				<div id="frm-4" class="form">
					<span class="count-badge center">0</span>
					<form id="frm-mmbr" class="card card-dark">
						<div class="factory-wrapper">
							<div class="conveyor-6x">
								<label for="tbMemberName" class="lbl-tb upper">Name</label>
								<input id="tbMemberName" name="name" type="text" class="tb tb-light" spellcheck="false" autocomplete="off" placeholder="type the member name">
							</div>
							<div class="conveyor-6x conveyor-last">
									<label for="tbMemberTitle" class="lbl-tb upper">Designation</label>
									<input id="tbMemberTitle" name="title" type="text" class="tb tb-light" spellcheck="false" autocomplete="off" placeholder="type the title/position">
							</div>
							<div class="conveyor-12x">
								<label for="tbMemberDescr" class="lbl-tb upper">Description</label>
								<textarea id="tbMemberDescr" name="descr" cols="30" rows="10" class="tb tb-light txt-ar" autocomplete="off" placeholder="ex. John Doe is a reputed personality in the field of education..."></textarea>
							</div>
							<div class="factory-control">
								<div class="pacer-wrappr">
 									<div class="pacer"></div>
									<button id="btMemberAdd" class="btn-sheen btn-sheen-small btn-sheen-intrctve upper">
										Add
										<span class="sheen"></span>
									</button>
									<div class="pacer"></div>
								</div>
							</div>
						</div>
					</form>
				</div>
				<div id="frm-5" class="form">
					<span class="count-badge center">0</span>
					<form id="frm-achv" class="card card-dark">
						<div class="factory-wrapper">
							<div class="conveyor-6x">
								<label for="tbAchvrName" class="lbl-tb upper">Name</label>
								<input id="tbAchvrName" name="name" type="text" class="tb tb-light" spellcheck="false" autocomplete="off" placeholder="type the achiever's name">
							</div>
							<div class="conveyor-6x conveyor-last">
									<label for="tbAchvmnt" class="lbl-tb upper">Achievement</label>
									<input id="tbAchvmnt" name="title" type="text" class="tb tb-light" spellcheck="false" autocomplete="off" placeholder="ex. AIR 95">
							</div>
							<div class="conveyor-12x">
								<label for="tbAchvrDescr" class="lbl-tb upper">Description</label>
								<textarea id="tbAchvrDescr" name="descr" cols="30" rows="10" class="tb tb-light txt-ar" autocomplete="off" placeholder="type description here..."></textarea>
							</div>
							<div class="factory-control">
								<div class="pacer-wrappr">
 									<div class="pacer"></div>
									<button id="btAchvrAdd" class="btn-sheen btn-sheen-small btn-sheen-intrctve upper">
										Add
										<span class="sheen"></span>
									</button>
									<div class="pacer"></div>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>

			<div class="legend-container for-big-scr">
				<div id="lg-1" class="legend left lg-accent-down-1">
					<p>Basic Info</p>
				</div>
				<div id="lg-2" class="legend left lg-accent-down-2">
					<p>Exams</p>
				</div>
				<div id="lg-3" class="legend left lg-accent-down-3">
					<p>Centers</p>
				</div>
				<div id="lg-4" class="legend left lg-accent-down-4">
					<p>Team</p>
				</div>
				<div id="lg-5" class="legend left lg-accent-down-5">
					<p>Achievers</p>
				</div>
				<div id="active-legend-overlay-bottom" class="active-legend-overlay"></div>
			</div>
		</div>
		<div class="none">
			<button id="btSaveForm" class="btn-sheen btn-sheen-intrctve upper">
				Save Form
				<span class="sheen"></span>
			</button>
	   </div>
	</div>
</div><!-- .content -->

<div class="loader-cntnr">
	<div class="loader-innr center">
		<img src="../assets/img/loading.gif" alt="loading" width="60">
		<p class="mono">Loading portfolio...</p>
	</div><!-- .loader-innr -->
</div><!-- .loader-cntnr -->

<div class="modal" style="display: none">
	<div class="cropper-wrapper">
		<img src="" alt="cropper-img">
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

<!-- Modal for confirming image deletion -->
<div id="mdl-img-del" class="modal" style="display: none">
	<div style="padding: 20px; height: 170px">
		<p class="big center">
			Are you sure you want to remove this image?
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

<input id="reloadValue" type="hidden" name="reloadValue" value="" />

<script type="text/javascript">
	var stringifiedPayload = JSON.stringify({ 'instituteID' : '${id}' });
</script>

<%-- #DEV block --%>
<c:if test="${env == 'dev'}">
	<script type="text/javascript" src="${hostName}assets/scripts/lib/jquery.min.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/utils/no-login.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/lib/jquery.badger.min.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/utils/site-nav.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/lib/handlebars.runtime.min.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/lib/underscore.min.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/lib/backbone.min.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/lib/cropper.min.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/compl/hbs-templates.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/compl/framework.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/utils/validator.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/utils/templates.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/site/inst-profile.js?v=${version}"></script>
</c:if>

<%-- #PROD block --%>
<c:if test="${env == 'prod'}">
	<script type="text/javascript" src="${hostName}assets/scripts/dist/jquery.site-nav.min.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/dist/framework.min.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/dist/profile.min.js?v=${version}"></script>
</c:if>