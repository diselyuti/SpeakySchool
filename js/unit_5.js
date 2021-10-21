var state_5 = "old";
$(".kid_5").click(function(){
    state_5 = "kid";
    $("#line_kid_5").css("background-color", "#236967");
    $("#line_old_5").css("background-color", "#94C6C4");
});
$(".old_5").click(function(){
    state_5 = "old";
    $("#line_kid_5").css("background-color", "#94C6C4");
    $("#line_old_5").css("background-color", "#236967");
});