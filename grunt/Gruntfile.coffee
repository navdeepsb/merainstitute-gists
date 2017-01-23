###
# Gruntfile
# ---------
# @desc     The Grunt task runner file
# @author   Navi
# @requires NodeJS, Grunt and Grunt plugins
# @remarks  This Gruntfile is my Frankenstein and so I love it dearly
###

module.exports = ( grunt ) ->

	"use strict"

	# Load all the necessary plugins:
	grunt.loadNpmTasks "grunt-contrib-cssmin"
	grunt.loadNpmTasks "grunt-contrib-handlebars"
	grunt.loadNpmTasks "grunt-contrib-uglify"
	grunt.loadNpmTasks "grunt-contrib-watch"
	grunt.loadNpmTasks "grunt-newer"

	# Config storing various paths:
	pathConfig =
		templates:
			source   : "tmpl"
			compiled : "../assets/scripts/compl"
		scripts:
			source   : "../assets/scripts"
			uglified : "../assets/scripts/dist"
		styles:
			source   : "../assets/styles"
			minified : "../assets/styles"

	# Configure tasks:
	grunt.initConfig

		# Store the package.json file in a nifty variable:
		pkg: grunt.file.readJSON "package.json"

		# Store the path related config too:
		path: pathConfig

		# CSSMin @task
		cssmin:
			options:
				report: "min"
				keepSpecialComments: false
			dist:
				files:
					"<%= path.styles.minified %>/pluto.min.css" : [
						"<%= path.styles.source %>/pluto.css"
					]
					"<%= path.styles.minified %>/lib/lib.min.css" : [
						"<%= path.styles.source %>/lib/font-awesome.min.css"
						"<%= path.styles.source %>/lib/normalize.css"
						"<%= path.styles.source %>/lib/typefaces.css"
						"<%= path.styles.source %>/lib/pickadate.min.css"
						"<%= path.styles.source %>/lib/cropper.min.css"
						"<%= path.styles.source %>/lib/justifiedGallery.min.css"
						"<%= path.styles.source %>/lib/swipebox.min.css"
					]

		# Handlebars @task
		handlebars:
			options:
				namespace: "Pluto.Templates"
				processName: ( filePath ) ->
					filePath
						.replace( "tmpl/", "" )
						.replace( "odin/", "" )
						.replace( ".hbs", "" )
			all:
				files:
					"<%= path.templates.compiled %>/hbs-templates.js" : "<%= path.templates.source %>/{,*/}*.hbs"

		# Uglify @task
		uglify:
			options:
				beautify: false
				preserveComments: false
				report: "min"
			dist:
				files:
					"<%= path.scripts.uglified %>/jquery.site-nav.min.js" : [
						"<%= path.scripts.source %>/lib/jquery.min.js"
						"<%= path.scripts.source %>/utils/no-login.js"
						"<%= path.scripts.source %>/lib/jquery.badger.min.js"
						"<%= path.scripts.source %>/utils/site-nav.js"
					]
					"<%= path.scripts.uglified %>/frm-submit.min.js" : [
						"<%= path.scripts.source %>/utils/validator.js"
						"<%= path.scripts.source %>/site/frm-submit.js"
					]
					"<%= path.scripts.uglified %>/templates.min.js" : [
						"<%= path.scripts.source %>/lib/handlebars.runtime.min.js"
						"<%= path.scripts.source %>/compl/hbs-templates.js"
						"<%= path.scripts.source %>/utils/templates.js"
					]
					"<%= path.scripts.uglified %>/framework.min.js" : [
						"<%= path.scripts.source %>/lib/underscore.min.js"
						"<%= path.scripts.source %>/lib/backbone.min.js"
						"<%= path.scripts.source %>/lib/handlebars.runtime.min.js"
						"<%= path.scripts.source %>/compl/hbs-templates.js"
						"<%= path.scripts.source %>/compl/framework.js"
						"<%= path.scripts.source %>/utils/validator.js"
						"<%= path.scripts.source %>/utils/templates.js"
					]
					"<%= path.scripts.uglified %>/home.min.js" : [
						"<%= path.scripts.source %>/lib/jquery.parallax.min.js"
						"<%= path.scripts.source %>/site/home.js"
					]
					"<%= path.scripts.uglified %>/srch-res.min.js" : [
						"<%= path.scripts.source %>/lib/jquery.lazyload.min.js"
						"<%= path.scripts.source %>/site/srch-res.js"
					]
					"<%= path.scripts.uglified %>/top-inst.min.js" : [
						"<%= path.scripts.source %>/lib/jquery.lazyload.min.js"
						"<%= path.scripts.source %>/site/top-inst.js"
					]
					"<%= path.scripts.uglified %>/filter.min.js" : [
						"<%= path.scripts.source %>/lib/jquery.lazyload.min.js"
						"<%= path.scripts.source %>/lib/tinysort.min.js"
						"<%= path.scripts.source %>/site/filter.js"
					]
					"<%= path.scripts.uglified %>/inst-entity.min.js" : [
						"<%= path.scripts.source %>/site/inst-entity.js"
						"<%= path.scripts.source %>/utils/social-share.js"
						"<%= path.scripts.source %>/site/frm-submit.js"
					]
					"<%= path.scripts.uglified %>/inst-entity-touch-punch.min.js" : [
						"<%= path.scripts.source %>/lib/jquery-ui.min.js"
						"<%= path.scripts.source %>/lib/jquery.ui.touch-punch.min.js"
						"<%= path.scripts.source %>/site/inst-entity.js"
						"<%= path.scripts.source %>/utils/social-share.js"
					]
					"<%= path.scripts.uglified %>/banner.min.js" : [
						"<%= path.scripts.source %>/lib/cropper.min.js"
						"<%= path.scripts.source %>/site/inst-wall.js"
						"<%= path.scripts.source %>/utils/social-share.js"
						"<%= path.scripts.source %>/site/frm-submit.js"
					]
					"<%= path.scripts.uglified %>/profile.min.js" : [
						"<%= path.scripts.source %>/lib/cropper.min.js"
						"<%= path.scripts.source %>/site/inst-profile.js"
					]
					"<%= path.scripts.uglified %>/gallery.min.js" : [
						"<%= path.scripts.source %>/lib/jquery.justifiedGallery.min.js"
						"<%= path.scripts.source %>/lib/jquery.swipebox.min.js"
						"<%= path.scripts.source %>/site/inst-entity.js"
						"<%= path.scripts.source %>/utils/uploader.js"
						"<%= path.scripts.source %>/utils/social-share.js"
					]
					"<%= path.scripts.uglified %>/course-info.min.js" : [
						"<%= path.scripts.source %>/lib/jquery.pickadate.min.js"
						"<%= path.scripts.source %>/lib/masonry.pkgd.min.js"
						"<%= path.scripts.source %>/site/course-info.js"
						"<%= path.scripts.source %>/utils/social-share.js"
					]
					"<%= path.scripts.uglified %>/cust-msg.min.js" : [
						"<%= path.scripts.source %>/site/cust-msg.js"
					]
					"<%= path.scripts.uglified %>/inst-acct.min.js" : [
						"<%= path.scripts.source %>/site/inst-acct.js"
					]

		# Watch @task
		watch:
			templates:
				files: "<%= path.templates.source %>/{,*/}*.hbs"
				tasks: [ "handlebars" ]

	# Register custom tasks:
	grunt.registerTask "dist", "Cooks up the production assets", [
		"newer:handlebars" # compile templates into a JS file
		"newer:uglify"     # concatenate and uglify scripts
		"newer:cssmin"     # concatenate and minify stylesheets
	]

	return