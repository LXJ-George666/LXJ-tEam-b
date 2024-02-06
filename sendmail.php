<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $recipient = "ugq_it86prxkz@dingtalk.com";
    $subject = "新想法提交";
    $thoughts = strip_tags($_POST['thoughts']); // 防止HTML注入
    $message = "输入的想法:\n" .$thoughts;
    $headers = "From: webmaster@example.com\r\nReply-To: webmaster@example.com";

    if (mail($recipient,$subject, $message,$headers)) {
        echo "邮件发送成功！";
    } else {
        echo "邮件发送失败，请稍后再试。";
    }
} else {
    echo "非法访问！";
}
?>
