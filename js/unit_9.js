state_9 = "old";
$(".kid_9").click(function(){
    state_9 = "kid";
    $("#line_kid_9").css("background-color", "#236967");
    $("#line_old_9").css("background-color", "#94C6C4");
});
$(".old_9").click(function(){
    state_9 = "old";
    $("#line_kid_9").css("background-color", "#94C6C4");
    $("#line_old_9").css("background-color", "#236967");
});