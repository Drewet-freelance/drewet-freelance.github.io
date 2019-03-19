
$(document).ready(function() {
/*-----------------------------------------------	
       Preloader
-------------------------------------------------*/
	$(window).on('load', function () {
		$preloader = $('#loader-wrapper'),
		$loader = $preloader.find('#loader');
		$preloader.fadeOut(1000);
		$loader.delay(500).fadeOut("slow");
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
       Scroll to Top Button
-------------------------------------------------*/
	$('body').append('<div class="back-to-top" style="display: none;"></div>');
	$(window).scroll(function () {
		if ($(this).scrollTop() > 0) {
			$('.back-to-top').fadeIn();
		} else {
			$('.back-to-top').fadeOut();
		}
	});
	$('.back-to-top').click(function () {
		$('body,html').animate({scrollTop: 0}, 800); 
		return false;
	});
/*-----------------------------------------------	
       Open link in a new tab
-------------------------------------------------*/	
	function externalLinks() {
	    links = document.getElementsByTagName("a");
	    for (i=0; i<links.length; i++) {
	      link = links[i];
	      if (link.getAttribute("href") && link.getAttribute("rel") == "external")
	      link.target = "_blank";
	    }
	   }
	   window.onload = externalLinks;
/*-----------------------------------------------	
       Slick slider initial and MagnificPopup
-------------------------------------------------*/	
	$('.portfolio-slider').on('init', function(event, slick){
	        $(this).attr('data-counter', '1/'+slick.slideCount);
	    });
	$('.portfolio-slider').each(function() {
	    var $this = $(this);
	    $this.magnificPopup({
    		delegate: 'a',
    		gallery: {
    			enabled: true,
    			
    			navigateByImgClick: true,
    			tCounter: ''
    		},
    		type: 'image',
    		cursor: 'mfp-zoom-out-cur',
    		mainClass: 'mfp-fade',
    		removalDelay: 300
    	});
    	$this.slick({   
    	    
    	    pauseOnHover: true,
    	    //autoplay: true,
            autoplaySpeed: 5000,
    		centerMode: true,
    		centerPadding: '0',
    		slidesToShow: 3,
    		swipe: true,
    		arrows: true,
    		asNavFor: '.portfolio-descr-slider-' + $this.data('idx'),
    		responsive: [
    		{
    		  breakpoint: 480,
    		  settings: {
    			swipe: true,
    			arrows: true,
    			slidesToShow: 1
    		  }
    		}
    		]
    	}).on('beforeChange', function(event, slick, currentSlide, nextSlide){
            $(this).attr('data-counter', (nextSlide + 1)+'/'+slick.slideCount);
        });
        $('.portfolio-descr-slider-' + $this.data('idx')).slick({
    		centerPadding: '0',
    		slidesToShow: 1,
    		swipe: false,
    		asNavFor: '.portfolio-slider-' + $this.data('idx'),
    		arrows: false
    	});
	});
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
       Pushy integration to ham btn
-------------------------------------------------*/
	//add btn to pushy overlay
	$('.menu-btn').on('click', function(){
		$('.menu-btn').addClass("active");
	});	
	// close pushy menu
    $(".site-overlay, .pushy-link").click(function() {
		$(".hamRotate").attr("class", "ham hamRotate ham1");
	})
/*-----------------------------------------------	
       My_contacts btn/mobile btn rule
-------------------------------------------------*/
	$(document).ready(function () {
		$('.modal-button, .mobile-button').click(function () {
			$('.modal-background, .modal-content').removeClass('hidden').addClass('visible');
		});
		$('.modal-background, .modal-close').click(function () {
			$('.modal-background, .modal-content').removeClass('visible').addClass('hidden');
		});	
	});
/*-----------------------------------------------	
       Send Telegram + Mail
-------------------------------------------------*/
	$(function() {
		$('form').submit(function(e) {
		var $form = $(this);
		$.ajax({
			type: $form.attr('method'),
			url: $form.attr('action'),
			data: $form.serialize()
		}).done(function() {
			console.log('success');
			// Запуск модального окна №2
			$('.modal').each(function(e) {
				var $this = $(this),
					modal = $("#modal2");
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
			// Закрытие модального окна
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
			$(".overlay").on('click', function(e) {
				var target = $(e.target);
				if ($(target).hasClass("overlay")) {
					$(target).find(".modal").each(function() {
						$(this).removeClass("open");
					});
					setTimeout(function() {
						$(target).removeClass("open");
					}, 350);
				}
				$("#modal").removeClass("open")
				$(".overlay").removeClass("open")
			});
			$("#ajax_form").trigger("reset");
			document.getElementById("ajax_form2").reset();
		}).fail(function() {
			console.log('fail');
			// Запуск модального окна №3
			$('.modal').each(function(e) {
				var $this = $(this),
					modal = $("#modal3");
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
			// Закрытие модального окна
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
			$(".overlay").on('click', function(e) {
				var target = $(e.target);
				if ($(target).hasClass("overlay")) {
					$(target).find(".modal").each(function() {
						$(this).removeClass("open");
					});
					setTimeout(function() {
						$(target).removeClass("open");
					}, 350);
				}
				$("#modal").removeClass("open")
				$(".overlay").removeClass("open")
			});			

		});
	        //отмена действия по умолчанию для кнопки submit
		e.preventDefault(); 
		});
		return false;
	});
	
});