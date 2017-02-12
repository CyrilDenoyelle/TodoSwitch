$(document).ready(function() {

	$('#namelistform').on('submit', function(e) {
		e.preventDefault();
		var add = $('#listnameinp').val();
		$('#listnameinp').val('');
		$('#total').append($('<div class="container list"><button class="suppr">X</button><span class="titres">'+ add +'</span><form class="todolist"><input class="todoinp" placeholder="Entrez une tâche à effectuer" /><input type="submit" class="Ajoutage add" value="Ajouter" /></form><ul class="todolistcont"></ul><button type="button" class="btn btn-primary todo">tâches à faire</button><button type="button" class="btn btn-primary done">tâches faite</button><button type="button" class="btn btn-primary all">Toutes les tâches</button></div>'));

		$(".todolist").each(function(){
			if(!$(this).attr('ok')){
				$(this).on('submit', function(e) {
					e.preventDefault();
					var add = $(this).children().val();
					$(this).children('.todoinp').val('');
					$(this).next().append("<li class='nonvalide'>" + add + "</li>");
					$(this).next().append($("<button class='validage nonvalide'>X</button>").click(function() {
						var prev = $(this).prev();
						prev.toggleClass("valide");
						$(this).toggleClass("valide");
						prev.toggleClass("nonvalide");
						$(this).toggleClass("nonvalide");
					}));
				})
					$(this).attr('ok', 'ok');
			}
		});

		$(".todo").each(function(){
			if(!$(this).attr('ok')){
				$(this).click(function() {
					var nonvalide = $(this).prev().children('.nonvalide');
					var valide = $(this).prev().children('.valide');
					valide.addClass("cach");
					nonvalide.removeClass("cach");
				});
				$(this).attr('ok', 'ok');
			}	
		});

		$(".done").each(function(){
			if(!$(this).attr('ok')){
				$(this).click(function() {
					var valide = $(this).prev().prev().children('.valide');
					var nonvalide = $(this).prev().prev().children('.nonvalide');
					nonvalide.addClass("cach");
					valide.removeClass("cach");
				});
				$(this).attr('ok', 'ok');

			}	
		});

		$(".suppr").each(function(){
			if(!$(this).attr('ok')){
				$(this).click(function() {
					var pro = prompt('SÛR DE SÛR ?? (yes)');
					if(pro === 'yes'){
						$(this).parent().remove()
					}
				});
				$(this).attr('ok', 'ok');

			}	
		});

		$(".all").each(function(){
			if(!$(this).attr('ok')){
				$(this).click(function() {
					var valide = $(this).prev().prev().prev().children('.valide');
					var nonvalide = $(this).prev().prev().prev().children('.nonvalide');
					nonvalide.removeClass("cach");
					valide.removeClass("cach");
				});
				$(this).attr('ok', 'ok');
			}	
		});
	});

	$('#flexoupas').on('click', function(){
		$('#total').toggleClass('flexB')
	})

});