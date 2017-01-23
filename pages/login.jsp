<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<div class="content">
	<div class="container">
		<div class="banner">
			<h1 class="center">Connect with us</h1>
			<hr />
		</div>
		<div class="card-lone-container">
			<form id="frm-login" class="card card-lone js-frm">
				<label for="tbLoginId" class="lbl-tb upper"><span class="fa fa-envelope-o fa-fw"></span> Email Address / Username</label>
				<input id="tbLoginId" type="text" class="tb" spellcheck="false" autocomplete="off" placeholder="ex. awesome.username@domain-name.com" tabindex="1">
				<label for="tbPwd" class="lbl-tb upper"><span class="fa fa-lock fa-fw"></span> Password</label>
				<input id="tbPwd" type="password" class="tb" spellcheck="false" autocomplete="off" tabindex="2">
				<p class="usr-aware t-right"><a href="${hostName}forgotPassword" tabindex="4">Forgot your password?</a></p>
				<hr />
				<div class="pacer-wrappr">
					<button id="btLogin" class="btn-sheen btn-sheen-small btn-sheen-intrctve upper" tabindex="3">
						Login
						<span class="sheen"></span>
					</button>
					<div class="pacer"></div>
				</div>
			</form>
		</div>
		<div class="card-lone-container">
			<div class="pacer-wrappr">
				<button id="btLoginGoogle" class="btn-sheen btn-sheen-small btn-sheen-intrctve btn-social" disabled="disabled" tabindex="3">
					<span class="social-ico inline-blk">
						<span class="fa fa-google-plus fa-fw"></span>
					</span><!--
					--><span class="social-txt inline-blk">
						Contacting Google...
					</span>
					<span class="sheen"></span>
				</button>
				<div id="googlePacer" class="pacer"></div>
			</div>
			<br />
			<div class="pacer-wrappr">
				<button id="btLoginFacebook" class="btn-sheen btn-sheen-small btn-sheen-intrctve btn-social" disabled="disabled" tabindex="3">
					<span class="social-ico inline-blk">
						<span class="fa fa-facebook fa-fw"></span>
					</span><!--
					--><span class="social-txt inline-blk">
						Contacting Facebook...
					</span>
					<span class="sheen"></span>
				</button>
				<div id="facebookPacer" class="pacer"></div>
			</div>
		</div>
	</div>
</div><!-- .content -->

<br />
<br />

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

<script type="text/javascript">
	$(document).ready(function() {
		$('#tbLoginId').focus();
	});
</script>