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
    tippy('.tooltip1', {
        offset: '260, 0',
        zIndex: 10000000000000,
        allowHTML: true
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


    setTimeout(function(){
        $('.overlay_popup').css('display', 'block');
    }, );

    setTimeout(function(){
        $('.succsess-popup').css('display', 'block');
    }, 3000);

    setTimeout(function(){
        $('.negative, .negative-big').css('display', 'block');
    }, 6000);

    setTimeout(function(){
        $('.info-popup').css('display', 'block');
    }, 8000);

    setTimeout(function(){
        $('.succsess-popup2').css('display', 'block');
    }, 10000);

    setTimeout(function(){
        $('.succsess-popup3').css('display', 'block');
    }, 12000);

    setTimeout(function(){
        $('.start-popup').css('display', 'block');
    }, 14000);


    $(".lang").on('click', function(){
        $(this).closest('.list-control').find('.list-lang').slideToggle(500);
    });

    //---------------------sound------------//

    let el = document.getElementById('btn-control');
    let playing = false; // текущее состояние плеера

    let player = new Audio('audio/bg-sound.mp3');
    player.preload = "auto";
    player.addEventListener('ended', function(){ // слушаем окончание трека
        el.innerText = "Done";
        playing = false;
    });
    if(el) {
        el.addEventListener('click', playPause); // слушаем нажатие на кнопку
    }

    function playPause() {
        if( playing) {
            player.pause();
            el.classList.remove('pause');
            el.classList.add('play');
        } else {
            player.play();
            el.classList.remove('play');
            el.classList.add('pause');
        }
        playing = !playing;
    }

    //--------------sound btn-------------//

    let rollSound;
    let rollSound1;
    let rollSound2;
    let rollSound3;
    let rollSound4;
    let rollSound5;
    let rollSound6;
    let rollSound8;
    let rollSound9;
    let rollSound10;

    $('button, .readiness, .element-item, .btn-contact-game, .lang, .item-lang').click(e => {
        if (rollSound && rollSound1 && rollSound2 && rollSound3 &&rollSound4 && rollSound5 && rollSound6) {
            rollSound.pause();
            rollSound1.pause();
            rollSound2.pause();
            rollSound3.pause();
            rollSound4.pause();
            rollSound5.pause();
            rollSound6.pause();
        }

        rollSound  = new Audio("audio/button.mp3");
        rollSound.play();
    });

    $('.menu-link').click(e => {
        if (rollSound && rollSound1 && rollSound2 && rollSound3 &&rollSound4 && rollSound5 && rollSound6  && rollSound8  && rollSound9  && rollSound10) {
            rollSound.pause();
            rollSound1.pause();
            rollSound2.pause();
            rollSound3.pause();
            rollSound4.pause();
            rollSound5.pause();
            rollSound6.pause();
            rollSound8.pause();
            rollSound9.pause();
            rollSound10.pause();
        }

        rollSound1  = new Audio("audio/menu.mp3");
        rollSound1.play();
    });

    $('.item-potion').click(e => {
        if (rollSound && rollSound1 && rollSound2 && rollSound3 &&rollSound4 && rollSound5 && rollSound6) {
            rollSound.pause();
            rollSound1.pause();
            rollSound2.pause();
            rollSound3.pause();
            rollSound4.pause();
            rollSound5.pause();
            rollSound6.pause();
        }

        rollSound2  = new Audio("audio/potions.mp3");
        rollSound2.play();
    });
    $('.information-btn, .btn-counter, .face-item').click(e => {
        if (rollSound && rollSound1 && rollSound2 && rollSound3 &&rollSound4 && rollSound5 && rollSound6  && rollSound7  && rollSound8  && rollSound9  && rollSound10) {
            rollSound.pause();
            rollSound1.pause();
            rollSound2.pause();
            rollSound3.pause();
            rollSound4.pause();
            rollSound5.pause();
            rollSound6.pause();
            rollSound7.pause();
            rollSound8.pause();
            rollSound9.pause();
            rollSound10.pause();
        }

        rollSound3  = new Audio("audio/switch.mp3");
        rollSound3.play();
    });
    $('.tooltip, .tooltip1').mouseover(e => {
        if (rollSound && rollSound1 && rollSound2 && rollSound3 &&rollSound4 && rollSound5 && rollSound6 && rollSound7  && rollSound8  && rollSound9  && rollSound10) {
            rollSound.pause();
            rollSound1.pause();
            rollSound2.pause();
            rollSound3.pause();
            rollSound4.pause();
            rollSound5.pause();
            rollSound6.pause();
            rollSound7.pause();
            rollSound8.pause();
            rollSound9.pause();
            rollSound10.pause();

        }

        rollSound7  = new Audio("audio/switch2.mp3");
        rollSound7.play();
    });

    setTimeout(function(){
        $('.negative-big, .negative').fadeIn(e => {
            if (rollSound && rollSound1 && rollSound2 && rollSound3 &&rollSound4 && rollSound5 && rollSound6) {
                rollSound.pause();
                rollSound1.pause();
                rollSound2.pause();
                rollSound3.pause();
                rollSound4.pause();
                rollSound5.pause();
                rollSound6.pause();
            }

            rollSound4  = new Audio("audio/window_error.mp3");
            rollSound4.play();
        });
    }, 6000);


    setTimeout(function(){
        $('.succsess-popup').fadeIn(e => {
            if (rollSound && rollSound1 && rollSound2 && rollSound3 &&rollSound4 && rollSound5 && rollSound6) {
                rollSound.pause();
                rollSound1.pause();
                rollSound2.pause();
                rollSound3.pause();
                rollSound4.pause();
                rollSound5.pause();
                rollSound6.pause();
            }

            rollSound5  = new Audio("audio/window_success.mp3");
            rollSound5.play();
        });
    }, 3000);

    $('.header-faq').click(e => {
        if (rollSound && rollSound1 && rollSound2 && rollSound3 &&rollSound4 && rollSound5 && rollSound6) {
            rollSound.pause();
            rollSound1.pause();
            rollSound2.pause();
            rollSound3.pause();
            rollSound4.pause();
            rollSound5.pause();
            rollSound6.pause();
        }

        rollSound6  = new Audio("audio/potions2.mp3");
        rollSound6.play();
    });
    setTimeout(function(){
        $('.info-popup').fadeIn(e => {
            if (rollSound && rollSound1 && rollSound2 && rollSound3 &&rollSound4 && rollSound5 && rollSound6 && rollSound8) {
                rollSound.pause();
                rollSound1.pause();
                rollSound2.pause();
                rollSound3.pause();
                rollSound4.pause();
                rollSound5.pause();
                rollSound6.pause();
                rollSound8.pause();
            }

            rollSound8  = new Audio("audio/window_information.mp3");
            rollSound8.play();
        });
    }, 8000);


    setTimeout(function(){
        $('.succsess-popup2').fadeIn(e => {
            if (rollSound && rollSound1 && rollSound2 && rollSound3 &&rollSound4 && rollSound5 && rollSound6 && rollSound8 && rollSound9) {
                rollSound.pause();
                rollSound1.pause();
                rollSound2.pause();
                rollSound3.pause();
                rollSound4.pause();
                rollSound5.pause();
                rollSound6.pause();
                rollSound8.pause();
                rollSound9.pause();
            }

            rollSound9  = new Audio("audio/window_success_withdraw2.mp3");
            rollSound9.play();
        });
    }, 10000);

    setTimeout(function(){
        $('.succsess-popup3').fadeIn(e => {
            if (rollSound && rollSound1 && rollSound2 && rollSound3 &&rollSound4 && rollSound5 && rollSound6 && rollSound8 && rollSound9 && rollSound10) {
                rollSound.pause();
                rollSound1.pause();
                rollSound2.pause();
                rollSound3.pause();
                rollSound4.pause();
                rollSound5.pause();
                rollSound6.pause();
                rollSound8.pause();
                rollSound9.pause();
                rollSound10.pause();
            }

            rollSound10  = new Audio("audio/window_success_withdraw.mp3");
            rollSound10.play();
        });
    }, 12000);

});
