$(document).ready(function(){
    $('.popup .close').on('click', function(){
        $(this).closest('.popup').fadeOut();
    });

    $('.btn_login').on('click', function(){
        $('.popup_login').fadeIn();
    });

    $('.btn_sign').on('click', function(){
        $('.popup_creation').fadeIn();
    });

    $('header, .what_is, .about, .upgrade, .verification, .program, .reporting, .why, .simple, .benefits, .request, .partner_network').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInUp',
        offset: 10
    });

    $(document).click(function (event) {
        if ($(event.target).hasClass('responsive_menu')) {
            $('.side').toggleClass('show');
            $('.fade').toggleClass('in');
        } else if($('.side').hasClass('show')) {
            $('.side').removeClass('show');
            $('.fade').toggleClass('in');
        }
    });
});
