/**
 * framework.js
 * ------------
 * @desc Contains Backbone framework for Pluto
 * @author Navi
 * @dependenies Backbone, Underscore, jQuery
 */

/**
 * @desc The main namespace object
 */
window.Pluto = window.Pluto || {};

/**
 * @desc This domain contains models
 */
Pluto.Models = Pluto.Models || {};

/**
 * @desc This domain contains collections
 */
Pluto.Collections = Pluto.Collections || {};

/**
 * @desc This domain contains views for models
 */
Pluto.ModelViews = Pluto.ModelViews || {};

/**
 * @desc This domain contains views for collections
 */
Pluto.CollectionViews = Pluto.CollectionViews || {};

/**
 * @desc This domain contains views that add models to collections
 */
Pluto.FactoryViews = Pluto.FactoryViews || {};

/**
 * @desc This domain contains helper properties and mixins
 */
Pluto.Helpers = Pluto.Helpers || {};

/**
 * @desc This domain contains (Handlebars) templates and related functions
 */
Pluto.Templates = Pluto.Templates || {};

/**
 * @desc This domain contains all the validations that are not encompassed by Backbone
 */
Pluto.Validator = Pluto.Validator || {};



/**
 * @model Center
 * @desc  Represents institute's center
 */
Pluto.Models.Center = Backbone.Model.extend({
	defaults: {
		'pid'         : '',
		'address'     : '',
		'city'        : '',
		'state'       : '',
		'pincode'     : '',
		'contactNum1' : '',
		'contactNum2' : '',
		'isEditable'  : true
	},

	initialize: function() {
		this.on({
			'invalid': function( model, errorMsg ) {
				badger.show( errorMsg, 'error', { stayTime: 4 } );
			}
		});
	},

	validate: function( args ) {
		if( !$.trim( args.address ) ) {
			// Show message that value can not be empty:
			return 'Please provide an address';
		}

		if( !$.trim( args.city ) ) {
			// Show message that value can not be empty:
			return 'Please provide the city';
		}

		if( !$.trim( args.state ) ) {
			// Show message that value can not be empty:
			return 'Please provide the state';
		}

		if( !$.trim( args.contactNum1 ) && !$.trim( args.contactNum2 ) ) {
			// Show message that value can not be empty:
			return 'Please provide atleast one contact number';
		}

		if( ( $.trim( args.contactNum1 ) && !Pluto.Validator.PhoneNumber.isValid( $.trim( args.contactNum1 ) ) ) || ( $.trim( args.contactNum2 ) && !Pluto.Validator.PhoneNumber.isValid( $.trim( args.contactNum2 ) ) ) ) {
			// Show message that value should be numeric:
			return 'Please provide a valid contact number';
		}
	}
});


/**
 * @model Course
 * @desc  Represents institute's course
 */
Pluto.Models.Course = Backbone.Model.extend({
	defaults: {
		'_id'         : '',
		'instId'      : '',
		'name'        : '',
		'typeId'      : '',
		'type'        : '',
		'descr'       : '',
		'examSubjMap' : null,
		'batches'     : null,
		'isEditable'  : true
	},

	initialize: function() {
		this.on({
			'invalid': function( model, errorMsg ) {
				badger.show( errorMsg, 'error', { stayTime: 4 } );
			}
		});
	},

	validate: function( args ) {
		if( !$.trim( args.name ) ) {
			// Show message that value can not be empty:
			return 'Please provide a course name';
		}

		if( args.examSubjMap.length < 1 ) {
			// Show message that value can not be empty:
			return 'Please select at least one exam';
		}
	}
});


/**
 * @model Batch
 * @desc  Represents course's batch
 */
Pluto.Models.Batch = Backbone.Model.extend({
	defaults: {
		'parentId'         : '',
		'batchId'          : '',
		'dateStart'        : null,
		'dur'              : 0,
		'durUnit'          : 0,
		'regDateStart'     : null,
		'regDateEnd'       : null,
		'isDirectAdmssn'   : false,
		'dateAdmssnExam'   : null,
		'slots'            : null,
		'centers'          : null,
		'fee'              : 0,
		'discountCriteria' : null
	},

	initialize: function() {
		this.on({
			'invalid': function( model, errorMsg ) {
				badger.show( errorMsg, 'error', { stayTime: 4 } );
			}
		});
	},

	validate: function( args ) {
		if( !args.dateStart ) {
			// Mandatory field check:
			return 'Please provide batch start date';
		}

		if( !$.trim( args.dur ) ) {
			// Mandatory field check:
			return 'Please provide batch duration';
		}

		if( $.trim( args.dur ) && !/\d+/.test( $.trim( args.dur ) ) ) {
			// Show message that value should be numeric:
			return 'Please provide a valid duration value';
		}

		if( $.trim( args.fee ) && !/^\d+\.?\d+$/.test( $.trim( args.fee ) ) ) {
			// Show message that value should be numeric:
			return 'Please provide a valid fee';
		}

		if( args.discountCriteria ) {
			if( !/^\d+\.?\d+$/.test( $.trim( args.fee ) ) )
				// Show message that value should be numeric:
				return 'Please provide a fee also';
			for( var idx = 0, arr = args.discountCriteria, len = arr.length; idx < len; idx++ ) {
				if( !$.trim( arr[idx].criteria ) || !$.trim( arr[idx].val ) )
					// Show message that discount criteria is incomplete:
					return 'Please provide a complete discount criteria';
				if( !/^\d+\.?\d+$/.test( $.trim( arr[idx].val ) ) )
					// Show message that value should be numeric:
					return 'Please provide a valid discount value (without %)';
			}
		}
	}
});


/**
 * @model InstMember
 * @desc  Represents institute's team member
 */
Pluto.Models.InstMember = Backbone.Model.extend({
	defaults: {
		'pid'        : '',
		'name'       : '',
		'profileImg' : '',
		'title'      : '',
		'descr'      : '',
	},

	initialize: function() {
		this.on({
			'invalid': function( model, errorMsg ) {
				badger.show( errorMsg, 'error', { stayTime: 4 } );
			}
		});
	},

	validate: function( args ) {
		if( !$.trim( args.name ) ) {
			// Show message that value can not be empty:
			return 'Please provide a name';
		}

		if( !$.trim( args.title ) ) {
			// Show message that value can not be empty:
			return 'Please provide a designation';
		}

		if( false && !/\s\d+\s/.test( ' ' + $.trim( args.xp ) + ' ' ) ) {
			// Show message that value should be numeric:
			return 'The value of experience should be a number';
		}
	}
});


/**
 * @model Achiever
 * @desc  Represents institute's achievers
 */
Pluto.Models.Achiever = Backbone.Model.extend({
	defaults: {
		'pid'         : '',
		'name'        : '',
		'profileImg'  : '',
		'achievement' : '',
		'descr'       : '',
	},

	initialize: function() {
		this.on({
			'invalid': function( model, errorMsg ) {
				badger.show( errorMsg, 'error', { stayTime: 4 } );
			}
		});
	},

	validate: function( args ) {
		if( !$.trim( args.name ) ) {
			// Show message that value can not be empty:
			return 'Please provide a name';
		}

		if( !$.trim( args.achievement ) ) {
			// Show message that value can not be empty:
			return 'Please provide an achievement';
		}
	}
});



/**
 * @view Center
 * @desc The model Center's view
 */
Pluto.ModelViews.Center = Backbone.View.extend({
	tagName: 'span',

	template: Pluto.Templates['card-cntr'],

	events: {
		'click .bb-cntr-edt' : 'editCenter',
		'click .bb-cntr-del' : 'delCenter'
	},

	initialize: function() {
		this.model.on('destroy', this.removeCenter, this);
	},

	render: function() {
		this.$el.html( this.template( this.model.toJSON() ) );
		// Remove the 'href' so that the cards become non-clickable:
		this.$el.find('.js-entity-share').removeAttr('href');
		return this;
	},

	editCenter: function() {
		if( !Pluto.Helpers.isEditAlive.center ) {
			// Get the model properties in the factory view:
			$('#tbCenterPid').val( this.model.get('pid') );
			$('#tbAddress').val( this.model.get('address') );
			$('#tbCity').val( this.model.get('city') );
			$('#tbState').val( this.model.get('state') );
			$('#tbPin').val( this.model.get('pincode') );
			$('#tbContactNo1').val( this.model.get('contactNum1') );
			$('#tbContactNo2').val( this.model.get('contactNum2') );
			this.model.destroy();
			Pluto.Helpers.isEditAlive.center = true;

			// Show message:
			badger.show( 'Center added in form for editing', 'navi' );
		}
		else {
			badger.show( 'A center is already being edited', 'warn' );
		}
	},

	delCenter: function() {
		// Obliterate this model:
		this.model.destroy();

		$( '#btSaveForm' ).click();
	},

	removeCenter: function() {
		this.$el.remove();
		Pluto.Helpers.adjustParentHeight('frm-3');
	}
});


/**
 * @view Course
 * @desc The model Course's view
 */
Pluto.ModelViews.Course = Backbone.View.extend({
	tagName: 'div',

	className: 'srch-result-wrapper',

	template: Pluto.Templates['card-crse'],

	events: {
		'click .bb-crse-edt' : 'editCourse',
		'click .bb-crse-del' : 'delCourse',
		'click .bb-crse-sve' : 'saveCourse',
		'click .bb-btch-add' : 'initAddBatch',
		'click .bb-btch-edt' : 'editBatch',
		'click .bb-btch-del' : 'delBatch',
		'click .bb-btch-sve' : 'saveBatch'
	},

	initialize: function() {
		this.model.on('destroy', this.removeCourse, this);
	},

	render: function() {
		this.$el.html( $( this.template( this.model.toJSON() ) ).find('.srch-result-crse').unwrap() );
		return this;
	},

	editCourse: function() {
		// 1. Call a helper function that stages the course model in the form:
		Pluto.Helpers.stageCourseModel( this.model.toJSON() );

		// 2. Call click of btAddCourse that shows the modal containing the course form:
		$('#btAddCourse').click();

		// Bring this form to focus, go up, up and up...
		$('#take-to-top').click();
	},

	delCourse: function() {
		var _this = this;
		_this.model.set( { 'isDeleted' : true } );

		$.post( '../institute/course/add', JSON.stringify( _this.model.toJSON() ) )
			.done(function( response ) {
				if( response.status === 200 ) {
					// Obliterate this model:
					_this.model.destroy();

					// Layout the courses:
					_this.layout();

					// If this course was the highlight, delete it from there too:
					if( highlight === _this.model.get( '_id' ) && typeof doHighlight === 'function' ) {
						highlight = '';
						doHighlight();
					}

					// Show notification to user:
					badger.show( 'Course deleted successfully' );
				}
				else {
					badger.show( 'Couldn\'t delete course. Please try again.', 'error', { stayTime: 4 } );
					_this.model.set( { 'isDeleted' : false } );
				}
			});
	},

	saveCourse: function() {
		var course = Pluto.Helpers.getCourseModel();

		// Add model to the injected collection (if it is valid):
		if( course.isValid() ) {
			var _this = this;

			// Get these course's batches:
			var batches = _.where( collBatches.toJSON(), { parentId : course.get( '_id' ) } );
			if( !batches.length ) batches = null;

			// Set these batches in the course model:
			course.set( 'batches', batches );

			$.post( '../institute/course/add', JSON.stringify( course.toJSON() ) )
				.done(function( response ) {
					if( response.status === 200 ) {
						// Update the model:
						_this.model.set( course.toJSON() );

						// Render this edited course in the collection:
						_this.render();

						// Reset the forms for next input:
						Pluto.Helpers.resetInputForm();

						// Layout the courses:
						_this.layout();

						// If this course was the highlight, modify it over there too:
						if( highlight === _this.model.get( '_id' ) && typeof doHighlight === 'function' ) {
							doHighlight( course.toJSON() );
						}

						// Show notification to user:
						badger.show( 'Course saved successfully' );
					}
					else {
						badger.show( 'Couldn\'t save course. Please try again.', 'error', { stayTime: 4 } );
					}
				});
		}
	},

	removeCourse: function() {
		this.$el.remove();
	},

	layout: function() {
		$('.bb-coll-wrapper').masonry().masonry( 'layout' );
	},

	initAddBatch: function( event ) {
		$('#tbBatchParentID').val( this.model.get( '_id' ) );
	},

	editBatch: function( event ) {
		var $target = $( event.target );

		// Get the current batch Id:
		var currBatchId = $target.data( 'batch-id' ).toString();

		// Call helper functions that stage the course as well as batch models in their respective forms:
		Pluto.Helpers.stageCourseModel( this.model.toJSON() );
		Pluto.Helpers.stageBatchModel( _.find( collBatches.toJSON(), { batchId : currBatchId } ) );

		// Show the modal containing the batch form:
		$target.closest( '.srch-result-crse' ).find( '.bb-btch-add' ).click();

		// Bring this form to focus, go up, up and up...
		$('#take-to-top').click();
	},

	delBatch: function( event ) {
		// Get the current batch Id:
		var currBatchId = $( event.target ).data( 'batch-id' ).toString();

		if( !currBatchId ) {
			badger.show( 'Couldn\'t delete batch, please refresh page and try again', 'error', { stayTime : 4 } );
			return;
		}

		// Stage this course in the form:
		Pluto.Helpers.stageCourseModel( this.model.toJSON() );

		// Delete this batch from the collection:
		collBatches.remove( collBatches.where( { batchId : currBatchId } ) );

		// Trigger save action of the parent course:
		$( '.btCourseSave_' + this.model.get( '_id' ) ).click();
	},

	saveBatch: function() {
		var batch = Pluto.Helpers.getBatchModel();

		// Modify this model in the injected collection (if it is valid):
		if( batch.isValid() ) {
			// Get the parent course for this batch:
			var course = _.find( collCourses.toJSON(), { _id : batch.get( 'parentId' ) } );

			if( !course ) {
				// This won't happen... ideally!!
				badger.show( 'Parent course not found for this batch', 'error', { stayTime : 4 } );
				return;
			}

			// Stage this course in the form:
			Pluto.Helpers.stageCourseModel( course );

			// Add the modified batch to the collection:
			var currBatchId = batch.get( 'batchId' );
			var currBatch = collBatches.where( { batchId : currBatchId } )[0]; // bb model
			var idx = collBatches.indexOf( currBatch );
			collBatches.at( idx ).set( batch.toJSON() );

			// Trigger save action of the parent course:
			$( '.btCourseSave_' + batch.get( 'parentId' ) ).click();
		}
	}
});


/**
 * @view InstMember
 * @desc The model InstMember's view
 */
Pluto.ModelViews.InstMember = Backbone.View.extend({
	tagName: 'span',

	template: Pluto.Templates['team-member'],

	events: {
		'click .bb-membr-edt'   : 'editMember',
		'click .bb-membr-del'   : 'delMember',
		'click .bb-membr-save' : 'saveMember'
	},

	initialize: function() {
		this.model.on('destroy', this.removeMember, this);
	},

	render: function() {
		this.$el.html( this.template( this.model.toJSON() ) );
		return this;
	},

	editMember: function() {
		this.$el.find('input, textarea').prop('disabled', false);
		this.$el.find('button').css({'display': 'block'});
		this.$el.find('.js-membr-save').slideDown( 'fast' );
	},

	saveMember: function() {
		var _this  = this;
		var $pacer = _this.$el.find('.pacer');
		var $btn   = _this.$el.find('.bb-membr-save');
		var member = new Pluto.Models.InstMember({
			'pid'       : ( this.$el.find('.js-membr-id').val() || '').trim(),
			'name'      : ( this.$el.find('.js-membr-nm').val() || '').trim(),
			'profileImg': ( this.$el.find('.js-membr-img').val() || '').trim(),
			'title'     : ( this.$el.find('.js-membr-ttle').val() || '').trim(),
			'descr'     : ( this.$el.find('.js-membr-desc').val() || '').trim()
		});

		if( !member.isValid() ) return;

		$pacer.css({'width': '0%'}).show().animate({'width': '50%'});
		$btn.removeClass('btn-sheen-intrctve').prop('disabled', true).text('Saving...');

		// Send request to backend to save this model:
		$.post('team', JSON.stringify( member.toJSON() ), function( response ) {
			if( response.status !== 'OK' ) {
				badger.show( 'Couldn\'t save member, please try again', 'error', { stayTime: 4 } );
				$pacer.animate({'width': '100%'}, function() {
					$(this).hide();
					$btn.addClass('btn-sheen-intrctve').prop('disabled', false).text('Save');
				});
				return;
			}

			$pacer.animate({'width': '100%'}, function() {
				$(this).hide();
				$btn.addClass('btn-sheen-intrctve').prop('disabled', false).text('Save');
			});

			_this.$el.find('input[type!="file"], textarea').prop('disabled', true);
			_this.$el.find('button').removeAttr('style');
			_this.$el.find('.js-membr-save').slideUp( 'fast' );

			// Show success notification:
			badger.show( 'Member saved successfully' );
		});
	},

	delMember: function() {
		var _this = this;
		_this.$el.find('.overlay').show();

		// Send request to backend to delete this model:
		_this.model.set({ 'isDeleted': true });

		$.post('team', JSON.stringify( _this.model.toJSON() ), function( response ) {
			if( response.status !== 'OK' ) {
				badger.show( 'Couldn\'t delete member, please try again', 'error', { stayTime: 4 } );
				_this.$el.find('.overlay').hide();
				return;
			}

			// Obliterate this model:
			_this.model.destroy();

			// Show success notification:
			badger.show( 'Member deleted successfully' );
		});
	},

	removeMember: function() {
		// Remove model from DOM:
		this.$el.remove();
		Pluto.Helpers.adjustParentHeight('frm-4');
	}
});


/**
 * @view Achiever
 * @desc The model Achiever's view
 */
Pluto.ModelViews.Achiever = Backbone.View.extend({
	tagName: 'span',

	template: Pluto.Templates['inst-achiever'],

	events: {
		'click .bb-achvr-edt'  : 'editAchiever',
		'click .bb-achvr-del'  : 'delAchiever',
		'click .bb-achvr-save' : 'saveAchiever'
	},

	initialize: function() {
		this.model.on('destroy', this.removeAchiever, this);
	},

	render: function() {
		this.$el.html( this.template( this.model.toJSON() ) );
		return this;
	},

	editAchiever: function() {
		this.$el.find('input, textarea').prop('disabled', false);
		this.$el.find('button').css({'display': 'block'});
		this.$el.find('.js-achvr-save').slideDown( 'fast' );
	},

	saveAchiever: function() {
		var _this  = this;
		var $pacer = _this.$el.find('.pacer');
		var $btn   = _this.$el.find('.bb-achvr-save');
		var member = new Pluto.Models.Achiever({
			'pid'         : ( this.$el.find('.js-achvr-id').val() || '' ).trim(),
			'name'        : ( this.$el.find('.js-achvr-nm').val() || '' ).trim(),
			'profileImg'  : ( this.$el.find('.js-achvr-img').val() || '' ).trim(),
			'achievement' : ( this.$el.find('.js-achvr-achvmt').val() || '' ).trim(),
			'descr'       : ( this.$el.find('.js-achvr-desc').val() || '' ).trim()
		});

		if( !member.isValid() ) return;

		$pacer.css({'width': '0%'}).show().animate({'width': '50%'});
		$btn.removeClass('btn-sheen-intrctve').prop('disabled', true).text('Saving...');

		// Send request to backend to save this model:
		$.post('achievers', JSON.stringify( member.toJSON() ), function( response ) {
			if( response.status !== 'OK' ) {
				badger.show( 'Couldn\'t save achiever, please try again', 'error', { stayTime: 4 } );
				$pacer.animate({'width': '100%'}, function() {
					$(this).hide();
					$btn.addClass('btn-sheen-intrctve').prop('disabled', false).text('Save');
				});
				return;
			}

			$pacer.animate({'width': '100%'}, function() {
				$(this).hide();
				$btn.addClass('btn-sheen-intrctve').prop('disabled', false).text('Save');
			});

			_this.$el.find('input[type!="file"], textarea').prop('disabled', true);
			_this.$el.find('button').removeAttr('style');
			_this.$el.find('.js-achvr-save').slideUp( 'fast' );

			// Show success notification:
			badger.show( 'Achiever saved successfully' );
		});
	},

	delAchiever: function() {
		var _this = this;
		_this.$el.find('.overlay').show();

		// Send request to backend to delete this model:
		_this.model.set({ 'isDeleted': true });

		$.post('achievers', JSON.stringify( _this.model.toJSON() ), function( response ) {
			if( response.status !== 'OK' ) {
				badger.show( 'Couldn\'t delete achiever, please try again', 'error', { stayTime: 4 } );
				_this.$el.find('.overlay').hide();
				return;
			}

			// Obliterate this model:
			_this.model.destroy();

			// Show success notification:
			badger.show( 'Achiever deleted successfully' );
		});
	},

	removeAchiever: function() {
		// Remove model from DOM:
		this.$el.remove();
		Pluto.Helpers.adjustParentHeight('frm-5');
	}
});



/**
 * @collection Centers
 * @desc       Collection of the model Center
 */
Pluto.Collections.Centers = Backbone.Collection.extend({
	model: Pluto.Models.Center
});

/**
 * @collection Courses
 * @desc       Collection of the model Course
 */
Pluto.Collections.Courses = Backbone.Collection.extend({
	model: Pluto.Models.Course
});

/**
 * @collection Batches
 * @desc       Collection of the model Course
 */
Pluto.Collections.Batches = Backbone.Collection.extend({
	model: Pluto.Models.Batch
});

/**
 * @collection InstMembers
 * @desc       Collection of the model InstMember
 */
Pluto.Collections.InstMembers = Backbone.Collection.extend({
	model: Pluto.Models.InstMember
});

/**
 * @collection Achievers
 * @desc       Collection of the model InstMember
 */
Pluto.Collections.Achievers = Backbone.Collection.extend({
	model: Pluto.Models.Achiever
});



/**
 * @view Centers
 * @desc View for the collection of the model Center
 */
Pluto.CollectionViews.Centers = Backbone.View.extend({
	className: 'bb-coll-wrapper',

	initialize: function() {
		this.collection.on('add', this.appendCenter, this);
		this.collection.on('remove', function() {
			$('#frm-3 .count-badge').text( this.collection.length );
		}, this);
	},

	render: function() {
		this.collection.each(this.appendCenter, this);
		return this;
	},

	appendCenter: function( center ) {
		$('#frm-3 .count-badge').text( this.collection.length );
		var vwModel = new Pluto.ModelViews.Center({ model: center });
		this.$el.prepend( vwModel.render().el );
		Pluto.Helpers.adjustParentHeight('frm-3');
		Pluto.Helpers.isEditAlive.center = false;
	}
});

/**
 * @view Courses
 * @desc View for the collection of the model Course
 */
Pluto.CollectionViews.Courses = Backbone.View.extend({
	className: 'bb-coll-wrapper no-margin',

	initialize: function() {
		this.collection.on('add', this.appendCourse, this);
		this.collection.on('remove', function() {
			$('#n-count').text( this.collection.length );
		}, this);
	},

	render: function() {
		this.collection.each(this.appendCourse, this);
		return this;
	},

	appendCourse: function( course ) {
		$('#n-count').text( this.collection.length );
		var vwModel = new Pluto.ModelViews.Course({ model: course });
		this.$el.prepend( vwModel.render().el );
		$('.bb-coll-wrapper').masonry().masonry( 'reloadItems' ).masonry( 'layout' );
	}
});

/**
 * @view InstMembers
 * @desc View for the collection of the model InstMember
 */
Pluto.CollectionViews.InstMembers = Backbone.View.extend({
	className: 'bb-coll-wrapper',

	initialize: function() {
		this.collection.on('add', this.appendMember, this);
		this.collection.on('remove', function() {
			$('#frm-4 .count-badge').text( this.collection.length );
		}, this);
	},

	render: function() {
		this.collection.each(this.appendMember, this);
		return this;
	},

	appendMember: function( member ) {
		$('#frm-4 .count-badge').text( this.collection.length );
		var vwModel = new Pluto.ModelViews.InstMember({ model: member });
		this.$el.prepend( vwModel.render().el );
		Pluto.Helpers.adjustParentHeight('frm-4');
	}
});


/**
 * @view Achievers
 * @desc View for the collection of the model Achiever
 */
Pluto.CollectionViews.Achievers = Backbone.View.extend({
	className: 'bb-coll-wrapper',

	initialize: function() {
		this.collection.on('add', this.appendAchiever, this);
		this.collection.on('remove', function() {
			$('#frm-5 .count-badge').text( this.collection.length );
		}, this);
	},

	render: function() {
		this.collection.each(this.appendAchiever, this);
		return this;
	},

	appendAchiever: function( achiever ) {
		$('#frm-5 .count-badge').text( this.collection.length );
		var vwModel = new Pluto.ModelViews.Achiever({ model: achiever });
		this.$el.prepend( vwModel.render().el );
		Pluto.Helpers.adjustParentHeight('frm-5');
	}
});



/**
 * @view AddCenter
 * @desc View for adding a Center model to its collection
 */
Pluto.FactoryViews.AddCenter = Backbone.View.extend({
	el: '#frm-cntr', // use an existing element from the DOM

	events: {
		'click #btCenterAdd': 'addCenter'
	},

	initialize: function() {
		this.$el.on('submit', function( event ) {
			event.preventDefault();
		});
	},

	addCenter: function() {
		var center = new Pluto.Models.Center({
			'pid'         : this.$el.find('#tbCenterPid').val().trim(),
			'address'     : this.$el.find('#tbAddress').val().trim(),
			'city'        : this.$el.find('#tbCity').val().trim(),
			'state'       : this.$el.find('#tbState').val().trim(),
			'pincode'     : this.$el.find('#tbPin').val().trim(),
			'contactNum1' : this.$el.find('#tbContactNo1').val().trim(),
			'contactNum2' : this.$el.find('#tbContactNo2').val().trim()
		});

		// Add model to the injected collection (if it is valid):
		if( center.isValid() ) {
			this.collection.add( center );

			$( '#btSaveForm' ).click();

			// Clear the form for next input:
			this.$el.find('input').val('');
		}
	}
});

/**
 * @view AddCourse
 * @desc View for adding a Course model to its collection
 */
Pluto.FactoryViews.AddCourse = Backbone.View.extend({
	el: '#frm-crse', // use an existing element from the DOM

	events: {
		'click #btCourseAddForReal' : 'addCourse'
	},

	initialize: function() {
		this.$el.on('submit', function( event ) {
			event.preventDefault();
		});
	},

	addCourse: function() {
		var course = Pluto.Helpers.getCourseModel();

		// Add model to the injected collection (if it is valid):
		if( course.isValid() ) {
			var _this = this;

			$.post( '../institute/course/add', JSON.stringify( course.toJSON() ) )
				.done(function( response ) {
					if( response.status === 200 ) {
						// Add this course in the collection:
						_this.collection.add( course.set( '_id', response.data._id ) );

						// Reset the form for next input:
						Pluto.Helpers.resetInputForm();

						// Show notification to user:
						badger.show( 'Course added successfully' );
					}
					else {
						badger.show( 'Couldn\'t add course. Please try again.', 'error', { stayTime: 4 } );
					}
				});
		}
	}
});

/**
 * @view AddBatch
 * @desc View for adding a Batch model to its collection
 */
Pluto.FactoryViews.AddBatch = Backbone.View.extend({
	el: '#frm-btch', // use an existing element from the DOM

	events: {
		'click #btBatchAddForReal' : 'addBatch'
	},

	initialize: function() {
		this.$el.on('submit', function( event ) {
			event.preventDefault();
		});
	},

	addBatch: function() {
		var batch = Pluto.Helpers.getBatchModel();

		// Add model to the injected collection (if it is valid):
		if( batch.isValid() ) {
			// Get the parent course for this batch:
			var course = _.find( collCourses.toJSON(), { _id : batch.get( 'parentId' ) } );

			if( !course ) {
				// This won't happen... ideally!!
				badger.show( 'Parent course not found for this batch', 'error', { stayTime : 4 } );
				return;
			}

			// Stage this course in the form:
			Pluto.Helpers.stageCourseModel( course );

			// Add this batch to the collection:
			this.collection.add( batch );

			// Trigger save action of the parent course:
			$( '.btCourseSave_' + batch.get( 'parentId' ) ).click();
		}
	}
});

/**
 * @view AddInstMember
 * @desc View for adding a InstMember model to its collection
 */
Pluto.FactoryViews.AddInstMember = Backbone.View.extend({
	el: '#frm-mmbr', // use an existing element from the DOM

	events: {
		'click #btMemberAdd': 'addMember'
	},

	initialize: function() {
		this.$el.on('submit', function( event ) {
			event.preventDefault();
		});
	},

	addMember: function() {
		var member = new Pluto.Models.InstMember({
			'pid'   : '',
			'name'  : this.$el.find('#tbMemberName').val().trim(),
			'title' : this.$el.find('#tbMemberTitle').val().trim(),
			'descr' : this.$el.find('#tbMemberDescr').val().trim()
		});

		// Add model to the injected collection (if it is valid):
		if( member.isValid() ) {
			var _this  = this;
			var $pacer = _this.$el.find('.pacer');
			var $btn   = _this.$el.find('button');
			$pacer.css({'width': '0%'}).show().animate({'width': '50%'});
			$btn.removeClass('btn-sheen-intrctve').prop('disabled', true).text('Adding...');

			$.post('team', JSON.stringify( member.toJSON() ), function( response ) {
				if( response.status !== 'OK' ) {
					badger.show( 'Couldn\'t add member, please try again', 'error', { stayTime: 4 } );
					$pacer.animate({'width': '100%'}, function() {
						$(this).hide();
						$btn.addClass('btn-sheen-intrctve').prop('disabled', false).text('Add');
					});
					return;
				}

				member.set({ 'pid': response.data.pid });

				_this.collection.add( member );

				// Clear the form for next input:
				_this.$el.find('input, textarea').val('');

				$pacer.animate({'width': '100%'}, function() {
					$(this).hide();
					$btn.addClass('btn-sheen-intrctve').prop('disabled', false).text('Add');
				});

				// Show success notification:
				badger.show( 'Member added successfully' );
			});
		}
	}
});

/**
 * @view AddAchiever
 * @desc View for adding a Achiever model to its collection
 */
Pluto.FactoryViews.AddAchiever = Backbone.View.extend({
	el: '#frm-achv', // use an existing element from the DOM

	events: {
		'click #btAchvrAdd': 'addAchiever'
	},

	initialize: function() {
		this.$el.on('submit', function( event ) {
			event.preventDefault();
		});
	},

	addAchiever: function() {
		var member = new Pluto.Models.Achiever({
			'pid'         : '',
			'name'        : this.$el.find('#tbAchvrName').val().trim(),
			'achievement' : this.$el.find('#tbAchvmnt').val().trim(),
			'descr'       : this.$el.find('#tbAchvrDescr').val().trim()
		});

		// Add model to the injected collection (if it is valid):
		if( member.isValid() ) {
			var _this  = this;
			var $pacer = _this.$el.find('.pacer');
			var $btn   = _this.$el.find('button');
			$pacer.css({'width': '0%'}).show().animate({'width': '50%'});
			$btn.removeClass('btn-sheen-intrctve').prop('disabled', true).text('Adding...');

			$.post('achievers', JSON.stringify( member.toJSON() ), function( response ) {
				if( response.status !== 'OK' ) {
					badger.show( 'Couldn\'t add achiever, please try again', 'error', { stayTime: 4 } );
					$pacer.animate({'width': '100%'}, function() {
						$(this).hide();
						$btn.addClass('btn-sheen-intrctve').prop('disabled', false).text('Add');
					});
					return;
				}

				member.set({ 'pid': response.data.pid });

				_this.collection.add( member );

				// Clear the form for next input:
				_this.$el.find('input, textarea').val('');

				$pacer.animate({'width': '100%'}, function() {
					$(this).hide();
					$btn.addClass('btn-sheen-intrctve').prop('disabled', false).text('Add');
				});

				// Show success notification:
				badger.show( 'Achiever added successfully' );
			});
		}
	}
});



// These flags will tell if currently a model is being edited or not:
Pluto.Helpers.isEditAlive = {
	center: false,
	course: false
};

// This helper method adjusts the height of the parent form for proper viewing:
Pluto.Helpers.adjustParentHeight = function( argGrowingChildID ) {
	// Variable(s):
	var currHeight            = $('#' + argGrowingChildID).outerHeight();
	var REG_FRM_MIN_HEIGHT_PX = ( $('.form').css('min-height') || '' ).split('px')[0];

	if(currHeight > REG_FRM_MIN_HEIGHT_PX) {
		$('#form-container').css({'height': currHeight + 'px'});
	}
	else {
		$('#form-container').css({'height': REG_FRM_MIN_HEIGHT_PX + 'px'});
	}
};

// This helper clones the prototype slot and adds it to DOM:
Pluto.Helpers.cloneSlot = function() {
	// Variable to cache the cloned slot:
	var $clonedSlot = null;

	// Append the cloned slot to the slots wrapper:
	$clonedSlot = $('.js-pseudo-slot')
		.clone(true, true)
		.removeClass('js-pseudo-slot none')
		.addClass('slot')
		.appendTo('.js-slots');

	// Initialize pickatime on the slot times:
	var pkatmSlotStrt = $clonedSlot.find('.js-pickr-tm').eq(0)
		.addClass('tbSlotTimingStart')
		.pickatime()
		.pickatime('picker');
	var pkatmSlotEnd  = $clonedSlot.find('.js-pickr-tm').eq(1)
		.addClass('tbSlotTimingEnd')
		.pickatime()
		.pickatime('picker');

	// When start or end time is selected, update the 'from' and 'to' limits:
	if( pkatmSlotStrt )
	pkatmSlotStrt.on('set', function( event ) {
		if ( event.select ) {
			pkatmSlotEnd.set('min', pkatmSlotStrt.get('select'));
		}
	});
	if( pkatmSlotEnd )
	pkatmSlotEnd.on('set', function( event ) {
		if ( event.select ) {
			pkatmSlotStrt.set('max', pkatmSlotEnd.get('select'));
		}
	});

	return $clonedSlot;
};

// This helper clones the first discount criteria and adds it to the DOM:
Pluto.Helpers.cloneDiscountCriteria = function() {
	var $clonedDisct = null;

	$clonedDisct = $('.disct:first-child')
		.clone(true, true)
		.appendTo('.js-discts');

	// Reset input values:
	$clonedDisct
		.find('input').val('');

	return $clonedDisct;
};

/**
 * @desc Resets the input forms
 */
Pluto.Helpers.resetInputForm = function() {
	// #1 - Course input form:
	$('#frm-crse').find('input, textarea').val('').data('val', '');
	$('#slCourseType').val(1);
	$('.js-staging-exams .js-exm:checked').each(function() {
		$(this).removeAttr( 'checked' ).parent('div').find('ul').remove();
	});
	// Hide the course form, too:
	$('#mdl-frm-crse').hide();

	// #2 - Batch input form:
	$('#frm-btch').find('input, textarea').val('').data('val', '');
	$('.slot').each(function( idx ) {
		if ( idx !== 0 ) $(this).remove();
	}).find('.week li').removeClass( 'active-weekday' );
	$('#slCourseDurationUnit').val(1);
	$('#tbCourseStartDate').pickadate('picker').set('clear');
	$('#tbCourseRegStartDate').pickadate('picker').set('clear');
	$('#tbCourseRegEndDate').pickadate('picker').set('clear');
	$('#tbAdmssnExamDate').pickadate('picker').set('clear');
	$('#frm-btch').find('.cb').prop({'checked': false, 'disabled': false});
	$('.disct').each(function( idx ) {
		if ( idx !== 0 ) $(this).remove();
	});
	// Hide the batch form, too:
	$('#mdl-frm-btch').hide();
};

/**
 * @desc Returns course model
 */
Pluto.Helpers.getCourseModel = function() {
	var arrSubjs       = [];
	var arrExamSubjMap = [];

	// Form the exam subject map:
	$('.js-staging-exams .js-exm:checked').each(function() {
		arrSubjs = [];
		$(this).parent('div').find('.js-subj:checked').each(function() {
			arrSubjs.push( $(this).next('label').text() );
		});
		if( !arrSubjs.length )
			// No subjects were selected, set all subjects by default:
			$(this).parent('div').find('.js-subj').each(function() {
				arrSubjs.push( $(this).next('label').text() );
			});
		arrExamSubjMap.push({
			'examName' : $(this).next('label').text(),
			'subjects' : arrSubjs
		});
	});

	var course = new Pluto.Models.Course({
		'_id'         : $('#tbCourseID').val().trim(),
		'instId'      : $('#instId').val().trim(),
		'name'        : $('#tbCourseName').val().trim(),
		'typeId'      : parseInt( $('#slCourseType').val() ),
		'type'        : $('#slCourseType option:selected').text(),
		'descr'       : $('#tbCourseDesc').val().trim(),
		'examSubjMap' : arrExamSubjMap
	});

	return course;
};

/**
 * @desc Returns batch model
 */
Pluto.Helpers.getBatchModel = function() {
	var arrSlots      = [];
	var arrCenters    = [];
	var arrDays       = [];
	var disctCriteria = [];
	var currBatchId   = '';

	// Form the slots array:
	$('.slot').each(function() {
		arrDays = [];
		$(this).find('.week li').each(function() {
			if( $(this).hasClass( 'active-weekday' ) ) {
				arrDays.push( $(this).text().trim() );
			}
		});
		if( arrDays.length )
			arrSlots.push({
				'workingDays'   : arrDays,
				'slotTimeStart' : $(this).find('.tbSlotTimingStart').data('val'),
				'slotTimeEnd'   : $(this).find('.tbSlotTimingEnd').data('val')
			});
	});

	// Form the centers array:
	$('.js-staging-cntrs .js-cntr:checked').each(function() {
		arrCenters.push( $(this).next('label').text() );
	});

	// Calculate the course duration:
	var duration = parseInt( $('#tbCourseDuration').val().trim() ) || 0;
	var durUnit  = parseInt( $('#slCourseDurationUnit').val() );
	if( durUnit == 5 ) {
		// Convert years into hours:
		duration = duration * 365 * 24;
	}
	else if( durUnit == 4 ) {
		// Convert months into hours:
		duration = duration * 30 * 24;
	}
	else if( durUnit == 3 ) {
		// Convert weeks into hours:
		duration = duration * 7 * 24;
	}
	else if( durUnit == 2 ) {
		// Convert days into hours:
		duration = duration * 24;
	}

	// Form the discount criteria array:
	$('.disct').each(function() {
		disctCriteria.push({
			'criteria' : $(this).find('input[name="discountCriteria"]').val().trim(),
			'val'      : $(this).find('input[name="discountVal"]').val().trim()
		});
	});
	if( disctCriteria.length === 1 && !disctCriteria[0].criteria && !disctCriteria[0].val)
		disctCriteria = null;

	// Handle batch Id:
	currBatchId = $('#tbBatchID').val().trim();

	var batch = new Pluto.Models.Batch({
		'parentId'         : $('#tbBatchParentID').val().trim(),
		'batchId'          : !currBatchId ? Date.now().toString() : currBatchId,
		'dateStart'        : $('#tbCourseStartDate').data('val') || null,
		'dur'              : duration,
		'durUnit'          : durUnit,
		'regDateStart'     : $('#tbCourseRegStartDate').data('val') || null,
		'regDateEnd'       : $('#tbCourseRegEndDate').data('val') || null,
		'isDirectAdmssn'   : $('#cbDirectAdmssn').prop('checked'),
		'dateAdmssnExam'   : $('#tbAdmssnExamDate').data('val') || null,
		'slots'            : arrSlots.length   ? arrSlots   : null,
		'centers'          : arrCenters.length ? arrCenters : null,
		'fee'              : parseInt( $('#tbCourseFee').val().trim() ) || null,
		'discountCriteria' : disctCriteria
	});

	return batch;
};

/**
 * @desc Stages the course model in the course form
 */
Pluto.Helpers.stageCourseModel = function( jsonCourse ) {
	var examSubjMap = null;
	var $tmpExam    = null;

	// Get the model properties in the factory view:
	$('#tbCourseID').val( jsonCourse._id );
	$('#tbCourseName').val( jsonCourse.name );
	$('#slCourseType').val( jsonCourse.typeId );
	$('#tbCourseDesc').val( jsonCourse.descr );

	// Handle exam subject map:
	examSubjMap = jsonCourse.examSubjMap;
	// Initialize the state of exams:
	$('.js-exm').prop('checked', false).change();
	for( var idx = 0, len = examSubjMap.length; idx < len; idx++ ) {
		$tmpExam = $('.js-exm[data-exam-id="' + examSubjMap[idx].examName + '"]').prop('checked', true).change();
		for( var idx2 = 0, len2 = examSubjMap[idx].subjects.length; idx2 < len2; idx2++ ) {
			$tmpExam
				.parent('div')
				.find('.js-subj[data-subject-id="' + examSubjMap[idx].subjects[idx2] + '"]')
				.prop('checked', true);
		}
	}
};

/**
 * @desc Stages the batch model in the batch form
 */
Pluto.Helpers.stageBatchModel = function( jsonBatch ) {
	var slots         = null;
	var centers       = null;
	var disctCriteria = null;
	var $tmpSlot      = null;
	var $tmpDisct     = null;

	if( !jsonBatch ) return;

	// Get the model properties in the factory view:
	$('#tbBatchParentID').val( jsonBatch.parentId );
	$('#tbBatchID').val( jsonBatch.batchId );
	$('#cbDirectAdmssn').prop( 'checked', jsonBatch.isDirectAdmssn ).change();
	$('#tbCourseFee').val( jsonBatch.fee );

	if( jsonBatch.dateStart )
		$('#tbCourseStartDate').pickadate('picker').set('select', jsonBatch.dateStart);

	if( jsonBatch.regDateStart )
		$('#tbCourseRegStartDate').pickadate('picker').set('select', jsonBatch.regDateStart);

	if( jsonBatch.regDateEnd )
		$('#tbCourseRegEndDate').pickadate('picker').set('select', jsonBatch.regDateEnd);

	if( jsonBatch.dateAdmssnExam )
		$('#tbAdmssnExamDate').pickadate('picker').set('select', jsonBatch.dateAdmssnExam);

	// Handle slots:
	slots = jsonBatch.slots || [];
	// Initialize the state of slots:
	$('.slot').each(function( idx ) {
		if ( idx !== 0 ) $(this).remove();
	}).find('.week li').removeClass( 'active-weekday' );
	for( idx = 0, len = slots.length; idx < len; idx++ ) {
		if ( idx === 0 ) {
			$tmpSlot = $('.slot:eq(0)');
		}
		else {
			// Get cloned slot:
			$tmpSlot = Pluto.Helpers.cloneSlot();
		}
		// Set selected working days:
		for( var idx3 = 0, len3 = slots[idx].workingDays.length; idx3 < len3; idx3++ ) {
			$tmpSlot.find('.week li[data-val="' + slots[idx].workingDays[idx3] + '"]').addClass('active-weekday');
		}
		// Set timings:
		if( slots[idx].slotTimeStart )
			$tmpSlot
				.find('.tbSlotTimingStart')
				.pickatime('picker')
				.set( 'select', slots[idx].slotTimeStart );

		if( slots[idx].slotTimeEnd )
			$tmpSlot
				.find('.tbSlotTimingEnd')
				.pickatime('picker')
				.set( 'select', slots[idx].slotTimeEnd );
	}

	// Handle course duration:
	var duration = jsonBatch.dur;
	var durUnit  = jsonBatch.durUnit;
	if( durUnit == 5 ) {
		// Convert hours into years:
		duration = Math.ceil( duration / ( 365 * 24 ) );
	}
	else if( durUnit == 4 ) {
		// Convert hours into months:
		duration = Math.ceil( duration / ( 30 * 24 ) );
	}
	else if( durUnit == 3 ) {
		// Convert hours into weeks:
		duration = Math.ceil( duration / ( 7 * 24 ) );
	}
	else if( durUnit == 2 ) {
		// Convert hours into days:
		duration = Math.ceil( duration / 24 );
	}
	$('#tbCourseDuration').val( duration );
	$('#slCourseDurationUnit').val( durUnit );

	// Handle centers:
	centers = jsonBatch.centers || [];
	$('.js-cntr').prop('checked', false);
	for( idx = 0, len = centers.length; idx < len; idx++ ) {
		$('.js-cntr[data-cntr-id="' + centers[idx] + '"]').prop( 'checked', true );
	}
	if( centers.length === $('.js-cntr').length )
		$('.js-staging-cntrs .js-select-all').prop( 'checked', true );

	// Handle discount criteria:
	disctCriteria = jsonBatch.discountCriteria || [];
	// Initialize the state of discount critria:
	$('.disct').each(function( idx ) {
		if ( idx !== 0 ) $(this).remove();
	});
	for( idx = 0, len = disctCriteria.length; idx < len; idx++ ) {
		if ( idx === 0 ) {
			$tmpDisct = $('.disct:eq(0)');
		}
		else {
			// Get cloned discount criteria:
			$tmpDisct = Pluto.Helpers.cloneDiscountCriteria();
		}
		$tmpDisct.find('input[name="discountCriteria"]').val( disctCriteria[idx].criteria );
		$tmpDisct.find('input[name="discountVal"]').val( disctCriteria[idx].val );
	}
};