<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<div class="content">
	<div class="container">
		<div class="banner">
			<h1 class="center">merainstitute.com team</h1>
			<hr />
		</div>
		<br />
		<div class="center" style="margin-bottom: 30px">
			<div class="cell inline-blk">
				<div class="cell-inner">
					<div class="img-main img-wrapper">
						<img src="${hostName}assets/img/team/anuj.jpg" alt="Anuj Chopra">
					</div>
					<p class="msg bigger bold">Anuj Chopra</p>
					<p class="msg medium">Co-founder &amp; Team coordinator</p>
					<hr />
					<p class="msg medium">Anuj is very passionate about the things he likes. A highly motivated individual, his mind is always flooding with ideas.</p>
					<br />
					<p class="bigger social">
						<a href="https://www.facebook.com/anujchops" target="_blank" title="anujchops"><span class="fa fa-facebook-square fa-fw" style="color: #3a5795"></span></a>
						<a href="https://plus.google.com/110093191735391604063/posts" target="_blank"><span class="fa fa-google-plus-square fa-fw" style="color: #cb4437"></span></a>
						<a href="mailto:anujratanchopra@gmail.com" title="anujratanchopra@gmail.com"><span class="fa fa-at fa-fw"></span></a>
					</p>
				</div>
			</div><!--
			--><div class="cell inline-blk">
				<div class="cell-inner">
					<div class="img-main img-wrapper">
						<img src="${hostName}assets/img/team/navi.jpg" alt="Navdeep Singh Bagga">
					</div>
					<p class="msg bigger bold">Navdeep Singh Bagga</p>
					<p class="msg medium">Co-founder &amp; Front end developer</p>
					<hr />
					<p class="msg medium">Navdeep posseses an extreme penchant for web design and web development. He tends to have a Midas touch. A perfectionist.</p>
					<br />
					<p class="bigger social">
						<a href="http://www.facebook.com/navdeepsb" target="_blank" title="navdeepsb"><span class="fa fa-facebook-square fa-fw" style="color: #3a5795"></span></a>
						<a href="http://www.twitter.com/navdeepsb" target="_blank" title="@navdeepsb"><span class="fa fa-twitter fa-fw" style="color: #55acee"></span></a>
						<a href="https://plus.google.com/+NavdeepSinghBagga" target="_blank" title="+NavdeepSinghBagga"><span class="fa fa-google-plus-square fa-fw" style="color: #cb4437"></span></a>
						<a href="mailto:navdeepb3191@gmail.com" title="navdeepb3191@gmail.com"><span class="fa fa-at fa-fw"></span></a>
					</p>
				</div>
			</div><!--
			--><div class="cell inline-blk">
				<div class="cell-inner">
					<div class="img-main img-wrapper">
						<img src="${hostName}assets/img/team/purvesh.jpg" alt="Purvesh Patel">
					</div>
					<p class="msg bigger bold">Purvesh Patel</p>
					<p class="msg medium">Co-founder &amp; Back end developer</p>
					<hr />
					<p class="msg medium">Meet our super-geek. Purvesh is a born coder, he can sleep with his hands still writing some code on his vintage laptop.</p>
					<br />
					<p class="bigger social">
						<a href="https://www.facebook.com/purvesh.patel.370" target="_blank" title="purvesh.patel.370"><span class="fa fa-facebook-square fa-fw" style="color: #3a5795"></span></a>
						<a href="http://www.twitter.com/purveshptl" target="_blank" title="@purveshptl"><span class="fa fa-twitter fa-fw" style="color: #55acee"></span></a>
						<a href="https://plus.google.com/112828153403324112028/posts" target="_blank"><span class="fa fa-google-plus-square fa-fw" style="color: #cb4437"></span></a>
						<a href="mailto:p.purvesh.ptl@gmail.com" title="p.purvesh.ptl@gmail.com"><span class="fa fa-at fa-fw"></span></a>
					</p>
				</div>
			</div><!--
			--><div class="cell inline-blk">
				<div class="cell-inner">
					<div class="img-main img-wrapper">
						<img src="${hostName}assets/img/team/nitesh.jpg" alt="Nitish Rathi">
					</div>
					<p class="msg bigger bold">Nitesh Kumar</p>
					<p class="msg medium">Co-founder &amp; Client operations</p>
					<hr />
					<p class="msg medium">Nitesh can sit in front of his computer for days and weeks running. The impossible task of data collection was done by him.</p>
					<br />
					<p class="bigger social">
						<a href="https://www.facebook.com/rknitesh.ry" target="_blank" title="rknitesh.ry"><span class="fa fa-facebook-square fa-fw" style="color: #3a5795"></span></a>
						<a href="mailto:rknitesh.rry@gmail.com" title="rknitesh.rry@gmail.com"><span class="fa fa-at fa-fw"></span></a>
					</p>
				</div>
			</div>
		</div>
	</div>
</div><!-- .content -->

<%-- #DEV block --%>
<c:if test="${env == 'dev'}">
	<script type="text/javascript" src="${hostName}assets/scripts/lib/jquery.min.js?v=${version}"></script>
	<script type="text/javascript" src="${hostName}assets/scripts/utils/site-nav.js?v=${version}"></script>
</c:if>

<%-- #PROD block --%>
<c:if test="${env == 'prod'}">
	<script type="text/javascript" src="${hostName}assets/scripts/dist/jquery.site-nav.min.js?v=${version}"></script>
</c:if>