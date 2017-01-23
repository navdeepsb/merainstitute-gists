<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<div class="content">
	<div class="container">
		<div class="banner">
			<h1 class="center">Forgot Password</h1>
			<hr />
		</div>
		<div class="card-lone-container">
			<form id="frm-forgot-pwd" class="card card-lone">
				<label for="tbLoginId" class="lbl-tb upper">Email Address /  Username / Phone number</label>
				<input id="tbLoginId" type="text" class="tb" spellcheck="false" autocomplete="off" placeholder="please type here" tabindex="1">
				<hr />
				<div class="pacer-wrappr">
					<button id="btResetPwd" class="btn-sheen btn-sheen-small btn-sheen-intrctve upper" tabindex="3">
						Submit
						<span class="sheen"></span>
					</button>
					<div class="pacer"></div>
				</div>
			</form>
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