/*jslint browser:true*/
/*node browser:true*/
/*global $*/
var fnf, lnf, emailf, passf, phonef;
function chefn() {
	'use strict';
	var fn = $('#fname').val();
	$('#fnerr').empty();
	if (!fn) {
		fnf = false;
		$('#fnerr').append('*Cannot be empty');
	} else {
		fnf = true;
	}
}
function cheln() {
	'use strict';
	var ln = $('#lname').val();
	$('#lnerr').empty();
	if (!ln) {
		lnf = false;
		$('#lnerr').append('*Cannot be empty');
	} else {
		lnf = true;
	}
}
function emailres(res) {
	'use strict';
	$('#emailerr').empty();
	if (res) {
		$('#emailerr').append(res);
		$('#emailerr').css('font-size', '0.6em');
		$('#emailerr').css('color', 'red');
		$('#emailerr').addClass('goleft');
		emailf = false;
	} else {
		emailf = true;
	}
}
function checkemail() {
	'use strict';
	var mail = $('#email').val();
	$.ajax({url: '/template/cacajax/signupmail.php', async: 'true', type: 'POST', data: {email: mail}, success: function (res) {emailres(res); }});
}
function chepass() {
	'use strict';
	var pass, pass2;
	pass = $('#pass').val();
    pass2 = $('#pass2').val();
	$('#passerr').empty();
	if (pass && (pass === pass2)) {
		$('#passerr').append('Same');
		$('#passerr').css('color', 'green');
		passf = true;
	} else {
		if (!pass) {
			$('#passerr').append('*Cannot be empty');
		} else {
			$('#passerr').append('*Not same');
		}
		passf = false;
	}
}
function chephone() {
	'use strict';
	var phone, pattern;
	phone = $('#phone').val();
	pattern = /^[0-9]{10,11}$/;
	$('#phoneerr').empty();
	if (!pattern.test(phone)) {
		$('#phoneerr').append('*wrong fomat');
		phonef = false;
	} else {
		phonef = true;
	}
}
function finalche() {
	'use strict';
	chefn();
	cheln();
	chepass();
	checkemail();
	chephone();
	/*
	window.alert(lnf);
	window.alert(fnf);
	window.alert(emailf);
	window.alert(passf);
	window.alert(phonef);
	*/
	if (!lnf || !fnf || !emailf || !passf || !phonef) {
		return false;
	}
	return true;
}
function allevent() {
	'use strict';
	fnf = false;
	lnf = false;
	emailf = false;
	passf = false;
	phonef = false;
	$('#fname').blur(chefn);
	$('#lname').blur(cheln);
	$('#email').blur(checkemail);
	$('#pass').blur(chepass);
	$('#pass2').blur(chepass);
	$('#phone').blur(chephone);
	$('#signupform').submit(finalche);
}
$(document).ready(allevent);
