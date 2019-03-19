$(function(){
/*-----------------------------------------------	
	  Header scroll_down
-------------------------------------------------*/
	$('header a').click(function(){
		// attr('href') берем атребут с тега а записаного в href (id1-id4)
		var link = $(this).attr('href');
		// .offset().top координаты относительно верха сайта
		var coordinats = $(link).offset().top; 

		$('html, body').animate({scrollTop:coordinats}, 1000);
		// console.log(coordinats)
		return false;
	});

/*-----------------------------------------------	
	   Countdown (KineticJS v5.1.0 Countdown (KineticJS v5.1.0 jQuery Final Countdown v.1.1.1)
-------------------------------------------------*/	
	// We will get the "now" value from this variable
	var today = new Date();

	// My target date is this month 30th 9.25pm
	var target = new Date(today);
	target.setDate(20+184);
	target.setHours(23,59,0,0);;

	// Countdown start from yesterday
	var yesterday = new Date(today);
	yesterday.setDate(today.getDate() - 101);
	yesterday.setHours(0,0,0,0);;

	$('.countdown').final_countdown({
		'start': yesterday.getTime() / 1000,
			'end': target.getTime() / 1000,
			'now': today.getTime() / 1000,
	});		


		// $('.countdown').final_countdown({
		// 	'start': 1362139200,
		// 	'end': 1388461320,
		// 	'now': 1387461319      
		// });
/*-----------------------------------------------	
	   Slider 
-------------------------------------------------*/
	$('.main_slider').each(function(){
		var $li = $('li', this);
		var $prev = $('.prev', this);
		var $next = $('.next', this);
		var $current = $('.main_slider_controls_count span', this);
		var $count = $('.main_slider_controls_count ins', this);
		var $pags = $('.main_slider_controls_pags', this);


			// $li.eq(0)$li.first()
		$li.eq(0).addClass('active');
			// добавить поядковые номера слайдов в span и ins
		$count.text($li.length);
		$current.text($li.filter('.active').index()+1);

		// проходится по всех li
		$li.each(function(){
			//сколько li столько добавляется span
			$pags.append('<span></span');
		});
			//выбираем все span внутри pag
		var $pag = $($pags.find('span'));
		$pag.eq($li.filter('.active').index()).addClass('active');
		


		$prev.click(function(){
				// для переменной index проходит выборка по li с класом active и записывается его порядковый номмер
			var index = $li.filter('.active').index();
				// если if равно -1 ему присваевается значение length (общее количество всех элементов)
			if(index == 0){
				index = $li.length
			}
				// eq как nth-child(порядковый номер) в JQuery все начинается с 0 (0 это первый элемент)
				// siblings взяли все рядом стоящие li
			$li.eq(index-1).addClass('active').siblings().removeClass('active');
				// console.log(index-1)	
			$pag.eq(index-1).addClass('active').siblings().removeClass('active');
			$current.text(index)
		});
		

		$next.click(function(){
			var index = $li.filter('.active').index();
			if(index == $li.length-1){
				index = -1
			}
			$li.eq(index+1).addClass('active').siblings().removeClass('active');		
			$pag.eq(index+1).addClass('active').siblings().removeClass('active');		
			$current.text(index+2)
		});

		// при клике на точку слайдер перелистывается
		$pag.click(function(){
			$li.eq($(this).index()).addClass('active').siblings().removeClass('active');
			$(this).addClass('active').siblings().removeClass('active');
			$current.text($li.filter('.active').index()+1);
		});
	});
/*-----------------------------------------------	
	   Galery 1
-------------------------------------------------*/
	$('.popular_galery').each(function(){
		var $mainIMG = $('.popular_galery_main img', this);
		var $prevIMG = $('.popular_galery_prev span', this);

		$prevIMG.click(function(){
			// берем порядковый номер mainIMG
			//внутрь записываем порядковый номер того спанана по которому кликаем
			$mainIMG.eq($(this).index()).addClass('active').siblings().removeClass('active');
			$(this).addClass('active').siblings().removeClass('active');
		// после функции клика вызываем искуственный клик
		// берем первую кнопку, первый спан и вызываем по нему клик
		}).first().click();
	});
/*-----------------------------------------------	
	   Tab
-------------------------------------------------*/
	$('.popular').each(function(){
		var $tabBlock = $('.popular_all_tabs_block ul', this);
		var $tabBtn = $('.popular_tab_btns a', this);

		$tabBtn.click(function(){
			// fadeIn() и (.hide() в конце это display: nonr)  прибавляет плавность
			$tabBlock.eq($(this).index()).addClass('active').fadeIn().siblings().removeClass('active');
			$(this).addClass('active').siblings().removeClass('active');
			// предотвращает дальнейшие действия ссылки а
			return false;
		}).first().click();
	});
/*-----------------------------------------------	
	  Galery 2 +  Slider 2
-------------------------------------------------*/
	$('.black_section_carousel li').each(function(){
		var $mainIMG = $('.black_section_carousel_mainIMG img', this);
		var $prevIMG = $('.black_section_carousel_prevIMG span', this);

		$prevIMG.click(function(){
			$mainIMG.eq($(this).index()).addClass('active').siblings().removeClass('active');
			$(this).addClass('active').siblings().removeClass('active');
		}).last().click();
	});

	$('.black_section_carousel').each(function(){
		var $li = $('li', this);
		var $prev = $('.prev', this);
		var $next = $('.next', this);

			// $li.eq(0)$li.first()
		$li.eq(0).addClass('active');

		$prev.click(function(){
				// для переменной index проходит выборка по li с класом active и записывается его порядковый номмер
			var index = $li.filter('.active').index();
				// если if равно -1 ему присваевается значение length (общее количество всех элементов)
			if(index == 0){
				index = $li.length
			}
				// eq как nth-child(порядковый номер) в JQuery все начинается с 0 (0 это первый элемент)
				// siblings взяли все рядом стоящие li
			$li.eq(index-1).addClass('active').siblings().removeClass('active');
				// console.log(index-1)	
		});

		$next.click(function(){
			var index = $li.filter('.active').index();
			if(index == $li.length-1){
				index = -1
			}
			$li.eq(index+1).addClass('active').siblings().removeClass('active');		
		});
	});
/*-----------------------------------------------	
	   Pop-up
-------------------------------------------------*/	
	$('.open_popup').click(function(){
		// подмена данных popup
		$('.popup .popup_title').text($(this).data('title')); 
		$('.popup .popup_category').text($(this).data('category')); 
		$('.popup .popup_goods_title').text($(this).data('desc')); 
		$('.popup .popup_price span').text($(this).data('price'));
		$('.popup .popup_img img').attr('src', $(this).data('img'));

		// val записать значение в инпуты для отправки на почту
		$('.popup input[name="popup_title"]').val($(this).data('title'));
		$('.popup input[name="popup_category"]').val($(this).data('category'));
		$('.popup input[name="popup_desc"]').val($(this).data('desc'));
		$('.popup input[name="popup_price"]').val($(this).data('price'));

		$('.popup').fadeIn();
		$('.bg_popup').fadeIn();

		$('.bg_popup, .popup_close').click(function(){
			$('.popup').fadeOut();
			$('.bg_popup').fadeOut();		
		});
		return false
	});
});
