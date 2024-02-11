var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

$(document).on("load", function() {
});

$(window).resize(function() {
});

$(document).scroll(function() {
});

$(document).ready(function() {

    if( $(".promo_slider").length > 0 ) {
        $(".promo_slider").not(".slick-initialized").slick({
            dots: false,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 4000,
            speed: 1200,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true
        });
    }

    if( $(".slider_1").length > 0 ) {
        $(".slider_1").not(".slick-initialized").slick({
            dots: false,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 4000,
            speed: 1200,
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: true
        });
    }

    if( $(".slider_2").length > 0 ) {
        $(".slider_2").not(".slick-initialized").slick({
            dots: false,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 4000,
            speed: 1200,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true
        });
    }

    if( $(".testimonial_slider").length > 0 ) {
        $(".testimonial_slider").not(".slick-initialized").slick({
            dots: false,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 4000,
            speed: 1200,
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: true
        });
    }

    if( $(".persons_slider").length > 0 ) {
        $(".persons_slider").not(".slick-initialized").slick({
            dots: false,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 4000,
            speed: 1200,
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: true
        });
    }

    if( $(".contacts_thumbs_3").length > 0 ) {
        $(".contacts_thumbs_3").not(".slick-initialized").slick({
            dots: false,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 4000,
            speed: 1200,
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: true
        });
    }

// -------------

    $(document).on("click", ".dr_btn", function(e) {
        e.preventDefault();
        parent = $(this).closest("li");
        dr = parent.find(".sub_menu");
        if(dr.is(":hidden")) {
            dr.slideDown(300);
            parent.addClass("active");
        } else {
            dr.slideUp(300);
            parent.removeClass("active");
        }
    });

// -------------

    $(".respmenubtn").click(function(e) {
      e.preventDefault();
      if( $("#resp_nav").is(":hidden") ) {
          $("#resp_nav").fadeIn(300);
          $(this).addClass("active");
            div = document.createElement('div');
            div.style.overflowY = 'scroll';
            div.style.width = '50px';
            div.style.height = '50px';
            div.style.visibility = 'hidden';
            document.body.appendChild(div);
            scrollWidth = div.offsetWidth - div.clientWidth;
            document.body.removeChild(div);
            topCoord = $(document).scrollTop();
            $("body").addClass("fixed");
            $("body").css({
                "top" :  -1 * topCoord + "px",
                "padding-right" : scrollWidth + "px"
            });
      } else {
          $("#resp_nav").fadeOut(300);
          $(this).removeClass("active");
            curTop = $("body").css("top");
            curTop = Math.abs(parseInt(curTop, 10));
            $("body").removeClass("fixed");
            if (curTop !== 0) {
            $("html").scrollTop(curTop);
            }
            $("body").attr("style", "");
      }
    });
    
    $(this).keydown(function(eventObject){
        if (eventObject.which == 27 &&
            $("#resp_nav").hasClass("active") &&
            bodyWidth <= 900) {
            $("#resp_nav").fadeOut(300);
            $(".respmenubtn").removeClass("active");
            curTop = $("body").css("top");
            curTop = Math.abs(parseInt(curTop, 10));
            $("body").removeClass("fixed");
            if (curTop !== 0) {
                $("html").scrollTop(curTop);
            }
            $("body").attr("style", "");
        }
    });

    // ---------

    $(".tab_link").on("click", function(e) {
      parent = $(this).closest(".tab_list");
      parent.find(".tab_link").removeClass("active");
      $(this).addClass("active");
    });

    // ---------

    $(".dropdown_item_title").on("click", function(e) {
        e.preventDefault();
        parent = $(this).closest(".dropdown_item");
        dr = parent.find(".dropdown_item_content");
        if(dr.is(":hidden")) {
            dr.slideDown(300);
            parent.addClass("active");
        } else {
            dr.slideUp(300);
            parent.removeClass("active");
        }
    });

    // ---------

    $(".dr_title").on("click", function(e) {
        e.preventDefault();
        parent = $(this).closest(".dr");
        dr = parent.find(".dr_item_content");
        if(dr.is(":hidden")) {
            dr.slideDown(300);
            parent.addClass("active");
        } else {
            dr.slideUp(300);
            parent.removeClass("active");
        }
    });

});