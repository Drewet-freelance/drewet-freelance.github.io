
$(function(){  
	$('.toggle-menu').click(function(){
		$(this).toggleClass('active') 
		$('.menu-mobile').slideToggle(400) 
	});
});