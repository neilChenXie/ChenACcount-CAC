/*jslint browser:true*/
/*node browser:true*/
/*global $*/
var whopay, whoinvol, persf, monf, catef;
function checkinv() {
	'use strict';
	$('.whoinvol').each(function () {
		if ($(this).attr('Checked')) {
			whoinvol = true;
		}
	});
}
function checkpeople() {
	'use strict';
	whopay = $('#whopay').val();
	whoinvol = false;
	checkinv();
	if (!whopay || !whoinvol) {
		persf = false;
		return false;
	}
	persf = true;
	return true;
}
function checkmoney() {
	'use strict';
	var money, reg;
	monf = false;
	$('#monerr').empty();
	money = $('#money').val();
	reg = /^[0-9]+\.?[0-9]{0,2}$/;
	if (!reg.test(money)) {
		monf = false;
		$('#monerr').append('*wrong fomat');
	} else {
		monf = true;
	}
}
function checkcate() {
	'use strict';
	var newcate;
	$('#addcate').hide();
	/*
	$('#addcate').empty();
	*/
	$('#cateerr').empty();
	if ($('#cate').val() === 'add') {
		/*add input*/
		/*
		newcate = document.createElement('input');
		newcate.setAttribute('name', 'newcate');
		newcate.setAttribute('id', 'addnewcate');
		newcate.setAttribute('style', 'width:97%');
		newcate.setAttribute('placeholder', 'new category');
		$('#addcate').append(newcate);
		*/
		$('#addcate').show();
	} else if (!$('#cate').val()) {
		$('#cateerr').append('*must choose a category');
	}
}
function finalche() {
	'use strict';
	var newcate, money, reg;
	/*check money fomat*/
	checkmoney();
	/*check new cate*/
	catef = false;
	$('#cateerr').empty();
	newcate = $('#addnewcate').val();
	if (!newcate && $('#cate').val() === 'add') {
		catef = false;
		$('#cateerr').append('*must enter new category');
	} else if ($('#cate').val() === 'add' && newcate) {
		catef = true;
	} else if ($('#cate').val()) {
		catef = true;
	} else {
		$('#cateerr').append('*must choose a category');
		catef = false;
	}
	/*final*/
	if (!persf || !monf || !catef) {
		return false;
	}
	return true;
}
function allevent() {
	'use strict';
	persf = false;
	monf = false;
	catef = false;
	var cateinp;
	$('addcate').hide();
	if ($('#cate').val() === 'add') {
		/*add input*/
		/*
		cateinp = document.createElement('input');
		cateinp.setAttribute('name', 'newcate');
		cateinp.setAttribute('id', 'addnewcate');
		cateinp.setAttribute('style', 'width:97%');
		cateinp.setAttribute('placeholder', 'new category');
		$('#addcate').append(cateinp);
		*/
		$('addcate').show();
	}
	/*dynamic change check box attr*/
	$('.whoinvol').click(function () {
		if ($(this).attr('checked')) {
			$(this).removeAttr('checked');
		} else {
			$(this).attr('checked', 'checked');
		}
	});
	/*******************************/
	$('#litsub').click(checkpeople);
	$('#money').blur(checkmoney);
	$('#cate').blur(checkcate);
	$('#recform').submit(finalche);
}
$(document).ready(allevent);
