var typeState = "indiv";
var timeState = "min30";
$( document ).ready(function() {
    setTypeAndTime(typeState, timeState);
    $(".indiv").click(function (e) { 
        e.preventDefault();
        typeState = "indiv";
        $(".min30").css("display", "flex");
        $(".middle").css("display", "flex");
        $(".tablet").css("margin", "0 40px 0 40px");
        setIndivMin60();
        setTypeAndTime(typeState, timeState);
    });
    $(".common").click(function (e) { 
        e.preventDefault();
        typeState = "common";
        timeState = "min60";
        $(".min30").css("display", "none");
        $(".middle").css("display", "none");
        $(".tablet").css("margin", "0 40px 0 40px");
        setCommonMin60();
        setTypeAndTime(typeState, timeState);
    });
    $(".min30").click(function (e) { 
        e.preventDefault();
        if(typeState == "common"){
            return;
        }
        timeState = "min30";
        setIndivMin30();
        setTypeAndTime(typeState, timeState);
    });
    $(".min60").click(function (e) { 
        e.preventDefault();
        if(typeState == "common"){
            return;
        }
        timeState = "min60";
        setIndivMin60();
        setTypeAndTime(typeState, timeState);
    });
});
function setTypeAndTime(typeState, timeState){
    switch (typeState) {
        case "common":
            $("#lineCommon").css("background-color", "#236967");
            $("#lineIndiv").css("background-color", "#94C6C4");
            break;
        default:
            $("#lineCommon").css("background-color", "#94C6C4");
            $("#lineIndiv").css("background-color", "#236967");
            break;
    }
    switch (timeState) {
        case "min60":
            $("#lineMin60").css("background-color", "#236967");
            $("#lineMin30").css("background-color", "#94C6C4");
            break;
        default:
            $("#lineMin60").css("background-color", "#94C6C4");
            $("#lineMin30").css("background-color", "#236967");
            break;
    }
}
function setIndivMin60(){
    $("#leftH2").text("4 занятия по 60 мин");
    $("#middleH2").text("8 занятий по 60 мин");
    $("#rightH2").text("12 занятия по 60 мин");
    $("#priceLeft").text("5400 ₽");
    $("#priceMiddle").text("10800 ₽");
    $("#priceRight").text("16200 ₽");
    $("#leftImg").attr("src", "../img/images/20064.svg");
    $("#middleImg").attr("src", "../img/images/20065.svg");
    $("#rightImg").attr("src", "../img/images/20066.svg");

}
function setIndivMin30(){
    $("#leftH2").text("4 занятия по 30 мин");
    $("#middleH2").text("8 занятий по 30 мин");
    $("#rightH2").text("12 занятия по 30 мин");
    $("#priceLeft").text("3400 ₽");
    $("#priceMiddle").text("6800 ₽");
    $("#priceRight").text("10200 ₽");
    $("#leftImg").attr("src", "../img/images/20061.svg");
    $("#middleImg").attr("src", "../img/images/20062.svg");
    $("#rightImg").attr("src", "../img/images/20063.svg");
}
function setCommonMin60(){
    $("#leftH2").text("4 занятия по 60 мин");
    $("#rightH2").text("12 занятия по 60 мин");
    $("#priceLeft").text("5400 ₽");
    $("#priceRight").text("16200 ₽");
    $("#leftImg").attr("src", "../img/images/20067.svg");
    $("#rightImg").attr("src", "../img/images/20068.svg");
}