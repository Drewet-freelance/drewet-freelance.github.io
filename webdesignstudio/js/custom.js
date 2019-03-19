
$(function(){  
	
	/*выезжающее меню с бутерброда*/
	$('.menu-toggle').click(function(){
		$(this).toggleClass('active') /*this вместо .menu-toggle*/
		$('.menu').slideToggle(400) /*показать меню , 400 это время*/
	})


	/*табы*/
	$('.tabs a').click(function(){
		$(this).parents('.tab-wrap').find('.tab-cont').addClass('hide');
		$(this).parent().siblings().removeClass('active');
		var id = $(this).attr('href');
		$(id).removeClass('hide');
		$(this).parent().addClass('active');
		return false
	});
    
    $('.banner-slider, .testimonial-slider').slick({   /*слайдер слик*/
        arrows: false, /*убрать кнопки перелистывания слайдов*/
        dots: true, /*добавить точки*/
    })

    $('.portfolio-slider').slick({ /*слайдер слик*/
		dots: true, /*добавить точки*/
		appendArrows: '.portfolio-slider__buttons', /*вставить кнопочки перелистывания в определенный клас*/
		prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left"></i></button>', /*aria-hidden="true" было удалено с тега 'i' за ненадобностью*/
		nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right"></i></button>', /*aria-hidden="true" было удалено с тега 'i' за ненадобностью*/
		
			// убрать точки со слайдера при расширении 767 и ниже точек
		responsive: [
		{
			breakpoint: 767,
			settings: {
				dots: false,
			}
		}
		]
	})

	/*сделать слайдер для меню при расширенни 320 точек для изображений*/
    $nav_tabs_slider = $('.nav-tab-list');
    settings = {
		slidesToShow: 1,
		prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right"></i></button>',
   		infinite: false, /*убрать постоянную прокрутку*/
    }

    /*чтобы при перелистывании активировался тот элемент на который перелистано*/ 
    $nav_tabs_slider.on('afterChange', function (event, slick, currentSlide, nextSlide) { /*afterChange - при изменении чтото должно происходить*/
		$(this).parents('.tab-wrap').find('.tab-cont').addClass('hide'); 
		$(this).find('.slick-current').siblings().removeClass('active'); /*find('.slick-current') найдет активный елемент в слайдере */
		var id = $(this).find('.slick-current a').attr('href'); 
		$(id).removeClass('hide');
		$(this).find('.slick-current').addClass('active');
		return false
    })

    /*чтобы слайдер появлялся только на мобильных устройствах*/
    $(window).on('resize load', function(){ /*2 условия при которых появляется слайдер: при ресайзе браузера и при загрузке*/ 
    	if($(window).width() > 767) {
    		if($nav_tabs_slider.hasClass('slick-initialized')) {
    			$nav_tabs_slider.slick('unslick') /* остановить слайдер*/
    		}
    		return
    	}
    	if(!$nav_tabs_slider.hasClass('slick-initialized')) {
    		return $nav_tabs_slider.slick(settings)
    	}
    }) 


});


function initMap() {
    var coordinates = {lat: -37.806006, lng: 144.961291}, // Координаты центра карты 
        markerImg = 'img/marker.png', //  Иконка для маркера  
   
    // создаем карту и настраеваем 
    map = new google.maps.Map(document.getElementById('map'), {  /*карта должна выводится в идентификатор map*/
        center: coordinates,
        zoom: 16, // определяет первоначальный масштаб
        disableDefaultUI: true, // убирает элементы управления
        scrollwheel: false, // отключает масштабирование колесиком мыши (бывает полезно, если карта на всю ширину страницы и перебивает прокрутку вниз).
    	
    });

    // маркер
    marker = new google.maps.Marker({
        position: coordinates, // координаты маркера 
        map: map, //  ставим маркер в карту с id map
        animation: google.maps.Animation.DROP, // анимация маркера DROP / BOUNCE
        icon: markerImg,
    });

}

// Запускаем карту при загрузки страницы
google.maps.event.addDomListener(window, 'load', initMap); 

   

