$(function(){
	// tab переключалки отображения
	$('.tabs a').click(function(){
		$(this).parents('.tab-wrap').find('.tab-cont').addClass('hide');
		$(this).parent().siblings().removeClass('active');
		var id = $(this).attr('href');
		$(id).removeClass('hide');
		$(this).parent().addClass('active');
		return	false
	});

	// левый боковой сайдбар с категориями, брендами и размерами
	$('.accordion__head').on('click', function(){
		var e1 = $(this);
		e1.next('.accordion__body').slideToggle();
		e1.toggleClass('open');
		return false
	});

	// Form Styler http://dimox.name/jquery-form-styler/
	$('.styler').styler();


	// ползунок цены https://jqueryui.com/slider/#range
	$( "#slider-range" ).slider({
	    range: true,
	    min: 0,
	    max: 500,
	    values: [ 75, 300 ],
	    slide: function( event, ui ) {
	    	// поскольку теперь два поля input эту строчку было скопировано и модифицыровано
	    	$( "#amount" ).val( "$" + ui.values[ 0 ] );
	    	$( "#amount1" ).val( "$" + ui.values[ 1 ] );
	    }
	});
	    	// поскольку теперь два поля input эту строчку было скопировано и модифицыровано
	$( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) );
	$( "#amount1" ).val( "$" + $( "#slider-range" ).slider( "values", 1 ) );

	// (открытие сайдбара) при клике на кнопку при расширении 960px
	$('.toggle-filter').click(function(){
		// добавить клас active
		$(this).toggleClass('active'); 
		// открыть сайдбар, добавить клас open
		$('.sidebar').toggleClass('open');
		// добавляем класс для того чтобы сделать так чтобы вместо 3 товаров помещалось 4 товара при закрытом сайдбаре
		$('.box-product').toggleClass('full');
	});

		// (меню открытие) добавляем клас open для верхнего меню при расширении 1399px и меньше
	$('.toggle-menu').click(function(){
		// добавить клас active
		$(this).toggleClass('active'); 
		// открыть меню, добавить клас open
		$('.dropdown-content--menu').toggleClass('open');
	});

	// если медиазапрос меньше 768px при клике на элемент меню всплывает дополнительное меню
	$('.dropdown-content__title').click(function(){
		$(this).toggleClass('d-open');
	});

});

    


