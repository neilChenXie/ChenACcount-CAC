/*jslint browser:true*/
/*node browser:true*/
/*global $*/
var mailf;
function sub() {
	'use strict';
	if (!mailf) {
		return false;
	}
}
function emailres(res) {
	'use strict';
	$('#showerr').empty();
	if (res) {
		mailf = false;
		$('#showerr').append(res);
		$('#showerr').css('font-size', '0.6em');
		$('#showerr').css('color', 'red');
		$('#showerr').addClass('goleft');
	} else {
		mailf = true;
	}
}
function checkac() {
	'use strict';
	var mail = $('#account').val();
	$.ajax({url: '/template/cacajax/testmail.php', async: 'true', type: 'POST', data: {email: mail}, success: function (res) {emailres(res); }});
}
function allevent() {
	'use strict';
	mailf = false;
	var inimail = $('#account').val();
	if (inimail) {
		checkac();
	}
	$('#account').blur(checkac);
	$('#loginform').submit(sub);
}
$(document).ready(allevent);
