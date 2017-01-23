<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<div class="content">
	<div class="container">
		<div class="banner">
			<h1 class="mono big center">Support</h1>
			<hr />
		</div>
		<div class="supprt-cntnr">
			<form id="frm-supp" class="box supprt">
				<div class="grid-row">
					<div class="frm-ctrl-wrapper no-margin supprt-fld">
						<label for="tbName" class="lbl-tb upper"><span class="fa fa-edit fa-fw"></span> Your name</label>
						<input id="tbName" name="name" type="text" class="tb tb-light left" spellcheck="false" autocomplete="off" placeholder="ex. Jimi Hendrix" tabindex="1">
					</div>
					<div class="frm-ctrl-wrapper no-margin supprt-fld">
						<label for="tbEmail" class="lbl-tb upper"><span class="fa fa-envelope-o fa-fw"></span> Your email address</label>
						<input id="tbEmail" name="email" type="text" class="tb tb-light left" spellcheck="false" autocomplete="off" placeholder="ex. you@domain.com" tabindex="2">
					</div>
					<div class="frm-ctrl-wrapper no-margin supprt-fld">
						<label for="slSuppType" class="lbl-tb upper"><span class="fa fa-question-circle fa-fw"></span> Support type</label>
						<select id="slSuppType" name="suppType" class="combo" tabindex="3">
							<option value="1">Feedback</option>
							<option value="2">Suggestion</option>
							<option value="3">Problem</option>
							<option value="4">Other</option>
						</select>
					</div>
				</div>
				<div class="grid-row left">
					<div class="frm-ctrl-wrapper no-margin supprt-fld-txt">
						<label for="tbSuppText" class="lbl-tb upper"><span class="fa fa-file-text-o fa-fw"></span> Your message</label>
						<textarea id="tbSuppText" name="suppText" rows="4" class="tb tb-light txt-ar" spellcheck="true" placeholder="ex. Type your message here..." tabindex="4"></textarea>
					</div>
				</div>
				<div class="factory-control">
					<div class="pacer-wrappr">
						<button id="btSuppSend" class="btn-sheen btn-sheen-small btn-sheen-intrctve upper" tabindex="5">
							Submit
							<span class="sheen"></span>
						</button>
						<div class="pacer"></div>
					</div>
				<br />
				<br />
				</div>
			</form>
		</div>
		<div class="our-cntr-cntnr">
			<div class="srch-result-wrapper our-cntr">
				<div class="srch-result srch-result-cntr">
					<div class="srch-result-header srch-result-cell">
						<p class="msg big mono center white">Our Center</p>
					</div>
					<div class="srch-result-cell">
						<p class="msg hint upper small"><span class="underline">Address</span></p>
						<p class="msg hint">
							36 Limbodi, Khandwa Road
							<br />
							Indore - 452001
							<br />
							Madhya Pradesh
							<br />
							India
						</p>
					</div>
					<hr />
					<div class="srch-result-cell">
						<p class="msg hint upper small"><span class="underline">Contact details</span></p>
						<ul class="msg hint mono">
							<li>+91-9993365213</li>
							<li>+91-9425317107</li>
						</ul>
					</div>
				</div>
			</div>
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

<script type="text/javascript">
	$(document).ready(function() {
		$('#slSuppType').val( getParameterByName( 'type' ) || 1 );
	});
</script>