<?php
	function deal_input($data){
		$data=trim($data);
		$data=stripslashes($data);
		$data=htmlspecialchars($data);
		return $data;
	}
	function test_email($data){
		$mailpattern='"^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$"';
		if(preg_match($mailpattern,$data)){
			return true;
		}else{
			return false;
		}
	}
	function test_phone($data){
		$phonepattern='/^[0-9]{10}$/';
		if(preg_match($phonepattern,$data)){
			return true;
		}else{
			return false;
		}
	}
	function test_cred($data){
		$pattern='/^[0-9]{16}$/';
		if(preg_match($pattern,$data)){
			return true;
		}else{
			return false;
		}
	}
?>
