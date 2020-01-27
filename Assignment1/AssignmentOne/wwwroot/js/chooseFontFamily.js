$(document).ready(function(e){
	console.log(e);
	console.log("font family swap activated");
	$('.select-font-family').on('click', (e) => {
		e.preventDefault();

		$('header-font').css('font-family: ' + '\'' + $('selected-font-family').val() + '\'');
	});
});
