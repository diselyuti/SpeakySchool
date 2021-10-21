var state_7 = "old";
$(".kid_7").click(function(){
    state_7 = "kid";
    $("#line_kid_7").css("background-color", "#236967");
    $("#line_old_7").css("background-color", "#94C6C4");
});
$(".old_7").click(function(){
    state_7 = "old";
    $("#line_kid_7").css("background-color", "#94C6C4");
    $("#line_old_7").css("background-color", "#236967");
});