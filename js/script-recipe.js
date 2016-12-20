$(document).ready(function(){
	$('.js-menu').hide();
	console.log('Ready Go!!');

	$('.js-show-make').click(function(){
		$('.recipe').addClass('make');
	});

	$('.js-show-recipe').click(function(){
		$('.recipe').removeClass('make');
	});
});
