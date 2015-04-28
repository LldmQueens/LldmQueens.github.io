
/*blast and velocity for banner words*/
$(".logo")
.delay(200)
.velocity("transition.slideDownIn",3000)

    $("#iglesia")
    .delay(250)
    .velocity("transition.slideDownIn", 2000);



$("#columna")
.delay(450)
.velocity("transition.slideDownIn", 2100);

$("#luz")
.delay(500)
.velocity("transition.slideDownIn", 2500);

$("#state")
.delay(550)
.velocity("transition.slideUpIn", 2000);

$(".media")
.delay(1800)
.velocity("transition.slideUpIn", 1000);

$(function(){


        $("#mic").click(function () {
            location.href = "media.html";
        })


});
