<?php
	
	// To Telegram
$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$text = $_POST['user_text'];

$token = "645021121:AAFzy88XxhV2LjOEP7QHGsq5-_eqANoAJkc";
$chat_id = "535515552";

$arr = array(
  'Имя клиента: ' => $name,
  'Телефон: ' => $phone,
  'Текст сообщения: ' => $text,
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

		// if ($sendToTelegram) {
		//   echo "Сообщение отправлено. Скоро мы с Вами свяжемся!";
		// } else {
		//   echo "Произошла ошибка при отправке сообщения. Извените за неудобства!";
		// }

	// To E-mail
$recepient = "drewet00@gmail.com";
$sitename = "drewet.top";

$name = trim($_POST['user_name']);
$phone = trim($_POST['user_phone']);
$text = trim($_POST['user_text']);
$message = "Имя клиента: $name \nТелефон: $phone \nТекст сообщения: $text";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
?>


