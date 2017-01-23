/**
 * @desc For fetching data from server in batches
 * @author Navi
 * @dependency jQuery
 */

var Fetcher = function( config ) {
	var defaults = {
		// The URL over which the AJAX GET request willl be made:
		fetchUrl          : '',
		// No. of records to fetch at a time:
		batchCount        : 9,
		// The jQuery selector string of the element where resuts will be appended:
		resultsElem       : '',
		// Message to be shown during fetching data / records:
		fetchMsg          : 'Getting more data',
		// Message to be shown when all the records have been fetched:
		batchCompleteMsg  : 'No more data',
		// The URL of the loader image to be shown along with `fetchMsg`:
		loaderImgUrl      : '/assets/img/loading.gif',
		// The callback to be executed upon successful data fetch:
		onSuccessCallback : function( response ) {
			console.log( 'Data fetched successfully! Response:', response );
		},
		// The callback to be executed upon unsuccessful data fetch:
		onErrorCallback   : function( response ) {
			console.warn( 'Something went wrong in fetching data! Response:', response );
		},
		// The callback to be executed just before data fetch:
		onBeforeFetch     : function() {
			console.log( 'Going to fetch...' );
		},
		// The callback to be executed after data fetch:
		onAfterFetch      : function() {
			console.log( 'Fetched from server...' );
		}
	};

	// Form the current instance's config by mergin user-supplied config to defaults:
	this.config = $.extend( true, defaults, config );

	// Validate the current instance's config hash:
	this.validate();

	// Check if the current instance's config is valid and proceed further:
	if( this.isValid ) {
		// This variable holds no. of records to be skipped per fetch; initially set to 0:
		this.skip = 0;
		// This variable denotes that current batch has more data:
		this.hasData = true;
		// Append helper elements like loader, etc. on the DOM:
		this.prepareDom();
	}
};

/**
 * @desc Validates the current instance's config
 */
Fetcher.prototype.validate = function() {
	if( !this.config.fetchUrl.trim() ) {
		console.error( 'Fetcher: Grave mistake! URL not defined.' );
		this.isValid = false;
	}
	else {
		// Mark as valid:
		this.isValid = true;
	}
};

/**
 * @desc Appends helper elements to the DOM. These elements are:
 *     1. A loader
 *     2. Batch complete message
 */
Fetcher.prototype.prepareDom = function() {
	// Create a jQuery element where the results will be appended:
	this.$results = $( this.config.resultsElem );

	// Create a jQUery element that will be shown during fetching data:
	this.$fetchLoader = $( '<div>' )
		.addClass( 'fetch-loader' )
		.append( '<p class="msg center big"><img src="' + this.config.loaderImgUrl + '" alt="loading" width="40"><br/>' + this.config.fetchMsg + '</p>' )
		.insertAfter( this.$results );

	// Create a jQuery element that will be shown when all the records have been fetched:
	this.$batchComplete = $( '<div>' )
		.addClass( 'no-more-srch' )
		.append( '<p class="msg hint center">' + this.config.batchCompleteMsg + '</p>' )
		.insertAfter( this.$results );
};

/**
 * @desc Fetches the data via an AJAX GET request
 * @params
 *     - isNewRequest {boolean} Whether the request is a new request or not
 *     - queryParams  {object}  Name-value pairs of query parameters to be used in the URL
 */
Fetcher.prototype.fetch = function( isNewRequest, queryParams ) {
	// Set certain flags:
	this.inProgress = true;
	this.hasData    = true;
	// Manipulate DOM:
	this.$fetchLoader.show();
	this.$batchComplete.hide();

	// Prepare the query string:
	var queryString = '';
	if( queryParams && typeof queryParams === 'object' ) {
		for( var key in queryParams ) {
			if( queryParams[ key ] )
				queryString += '&' + key + '=' + queryParams[ key ];
		}
	}

	// Check for mew / fresh request:
	if( isNewRequest ) {
		// Reset the `skip` so data is fetched from the start:
		this.skip = 0;
		// Empty the results so new results can be appended:
		this.$results.html( '' );
	}
	else {
		// Increment the skip to fetch the next batch:
		this.skip += this.config.batchCount;
	}

	// Call the before fetch method:
	this.config.onBeforeFetch.call( this );

	// Cache the current context to make calls from the jQuery AJAX deferred context:
	var self = this;

	$.ajax({
		url  : this.config.fetchUrl + '?skip=' + this.skip + '&limit=' + this.config.batchCount + queryString,
		type : 'GET'
	})
	.done(function( response ) {
		// Check for successul request:
		if( response.status === 200 ) {
			// Call the success callback:
			self.config.onSuccessCallback.call( self, response );
			// Check if the current batch is the last one:
			if( response.data.length < self.config.batchCount) {
				// Set certain flags:
				self.hasData = false;
				// Manipulate DOM:
				self.$batchComplete.show();
			}
		}
		// Mark as not in progress:
		self.inProgress = false;
		// Manipulate DOM:
		self.$fetchLoader.hide();

		// Call the after fetch method:
		self.config.onAfterFetch.call( self );
	})
	.fail(function( response ) {
		// Handle failed requests:
		self.config.onErrorCallback.call( self, response );
		// Mark as not in progress:
		self.inProgress = false;
	});
};