
$(function(){


    // amplitude - start

    Amplitude.init({
	"songs": [
		{
			"station_name": "La Luz del Mundo",
			"location": "Queens,NY",
			"url": "http://50.22.218.197:21244/;stream/1",
			"live": true
		}
	],
    "volume": .45
    });


    // amplitude - end

// check if radio is live
//     $.ajax({
//         url: "http://50.22.218.197:21244/;stream/1",
//         dataType:'jsonp',
//         statusCode: {
//             error: function(){
//             $('#statusOn').replaceWith("<p id=statusOff>Offline</p>");
//         }
//     },
// });

    // $.ajax({
    //     url: "http://50.22.218.197:21244/;stream/1",
    //     dataType:'jsonp',
    //     error:function() {
    //         $('#statusOn').replaceWith("<p id=statusOff>Offline</p>");
    //     }
    // });

 // radio check end

    init();

    // slide bio
    $('.bio-button,.bio').on('click', function(){
            $('.bio').slideToggle(),
            $('.bio-button').velocity("scroll",{duration: 700, offset: -90});

    });
    // slide bible text
    $('.h2').on('click', function(){
        $(this).next().slideToggle();
    });

    //slide bible quotes
    $('.bible-text p:first-child').on('click', function(){

        var bibtext = $(this).next();

        if (bibtext.is(':visible')) {
            bibtext.velocity(
                {height: '0'},
                {display: 'none'}
            );
        }
        else {
            bibtext.velocity({
                height: '8em'},
                {display: 'block'
            });
        }
    });



    // responsive video and map

    // grab iframe
    var iframes = document.getElementsByTagName('iframe'),
    count = iframes.length;

    // loop thru each video if more than one
    for (var i = 0; i < count; i++) {

        var iframe = iframes[i];

        // gets ratio of video dimensions
        var videoRatio = (iframe.height/iframe.width) * 100;

        iframe.style.position = 'absolute';
        iframe.style.top = '0';
        iframe.style.left = '0';
        // below, non style declarations.
        // this directly overrides iframe dimensions
        iframe.width = '100%';
        iframe.height = '100%';

        //create fluid wrap for video
        var wrap = document.createElement('div');

        wrap.className = 'fluid-vid';
        wrap.style.width = '100%';
        wrap.style.position = 'relative';
        wrap.style.paddingTop = videoRatio + '%';

        // wrap iframe in this new div
        var iframeParent = iframe.parentNode;
        iframeParent.insertBefore(wrap,iframe);
        wrap.appendChild(iframe);
    }

  // nav bar

    function init(){

        // function mobilecheck() {
        //     var check = false;
        //     (function(a){if(/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
        //     return check;
        // }

        // toggle menu when clicked
        var menu = document.getElementById('menu'),

        // eventtype = mobilecheck() ? 'touchstart' : 'click',
        // querySelector returns first match to a.nav-trigger
        trigger = document.getElementById('trigger'),

        overlay = document.getElementById('overlay'),

        resetMenu = function(){
            // removes open nav property and adds default
            $('#trigger,#menu').removeClass('nav-bar-open');
            // $('#nav').addClass('nav-bar');
        },

        closeClickFn = function(ev){
            resetMenu();
            overlay.removeEventListener('click', closeClickFn);
        };

        // add a new div to display overlay
        // var overlay = document.createElement('div');
        // overlay.className = 'overlay';
        // menu.appendChild(overlay);

        (trigger).addEventListener('click', function(ev){

            // stopPropagation keeps the click event local
            // doesnt let any other elemnents know
            // this prevents events in  triggers parent element from firing
            ev.stopPropagation();

            //stops the default action of trigger.
            ev.preventDefault();

            if($('#trigger,#menu').hasClass('nav-bar-open')){
                resetMenu();
            }
            else{
                // $('#nav').removeClass('nav-bar');
                $('#trigger,#menu').addClass('nav-bar-open');
                //(overlay).addEventListener('click', closeClickFn);
            }

        });

    }



});
