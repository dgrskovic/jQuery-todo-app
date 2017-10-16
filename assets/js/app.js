//mark a todo as completed
$("ul").on("click", "li", function() {
    $(this).toggleClass("completed");
});

//add a todo on Enter keypress
$("input[type='text']").on("keypress", function(event) {
    if (event.which === 13) {
        var todoText = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> " + todoText + "</li>");
    }
});

//remove a todo when trash icon clicked
$("ul").on("click", "span", function(event) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    event.stopPropagation();
});

//change plus/minus icon on click
$("h1 > i").click(function() {
    $("input[type='text']").fadeToggle(100);
    if ($(this).hasClass("fa-plus")) {
        $(this).removeClass("fa-plus").addClass("fa-minus");
    } else {
        $(this).removeClass("fa-minus").addClass("fa-plus");
    }
});