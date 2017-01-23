<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<c:if test="${empty noDistraction}">
	<c:set var="noDistraction" scope="session" value="false"/>
</c:if>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="google-site-verification" content="9hpwHmWLne15KK3uwuc109MRs9Yz6bVH4IAvJmRW9Q8">
	<tiles:insertAttribute name="metaForSeo" />
	<title><tiles:insertAttribute name="title" /> | merainstitute.com</title>

	<!-- Favicon meta tags -->
	<link rel="apple-touch-icon" sizes="57x57" href="${hostName}assets/img/favicon/apple-touch-icon-57x57.png?v=pgByWK7yn4">
	<link rel="apple-touch-icon" sizes="60x60" href="${hostName}assets/img/favicon/apple-touch-icon-60x60.png?v=pgByWK7yn4">
	<link rel="apple-touch-icon" sizes="72x72" href="${hostName}assets/img/favicon/apple-touch-icon-72x72.png?v=pgByWK7yn4">
	<link rel="apple-touch-icon" sizes="76x76" href="${hostName}assets/img/favicon/apple-touch-icon-76x76.png?v=pgByWK7yn4">
	<link rel="apple-touch-icon" sizes="114x114" href="${hostName}assets/img/favicon/apple-touch-icon-114x114.png?v=pgByWK7yn4">
	<link rel="apple-touch-icon" sizes="120x120" href="${hostName}assets/img/favicon/apple-touch-icon-120x120.png?v=pgByWK7yn4">
	<link rel="apple-touch-icon" sizes="144x144" href="${hostName}assets/img/favicon/apple-touch-icon-144x144.png?v=pgByWK7yn4">
	<link rel="apple-touch-icon" sizes="152x152" href="${hostName}assets/img/favicon/apple-touch-icon-152x152.png?v=pgByWK7yn4">
	<link rel="apple-touch-icon" sizes="180x180" href="${hostName}assets/img/favicon/apple-touch-icon-180x180.png?v=pgByWK7yn4">
	<link rel="icon" type="image/png" href="${hostName}assets/img/favicon/favicon-32x32.png?v=pgByWK7yn4" sizes="32x32">
	<link rel="icon" type="image/png" href="${hostName}assets/img/favicon/favicon-194x194.png?v=pgByWK7yn4" sizes="194x194">
	<link rel="icon" type="image/png" href="${hostName}assets/img/favicon/favicon-96x96.png?v=pgByWK7yn4" sizes="96x96">
	<link rel="icon" type="image/png" href="${hostName}assets/img/favicon/android-chrome-192x192.png?v=pgByWK7yn4" sizes="192x192">
	<link rel="icon" type="image/png" href="${hostName}assets/img/favicon/favicon-16x16.png?v=pgByWK7yn4" sizes="16x16">
	<link rel="manifest" href="${hostName}assets/img/favicon/manifest.json?v=pgByWK7yn4">
	<link rel="shortcut icon" href="${hostName}assets/img/favicon/favicon.ico?v=pgByWK7yn4">
	<meta name="apple-mobile-web-app-title" content="MeraInstitute">
	<meta name="application-name" content="MeraInstitute">
	<meta name="msapplication-TileColor" content="#556270">
	<meta name="msapplication-TileImage" content="${hostName}assets/img/favicon/mstile-144x144.png?v=pgByWK7yn4">
	<meta name="msapplication-config" content="${hostName}assets/img/favicon/browserconfig.xml?v=pgByWK7yn4">
	<meta name="theme-color" content="#556270">
	<!-- /Favicon meta tags -->

	<!-- Social meta tags -->
	<tiles:insertAttribute name="socialMetaTags" />
	<!-- /Social meta tags -->

	<%-- #DEV block --%>
	<c:if test="${env == 'dev'}">
		<link rel="stylesheet" href="${hostName}assets/styles/lib/font-awesome.min.css?v=${version}">
		<link rel="stylesheet" href="${hostName}assets/styles/lib/normalize.css?v=${version}">
		<link rel="stylesheet" href="${hostName}assets/styles/lib/typefaces.css?v=${version}">
		<link rel="stylesheet" href="${hostName}assets/styles/lib/pickadate.min.css?v=${version}">
		<link rel="stylesheet" href="${hostName}assets/styles/lib/cropper.min.css?v=${version}">
		<link rel="stylesheet" href="${hostName}assets/styles/lib/justifiedGallery.min.css?v=${version}">
		<link rel="stylesheet" href="${hostName}assets/styles/lib/swipebox.min.css?v=${version}">
		<link rel="stylesheet" href="${hostName}assets/styles/pluto.css?v=${version}">
		<link rel="stylesheet" href="${hostName}assets/styles/odin.css?v=${version}">
	</c:if>

	<%-- #PROD block --%>
	<c:if test="${env == 'prod'}">
		<link rel="stylesheet" href="${hostName}assets/styles/lib/lib.min.css?v=${version}">
		<link rel="stylesheet" href="${hostName}assets/styles/pluto.min.css?v=${version}">
	</c:if>
</head>
<body noDistraction="${noDistraction}">
	<div class="headr">
		<div class="pheader">
			<tiles:insertAttribute name="header" />
		</div>
		<div class="pmenu">
			<tiles:insertAttribute name="menu" />
		</div>
		<div class="psearch">
			<tiles:insertAttribute name="search" />
		</div>
	</div>
	<div class="pbody">
		<tiles:insertAttribute name="body" />
	</div>
	<div class="pfooter">
		<tiles:insertAttribute name="footer" />
	</div>

	<tiles:insertAttribute name="fbSDK" />
	<tiles:insertAttribute name="googleSDK" />

	<script>
		window.siteConfig = { 'url' : { 'front' : '${hostName}' } };
	</script>

	<%-- #PROD block --%>
	<c:if test="${env == 'prod'}">
	<script>

		/******************************************************
		 **   _____   __              __
		 **  |   _  \|  | __   __  __|  |__  _______
		 **  |   ___/|  ||  | |  ||__    __||   _   |
		 **  |  |    |  ||  |_|  |   |  |   |  |_|  |
		 **  |__|    |__||_______|   |__|   |_______| v${version}
		 **
		 ******************************************************/

		(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

		ga('create', 'UA-62280972-1', 'auto');
		ga('send', 'pageview');

	</script>
	</c:if>
</body>
</html>

<!-- @author Navi -->