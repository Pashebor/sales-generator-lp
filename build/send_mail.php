<?php
require ('./phpmailer/PHPMailerAutoload.php');

 $mail = new PHPMailer;
 $mail -> isSMTP();
 $mail->Host = 'smtp.mail.ru';
 $mail->SMTPAuth = true;
 $mail->Username = 'pashebor@mail.ru';
 $mail->Password = 'ltvmzyjd90';
 $mail->SMTPSecure = 'ssl';
 $mail->Port = '465';
 $mail->CharSet = 'UTF-8';

 $mail->From = 'pashebor@mail.ru';
 $mail->FromName = 'Ahinilation';
 $mail->addAddress('pashebor@gmail.com', 'Уничтожь меня');
 $mail->isHtml(true);
 $mail->Subject = 'I will eat you!!!';
 $mail->Body = '<p>Ваш отзыв опубликован на сайте!</p><a href="http://уничтожьменя.рф/reviews.php"><b>ССЫЛКА</b></a>';
 /*if ($mail->send()) {
     echo 'ok';
 } else {
     echo error_reporting(E_ALL);
 }*/

if($_SERVER['REQUEST_METHOD'] == 'POST') {
    $idToDel = $_POST["formData"];
    /*$requestCallback = preg_replace('/(\w+)\s{0,1}:/', '"\1":', str_replace(array("\r\n", "\r", "\n", "\t"), "", $idToDel))*/;
    $arr = json_decode($idToDel, true);
    echo json_encode($arr['phone']);
}
?>