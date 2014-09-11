/*jslint browser:true*/
/*node browser:true*/
/*global $*/
var inpf;
var selnumf;
var errmsg;
function showinp() {

	'use strict';
	var memnum, i, inptd, inptr, inp, memdiv;
	$('#memdet').empty();
	memnum = $('#memnum').val();
	/*remove all addtr*/
	for (i = 0; i < 20; i = i + 1) {
		$('#addtr').remove();
	}
	/*memdiv = document.createElement('div');*/
	/*memdiv.setAttribute('id', 'memdiv');*/
	for (i = 0; i < memnum; i = i + 1) {
		inptr = document.createElement('tr');
		inptd = document.createElement('td');
		inp = document.createElement('input');
		inp.setAttribute('name', 'mememail' + i);
		inp.setAttribute('class', 'addemail');
		inp.setAttribute('style', 'width:98%');
		inptd.appendChild(inp);
		inptd.setAttribute('style', 'text-align:center');
		inptd.setAttribute('placeholder', 'email');
		inptr.appendChild(inptd);
		inptr.setAttribute('id', 'addtr');
		$('#memdet').after(inptr);
		/*memdiv.appendChild(inptr);*/
	}
	/*$('#memdet').after(memdiv);*/
}
function cheinp(res) {
	'use strict';
	if (!res) {
		inpf = false;
		errmsg = 'Infomation missing';
	}
}
function sub() {
	'use strict';
	inpf = true;
	selnumf = false;
	/*window.alert($('#memnum').val());*/
	$('#addinfo').empty();
	if ($('#memnum').val() !== '0') {
		selnumf = true;
	} else {
		errmsg = 'Must select a number';
	}
	/*check input*/
	var i, memnum, tmpval;
	$('.addemail').each(function () {cheinp($(this).val()); });
	if (!inpf || !selnumf) {
		$('#addinfo').append(errmsg);
		return false;
	}
	return true;
}
function allevent() {
	'use strict';
	$('#memnum').click(showinp);
	$('#addmemform').submit(sub);
}
$(document).ready(allevent);
