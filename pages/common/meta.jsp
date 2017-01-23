<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<c:choose>
	<c:when test="${not empty meta.description}">
        <meta name="description" content="${ meta.description }">
	</c:when>
	<c:otherwise>
        <meta name="description" content="The one place to find courses for all popular exams in India. Find best institute in india, popular courses in india, search institute, search courses, rating of institute, reviews of institute, institute achievers, toppers and top rankers, institute faculty, institute gallery and photos and a lot more.">
	</c:otherwise>
</c:choose>