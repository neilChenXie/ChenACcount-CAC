<?php
	require 'functions.php';
	//echo 'worked';
	$email = deal_input($_POST['email']);
//	if(test_email($email)) {
//		$sql = 'select * from Customer where Email = "'.$email.'"';
//		$con = mysql_connect('localhost','root','121');
//		mysql_select_db('account');
//		$res = mysql_query($sql);
//		$row = mysql_fetch_array($res);
//		echo mysql_error();
//	}
//	if(!$row && test_email($email)){
	if(test_email($email)) {
		echo '';
	}elseif (!$email) {
		echo '*Cannot be empty';
	}else {
		echo '*Invalid format';
	}
?>
