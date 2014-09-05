/*jslint browser:true*/
/*node browser:true*/
/*global $*/
var inpf;
function cheinp() {
	'use strict';
	var inpval, reg;
	inpval = $('#magaddmem').val();
	reg = /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9]+(\.[a-z0-9]+)*(\.[a-z]{2,3})$/;
	$('#addinfo').empty();
	if (reg.test(inpval)) {
		inpf = true;
	} else {
		inpf = false;
		$('#addinfo').append('*wrong fomat');
	}
}
function sub() {
	'use strict';
	var inpval, reg;
	inpval = $('#magaddmem').val();
	reg = /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9]+(\.[a-z0-9]+)*(\.[a-z]{2,3})$/;
	$('#addinfo').empty();
	if (reg.test(inpval)) {
		inpf = true;
	} else {
		inpf = false;
		$('#addinfo').append('*wrong fomat');
	}
	/*submit*/
	if (inpf) {
		return true;
	}
	return false;
}
function allevent() {
	'use strict';
	inpf = false;
	$('#magaddmem').blur(cheinp);
	$('#addmemform').submit(sub);
}
$(document).ready(allevent);
