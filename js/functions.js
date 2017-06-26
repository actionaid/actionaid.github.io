$(document).ready(function(){
    window.setTimeout(function () {
        $("#header").addClass("loaded");
    }, 500);
    window.setTimeout(function () {
        $("#hero").addClass("loaded");
    }, 1000);
    window.setTimeout(function () {
        $("#content").addClass("loaded");
    }, 1500);
    console.log("Loaded");
    if ($(window).width() <= 768) {
        var herCapht = $('#captions .bottom').outerHeight();
        $('#hero').css({
            'margin-bottom': herCapht - 20
        })
		$(".image").prependTo("#master");
    }
    $(window).on('resize', function () {
        if ($(window).width() <= 768) {
            var herCapht = $('#captions .bottom').outerHeight();
            $('#hero').css({
                'margin-bottom': herCapht - 20
            })
			$(".image").prependTo("#master");
        } else {
            $('#hero').css({
                'margin-bottom': 0
            })
        }
    });
    $('body').append(
        '<div class="scroll-top ease"></div>'
    );
    $('body').on('click','.scroll-top',function(){
        $("html, body").animate({ scrollTop: 0 }, "slow");
    })
    $(window).scroll(function () {
        if($(window).scrollTop() > 300){
            $('.scroll-top').addClass('visible');
        } else {
            $('.scroll-top').removeClass('visible');
        }

        $(".section").each(function () {
            /* Check the location of each desired element */
            var objectBottom = $(this).offset().top;
            var windowBottom = $(window).scrollTop() + $(window).innerHeight();

            if (objectBottom < windowBottom) {
                $(this).addClass('inview');
            } else {
                $(this).removeClass('inview');
            }
        });
        var scrolled = $(this).scrollTop();
        $('.hv video, .fm-m-img').css('transform', 'translate3d(0, ' + -(scrolled * 0.25) + 'px, 0)');
    });

    console.log();
    if($('.year').length){
        $(".year").stick_in_parent({
            'offset_top' : 62
        });
    }

    var isMobile = false; //initiate as false
// device detection
    if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
        || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) isMobile = true;

    var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

    // Assign background image to all the elements with attribute 'data-background' and class '.has-bg'
    var bgimage = [];
    $('.has-bg').each(function (i) {
        var $self = $(this);
        bgimage[i] = $self.data('background');
        if (bgimage[i]) {
                $self.css({
                    'background-image': 'url(' + bgimage[i] + ')'
                });
                $self.attr('data-stellar-background-ratio',0.1);
            $self.removeAttr('data-background');
            if(iOS){
                $self.addClass('i-eles');
            }
        }
    });
     if(!isMobile){
         console.log('nt ios');
         $(window).stellar({
             horizontalScrolling: false,
             verticalOffset: 100
         });
     } else {
         var himage = $('#hero').data('background');
         if(himage){
             $('#hero').append(
                 '<div class="fm-m-img">' +
                 '<img src="' + himage +'"/>' +
                 '</div>'
             )
         }
     }

    var ftSlider = $('.bigslider');

    if(ftSlider.length){
        ftSlider.owlCarousel({
            items: 1,
            loop: true,
            autoplay: false,
            dots: true,
            nav: true,
            URLhashListener: true
        });
    }

    $('.home .storiesbtn').on('click',function(e){
        e.preventDefault();
        var id = $(this).attr('href');
        var target = id.replace('index.html','');
        $('html,body').animate({
                scrollTop: $(target).offset().top
            },'slow');
    })

    $('.sliderthumbs a').on('click',function(e){
        $('.sliderthumbs a').removeClass('active');
        $(this).addClass('active');
    });
    ftSlider.on('translate.owl.carousel',function(e){
        var current = e.item.index,
            item = $('.bigslider .owl-item').eq(current).find('.slide').data('hash');
        $('.sliderthumbs a').removeClass('active');
        $(".sliderthumbs a[href=#" + item  + "]").addClass("active");
    });

        $('.mobile-nav').on('click', function () {
            $(this).toggleClass('open');
            $('#menu').toggleClass('active');
        });

    //Social Media Share Popup
    $('.sharer').on('click', function (e) {
        e.preventDefault();
        window.open($(this).attr('href'), 'fbShareWindow', 'height=450, width=550, top=' + ($(window).height() / 2 - 275) + ', left=' + ($(window).width() / 2 - 225) + ', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
        return false;
    });
});