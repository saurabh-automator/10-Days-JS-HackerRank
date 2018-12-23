//--JavaScript-----------------------------------------------------------------
var increment = document.createElement('button');
increment.id = 'btn';
increment.innerHTML = 0;
document.body.appendChild(increment);

btn.onclick = function() {
    btn.innerHTML++;
};


//--CSS--------------------------------------------------------------------------
button {
    width: 96px;
    height: 48px;
    font-size: 24px;
}

//--HTML-------------------------------------------------------------------------
<!-- Enter your HTML code here -->
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Button</title>
        <link rel="stylesheet" href="css/button.css" type="text/css">
    </head>
    <body>
        <script src="js/button.js" type="text/javascript"></script>
    </body>
</html>