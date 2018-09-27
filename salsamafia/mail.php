<?php

$recepient = "Drewet00@gmail.com";
$sitename = "Salsa Mafia";

$name = trim($_POST["name"]);
$Email = trim($_POST["E-mail"]);
$phone = trim($_POST["phone"]);
$bachata = trim($_POST["Бачата"]);
$salsa = trim($_POST["Сальса"]);
$kizomba = trim($_POST["Кизомба"]);
$text = trim($_POST["text"]);
$message = "Имя: $name \nE-mail: $Email  \nТелефон: $phone \nБачата: $bachata \nСальса: $salsa \nКизомба: $kizomba \nТекст: $text";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");