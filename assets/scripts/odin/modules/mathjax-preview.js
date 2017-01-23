/**
 * @desc To preview LaTeX and TeX expressions using MathJax
 * @author Navi and the good folks at MathJax
 * @dependency MathJax
 * @usageExample
 *     // Initialize:
 *     var previewQues = Preview();
 *     previewQues.init( 'tbQues', 'quesPreview', 'quesBuffer', 'quesPreviewPlaceholder' );
 *     // Then on every keydown:
 *     previewQues.create();
 */

var MathJaxPreview = function() {
	// To store a DOM reference to the `preview` div:
	preview = null;
	// To store a DOM reference to the `buffer` div:
	buffer = null;
	// Whether MathJax is processing or not:
	isMJRunning = false;
	// Used to check if an update is needed:
	oldText = null;
	// The input element whose value's preview is to be generated:
	elem = null;
	// The element containing the previewed element's placeholder text:
	placeholder = null;

	// Get the DOM references:
	init = function( elemId, previewId, bufferId, placeholderId ) {
		this.elem        = document.getElementById( elemId );
		this.preview     = document.getElementById( previewId );
		this.buffer      = document.getElementById( bufferId );
		this.placeholder = document.getElementById( placeholderId );
	};

	// Switches the buffer and preview, and displays the right one:
	swapBuffers = function( context ) {
		var buffer  = context.preview;
		var preview = context.buffer;

		context.buffer  = buffer;
		context.preview = preview;

		buffer.style.position    = 'absolute';
		buffer.style.visibility  = 'hidden';

		preview.style.position   = '';
		preview.style.visibility = '';
	};

	// Creates the preview and runs MathJax on it:
	// If MathJax is already trying to render the code, return
	// If the text hasn't changed, return
	// Otherwise, indicates that MathJax is running and starts the typesetting.
	// After it is done, calls done()
	create = function() {
		if( this.isMJRunning ) return;
		var text = this.elem.value.trim();
		if( text === this.oldText ) return;
		if( !text )
			this.placeholder.style.display = 'inline';
		else
			this.placeholder.style.display = 'none';
		this.buffer.innerHTML = this.oldText = text;
		this.isMJRunning = true;
		MathJax.Hub.Queue(
			[ 'Typeset', MathJax.Hub, this.buffer ], [ 'done', this ]
		);
	};

	// Indicates that MathJax is no longer running and swaps the buffers to show the results:
	done = function() {
		this.isMJRunning = false;
		swapBuffers( this );
	};

	// Resets the preview i.e. brings back the placeholders:
	reset = function() {
		this.buffer.innerHTML = this.preview.innerHTML = this.oldText = '';
		this.placeholder.style.display = 'inline';
	};

	return {
		init   : init,
		create : create,
		done   : done,
		reset  : reset
	};
};