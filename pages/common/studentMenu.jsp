<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<c:if test="${empty loggedInUserProfileImage}">
    <c:set var="loggedInUserProfileImage" scope="session" value="${hostName}assets/img/vectors/user.svg"/>
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
							<img src="${loggedInUserProfileImage}" alt="img">
						</span>
						<span class="usrnm ellipsis left">${loggedInUserName}</span>
						<span class="fa fa-angle-down fa-fw"></span>
					</a>

					<ul id="dropdown-201" class="pull-to-right">
						<li>
							<a href="${hostName}student/account">
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