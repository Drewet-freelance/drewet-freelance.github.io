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
    /*-----------------------------------------------	
        Language-toggle
    -------------------------------------------------*/	
    $('.language__toggle').click(function(){
        $(this).toggleClass('open');
    })        
    $('.language__toggle li').click(function(){
    var setLang = $('.language__toggle').data('location'),
        dataLangSelect = $(this).data('lang')
            $('.language__toggle').data('location', dataLangSelect);
            $('.language__toggle li').removeClass('active');
            $(this).toggleClass('active');
    }) 
    /*-----------------------------------------------	
        POP-UP (make an order)
    -------------------------------------------------*/	
    $(".modal").each(function() {
        $(this).wrap('<div class="overlay"></div>')
    });

    $(".open-modal").on('click', function(e) {
        e.preventDefault();
        e.stopImmediatePropagation;
        var $this = $(this),
            modal = $($this).data("modal");
        $(modal).parents(".overlay").addClass("open");
        setTimeout(function() {
            $(modal).addClass("open");
        }, 350);
        $(document).on('click', function(e) {
            var target = $(e.target);
            if ($(target).hasClass("overlay")) {
                $(target).find(".modal").each(function() {
                    $(this).removeClass("open");
                });
                setTimeout(function() {
                    $(target).removeClass("open");
                }, 350);
            }
        });
    });

    $(".close-modal").on('click', function(e) {
        e.preventDefault();
        e.stopImmediatePropagation;
        var $this = $(this),
            modal = $($this).data("modal");
        $(modal).removeClass("open");
        setTimeout(function() {
            $(modal).parents(".overlay").removeClass("open");
        }, 350);
    });    
    /*-----------------------------------------------	
        Hide placeholder
    -------------------------------------------------*/
    $('input,textarea').focus(function(){
        $(this).data('placeholder',$(this).attr('placeholder'))
        $(this).attr('placeholder','');
    });
    $('input,textarea').blur(function(){
        $(this).attr('placeholder',$(this).data('placeholder'));
    });
})(jQuery);