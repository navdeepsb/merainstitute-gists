<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<div class="content">
	<div class="container">
		<div class="banner">
			<h1 class="mono big center">Advertise with us</h1>
			<hr />
		</div>
		<div class="center">
			<br />
			<p class="hint medium center" style="margin-bottom: 10px">Currently we support <span style="color: white; background: #3a5795; padding: 2px 8px 2px 4px"><span class="fa fa-facebook fa-fw"></span> Facebook</span> advertising only</p>
			<br />
			<div class="supprt-cntnr inline-blk" style="float: none; margin-right: 0">
				<div class="box supprt center" style="min-height: 0">
					<p class="msg medium">
						<span class="bigger">Why advertise with us?</span>
						<br />
						Through Facebook, we help you reach those specific people who are most likely to be attracted towards your institute. Why waste money to show your ads to everyone when you can spend money to reach only the targeted students.
					</p>
				</div>
			</div>
			<div class="supprt-cntnr inline-blk" style="float: none">
				<form id="frm-advertise" class="box supprt t-left">
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
							<label for="tbContactNo" class="lbl-tb upper"><span class="fa fa-phone fa-fw"></span> Your contact number</label>
							<input id="tbContactNo" name="contactNum" type="text" class="tb tb-light left" spellcheck="false" autocomplete="off" placeholder="ex. 9876543210" tabindex="3">
						</div>
					</div>
					<div class="grid-row left">
						<div class="frm-ctrl-wrapper no-margin supprt-fld-txt">
							<label for="tbQuery" class="lbl-tb upper"><span class="fa fa-file-text-o fa-fw"></span> Details <sup>*</sup></label>
							<textarea id="tbQuery" name="suppText" rows="4" class="tb tb-light txt-ar" spellcheck="true" autocomplete="off" placeholder="please type here..." tabindex="4"></textarea>
							<p class="hint medium" style="margin-bottom: 10px">* You can state your detailed requirements like targeted cities, targeted student age group, etc.</p>
						</div>
					</div>
					<div class="factory-control">
						<div class="pacer-wrappr">
							<button id="btAdvReq" class="btn-sheen btn-sheen-small btn-sheen-intrctve upper" tabindex="5">
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