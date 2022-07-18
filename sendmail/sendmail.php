<?php

    $name = urldecode($_GET['name']);
    $email = urldecode($_GET['email']);
    $message = urldecode($_GET['message']);

    use PHPMailer\PHPMailer\PHPMailer;
    require 'autoload.php';
    $mail = new PHPMailer;
    $mail->isSMTP();
    $mail->SMTPDebug = 2;
    $mail->Host = 'smtp.gmail.com';
    $mail->Port = 587;
    $mail->SMTPSecure = 'tls';


    $mail->SMTPAuth = true;
    $mail->Username = 'apparelsafaree71@gmail.com';
    $mail->Password = 'safareeapparel';
    $mail->setFrom($email, $name);
    $mail->addReplyTo($email, $name);
    $mail->addAddress('apparelsafaree71@gmail.com', "Safaree Apparel");
    $mail->Subject = 'New Message from Website User';
    
    $Body = "<html>
                <body>
                    <div style='background-color: #fff'>

                        <h2>Message From $name</h2>
                        <p>$message</p>
                        <p><b>Email: </b> $email</p>

                    </div>
                </body>
            </html>
            ";
    $mail->Body = $Body;        
    $mail->IsHTML(true);
    
    
    
    $mail->AltBody = 'This is a plain text message body';
    if (!$mail->send()) {
        echo "<script>alert('Mail Not Sent')</script>";

    } else {
        echo "<script>$('#hiddenStatus').html('sent')</script>";
    }
    
    
?>