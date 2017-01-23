<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<div id="content" class="content">
	<div class="container">
		<div class="banner">
			<h1 class="center">Question Bank</h1>
			<hr />
		</div>
		<br />
		<div class="grid">
			<p class="center">Add a question</p>
			<div class="col col-6">
				<p class="center"><span class="underline">Preview</span></p>
				<div class="box box--bkg">
					<div class="js-ques-entity" data-ques-type="1">
						<p class="bold">Ques.</p>
						<em id="quesPreviewPlaceholder" class="msg hint big">Question text will preview here</em>
						<div id="quesPreview" class="msg hint big"></div>
						<div id="quesBuffer" class="msg hint big"></div>
						<div id="quesImgs" class="center js-prvw-img-wrpr"></div>
						<br />
						<p class="bold">Options</p>
						<div class="answ">
							<span class="bold">(A)</span>
							<em id="opAPreviewPlaceholder" class="msg hint big">Option A will preview here</em>
							<span id="opAPreview" class="msg hint big"></span>
							<span id="opABuffer" class="msg hint big"></span>
							<span id="opAImg" class="js-prvw-img-wrpr"></span>
						</div>
						<div class="answ">
							<span class="bold">(B)</span>
							<em id="opBPreviewPlaceholder" class="msg hint big">Option B will preview here</em>
							<span id="opBPreview" class="msg hint big"></span>
							<span id="opBBuffer" class="msg hint big"></span>
							<span id="opBImg" class="js-prvw-img-wrpr"></span>
						</div>
						<div class="answ">
							<span class="bold">(C)</span>
							<em id="opCPreviewPlaceholder" class="msg hint big">Option C will preview here</em>
							<span id="opCPreview" class="msg hint big"></span>
							<span id="opCBuffer" class="msg hint big"></span>
							<span id="opCImg" class="js-prvw-img-wrpr"></span>
						</div>
						<div class="answ">
							<span class="bold">(D)</span>
							<em id="opDPreviewPlaceholder" class="msg hint big">Option D will preview here</em>
							<span id="opDPreview" class="msg hint big"></span>
							<span id="opDBuffer" class="msg hint big"></span>
							<span id="opDImg" class="js-prvw-img-wrpr"></span>
						</div>
						<p class="msg hint t-right">Click on an image to remove it</p>
					</div>
					<div class="js-ques-entity" data-ques-type="2">
						<p>
							<span class="bold">Assertion</span>:
							<em id="assertionPreviewPlaceholder" class="msg hint big">Assertion text will preview here</em>
							<span id="assertionPreview" class="msg hint big"></span>
						</p>
						<p>
							<span class="bold">Reason</span>:
							<em id="reasonPreviewPlaceholder" class="msg hint big">Reason text will preview here</em>
							<span id="reasonPreview" class="msg hint big"></span>
						</p>
						<br />
						<p class="bold">Options</p>
						<p class="answ">
							<span class="bold">(A)</span>
							<span class="msg hint big">If both assertion and reason are true and reason is the correct explanation of assertion</span>
						</p>
						<p class="answ">
							<span class="bold">(B)</span>
							<span class="msg hint big">If both assertion and reason are true but reason is not the correct explanation of assertion</span>
						</p>
						<p class="answ">
							<span class="bold">(C)</span>
							<span class="msg hint big">If assertion is true but reason is false</span>
						</p>
						<p class="answ">
							<span class="bold">(D)</span>
							<span class="msg hint big">If both assertion and reason are false</span>
						</p>
					</div>
				</div><!-- .box -->
			</div><!-- preview .col -->
			<div class="col col-6">
				<p class="center"><span class="underline">Question</span></p>
				<form id="frm-add-ques" class="box box--bkg">
					<input id="tbQuesId" type="hidden" value="">
					<div class="grid">
						<div class="col col-6 no-gutter">
							<label for="slQuesType" class="lbl-tb upper">Question type</label>
						</div>
						<div class="col col-6 no-gutter">
							<select id="slQuesType" class="combo combo--btm-margin" tabindex="1">
								<option value="1">4 option objective</option>
								<option value="2">Assertion reason</option>
							</select>
						</div>
					</div><!-- .grid -->
					<div class="js-ques-entity" data-ques-type="1">
						<label for="tbQues" class="lbl-tb upper">Question</label>
						<textarea id="tbQues" name="ques" rows="4" class="tb tb-light txt-ar" autocomplete="off" spellcheck="true" placeholder="Type the question here" tabindex="2"></textarea>
						<br />
						<p class="medium center">
							<a href="#add-image-in-question" class="js-upload">add an image</a>
							<input class="none js-upload-def" type="file" accept="image/*" data-appender="#quesImgs" data-upload-type="QUESTION_IMAGE"><!-- not visible -->
						</p>
						<br />
					</div>
					<div class="js-ques-entity" data-ques-type="2">
						<label for="tbAssertion" class="lbl-tb upper">Assertion</label>
						<textarea id="tbAssertion" name="ques" rows="4" class="tb tb-light txt-ar" autocomplete="off" spellcheck="true" placeholder="Type the assertion text here" tabindex="2"></textarea>
						<br />
						<label for="tbReason" class="lbl-tb upper">Reason</label>
						<textarea id="tbReason" name="ques" rows="4" class="tb tb-light txt-ar" autocomplete="off" spellcheck="true" placeholder="Type the reason text here" tabindex="2"></textarea>
						<br />
					</div>
					<div class="grid">
						<div class="js-ques-entity" data-ques-type="1">
							<div class="col col-6 no-gutter" style="padding-right: 10px">
								<label for="tbOptionA" class="lbl-tb upper">Option A</label>
								<input id="tbOptionA" type="text" class="tb tb-light" spellcheck="false" autocomplete="off" tabindex="3">
								<p class="medium t-right">
									<a href="#upload-image-for-option" class="js-upload">upload image</a>
									<input class="none js-upload-def" type="file" accept="image/*" data-appender="#opAImg" data-input-field="#tbOptionA" data-upload-type="QUESTION_OPTION_IMAGE"><!-- not visible -->
								</p>
							</div>
							<div class="col col-6 no-gutter">
								<label for="tbOptionB" class="lbl-tb upper">Option B</label>
								<input id="tbOptionB" type="text" class="tb tb-light" spellcheck="false" autocomplete="off" tabindex="4">
								<p class="medium t-right">
									<a href="#upload-image-for-option" class="js-upload">upload image</a>
									<input class="none js-upload-def" type="file" accept="image/*" data-appender="#opBImg" data-input-field="#tbOptionB" data-upload-type="QUESTION_OPTION_IMAGE"><!-- not visible -->
								</p>
							</div>
							<div class="col col-6 no-gutter" style="padding-right: 10px">
								<label for="tbOptionC" class="lbl-tb upper">Option C</label>
								<input id="tbOptionC" type="text" class="tb tb-light btm-margin" spellcheck="false" autocomplete="off" tabindex="5">
								<p class="medium t-right btm-margin">
									<a href="#upload-image-for-option" class="js-upload">upload image</a>
									<input class="none js-upload-def" type="file" accept="image/*" data-appender="#opCImg" data-input-field="#tbOptionC" data-upload-type="QUESTION_OPTION_IMAGE"><!-- not visible -->
								</p>
							</div>
							<div class="col col-6 no-gutter">
								<label for="tbOptionD" class="lbl-tb upper">Option D</label>
								<input id="tbOptionD" type="text" class="tb tb-light btm-margin" spellcheck="false" autocomplete="off" tabindex="6">
								<p class="medium t-right btm-margin">
									<a href="#upload-image-for-option" class="js-upload">upload image</a>
									<input class="none js-upload-def" type="file" accept="image/*" data-appender="#opDImg" data-input-field="#tbOptionD" data-upload-type="QUESTION_OPTION_IMAGE"><!-- not visible -->
								</p>
							</div>
						</div>
						<div class="col col-6 no-gutter">
							<label for="slAnswer" class="lbl-tb upper">Correct answer</label>
						</div>
						<div class="col col-6 no-gutter">
							<select id="slAnswer" class="combo btm-margin" tabindex="7">
								<option value="0">Option A</option>
								<option value="1">Option B</option>
								<option value="2">Option C</option>
								<option value="3">Option D</option>
							</select>
						</div>
						<div class="col col-6 no-gutter">
							<label for="slSubject" class="lbl-tb upper">Subject</label>
						</div>
						<div class="col col-6 no-gutter">
							<select id="slSubject" class="combo btm-margin" tabindex="8">
								<option value="x" disabled="disabled" selected="selected">Please select</option>
								<option value="Physics">Physics</option>
								<option value="Chemistry">Chemistry</option>
								<option value="Biology">Biology</option>
								<option value="Other">Other</option>
							</select>
						</div>
						<div class="col col-6 no-gutter">
							<label for="slDiffLevel" class="lbl-tb upper">Difficulty level</label>
						</div>
						<div class="col col-6 no-gutter btm-margin">
							<select id="slDiffLevel" class="combo btm-margin" tabindex="9">
								<option value="x" disabled="disabled" selected="selected">Please select</option>
								<option value="Easy">Easy</option>
								<option value="Intermediate">Intermediate</option>
								<option value="Tough">Tough</option>
							</select>
						</div>
						<div class="col col-6 no-gutter" style="padding-right: 10px">
							<div class="pacer-wrappr">
								<button id="btAddQues" class="btn-sheen btn-sheen-small btn-sheen-intrctve upper" tabindex="10">
									+ Add
									<span class="sheen"></span>
								</button>
								<div class="pacer"></div>
							</div>
						</div>
						<div class="col col-6 no-gutter">
							<button id="btResetQues" class="btn-sheen btn-sheen-small btn-sheen-prim btn-sheen-only upper js-no-click" tabindex="11">
								Reset
								<span class="sheen"></span>
							</button>
						</div>
					</div><!-- .grid -->
				</form><!-- .box -->
			</div><!-- ques form .col -->
		</div><!-- .grid -->
		<br />
		<p class="msg big center">
			Showing questions for
			<select id="slFetchSubject" class="combo w-auto js-fetch-combos" tabindex="-1">
				<option value="Physics,Chemistry,Biology,Other">All</option>
				<option value="Physics">Physics</option>
				<option value="Chemistry">Chemistry</option>
				<option value="Biology">Biology</option>
				<option value="Other">Other</option>
			</select>
			subject(s) and
			<select id="slFetchDiffLevel" class="combo w-auto js-fetch-combos" tabindex="-1">
				<option value="Easy,Intermediate,Tough">All</option>
				<option value="Easy">Easy</option>
				<option value="Intermediate">Intermediate</option>
				<option value="Tough">Tough</option>
			</select>
			difficult level
		</p>
		<div id="all-ques"></div>
		<!--div class="fetch-loader js-res-loader">
			<p class="msg center big">
				<img src="../../assets/img/loading.gif" alt="loading" width="40">
				<br />
				Getting more questions...
			</p>
		</div>
		<div class="no-more-srch">
			<p class="msg hint center">No more questions</p>
		</div-->
	</div><!-- .container -->
</div><!-- .content -->

<a id="take-to-top" href="#content" class="none"></a>

<br />
<br />

<script type="text/javascript" src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML"></script>
<script type="text/javascript">
	var instId   = '${id}';
	var instRole = '${role}';
</script>

<%-- #DEV block --%>
<c:if test="${env == 'dev'}">
	<script type="text/javascript" src="${hostName}assets/scripts/lib/jquery.min.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/lib/jquery.badger.min.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/utils/site-nav.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/lib/handlebars.runtime.min.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/compl/hbs-templates.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/utils/templates.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/lib/masonry.pkgd.min.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/odin/modules/mathjax-preview.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/odin/modules/fetcher.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/odin/modules/footer-hit.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/odin/ques-bank.js?v=${version}"></script>
</c:if>

<%-- #PROD block --%>
<c:if test="${env == 'prod'}">
	<script type="text/javascript" src="${hostName}assets/scripts/dist/jquery.site-nav.min.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/site/ot-ques.js?v=${version}"></script>
</c:if>