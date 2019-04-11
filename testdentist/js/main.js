$(document).ready(function () {
    /*-----------------------------------------------	
        Initial datapicker
    -------------------------------------------------*/
    $(function(){
        $('#datepicker, #datepicker2').datepicker(); /*инициализация datepicker календаря*/
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
    /*-----------------------------------------------	
        Menu mobile
    -------------------------------------------------*/  
    $(".toggle-menu").click(function(e) {
        $('.menu-mobile').slideToggle(300);
        e.stopPropagation();
    });
    $('.dropdown__link').click(function(){
        $('.menu-mobile').hide();
    });
    $(document).click(function() {
        $('.menu-mobile').hide();
    });
    /*-----------------------------------------------	
        POP-UP (modal)
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
    $(".modal-close").on('click', function(e) {
        e.preventDefault();
        e.stopImmediatePropagation;
        var $this = $(this),
            modal = $($this).data("modal");
        $(modal).trigger("reset");
			document.getElementById("modal__form").reset();
        $(modal).removeClass("open");
        setTimeout(function() {
            $(modal).parents(".overlay").removeClass("open");
        }, 350);
    });
});
/*-----------------------------------------------	
       Google Map 
-------------------------------------------------*/
function initMap() {
    var coordinates = {lat: 45.522584, lng: -122.640079}, // Координаты обьекта
        markerImg = 'img/placeholder.png', //  Иконка для маркера  
    // настройка карты 
    map = new google.maps.Map(document.getElementById('map'), {  /*вывод карты в идентификатор map*/
        center: {lat: 45.522584, lng: -122.640079}, //(центровка по обьекту //coordinates,)
        zoom: 16.5, // первоначальный масштаб
        disableDefaultUI: true, // true убираь элементы управления
        scrollwheel: false, // отключить масштабирование колесом мыши
    	styles: 
        [
            {
                "featureType": "administrative.land_parcel",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "landscape.man_made",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                    {
                        "hue": "#f49935"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [
                    {
                        "hue": "#fad959"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#a1cdfc"
                    },
                    {
                        "saturation": 30
                    },
                    {
                        "lightness": 49
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