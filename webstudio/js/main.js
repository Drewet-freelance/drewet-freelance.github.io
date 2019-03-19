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
