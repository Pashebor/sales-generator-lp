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
 $mail->FromName = 'Генератор продаж';
 $mail->addAddress('pashebor@gmail.com', 'Генератор продаж');
 $mail->AddEmbeddedImage('./images/saleslogowhite.svg', 'logo', 'saleslogowhite.svg');
 $mail->isHtml(true);


if($_SERVER['REQUEST_METHOD'] == 'POST') {
    $idToDel = $_POST["formData"];
    /*$requestCallback = preg_replace('/(\w+)\s{0,1}:/', '"\1":', str_replace(array("\r\n", "\r", "\n", "\t"), "", $idToDel))*/;
    $arrRequest = json_decode($idToDel, true);
    if (!empty($arrRequest)) {
     switch ($arrRequest['form-name']) {
      case 'callback':
       $mail->Subject = 'Заказ обратного вызова';
       $mail->Body = '<div><img src="cid: saleslogowhite.svg" style="width: 250px; display: block; background-color: #0f0f0f;"/><p>Время звонка: '.$arrRequest['callback'].'</p><p>Номер телефона: '.$arrRequest['phone'].'</p></div>';
       $mail->send();
       echo json_encode(["response" => true]);
             break;
      case 'know':
       $mail->Subject = 'Узнать количество клиентов с сайта';
       $mail->Body = '<div><img src="cid: saleslogowhite.svg" style="width: 250px; display: block; background-color: #0f0f0f;"/><p>Номер телефона: '.$arrRequest['phone'].'</p></div>';
       $mail->send();
       echo json_encode(["response" => true]);
             break;
       case 'rates':
        $mail->Subject = 'Заказ тарифа';
        $mail->Body = '<div><img src="cid: saleslogowhite.svg" style="width: 250px; display: block; background-color: #0f0f0f;"/><p>Номер телефона: '.$arrRequest['phone'].'</p><p>Время звонка: '.$arrRequest['callback'].'</p><p>Тариф: '.$arrRequest['rate'].'</p></div>';
        $mail->send();
        echo json_encode(["response" => true]);
             break;
     }
    } else {
     echo json_encode(["response" => false]);
    }
}
?>