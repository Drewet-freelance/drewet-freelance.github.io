/*-----------------------------------------------	
       Search btn
-------------------------------------------------*/
$('.search-btn').click(function(a){
    $('.search-form').slideToggle(300)
    a.stopPropagation();
});
/*-----------------------------------------------	
       Checkbox clear
-------------------------------------------------*/
$('.block-clear').click(function() {
    $('input:checked').prop('checked', false);
});
/*-----------------------------------------------	
       Open sidebar
-------------------------------------------------*/
$('.toggle-btn_sidebar, .search-min_btn').click(function(a){
    $('.sidebar, .toggle-btn').toggleClass('active');
    if ($('.head-min').hasClass('active')) {
        $('.head-min').removeClass("active").delay();
      } else {
        setTimeout(function() {
            $('.head-min').addClass("active");
        }, 700);
      }
    a.stopPropagation();
});
/*-----------------------------------------------	
       Google Map
-------------------------------------------------*/
var locations = [
    [
        "Сoordinates_1",
        46.480759, 30.733327,
    1,
        "Name",
        "",
        "Address",
        "coming soon"],
    [
        "Сoordinates_2",
        46.474735, 30.740643,
    2,
        "Name",
        "",
        "Address",
        "found"],
    [
        "Сoordinates_3",
        46.467842, 30.707493,
    3,
        "Name",
        "",
        "Address",
        "found"],
[
        "Сoordinates_4",
        46.462135, 30.753280,
    4,
        "Name",
        "",
        "Address",
        "found"],
[
        "Сoordinates_5",
        46.458673, 30.728943,
    5,
        "Name",
        "",
        "Address",
        "found"],
];
var markers = [];
var map;

function initialize() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14.5,
        center: new google.maps.LatLng(46.470415, 30.733688),
        //mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true,
        scrollwheel: true,
    	styles: 
				[
                    {
                        "featureType": "water",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#e9e9e9"
                            },
                            {
                                "lightness": 17
                            }
                        ]
                    },
                    {
                        "featureType": "landscape",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#f5f5f5"
                            },
                            {
                                "lightness": 20
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "color": "#ffffff"
                            },
                            {
                                "lightness": 17
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "geometry.stroke",
                        "stylers": [
                            {
                                "color": "#ffffff"
                            },
                            {
                                "lightness": 29
                            },
                            {
                                "weight": 0.2
                            }
                        ]
                    },
                    {
                        "featureType": "road.arterial",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#ffffff"
                            },
                            {
                                "lightness": 18
                            }
                        ]
                    },
                    {
                        "featureType": "road.local",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#ffffff"
                            },
                            {
                                "lightness": 16
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#f5f5f5"
                            },
                            {
                                "lightness": 21
                            }
                        ]
                    },
                    {
                        "featureType": "poi.park",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#dedede"
                            },
                            {
                                "lightness": 21
                            }
                        ]
                    },
                    {
                        "elementType": "labels.text.stroke",
                        "stylers": [
                            {
                                "visibility": "on"
                            },
                            {
                                "color": "#ffffff"
                            },
                            {
                                "lightness": 16
                            }
                        ]
                    },
                    {
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "saturation": 36
                            },
                            {
                                "color": "#333333"
                            },
                            {
                                "lightness": 40
                            }
                        ]
                    },
                    {
                        "elementType": "labels.icon",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "transit",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#f2f2f2"
                            },
                            {
                                "lightness": 19
                            }
                        ]
                    },
                    {
                        "featureType": "administrative",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "color": "#fefefe"
                            },
                            {
                                "lightness": 20
                            }
                        ]
                    },
                    {
                        "featureType": "administrative",
                        "elementType": "geometry.stroke",
                        "stylers": [
                            {
                                "color": "#fefefe"
                            },
                            {
                                "lightness": 17
                            },
                            {
                                "weight": 1.2
                            }
                        ]
                    }
                ]
    });
        google.maps.event.addDomListener(window, "resize", function() {
        var center = map.getCenter();
        google.maps.event.trigger(map, "resize");
        map.setCenter(center); 
    });

    var infowindow = new google.maps.InfoWindow();
    //var iconBase = 'img/location.png';
    var marker, i;

    for (i = 0; i < locations.length; i++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            map: map,
            icon: 'img/location.png'
        });

        google.maps.event.addListener(marker, 'click', (function (marker, i) {
            return function () {
                infowindow.setContent(locations[i][0], locations[i][6]);
                infowindow.open(map, marker);
                for (var j = 0; j < markers.length; j++) {
                    markers[j].setIcon("img/location.png");
                }
                marker.setIcon("img/location-active.png");
            };
        })(marker, i));
        markers.push(marker);

    }
}
google.maps.event.addDomListener(window, 'load', initialize);