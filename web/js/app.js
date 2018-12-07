$(function(){

    var $hamburger = $(".menu"),
        $menu = $(".nav"),
        $logo = $(".logo-type"),
        $header = $("header"),
        navStatus = false;

    $hamburger.click(function() {
      $(this).toggleClass("open");
      $menu.toggleClass("open");
      $logo.toggleClass("white");
      $("body").toggleClass("no-scroll");

      $(".nav ul").children().each(function (i) {
        var $item = $(this);
        if ( $item.hasClass( "enabled" )) {
            $item.removeClass("enabled");
        } else {
            setTimeout(function() {
                $item.addClass("enabled");
            }, 50*i);
        }

      });

    });

    var defaultpadding = parseFloat($header.css('padding-top'));

    $(window).scroll(function () {

        var scrollPos = $(this).scrollTop();

        if ($(this).scrollTop() >= 100) {
            $($header).addClass("collapsed");
        } else {
            $($header).removeClass("collapsed");
        }

    });

});
