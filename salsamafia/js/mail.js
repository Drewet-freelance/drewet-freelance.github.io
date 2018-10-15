/*-----------------------------------------------	
       Send Mail
-------------------------------------------------*/
$(document).ready(function() {
	$("#form").submit(function(e) {;
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			$("#form").trigger("reset");
			$("#AJAX_form").append("<div id='overlay'></div>");
			$('#overlay').show().css({'filter' : 'alpha(opacity=90)'});
    		e.preventDefault()
    		$('.reg_form').show()
		});
		$('button.close').click(function () {
			parent.$.fancybox.close();
			$('#overlay').remove('#overlay');
		});
		return false;
	});
});
