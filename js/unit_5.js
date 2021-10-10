state = "old";
$(".kid").click(function(){
    state = "kid";
    $("#line_kid").css("background-color", "#236967");
    $("#line_old").css("background-color", "#94C6C4");
});
$(".old").click(function(){
    state = "old";
    $("#line_kid").css("background-color", "#94C6C4");
    $("#line_old").css("background-color", "#236967");
});