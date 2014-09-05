/*jslint browser:true*/
/*node browser:true*/
/*global $*/
var passf;
var namef;
function sub() {
	'use strict';
	var accn, userid, newpass, newpass2;
	/*check account name*/
	chename();
	/*check password*/
	chepass();
	if (!passf || !namef) {
		return false;
	}
	return true;
}
function accres(res) {
	'use strict';
	$('#cheaccn').empty();
	if (res) {
		namef = false;
		$('#cheaccn').append(res);
		$('#cheaccn').css('font-size', '0.6em');
		$('#cheaccn').css('color', 'red');
	} else {
		namef = true;
		$('#cheaccn').append('Avaliable');
		$('#cheaccn').css('font-size', '0.6em');
		$('#cheaccn').css('color', 'green');
	}
}
function chename() {
	'use strict';
	var accn, userid;
	accn = $('#accname').val();
	userid = $('#uid').text();
	if (accn) {
		$.ajax({url: '/template/cacajax/testacc.php', async: 'true', type: 'POST', data: {name: accn, uid: userid}, success: function (res) {accres(res); }});
	} else {
		accres('*empty');
	}
}
function chepass() {
	'use strict';
	var newpass, newpass2;
	newpass = $('#newpass').val();
	newpass2 = $('#newpass2').val();
	$('#chepas').empty();
	if (newpass && newpass === newpass2) {
		passf = true;
		$('#chepas').append('same');
		$('#chepas').css('font-size', '0.6em');
		$('#chepas').css('color', 'green');
	} else {
		passf = false;
		if (!newpass) {
			$('#chepas').append('*cannot be empty');
		} else {
			$('#chepas').append('*not same');
		}
		$('#chepas').css('font-size', '0.6em');
		$('#chepas').css('color', 'red');
	}
}
function allevent() {
	'use strict';
	passf = false;
	namef = false;
	$('#accname').blur(chename);
	$('#newpass').blur(chepass);
	$('#newpass2').blur(chepass);
	$('#createform').submit(sub);
}
$(document).ready(allevent);
