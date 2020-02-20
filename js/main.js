$(document).ready(function() {

    //---------------slider--------------//

    let handler = function (e,ui) {
        let value = (jQuery(this).offset().left - $(".draggable-container").offset().left),
            prc   = value / ($(".draggable-container")[0].offsetWidth / 100);
        
        if(prc < 50) {
            prc = Math.floor(prc/10);
        }
    };

    jQuery(function(){
        $( "#draggable" ).draggable({
            axis: "x",
            containment: "parent",
            drag: handler
        });
    });


    //-------------counter----------//

    $('.minus').click(function () {
        let $input = $(this).closest('.number-counter').find('.counter-input');
        let count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
       let $input = $(this).closest('.number-counter').find('.counter-input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });



    //---------------------scroll-------------//
    $('.scroll-custom').slimscroll({
        height: 'auto',
        railVisible: true,
        alwaysVisible: true
    });

    //---------------------active slideToggle faq elements-------------//

    $('.header-faq').on('click', function () {
        $('.container-answer').removeClass('active-toggle');
        $(this).toggleClass('active-arrow');
        $(this).closest(".item-faq").find('.container-answer').addClass('active-toggle');
        $('.active-toggle').slideToggle(500);
    });

    //---------------------click menu button-------------//

    $('.menu-link').on('click', function (event) {
        event.preventDefault();

        const name = $(this).attr('name');
        $('.right-info-block').removeClass('active-block');
        $('#' + name).addClass('active-block');
        $('.item-menu').removeClass('active-btn');
        $(this).closest(".item-menu").addClass('active-btn');
        $(this).closest('.container-right-column').find()
    });


    //---------------------click change potion-------------//

      $('.item-potion').on('click', function (event) {
        event.preventDefault();

        const name = $(this).attr('name');
        $('.potion-variant-vlock').removeClass('active-potion-info');
        $('#' + name).addClass('active-potion-info');
        $('.item-potion').removeClass('active-butl-frame');
        $(this).closest(".item-potion").addClass('active-butl-frame');

    });


    //---------------------tooltip-------------//

    tippy('.tooltip', {
        offset: '260, 0',
        zIndex: 10000000000000,
    });

    //---------------------tooltip copy-------------//

    $('.copy-btn').on('click', function () {
       $(this).closest('.container-input-link').find('.tooltipe').fadeIn(500);
        setTimeout(() => {
            $(this).closest('.container-input-link').find('.tooltipe').fadeOut(500);
        }, 2000);
    });


    //---------------------popup-------------//

        $('.show_popup').click(function() { // Вызываем функцию по нажатию на кнопку
        let popup_id = $('#' + $(this).attr("rel")); // Связываем rel и popup_id
        $(popup_id).addClass('active-popup').fadeIn(500); // Открываем окно
        $('.overlay_popup').fadeIn(500); // Открываем блок заднего фона
    });
    $('.overlay_popup').click(function() { // Обрабатываем клик по заднему фону
        $('.overlay_popup, .popup').hide(); // Скрываем затемнённый задний фон и основное всплывающее окно
    });

    $('.btn-popup').on('click', function(){
        $(this).closest('.body').find('.overlay_popup').fadeOut(500);
        $(this).closest('.popup').removeClass('active-popup').fadeOut(500);
    });

    $('.succsess-popup, .negative, .negative-big, .info-popup, .start-popup, .overlay_popup').css('display', 'block');


    $(".lang").on('click', function(){
        $(this).closest('.list-control').find('.list-lang').slideToggle(500);
    });
});