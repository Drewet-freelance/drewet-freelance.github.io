(function($) {
    "use strict";

/*-----------------------------------------------	
       Tabs
-------------------------------------------------*/
    $(function() {
        $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
            $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('div.tabs').find('div.outsourcing__content').removeClass('active').eq($(this).index()).addClass('active');
        });
    });
/*-----------------------------------------------	
       Navbar toggle-menu
-------------------------------------------------*/
    $('.navbar').after('<div class="row menu-mobile active position-absolute">');
    $('.menu-dropdown').clone().appendTo('.menu-mobile').addClass('active');
    $('.menu-btn').click(function(){
        $('.menu-mobile').stop().slideToggle();
        return false;
    });
    $(document).mouseup(function (e){ // событие клика по веб-документу
        var div = $(".menu-mobile"); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
            div.slideUp(); // скрываем его
        }
    });
})(jQuery);