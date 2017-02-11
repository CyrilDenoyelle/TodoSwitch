$(document).ready(function() {

	// $('#namelistform').on

	$("#todolist").on('submit', function(e) {
		e.preventDefault();
		var add = $("#todoinp").val();
		$("#todoinp").val('');
		$("#todolistcont").append("<li class='nonvalide'>" + add + "</li>");
		$('#todolistcont').append($("<button class='validage nonvalide'>x</button>").click(function() {
			var prev = $(this).prev();
			prev.toggleClass("valide");
			$(this).toggleClass("valide");
			prev.toggleClass("nonvalide");
			$(this).toggleClass("nonvalide");
		}));
	});

	$("#todo").click(function() {
		var nonvalide = $(".nonvalide");
		var valide = $(".valide");
		valide.addClass("cach");
		nonvalide.removeClass("cach");
	});

	$("#done").click(function() {
		var valide = $(".valide");
		var nonvalide = $(".nonvalide");
		nonvalide.addClass("cach");
		valide.removeClass("cach");
	});

	$("#all").click(function() {
		var valide = $(".valide");
		var nonvalide = $(".nonvalide");
		nonvalide.removeClass("cach");
		valide.removeClass("cach");
	})

});