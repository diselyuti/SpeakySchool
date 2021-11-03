var stateLine;
var stateType;
$( document ).ready(function() {
    $('input[type="radio"][name="distance"]').change(function (){
        stateLine = $('input[type="radio"][name="distance"]:checked').data("line");
        switch (stateLine) {
            case "off":
                setBox2();
                break;
            case "on":

                break;
            default:
                console.error("error");
                break;
        }
    });
    $('input[type="radio"][name="type"]').change(function (){
        stateType = $('input[type="radio"][name="type"]:checked').data("type");
        switch (stateType) {
            case "ind":
                setBox3();
                showTabletInd();
                break;
            case "group":
                setBox3();
                break;
            case "speaking":
                setBox3();
                break;
            default:
                console.error("error");
                break;
        }
    });
    function setBox2(){
        $("#firstCirc").css("background-color", "#236967");
        $("#secondCirc").css("background-color", "#689C9A");
        $("#firstCirc").removeClass("shadow");
        $("#secondCirc").addClass("shadow");
        $("#box2").css({"display" : "flex", "margin-right":"37%"});
    }
    function setBox3(){
        $("#secondCirc").css("background-color", "#236967");
        $("#thirdCirc").css("background-color", "#689C9A");
        $("#secondCirc").removeClass("shadow");
        $("#thirdCirc").addClass("shadow");
        $("#box2").css("margin-right","0");
        $("#box3").css("display","flex");
    }
    function showTabletInd(){
        $(".tablets").css("display", "flex");
        $(".boxes").css("display", "none");
        $("#leftH2").text("4 занятия по 60 мин");
        $("#middleH2").text("8 занятий по 60 мин");
        $("#rightH2").text("12 занятия по 60 мин");
        $("#priceLeft").text("540 ₽");
        $("#priceMiddle").text("10800 ₽");
        $("#priceRight").text("16200 ₽");
    }
});