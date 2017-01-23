<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<c:if test="${not empty social}">
	<meta property="og:title" content="${fn:escapeXml( social.title )}">
	<meta property="og:url" content="${social.url}">
	<meta property="og:image" content="${social.image}">
	<meta property="og:description" content="${fn:escapeXml( social.description )}">
	<c:if test="${not empty social.imageWidth}">
        <meta property="og:image:width" content="${social.imageWidth}">
    </c:if>
    <c:if test="${not empty social.imageHeight}">
        <meta property="og:image:height" content="${social.imageHeight}">
	</c:if>
</c:if>
	<meta property="og:site_name" content="merainstitute">
    <meta property="fb:app_id" content="1530654253866204">
