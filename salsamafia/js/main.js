(function ($oldjQuery) {
	"use strict";
/*-----------------------------------------------	
       Hide Loading Box (Preloader) & window load 
-------------------------------------------------*/
	function handlePreloader() {
		if($('.preloader').length){
			$('.preloader').delay(2000).fadeOut(2000);
		}
	}
	$(window).on('load', function () {
		handlePreloader();
	});

/*-----------------------------------------------	
       Sticky Header (add class when scroll down/up) & JS window scroll 
-------------------------------------------------*/
	function stickyHeader () {
		var headerScrollPos = $('header').next().offset().top;
		if($(window).scrollTop() > headerScrollPos) {
			$('header').addClass('header-fixed gradient-overlay'); 
		}
		else if($(this).scrollTop() <= headerScrollPos) {
			$('header').removeClass('header-fixed gradient-overlay'); 
		}
	}
	$(window).on('scroll', function () {
		stickyHeader();
	// 	OnePageMenuScroll();
	});

/*-----------------------------------------------	
       Smooth page scrolling
-------------------------------------------------*/
	$(document).on('click', 'a[href^="#"]', function (event) {
	    event.preventDefault();
	    $('html, body').animate({
	        scrollTop: $($.attr(this, 'href')).offset().top + "px"
	    }, {
	    duration: 1200,
	    easing: "swing"
	    }); 
	    return false;
	});

/*-----------------------------------------------	
       Slider_Revolution_v4.1
-------------------------------------------------*/
	$(function revolutionSliderActiver () {
		var banner = $('#banner .banner');
		if (banner.length) {
			banner.revolution({
				delay:5000,
				startwidth:1170,
				startheight:820,
				startWithSlide:0,

				fullScreenAlignForce:"on",
				autoHeight:"off", //off
				minHeight:"off",

				shuffle:"off",

				onHoverStop:"on",

				hideThumbsOnMobile:"off",
				hideNavDelayOnMobile:1500,
				hideBulletsOnMobile:"off",
				hideArrowsOnMobile:"off",
				hideThumbsUnderResoluition:0,

				hideThumbs:1,
				hideTimerBar:"0n",

				keyboardNavigation:"on",

				navigationType:"bullet",
				navigationArrows: "nexttobullets",
				navigationStyle:"preview4",

				navigationHAlign:"center",
				navigationVAlign:"bottom",
				navigationHOffset:30,
				navigationVOffset:30,

				soloArrowLeftHalign:"left",
				soloArrowLeftValign:"center",
				soloArrowLeftHOffset:20,
				soloArrowLeftVOffset:0,

				soloArrowRightHalign:"right",
				soloArrowRightValign:"center",
				soloArrowRightHOffset:20,
				soloArrowRightVOffset:0,

				touchenabled:"off", //on
				swipe_velocity:"0.7",
				swipe_max_touches:"1",
				swipe_min_touches:"1",
				drag_block_vertical:"true", //false

				parallax:"mouse",
				parallaxBgFreeze:"on",
				parallaxLevels:[10,7,4,3,2,5,4,3,2,1],
				parallaxDisableOnMobile:"off",

				stopAtSlide:-1,
				stopAfterLoops:-1,
				hideCaptionAtLimit:0,
				hideAllCaptionAtLilmit:0,
				hideSliderAtLimit:0,

				dottedOverlay:"none",

				spinned:"spinner4",

				fullWidth:"on",
				forceFullWidth:"on",
				fullScreen:"off", //off!
				fullScreenOffsetContainer:"#banner",
				fullScreenOffset:"0px",

				panZoomDisableOnMobile:"off",

				simplifyAll:"off",

				shadow:0

			});
		};
	});

/*-----------------------------------------------	
       Gallery Fancybox activator v2.1.5
-------------------------------------------------*/
    $oldjQuery(function GalleryFancyboxActivator () {
    	var galleryFcb = $('.fancybox');
    	if(galleryFcb.length){
    		galleryFcb.fancybox();
    	}
    });
	$oldjQuery(".fancybox").fancybox({
	padding : 0,
		helpers: {
			overlay: {
			locked: false
			}
		}
	});
	$(document).ready(function() {
		$('.callback').fancybox({
			openEffect: 'elastic',
			openSpeed: 150,
			closeEffect: 'elastic',
			closeSpeed: 150,
			closeClick: true,
			//width: 300,
			helpers: {
				overlay: null
			} 
		});	
	});

/*-----------------------------------------------	
        AOS activate
-------------------------------------------------*/
	$(function AOSActivator () {
		AOS.init({
			easing: 'user-easing', //ease-out-back
			once: true
		});
	});

/*-----------------------------------------------	
       Menu add/remove class "active/open"
-------------------------------------------------*/
	$('.toggle-menu').click(function(){
		// добавить клас active
		$(this).toggleClass('active'); 
		// открыть меню, добавить клас open
		$('.header-wrap__dropdownmenu').toggleClass('open');	
	});
	$('.dropdown__link').click(function(){
		// убрать клас open
		$('.header-wrap__dropdownmenu').removeClass('open'); 
	});

})(jQuery);

/*-----------------------------------------------	
       Google Map
-------------------------------------------------*/
function initMap() {
    var coordinates = {lat: 49.228053, lng: 28.412252}, // Координаты обьекта
        markerImg = 'img/marker.png', //  Иконка для маркера  
    // настройка карты 
    map = new google.maps.Map(document.getElementById('map'), {  /*вывод карты в идентификатор map*/
        center: {lat: 49.226734, lng: 28.412362}, //(центровка по обьекту //coordinates,)
        zoom: 14.2, // первоначальный масштаб
        disableDefaultUI: false, // true убираь элементы управления
        scrollwheel: false, // отключить масштабирование колесом мыши
    	styles: 
				// Subtle Grayscale
				[
				    {
				        "featureType": "administrative",
				        "elementType": "all",
				        "stylers": [
				            {
				                "saturation": "-100"
				            }
				        ]
				    },
				    {
				        "featureType": "administrative.province",
				        "elementType": "all",
				        "stylers": [
				            {
				                "visibility": "off"
				            }
				        ]
				    },
				    {
				        "featureType": "landscape",
				        "elementType": "all",
				        "stylers": [
				            {
				                "saturation": -100
				            },
				            {
				                "lightness": 65
				            },
				            {
				                "visibility": "on"
				            }
				        ]
				    },
				    {
				        "featureType": "poi",
				        "elementType": "all",
				        "stylers": [
				            {
				                "saturation": -100
				            },
				            {
				                "lightness": "50"
				            },
				            {
				                "visibility": "simplified"
				            }
				        ]
				    },
				    {
				        "featureType": "road",
				        "elementType": "all",
				        "stylers": [
				            {
				                "saturation": "-100"
				            }
				        ]
				    },
				    {
				        "featureType": "road.highway",
				        "elementType": "all",
				        "stylers": [
				            {
				                "visibility": "simplified"
				            }
				        ]
				    },
				    {
				        "featureType": "road.arterial",
				        "elementType": "all",
				        "stylers": [
				            {
				                "lightness": "30"
				            }
				        ]
				    },
				    {
				        "featureType": "road.local",
				        "elementType": "all",
				        "stylers": [
				            {
				                "lightness": "40"
				            }
				        ]
				    },
				    {
				        "featureType": "transit",
				        "elementType": "all",
				        "stylers": [
				            {
				                "saturation": -100
				            },
				            {
				                "visibility": "simplified"
				            }
				        ]
				    },
				    {
				        "featureType": "water",
				        "elementType": "geometry",
				        "stylers": [
				            {
				                "hue": "#ffff00"
				            },
				            {
				                "lightness": -25
				            },
				            {
				                "saturation": -97
				            }
				        ]
				    },
				    {
				        "featureType": "water",
				        "elementType": "labels",
				        "stylers": [
				            {
				                "lightness": -25
				            },
				            {
				                "saturation": -100
				            }
				        ]
				    }
				]
    });
    // маркер
    marker = new google.maps.Marker({
        position: coordinates, // координаты маркера 
        map: map, //  ставим маркер в карту с id map
        animation: google.maps.Animation.DROP, // анимация маркера DROP / BOUNCE
        icon: markerImg,
    });
    // Отцентровка карты при ресайзе
	google.maps.event.addDomListener(window, "resize", function() {
		var center = map.getCenter();
		google.maps.event.trigger(map, "resize");
		map.setCenter(center);
	});
}

// Запускаем карту при загрузке страницы
google.maps.event.addDomListener(window, 'load', initMap); 