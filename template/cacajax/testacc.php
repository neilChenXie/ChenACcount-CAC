<?php
require 'functions.php';
$name = deal_input($_POST['name']);
$uid = deal_input($_POST['uid']);
$con = mysql_connect('localhost', 'root', '121');
mysql_select_db('account',$con);
$aidsql = 'select AID from Memberlist where UID = '.$uid;
$sql = 'select * from Account where Name = "'.$name.'" and AID in ('.$aidsql.')';
$res = mysql_query($sql,$con);
$row = mysql_fetch_array($res);
if($row){
	echo '*Existed';
} else {
	echo '';
}
?>
