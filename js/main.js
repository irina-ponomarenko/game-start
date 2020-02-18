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

    $('.header-faq').on('click', function () {
        $('.container-answer').removeClass('active-toggle');
        $(this).closest(".item-faq").find('.container-answer').addClass('active-toggle');
        $('.active-toggle').slideToggle(500);
    });
});