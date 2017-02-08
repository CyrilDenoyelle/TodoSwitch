$(document).ready(function() {


    $("#add").click(function() {
        var add = $("#todox").val();
        $("#todolist").append("<li class='nonvalide'>" + add + "</li>")
        $('#todolist').append($("<button class='validage nonvalide'>x</button>").click(function() {
            var ca = $(this).prev();
            ca.toggleClass("valide");
            $(this).toggleClass("valide");
            ca.toggleClass("nonvalide");
            $(this).toggleClass("nonvalide");
        }));

    });

    $(".validage").click(function() {
        var ca = $(this).prev();
        ca.toggleClass("valide");
        $(this).toggleClass("valide");
        ca.toggleClass("nonvalide");
        $(this).toggleClass("nonvalide");
    });



    $("#todo").click(function() {
        var nonvalide = $(".nonvalide");
        var valide = $(".valide");
        valide.addClass("cach");
        nonvalide.removeClass("cach");

    })
    $("#done").click(function() {
        var valide = $(".valide");
        var nonvalide = $(".nonvalide");
        nonvalide.addClass("cach");
        valide.removeClass("cach");

    })
    $("#all").click(function() {
        var valide = $(".valide");
        var nonvalide = $(".nonvalide");
        nonvalide.removeClass("cach");
        valide.removeClass("cach");




    })


});