<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title></title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link href='/template/caccss/reltable.css' type='text/css' rel='stylesheet'>
	<script src="/extend/jquery-1.11.1.min.js" type='text/javascript'></script>
	<script type='text/javascript' src='/template/cacjs/service.js'></script>
	<link rel="stylesheet" href="/extend/jquerymobile/jquery.mobile-1.4.3.min.css" type='text/css'>
	<script src="/extend/jquerymobile/jquery.mobile-1.4.3.min.js"></script>
</head>
<?php //$this->load->helper('url');?>
<?php //$this->load->helper('form');?>
<body>
	<div data-role='page'>
		<div data-role='header'>
			<h3>Balance</h3>
		</div>
		<div data-role='main' class='ui-content'>
			<table data-role='table' class='ui-responsive'>
				<thead>
					<tr>
						<th>Name</th>
						<th>Already paid</th>
						<th>Related cost</th>
						<th>Balance</th>
						<th>Detail</th>
					</tr>
				</thead>
				<tbody>
				</tbody>
			</table>
			<div data-role='controlgroup'>
				<a href="<?php //echo base_url().'index.php/selser'?>" class='ui-btn' data-ajax='false'>Back</a>
				<a href="#interal-delall" data-rel="dialog" class="ui-btn">DeleteAll</a>
			</div>
		</div><!--end of main-->
		<div data-role='footer'>
		</div>
	</div><!---end of page-->
	<div id='interal-delall' data-role='page'>
		<div data-role="content">
			<a href="<?php //echo base_url().'index.php/balance/delall'?>" class='ui-btn' data-ajax='false'>Yes</a>
			<a href="<?php //echo base_url().'index.php/balance'?>" class='ui-btn' data-ajax='false'>No</a>
		</div>
	</div>
</body>
</html>
