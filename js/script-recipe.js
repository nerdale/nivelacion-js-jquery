$(document).ready(function(){
	$('.js-menu').hide();

	console.log('Ready Go!!');

	$('.js-show-make').click(function(){
		$('.recipe').addClass('make');
		$('.js-show-make').addClass('active');
		$('.js-show-recipe').removeClass('active');
	});

	$('.js-show-recipe').click(function(){
		$('.recipe').removeClass('make');
		$('.js-show-recipe').addClass('active');
		$('.js-show-make').removeClass('active');
	});

	$('a#back').click(function(e){
         e.preventDefault();
         window.location = 'index.html';   
	});
});
