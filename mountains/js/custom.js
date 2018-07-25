$(document).ready(function() { /*https://owlcarousel2.github.io/OwlCarousel2/docs/api-options.html*/
	$('.owl-carousel').owlCarousel({
	    items: 3,
	    loop: true,
	    dots: true,
	    spagePadding: 90, /*padding left and right*/
	    margin: 90, /*margin right*/
	    autoplay: true,
	    autoplayTimeout: 3000,
	    autoplayHoverPause: true,
			responsive: { /*адаптация под мобильные устройства*/
		   // > 0
		    0 : {
		      items: 1,
		      dots: false,
		      margin:30,
		      stagePadding: 30,
		    },
		    // > 768
		    768 : {
		    	items: 3,
		    	margin:90,
		    	stagePadding: 90,
	        dots: true,
		    }
			}
	});
});