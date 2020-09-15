<?php
$q1 = $_POST['q1'];
$q2 = $_POST['q2'];
$q3 = $_POST['q3'];
$q4 = $_POST['q4'];
$q5 = $_POST['q5'];
$q6 = $_POST['q6'];
$q7 = $_POST['q7'];
$price = $_POST['price'];

$message = "";
$message .= "Q1 " . $q1 . "\n";
$message .= "Q2 " . $q2 . "\n";
$message .= "Q3 " . $q3 . "\n";
$message .= "Q4 " . $q4 . "\n";
$message .= "Q5 " . $q5 . "\n";
$message .= "Q6 " . $q6 . "\n";
$message .= "Q7 " . $q7 . "\n";
$message .= "PRICE " . $price;

$subject = "=?utf-8?B?".base64_encode("Message for Questionaries")."?=";
$headers = "From: $email\r\nReply-to: $email\r\nContent-type: text/html; charset=utf-8\r\n";

$success = mail("denissdudarevs@gmail.com", $subject, $message, $headers);
echo $success;
?>