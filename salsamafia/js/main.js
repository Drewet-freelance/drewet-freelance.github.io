(function ($oldjQuery) {
	"use strict";
	
	// //Hide Loading Box (Preloader) & window load 
	function handlePreloader() {
		if($('.preloader').length){
			$('.preloader').delay(2000).fadeOut(2000);
		}
	}
	$(window).on('load', function () {
		handlePreloader();
	});



	// sticky header (add Class when scroll down/up) & JS window scroll
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
		OnePageMenuScroll();
	});



	// SmoothMenuScroll (переключение между разделами через меню) 
	$(function SmoothMenuScroll () {
		var anchor = $('.scrollToLink');
		if(anchor.length){
			anchor.children('a').bind('click', function (event) {
				var headerH = '95';
				var target = $(this);
				$('html, body').stop().animate({
					scrollTop: $(target.attr('href')).offset().top - headerH + 'px'
				}, 1200, 'easeInOutExpo');
				anchor.removeClass('current');
				target.parent().addClass('current');
				event.preventDefault();
			});
		}
	});



	// adding active class to menu while scroll to section
	function OnePageMenuScroll () {
	    var windscroll = $(window).scrollTop();
	    if (windscroll >= 100) {
	    	$('.mainmenu .scrollToLink').find('a').each(function (){
	    		// grabing section id dynamically
	    		var sections = $(this).attr('href');
		        $(sections).each(function() {
		        	// checking is scroll bar are in section
		            if ($(this).offset().top <= windscroll + 100) {
		            	// grabing the dynamic id of section
		        		var Sectionid = $(sections).attr('id');
		        		// removing current class from others
		        		$('.mainmenu').find('li').removeClass('current');
		        		// adding current class to related navigation
		        		$('.mainmenu').find('a[href=#'+Sectionid+']').parent().addClass('current');
		            }
		        });
	    	});
	    } else {
	        $('.mainmenu li.current').removeClass('current');
	        $('.mainmenu li:first').addClass('current');
	    }
	}





	// adding active class to menu while scroll to section
	// function OnePageMenuScroll () {
	//     var windscroll = $(window).scrollTop();
	//     if (windscroll >= 100) {
	//     	$('.mainmenu .scrollToLink').find('a').each(function (){
	//     		// grabing section id dynamically
	//     		var sections = $(this).attr('href');
	// 	        $(sections).each(function() {
	// 	        	// checking is scroll bar are in section
	// 	            if ($(this).offset().top <= windscroll + 100) {
	// 	            	// grabing the dynamic id of section
	// 	        		var Sectionid = $(sections).attr('id');
	// 	        		// removing current class from others
	// 	        		$('.mainmenu').find('li').removeClass('current');
	// 	        		// adding current class to related navigation
	// 	        		$('.mainmenu').find('a[href=#'+Sectionid+']').parent().addClass('current');
	// 	            }
	// 	        });
	//     	});
	//     } else {
	//         $('.mainmenu li.current').removeClass('current');
	//         $('.mainmenu li:first').addClass('current');
	//     }
	// }



	// == Slider_Revolution_v4.1 == //

	$(function revolutionSliderActiver () {
		var banner = $('#banner .banner');
		if (banner.length) {
			banner.revolution({
				delay:5000,
				startwidth:1170,
				startheight:820,
				startWithSlide:0,

				fullScreenAlignForce:"on",
				autoHeight:"off",
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

				touchenabled:"on",
				swipe_velocity:"0.7",
				swipe_max_touches:"1",
				swipe_min_touches:"1",
				drag_block_vertical:"false",

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
				fullScreen:"off",
				fullScreenOffsetContainer:"#banner",
				fullScreenOffset:"0px",

				panZoomDisableOnMobile:"off",

				simplifyAll:"off",

				shadow:0

			});
		};
	});

/*-----------------------------------------------	
       gallery fancybox activator v2.1.5
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
			// width: 300,
			helpers: {
				overlay: null
			} 
		});	
	});

	// wow activate 
	// $(function wowActivator () {
	// 	var wow = new WOW ({
 //    		offset: 0
 //    	});
 //    	wow.init();
	// });

	// AOS activate 
	$(function AOSActivator () {
		AOS.init({
			// duration: 1200,
			easing: 'ease-out-back',
			once: true
			// offset: 150
		});
	});

	// Mail activate 
	// $('.example-form').sendMail({
	// 	// Параметры...
	// });

// MAP
	$(function initMap() {
	    var coordinates = {lat: 49.228053, lng: 28.412252}, // Координаты центра карты 
	        markerImg = 'img/marker.png', //  Иконка для маркера  
	   
	    // создаем карту и настраеваем 
	    map = new google.maps.Map(document.getElementById('map'), {  /*карта должна выводится в идентификатор map*/
	        center: {lat: 49.226734, lng: 28.412362},//coordinates, (если нужно чтобы карта центрировалась по обекту)
	        zoom: 14.2, // определяет первоначальный масштаб
	        disableDefaultUI: false, // убирает элементы управления
	        scrollwheel: false, // отключает масштабирование колесиком мыши (бывает полезно, если карта на всю ширину страницы и перебивает прокрутку вниз).	
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

	});

	// Запускаем карту при загрузки страницы
	google.maps.event.addDomListener(window, 'load', initMap); 



})(jQuery);