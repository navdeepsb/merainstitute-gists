<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="/WEB-INF/config/customFunctions.tld" prefix="util" %>
<div id="content" class="content">
	<div class="container">
		<div class="banner">
			<h1 class="center">${inlineData.name} Courses</h1>
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
			<a href="courses" class="bold">Courses</a>
			&nbsp;&nbsp;
			<a href="centers">Centers</a>
			&nbsp;&nbsp;
			<a href="reviews">Reviews</a>
			&nbsp;&nbsp;
			<a href="gallery">Gallery</a>
		</p>
		<div id="hero" class="box tm-owner-hero inline-blk img-wrapper" style="display: none">
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
			<span id="n-count" class="count-badge center"><span class="fa fa-refresh fa-spin"></span></span>
			<button id="btAddCourse" class="btn-double btn-edt-entity btn-edt-entity-1 upper white center js-non-owner js-modal-show" data-target="#mdl-frm-crse">
				<span class="frnt">+ Add</span>
				<span class="back">+ Add</span>
			</button>
			<a href="../institute/portfolio?edit=2" class="btn-double btn-edt-entity btn-edt-entity-2 upper white center js-non-owner">
				<span class="frnt"><span class="fa fa-pencil-square-o fa-fw"></span> Edit exams</span>
				<span class="back"><span class="fa fa-pencil-square-o fa-fw"></span> Edit exams</span>
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
			<p class="big center">Other courses by ${inlineData.name}</p>
			<br />
		</div>
		<div class="js-entity grid-row entity-cntnr">
			<p class="mono center bigger">
				<img src="../assets/img/loading.gif" alt="loading" width="60">
			</p>
		</div>
		<br />
		<br />
	</div>
</div><!-- .content -->

<!-- Modal for adding course -->
<div id="mdl-frm-crse" class="modal js-non-owner" style="display: none">
	<div id="_frm-4" style="position: relative; margin: 20px auto; max-width: 700px; max-height: none; padding: 5px 0; overflow: visible">
		<input type="image" src="../assets/img/vectors/remove-cross.svg" alt="x" class="bt-close-modal js-modal-close">
		<form id="frm-crse" class="card card-dark" style="margin: 20px; box-shadow: none">
			<p class="bigger center"><span class="underline">Add/edit course</span></p>
			<br />
			<div class="factory-wrapper">
				<input id="btCourseAddDefault" class="none" type="submit"><!-- this hidden button is a respite for the keyboard-loving user -->
				<div class="conveyor-6x">
					<label for="tbCourseName" class="lbl-tb upper">Name <sup class="error">*</sup></label>
					<input id="tbCourseName" name="courseName" type="text" class="tb tb-light" spellcheck="false" autocomplete="off" placeholder="ex. 2-Year Classroom program for IIT-JEE">
				</div>
				<div class="conveyor-6x conveyor-last">
					<label for="slCourseType" class="lbl-tb upper">Type</label>
					<select id="slCourseType" name="courseType" class="combo">
						<option value="1">Classroom program</option>
						<option value="2">Crash course</option>
						<option value="3">Correspondence course</option>
						<option value="4">Test series</option>
						<option value="5">Online course</option>
						<option value="6">Other</option>
					</select>
				</div>
				<div class="conveyor-6x">
					<label for="tbCourseDesc" class="lbl-tb upper">Description</label>
					<textarea id="tbCourseDesc" name="courseDesc" rows="4" class="tb tb-light txt-ar" spellcheck="true" placeholder="ex. This course is intended for Class X pass out students"></textarea>
				</div>
				<div class="conveyor-6x conveyor-last">
					<label class="lbl-tb"><span class="upper">Targeted Exams &amp; Subjects</span> <sup class="error">*</sup> (<a href="../institute/portfolio?edit=2">edit</a>)</label>
					<div class="checkbox-combo js-staging-exams">
						<p class="msg warn"><span class="fa fa-exclamation-circle fa-fw"></span> Select exams from <a href="../institute/portfolio?edit=2">here</a> for them to appear here</p>
					</div>
				</div>
				<div class="factory-control">
					<button id="btCourseAdd" class="btn-double upper">
						<span class="frnt">+ Save Course</span>
						<span class="back">+ Save Course</span>
					</button><!-- this button is the facade -->
					<input id="btCourseAddForReal" class="none" type="submit"><!-- this button adds fresh course (really!) -->
				</div>
			</div>
			<!-- The following is a hidden field containing the ID of the course -->
			<input id="tbCourseID" name="pid" type="hidden">
		</form>
	</div><!-- #frm-4 -->
</div>

<!-- Modal for adding batch -->
<div id="mdl-frm-btch" class="modal js-non-owner" style="display: none">
	<div id="_frm-5" style="position: relative; margin: 20px auto; max-width: 700px; max-height: none; padding: 5px 0; overflow: visible">
		<input type="image" src="../assets/img/vectors/remove-cross.svg" alt="x" class="bt-close-modal js-modal-close">
		<form id="frm-btch" class="card card-dark" style="margin: 20px; box-shadow: none">
			<p class="bigger center"><span class="underline">Add/edit batch</span></p>
			<br />
			<div class="factory-wrapper">
				<input id="btBatchAddDefault" class="none" type="submit"><!-- this hidden button is a respite for the keyboard-loving user -->
				<div class="conveyor-6x">
					<label for="tbCourseStartDate" class="lbl-tb upper">Start Date <sup class="error">*</sup></label>
					<input id="tbCourseStartDate" name="courseStartDate" type="text" class="tb tb-light js-pickr-dt" spellcheck="false" autocomplete="off" placeholder="ex. 9 May, 2015">
					</div>
				<div class="conveyor-6x conveyor-last">
					<div class="conveyor-inner-9x">
						<label for="tbCourseDuration" class="lbl-tb upper">Duration <sup class="error">*</sup></label>
						<input id="tbCourseDuration" name="duration" type="text" class="tb tb-light" spellcheck="false" autocomplete="off" placeholder="60">
					</div>
					<div class="conveyor-inner-3x">
						<label for="slCourseDurationUnit" class="lbl-tb upper"></label>
						<select id="slCourseDurationUnit" class="combo">
							<option value="1">hours</option>
							<option value="2">days</option>
							<option value="3">weeks</option>
							<option value="4">months</option>
							<option value="5">years</option>
						</select>
					</div>
				</div>
				<div class="conveyor-6x">
					<label for="tbCourseRegStartDate" class="lbl-tb upper">Registration Start Date</label>
					<input id="tbCourseRegStartDate" name="courseRegStartDate" type="text" class="tb tb-light js-pickr-dt" spellcheck="false" autocomplete="off" placeholder="ex. 9 June, 2015">
				</div>
				<div class="conveyor-6x conveyor-last">
					<label for="tbCourseRegEndDate" class="lbl-tb upper">Registration End Date</label>
					<input id="tbCourseRegEndDate" name="courseRegEndDate" type="text" class="tb tb-light js-pickr-dt" spellcheck="false" autocomplete="off" placeholder="ex. 9 July, 2015">
				</div>
				<div class="conveyor-6x">
					<label class="lbl-tb upper">Centers</label>
					<div class="checkbox-combo js-staging-cntrs">
						<p class="msg warn"><span class="fa fa-exclamation-circle fa-fw"></span> Add centers <a href="../institute/portfolio?edit=3">here</a> for the corresponding cities to appear here</p>
					</div>
				</div>
				<fieldset class="section-header left">
					<legend class="center upper hint small">Slots</legend>
				</fieldset>
				<div class="js-slots">
					<!-- The following pseudo slot will be hidden and form the prototype of cloning -->
					<!-- NO TRESPASSING AREA - START -->
					<div class="js-pseudo-slot left none">
						<div class="conveyor-6x">
							<ul class="week"><!--
								--><li class="center wk-intractve" data-val="Su">Su</li><!--
								--><li class="center wk-intractve" data-val="Mo">Mo</li><!--
								--><li class="center wk-intractve" data-val="Tu">Tu</li><!--
								--><li class="center wk-intractve" data-val="We">We</li><!--
								--><li class="center wk-intractve" data-val="Th">Th</li><!--
								--><li class="center wk-intractve" data-val="Fr">Fr</li><!--
								--><li class="center wk-intractve" data-val="Sa">Sa</li>
							</ul>
						</div>
						<div class="conveyor-6x conveyor-last">
							<div class="conveyor-inner-4-half-x">
								<input name="slotTimeStart" type="text" class="tb tb-light no-margin js-pickr-tm" spellcheck="false" autocomplete="off" placeholder="ex. 2:00 PM">
							</div>
							<div class="conveyor-inner-1x">
								<p class="msg hint small center upper slotTo">to</p>
							</div>
							<div class="conveyor-inner-4-half-x">
								<input name="slotTimeEnd" type="text" class="tb tb-light no-margin js-pickr-tm" spellcheck="false" autocomplete="off" placeholder="ex. 4:00 PM">
							</div>
							<div class="conveyor-inner-2x">
								<input type="image" src="../assets/img/vectors/remove-minus.svg" alt="x" class="btSlotRemove">
							</div>
						</div>
					</div><!-- .js-pseudo-slot -->
					<!-- NO TRESPASSING AREA - END -->
				</div>
				<div class="conveyor-12x">
					<button id="btSlotAdd" class="btn center">+</button>
				</div>
				<fieldset class="section-header left">
					<legend class="center upper hint small">Admission</legend>
				</fieldset>
				<div class="conveyor-6x">
					<label class="lbl-tb upper"></label>
					<input id="cbDirectAdmssn" type="checkbox" class="cb">
					<label for="cbDirectAdmssn" class="lbl-cb">
						<span></span> Direct admission available
					</label>
				</div>
				<div class="conveyor-6x conveyor-last">
					<label for="tbAdmssnExamDate" class="lbl-tb upper">Admission Exam Date</label>
					<input id="tbAdmssnExamDate" name="courseRegEndDate" type="text" class="tb tb-light js-pickr-dt" spellcheck="false" autocomplete="off" placeholder="ex. 9 July, 2015">
				</div>
				<fieldset class="section-header left">
					<legend class="center upper hint small">Pricing and Discount</legend>
				</fieldset>
				<div class="conveyor-6x">
					<label for="tbCourseFee" class="lbl-tb upper">Standard Fee (<span class="fa fa-rupee fa-fw"></span>)</label>
					<input id="tbCourseFee" name="courseFee" type="text" class="tb tb-light" spellcheck="false" autocomplete="off" placeholder="ex. 10999">
				</div>
				<div class="js-discts">
					<div class="left disct" data-idx="0">
						<div class="conveyor-6x">
							<label class="lbl-tb upper">Discount criteria</label>
							<input name="discountCriteria" type="text" class="tb tb-light" spellcheck="false" autocomplete="off" placeholder="ex. 90+ percentage in class X">
						</div>
						<div class="conveyor-6x conveyor-last">
							<div class="conveyor-inner-10x">
								<label class="lbl-tb upper">Discount (%)</label>
								<input name="discountVal" type="text" class="tb tb-light" spellcheck="false" autocomplete="off" placeholder="ex. 25">
							</div>
							<div class="conveyor-inner-2x">
								<label class="lbl-tb"></label>
								<input type="image" src="../assets/img/vectors/remove-minus.svg" alt="x" class="btDisctRemove">
							</div>
						</div>
					</div>
				</div>
				<div class="conveyor-12x">
					<button id="btDisctAdd" class="btn center">+</button>
				</div>
				<div class="factory-control">
					<button id="btBatchAdd" class="btn-double upper">
						<span class="frnt">+ Save Batch</span>
						<span class="back">+ Save Batch</span>
					</button><!-- this button is the facade -->
					<input id="btBatchAddForReal" class="none" type="submit"><!-- this button adds fresh batch -->
				</div>
			</div>
			<!-- The following is a hidden field containing the ID of the parent course -->
			<input id="tbBatchParentID" name="parentId" type="hidden">
			<!-- The following is a hidden field containing the ID of the batch -->
			<input id="tbBatchID" name="batchId" type="hidden">
		</form>
	</div>
</div>

<a id="take-to-top" href="#content" class="none"></a>

<input id="instId" type="hidden" name="_id" value="" />
<input id="reloadValue" type="hidden" name="reloadValue" value="" />

<c:if test="${empty pageData}">
	<c:set var="pageData" scope="page" value="{}"/>
</c:if>

<script type="text/javascript">
	var pageData     = ${pageData};
	var currUser     = '${id}';
	var toSend       = JSON.stringify( { 'instituteID' : '${id}' } );
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
	<script type="text/javascript" src="${hostName}assets/scripts/lib/underscore.min.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/lib/backbone.min.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/lib/jquery.pickadate.min.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/lib/masonry.pkgd.min.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/compl/hbs-templates.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/compl/framework.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/utils/templates.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/site/course-info.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/utils/social-share.js?v=${version}"></script>
</c:if>

<%-- #PROD block --%>
<c:if test="${env == 'prod'}">
	<script type="text/javascript" src="${hostName}assets/scripts/dist/jquery.site-nav.min.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/dist/framework.min.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/dist/course-info.min.js?v=${version}"></script>
</c:if>