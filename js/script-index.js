$(document).ready( function(){

	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);

	$('.js-back').hide();

	function printNews(){
		$('.nueva-receta').text('NUEVAS RECETAS');
	}
	printNews();


});


/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/

function renderHighlightedRecipes(recipesArray) {
	var largo = recipesArray.length;
	for (var i = 0; i < largo; ++i){
        if(recipesArray[i].highlighted === true){
            var rcts = recipesArray[i];
            renderRecipe(rcts);
            console.log('Recipes: ', recipesArray[i]);
        }
    }
}

/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {
	$('.list-recipes').append('<a class="item-recipe" href="#"><span class="attribution"><span class="title-recipe">'+recipe.title+'</span><span class="metadata-recipe"><span class="author-recipe">'+recipe.source.name+'</span><span class="bookmarks-recipe"><span class="icon-bookmark"></span></span></span></span><img src="img/recipes/640x480/'+recipe.name+'.jpg"/></a>');
	console.log('Voy a pintar la receta: ', recipe);
}


$(document).ready( function(){
/*
* Función que se encarga de pintar todas las actividades
*/
	function renderActivities(activitiesArray){
		var largo = activitiesArray.length;
		for (var i = 0; i < largo; ++i){
			renderActivity(activitiesArray[i]);
		}
		if(largo > 0){
			$('.wrapper-message').css('display', 'none');
		}
		console.log('Activities: ', activitiesArray);
	}
	renderActivities(activitiesArray);
});

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/

function renderActivity(recipe) {
 var tpl = _.template('<a href="#" class="item-activity">' +
  						'<span class="attribution">' +
  						'<span class="avatar"><img src="<%= userAvatar %>" class="image-avatar"></span>' +
	  		    			'<span class="meta">' +
	  		      				'<span class="author"><%= userName %></span> made' +
	  		      				'<span class="recipe"><%= recipeName %></span>: <%= text %>' +
		      					'<span class="location">&mdash;<%= place %></span>' +
	  		    				'</span>' +
	  		 				'</span>' +
  		 				'</span>' +
  		 				'<div class="bg-image" style="background-image: url(<%= image %>);"></div>'+
					'</a>');
$('.list-activities').append(tpl(recipe));
}

