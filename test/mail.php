<?php
$to      = 'xcmickey@gmail.com';
$subject = 'the subject';
$message = 'hello';
$headers = 'From: xiec@usc.edu' . "\r\n" .
	    'Reply-To: xiec@usc.edu' . "\r\n" .
		    'X-Mailer: PHP/' . phpversion();
echo $headers."\n";
$rv = mail($to, $subject, $message, $headers);
var_dump($rv);
?>
