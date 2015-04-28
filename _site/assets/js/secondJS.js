
/*blast and velocity for banner words*/
$(".logo, .symb")
.delay(200)
.velocity({opacity:1},2200)


$(".media")
.delay(700)
.velocity({opacity:1}, 1200);

$(function(){


        $("#video").click(function () {
            location.href = "media.html";
        })

        // somos section
        // $("#info").click(function(){
        //     $(".window").load("somos.html");
        // });


});
