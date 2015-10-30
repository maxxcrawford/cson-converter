(function() {

// var CSON = require('cson');

function lint(type, string){
	// Put Lint Function Here
	if (string){
		convert(type, string);
	}
}

function convert(type, string){
	// Run Conversion


	// Pushes String to Other Textarea
	if (type === "cson"){
		$('textarea').filter('[data-lang="json"]').val(string);
	} else {
		$('textarea').filter('[data-lang="cson"]').val(string);
	}
}

$(document).on('click', 'button', function(e){
	e.preventDefault();
	var convertType = $(this).data('lang')
	var val = $('textarea').filter('[data-lang="' + convertType + '"]').val();
	lint(convertType, val);
})

})();
