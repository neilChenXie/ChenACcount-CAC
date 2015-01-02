<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>jQuery Mobile: Popup Window</title>
    <link rel="stylesheet" href="http://code.jquery.com/mobile/1.1.1/jquery.mobile-1.1.1.min.css" />
    <script src="http://code.jquery.com/jquery-1.7.1.min.js"></script>
    <script src="http://code.jquery.com/mobile/1.1.1/jquery.mobile-1.1.1.min.js"></script>
</head>
<body>
	
    <div data-role="page">
            <div data-role="header"><h1>Dialog Test</h1></div>
    
            <div data-role="content">
					<div data-role='controlgroup'>
                    <a href="#internal-popup" class="ui-btn" data-rel="dialog">Open hidden content as popup</a>
					</div>
            </div>
    
        <div data-role="footer">Copyright</div>
	</div>
    
    
    <div data-role="page" id="internal-popup">
            <div data-role="content">
            <img src=”/path-to/image.jpg” />
            <p>Image caption can go here</p>
            </div>
    </div>
    
</body>
</html>
