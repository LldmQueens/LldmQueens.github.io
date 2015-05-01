
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-62511818-1', 'auto');
  ga('send', 'pageview');



/*blast and velocity for banner words*/
$(".symb")
.delay(250)
.velocity("transition.fadeIn", {duration:5000});

$(".logo")
.delay(400)
.velocity("transition.fadeIn",1600);

$("#iglesia")
.delay(700)
.velocity("transition.slideDownIn", 1200);

$("#columna")
.delay(500)
.velocity("transition.slideDownIn", 1200);

$("#luz")
.delay(500)
.velocity("transition.fadeIn",2000);

$(".bar")
.delay(700)
.velocity({opacity:1}, 1200);

$(function(){


    function init(){

        // toggle menu when clicked
        var nav = document.getElementById('nav'),

        // querySelector returns first match to a.nav-trigger
        trigger = nav.querySelector('a.nav-trigger'),

        resetMenu = function(){
            // removes open nav property and adds default
            $('#nav').removeClass('nav-bar-open');
            // $('#nav').addClass('nav-bar');
        },

        closeClickFn = function(ev){
            resetMenu();
            overlay.removeEventListener('click', closeClickFn);
        };

        // add a new div to display overlay
        var overlay = document.createElement('div');
        overlay.className = 'nav-bar-overlay';
        nav.appendChild(overlay);

        trigger.addEventListener('click', function(ev){
            // stopPropagation keeps the click event local
            // doesnt let any other elemnents know
            // this prevents events in  triggers parent element from firing
            ev.stopPropagation();

            //stops the default action of trigger.
            ev.preventDefault();

            if($('#nav').hasClass('nav-bar-open')){
                resetMenu();
            }
            else{
                // $('#nav').removeClass('nav-bar');
                $('#nav').addClass('nav-bar-open');
                overlay.addEventListener('click', closeClickFn);
            }

        });

    }


init();

});
