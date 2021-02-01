/* INICIAMOS WOW */
new WOW().init();

/* INICIAMOS SMOOTH SCROLL */
var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    offset: 100,
});


/*---------------------------------
    OCULTAR Y MOSTRAR BOTON IR ARRIBA
 ----------------------------------*/

$(function () {
    $(window).scroll(function () {
        var scrolltop = $(this).scrollTop();
        if (scrolltop >= 60) {
            $(".ir-arriba").fadeIn();
        } else {
            $(".ir-arriba").fadeOut();
        }
    });

});

/*---------------------------------
   CABECERA ANIMADA
 ----------------------------------*/
$(window).scroll(function () {

    var nav = $('.encabezado');
    var scroll = $(window).scrollTop();

    if (scroll >= 80) {
        nav.addClass("fondo-menu");
    } else {
        nav.removeClass("fondo-menu");
    }
});


