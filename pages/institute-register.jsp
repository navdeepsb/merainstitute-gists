<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<div class="content">
	<div class="container">
		<div class="banner">
			<h1 class="center">Steps to reach students</h1>
			<hr />
		</div>
		<div class="main-section ovrflw">
			<div class="center font-merri">
				<div class="tm-membr-cntnr reg-step-wrpr inline-blk t-left">
					<div class="reg-step reg-step-1 center white">
						<p class="t-left mono bigger">1.</p>
						<br />
						<p>
							<img src="../assets/img/vectors/handshake.svg" alt="img" width="100">
						</p>
						<br />
						<p class="bigger">Join Us</p>
					</div>
				</div><!--
				--><div class="tm-membr-cntnr reg-step-wrpr inline-blk t-left">
					<div class="reg-step reg-step-2 center white">
						<p class="t-left mono bigger">2.</p>
						<br />
						<p>
							<img src="../assets/img/vectors/fill-form.svg" alt="img" width="100">
						</p>
						<br />
						<p class="bigger">Fill in details</p>
					</div>
				</div><!--
				--><div class="tm-membr-cntnr reg-step-wrpr inline-blk t-left">
					<div class="reg-step reg-step-3 center white">
						<p class="t-left mono bigger">3.</p>
						<br />
						<p>
							<img src="../assets/img/vectors/student.svg" alt="img" width="100">
						</p>
						<br />
						<p class="bigger">Reach students</p>
					</div>
				</div>
			</div>
		</div>
		<br />
		<br />
		<a href="#reg" class="btn-sheen btn-sheen-intrctve lure-reg white loose center">
			<span class="fa fa-edit fa-fw fa-2x" style="vertical-align: middle"></span> Register your institute now *
			<span class="sheen"></span>
		</a>
		<p class="medium center">* Registration requests are verified</p>
		<br />
		<br />
		<div class="banner">
			<h1 class="center">Why should institutes join</h1>
			<hr />
		</div>
		<br />
		<div class="main-section ovrflw">
			<div class="reg-img-2-3 inline-blk">
				<div class="reg-pic-wrpr inline-blk">
					<div class="reg-pic img-wrapper">
						<img src="../assets/img/reg-pt-1.jpg" alt="reg image">
						<div class="reg-pic-descr white ellipsis" title="Reach students who are unable to reach you"><h2>Reach students who are unable to reach you</h2></div>
					</div>
				</div><!--
				--><div class="reg-pic-wrpr inline-blk">
					<div class="reg-pic img-wrapper">
						<img src="../assets/img/reg-pt-3.jpg" alt="reg image">
						<div class="reg-pic-descr white ellipsis" title="Publish your results and success stories in a flash"><h2>Publish your results and success stories in a flash</h2></div>
					</div>
				</div><!--
				--><div class="reg-pic-wrpr inline-blk">
					<div class="reg-pic img-wrapper">
						<img src="../assets/img/reg-pt-2.jpg" alt="reg image">
						<div class="reg-pic-descr white ellipsis" title="Super dynamic updations of any news about your institute"><h2>Super dynamic updations of any news about your institute</h2></div>
					</div>
				</div><!--
				--><div class="reg-pic-wrpr inline-blk">
					<div class="reg-pic img-wrapper">
						<img src="../assets/img/reg-pt-4.jpg" alt="reg image">
						<div class="reg-pic-descr white ellipsis" title="Connect with interested students instantly"><h2>Connect with interested students instantly</h2></div>
					</div>
				</div>
			</div><!--
			--><div class="reg-img-1-3 inline-blk">
				<div class="reg-pic reg-pic-2x img-wrapper">
					<img src="../assets/img/reg-pt-5.jpg" alt="image">
					<div class="reg-pic-descr white ellipsis" title="Get your virtual website through us"><h2>Get your virtual website through us</h2></div>
				</div>
			</div>
		</div>
		<br />
		<br />
		<div id="reg" class="banner" style="padding-top: 70px">
			<h1 class="center">Register your institute</h1>
			<hr />
		</div>
		<div class="card-lone-container">
			<form id="frm-reg" class="card card-lone">
				<label for="tbName" class="lbl-tb upper"><span class="fa fa-edit fa-fw"></span> Institute Name</label>
				<input id="tbName" type="text" class="tb" spellcheck="false" autocomplete="off" placeholder="ex. Institute XYZ" tabindex="1">
				<label for="tbEmail" class="lbl-tb upper"><span class="fa fa-envelope-o fa-fw"></span> Email Address</label>
				<div class="tb-hint-wrapper" style="width: 100%">
					<input id="tbEmail" type="text" name="email" class="tb js-check-me" spellcheck="false" autocomplete="off" placeholder="ex. username@domain.com" tabindex="2">
					<div class="auto-checker"></div>
				</div>
				<label for="tbUsername" class="lbl-tb upper"><span class="fa fa-user fa-fw"></span> Username</label>
				<div class="tb-hint-wrapper" style="width: 100%">
					<input id="tbUsername" type="text" name="username" class="tb js-check-me" spellcheck="false" autocomplete="off" placeholder="ex. xyzclasses" tabindex="3">
					<div class="auto-checker"></div>
				</div>
				<label for="tbContactNo" class="lbl-tb upper"><span class="fa fa-phone fa-fw"></span> Contact number</label>
				<div class="tb-hint-wrapper" style="width: 100%">
					<input id="tbContactNo" type="text" name="contactNum" class="tb js-check-me" spellcheck="false" autocomplete="off" placeholder="ex. 9876543210" tabindex="4">
					<div class="auto-checker"></div>
				</div>
				<label for="tbPwd1" class="lbl-tb upper"><span class="fa fa-lock fa-fw"></span> Password</label>
				<div class="pwd-wrapper">
					<input id="tbPwd1" type="password" class="tb" spellcheck="false" autocomplete="off" tabindex="5">
					<div class="pwd-strength-container">
						<div class="pwd-strength-bar"></div>
					</div>
				</div>
				<label for="tbPwd2" class="lbl-tb upper"><span class="fa fa-lock fa-fw"></span> Confirm Password</label>
				<input id="tbPwd2" type="password" class="tb" spellcheck="false" autocomplete="off" tabindex="6">
				<p class="usr-aware t-right">Read the <a href="../static/terms-and-conditions.html" target="_blank" tabindex="8">Terms &amp; Conditions</a> and <a href="../static/privacy-policy.html" target="_blank" tabindex="9">Privacy Policy</a></p>
				<hr />
				<div class="pacer-wrappr">
				    <button id="btRegister" class="btn-sheen btn-sheen-small btn-sheen-intrctve upper" tabindex="7">
						Register <sup>*</sup>
						<span class="sheen"></span>
				    </button>
				    <div class="pacer"></div>
				</div>
				<br />
				<p class="medium">* Registration requests are verified</p>
			</form>
			<p class="msg hint below center">
				Already registered?
				<br />
				<a href="../login" tabindex="10">Login</a>
			</p>
		</div>
	</div>
</div><!-- .content -->

<%-- #DEV block --%>
<c:if test="${env == 'dev'}">
	<script type="text/javascript" src="${hostName}assets/scripts/lib/jquery.min.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/lib/jquery.badger.min.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/utils/site-nav.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/utils/validator.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/site/frm-submit.js?v=${version}"></script>
</c:if>

<%-- #PROD block --%>
<c:if test="${env == 'prod'}">
	<script type="text/javascript" src="${hostName}assets/scripts/dist/jquery.site-nav.min.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/dist/frm-submit.min.js?v=${version}"></script>
</c:if>