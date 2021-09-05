var menu = $('.nav > ul > li');
menu.find('li').hide();
menu.click(function () {
    menu.not(this).find('li').hide();
    $(this).find('li').slideToggle();
});

$(function() {
    $('.icon').click(function() {
        $('.navbar').toggleClass('main');        
    });
});
