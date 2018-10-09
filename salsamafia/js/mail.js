/*-----------------------------------------------	
       Send Mail
-------------------------------------------------*/

$(document).ready(function() {
	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Спасибо за заявку ! Скоро мы с вами свяжемся.");
			$("#form").trigger("reset");
			parent.$.fancybox.close();
		});
		return false;
	});
});

