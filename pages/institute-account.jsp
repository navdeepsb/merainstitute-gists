<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<div class="content">
	<div class="container">
		<div class="banner">
			<h1 class="center">Account Settings</h1>
			<hr />
		</div>
		<p class="center big"><span class="js-name">Owner Name</span></p>
		<div style="padding: 20px">
			<p class="bigger mono"><span class="underline">Contact Details</span></p>
			<ul class="big" style="line-height: 2; padding-left: 20px">
				<li>
					Email
					<br />
					<span class="js-email">username@domain.com</span> <a href="#" class="small js-modal-show" data-target="#mdl-chng-email">change</a>
				</li>
				<li>
					Mobile number
					<br />
					<span class="js-mob">9876543210</span> <a href="#" class="small js-modal-show" data-target="#mdl-chng-mob">change</a>
				</li>
			</ul>
		</div>
		<div style="padding: 20px">
			<p class="bigger mono"><span class="underline">Security</span></p>
			<p style="line-height: 2">
				<a href="#" class="medium js-modal-show" data-target="#mdl-chng-pwd">Change password</a>
			</p>
		</div>
		<div style="padding: 20px">
			<p class="bigger mono"><span class="underline">Identity</span></p>
			<ul class="big" style="line-height: 2; padding-left: 20px">
				<li>
					Username
					<br />
					<span class="js-unm">username</span> <a href="#" class="small js-modal-show" data-target="#mdl-chng-usrnm">change</a>
				</li>
			    <c:if test="${empty role}">
					<li>
						<a href="#" class="medium js-modal-show" data-target="#mdl-deact">Deactivate account</a>
					</li>
				</c:if>
			</ul>
		</div>
	</div>
</div><!-- .content -->

<!-- Modal for changing pasword -->
<div id="mdl-chng-pwd" class="modal" style="display: none">
	<form id="frm-chng-pwd" class="modal-form">
		<p class="center bigger">Change Password</p>
		<br />
		<label for="tbPwdOld" class="lbl-tb upper inline-blk">Old Password</label>
		<input id="tbPwdOld" type="password" class="tb tb-light">
		<label for="tbPwd1" class="lbl-tb upper inline-blk">New Password</label>
		<div class="pwd-wrapper">
			<input id="tbPwd1" type="password" class="tb tb-light">
			<div class="pwd-strength-container none">
				<div class="pwd-strength-bar"></div>
			</div>
		</div>
		<label for="tbPwd2" class="lbl-tb upper inline-blk">Confirm Password</label>
		<input id="tbPwd2" type="password" class="tb tb-light">
		<br />
		<br />
		<div class="center">
			<div class="pacer-wrappr inline-blk" style="width: 120px">
				<div class="pacer"></div>
				<button id="btChangePwd" class="btn-sheen btn-sheen-small btn-sheen-intrctve upper">
					Change
					<span class="sheen"></span>
				</button>
				<div class="pacer"></div>
			</div>
			<button class="btn-double btn-double-error upper js-modal-close js-no-click" style="height: 43px">
				<span class="frnt" style="line-height: 43px">Cancel</span>
				<span class="back" style="line-height: 43px">Cancel</span>
			</button>
		</div>
	</form>
</div>

<!-- Modal for changing username -->
<div id="mdl-chng-usrnm" class="modal" style="display: none">
	<form class="modal-form js-frm-chng-entity" data-to-update=".js-unm">
		<p class="center bigger">Change username</p>
		<br />
		<br />
		<input name="username" type="text" class="tb tb-light" spellcheck="false" autocomplete="off" placeholder="enter new username here" data-entity-name="Username">
		<p class="msg hint t-left"><span class="fa fa-exclamation-circle fa-fw"></span> You will be logged out after this change. <br /><br /> We recommend that you do not change your username very often as it determines the URL of your virtual website links (banner, centers, gallery, etc.)</p>
		<br />
		<br />
		<div class="center">
			<div class="pacer-wrappr inline-blk" style="width: 120px">
				<div class="pacer"></div>
				<button class="btn-sheen btn-sheen-small btn-sheen-intrctve upper">
					Change
					<span class="sheen"></span>
				</button>
				<div class="pacer"></div>
			</div>
			<button class="btn-double btn-double-error upper js-modal-close js-no-click" style="height: 43px">
				<span class="frnt" style="line-height: 43px">Cancel</span>
				<span class="back" style="line-height: 43px">Cancel</span>
			</button>
		</div>
	</form>
</div>

<!-- Modal for changing contact email -->
<div id="mdl-chng-email" class="modal" style="display: none">
	<form class="modal-form js-frm-chng-entity" style="height: 340px" data-to-update=".js-email">
		<p class="center bigger">Change contact email</p>
		<br />
		<br />
		<input name="email" type="text" class="tb tb-light" spellcheck="false" autocomplete="off" placeholder="enter new email here" data-entity-name="Contact email">
		<p class="msg hint t-left"><span class="fa fa-exclamation-circle fa-fw"></span> You will be asked to verify this new email address.</p>
		<br />
		<br />
		<div class="center">
			<div class="pacer-wrappr inline-blk" style="width: 120px">
				<div class="pacer"></div>
				<button class="btn-sheen btn-sheen-small btn-sheen-intrctve upper">
					Change
					<span class="sheen"></span>
				</button>
				<div class="pacer"></div>
			</div>
			<button class="btn-double btn-double-error upper js-modal-close js-no-click" style="height: 43px">
				<span class="frnt" style="line-height: 43px">Cancel</span>
				<span class="back" style="line-height: 43px">Cancel</span>
			</button>
		</div>
	</form>
</div>

<!-- Modal for changing contact number -->
<div id="mdl-chng-mob" class="modal" style="display: none">
	<form class="modal-form js-frm-chng-entity" style="height: 340px" data-to-update=".js-mob">
		<p class="center bigger">Change contact number</p>
		<br />
		<br />
		<input name="contactNum" type="text" class="tb tb-light" spellcheck="false" autocomplete="off" placeholder="enter new contact number here" data-entity-name="Contact number">
		<br />
		<br />
		<div class="center">
			<div class="pacer-wrappr inline-blk" style="width: 120px">
				<div class="pacer"></div>
				<button class="btn-sheen btn-sheen-small btn-sheen-intrctve upper">
					Change
					<span class="sheen"></span>
				</button>
				<div class="pacer"></div>
			</div>
			<button class="btn-double btn-double-error upper js-modal-close js-no-click" style="height: 43px">
				<span class="frnt" style="line-height: 43px">Cancel</span>
				<span class="back" style="line-height: 43px">Cancel</span>
			</button>
		</div>
	</form>
</div>

<!-- Modal for confirming account deactivation -->
<div id="mdl-deact" class="modal" style="display: none">
	<div style="padding: 20px; height: 170px">
		<p class="big center">
			Are you sure you want to deactivate your account?
		</p>
		<br />
		<br />
		<div class="inline-blk" style="width: 50%; padding: 10px">
			<button id="btDeactAcct" class="btn-double upper">
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

<!-- Modal for asking password -->
<div id="mdl-ver-pwd" class="modal" style="display: none">
	<form id="frm-ver-pwd" class="modal-form" style="height: 220px">
		<p class="center bigger">Verify password</p>
		<br />
		<input name="password" type="password" class="tb tb-light">
		<br />
		<br />
		<div class="center">
			<div class="pacer-wrappr inline-blk" style="width: 120px">
				<div class="pacer"></div>
				<button class="btn-sheen btn-sheen-small btn-sheen-intrctve upper">
					Verify
					<span class="sheen"></span>
				</button>
				<div class="pacer"></div>
			</div>
			<button class="btn-double btn-double-error upper js-modal-close js-no-click" style="height: 43px">
				<span class="frnt" style="line-height: 43px">Cancel</span>
				<span class="back" style="line-height: 43px">Cancel</span>
			</button>
		</div>
	</form>
</div>

<input id="reloadValue" type="hidden" name="reloadValue" value="" />

<script type="text/javascript">
    var pageData = ${pageData};
</script>

<%-- #DEV block --%>
<c:if test="${env == 'dev'}">
	<script type="text/javascript" src="${hostName}assets/scripts/lib/jquery.min.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/utils/no-login.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/lib/jquery.badger.min.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/utils/site-nav.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/utils/validator.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/site/frm-submit.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/site/inst-acct.js?v=${version}"></script>
</c:if>

<%-- #PROD block --%>
<c:if test="${env == 'prod'}">
	<script type="text/javascript" src="${hostName}assets/scripts/dist/jquery.site-nav.min.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/dist/frm-submit.min.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/dist/inst-acct.min.js?v=${version}"></script>
</c:if>