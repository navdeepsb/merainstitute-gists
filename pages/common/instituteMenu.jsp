<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<c:if test="${empty loggedInUserProfileImage}">
    <c:set var="loggedInUserProfileImage" scope="session" value="assets/img/logo-placeholder.jpg"/>
</c:if>

<div class="headr-lowr">
	<div class="nav-main-cntnr">
		<nav class="nav">
			<ul>
				<li>
					<a href="${hostName}" tabindex="-1">
						<span class="show-when-big">
							<img src="${hostName}assets/img/logo-500x500.png" alt="logo" width="25">
						</span>
						Home
					</a>
				</li>
				<li>
					<a class="js-nav-option" data-child="dropdown-102" href="${hostName}custommsg?code=MSG04">
						Institutes <span class="fa fa-angle-down fa-fw"></span>
					</a>

					<ul id="dropdown-102">
						<li>
							<a href="${hostName}filter?type=inst" tabindex="-1">
								Find a coaching institute
							</a>
						</li>
						<li>
							<hr class="nav-sprtr" />
						</li>
						<li>
							<a href="${hostName}top-coaching-institutes/all-exams/overall-rating" tabindex="-1">
								Top rated
							</a>
						</li>
						<li>
							<a href="${hostName}custommsg?code=MSG04" tabindex="-1">
								Most viewed <span class="small upper highlight">Coming Soon</span>
							</a>
						</li>
						<li>
							<a href="${hostName}custommsg?code=MSG04" tabindex="-1">
								Trending <span class="small upper highlight">Coming Soon</span>
							</a>
						</li>
					</ul>
				</li>
				<li>
					<a class="js-nav-option" data-child="dropdown-103" href="${hostName}custommsg?code=MSG04">
						Courses <span class="fa fa-angle-down fa-fw"></span>
					</a>

					<ul id="dropdown-103">
						<li>
							<a href="${hostName}filter?type=crse" tabindex="-1">
								Find a suitable course
							</a>
						</li>
						<li>
							<hr class="nav-sprtr" />
						</li>
						<li>
							<a href="${hostName}custommsg?code=MSG04" tabindex="-1">
								Top rated <span class="small upper highlight">Coming Soon</span>
							</a>
						</li>
						<li>
							<a href="${hostName}custommsg?code=MSG04" tabindex="-1">
								Trending <span class="small upper highlight">Coming Soon</span>
							</a>
						</li>
					</ul>
				</li>
				<li>
					<a href="http://www.facebook.com/merainstitute" target="_blank" class="less-wide nav-fb" tabindex="-1">
						<span class="fa fa-facebook fa-fw"></span>
					</a>
				</li>
				<li>
					<a href="http://www.twitter.com/merainstitute" target="_blank" class="less-wide nav-tw" tabindex="-1">
						<span class="fa fa-twitter fa-fw"></span>
					</a>
				</li>
				<li>
					<a href="https://plus.google.com/+Merainstitute" target="_blank" class="less-wide nav-gp" tabindex="-1">
						<span class="fa fa-google-plus fa-fw"></span>
					</a>
				</li>
			</ul>
		</nav><!-- .nav -->
	</div><!-- .nav-main-cntnr -->
	<div class="nav-user-cntnr">
		<nav class="nav nav-user">
			<ul>
				<li class="show-when-big">
					<a href="#" class="js-srch" tabindex="-1">
						<span class="fa fa-search fa-fw"></span> Search
					</a>
				</li>
				<li>
					<a class="js-nav-option" data-child="dropdown-201" href="#">
						<span class="dp-tiny left">
							<img src="${hostName}${loggedInUserProfileImage}" alt="img">
						</span>
						<span class="usrnm ellipsis left">${loggedInUserName}</span>
						<span class="fa fa-angle-down fa-fw"></span>
					</a>

					<ul id="dropdown-201" class="pull-to-right">
						<li>
							<a href="${hostName}institute/portfolio">
								<span class="fa fa-circle fa-fw"></span> Portfolio
							</a>
						</li>
						<li>
							<a id="lnk-wall" href="${hostName}${loggedInUserName}">
								<span class="fa fa-arrow-right fa-fw"></span> Banner
							</a>
						</li>
						<li>
							<hr class="nav-sprtr" />
						</li>
						<li>
							<a href="${hostName}${loggedInUserName}/team">
								<span class="fa fa-users fa-fw"></span> Team
							</a>
						</li>
						<li>
							<a href="${hostName}${loggedInUserName}/achievers">
								<span class="fa fa-star fa-fw"></span> Achievers
							</a>
						</li>
						<li>
							<a href="${hostName}${loggedInUserName}/courses">
								<span class="fa fa-graduation-cap fa-fw"></span> Courses
							</a>
						</li>
						<li>
							<a href="${hostName}${loggedInUserName}/centers">
								<span class="fa fa-map-marker fa-fw"></span> Centers
							</a>
						</li>
						<li>
							<a href="${hostName}${loggedInUserName}/reviews">
								<span class="fa fa-pencil-square fa-fw"></span> Reviews
							</a>
						</li>
						<li>
							<a href="${hostName}${loggedInUserName}/gallery">
								<span class="fa fa-photo fa-fw"></span> Gallery
							</a>
						</li>
						<li>
							<hr class="nav-sprtr" />
						</li>
						<li>
							<a href="${hostName}institute/advertise" style="color: #ffc719">
								<span class="fa fa-bullhorn fa-fw"></span> Advertise with us
							</a>
						</li>
						<li>
							<hr class="nav-sprtr" />
						</li>
						<li>
							<a href="${hostName}institute/online-tests/dashboard">
								<span class="fa fa-check-square-o fa-fw"></span> Online tests
							</a>
						</li>
						<li>
							<a href="${hostName}institute/account">
								<span class="fa fa-cogs fa-fw"></span> Account Settings
							</a>
						</li>
						<li>
							<a href="${hostName}logout">
								<span class="fa fa-sign-out fa-fw"></span> Logout
							</a>
						</li>
					</ul>
				</li>
			</ul>
		</nav><!-- .nav.nav-user -->
	</div><!-- .nav-user-cntnr -->
</div><!-- .headr-lowr -->