//-JavaScript------------------------------------------------------------------------------------------------------------------------------------------------------------

btn5 = document.getElementById("btn5");

btn5.onclick = function() {

	btn1 = document.getElementById("btn1");
	b1 = btn1.innerHTML;
	
	btn2 = document.getElementById("btn2");
	b2 = btn2.innerHTML;
	
	btn3 = document.getElementById("btn3");
	b3 = btn3.innerHTML;
	
	btn4 = document.getElementById("btn4");
	b4 = btn4.innerHTML;
	
	btn6 = document.getElementById("btn6");
	b6 = btn6.innerHTML;
	
	btn7 = document.getElementById("btn7");
	b7 = btn7.innerHTML;
	
	btn8 = document.getElementById("btn8");
	b8 = btn8.innerHTML;
	
	btn9 = document.getElementById("btn9");
	b9 = btn9.innerHTML;

    btn1.innerHTML = b4;
    btn2.innerHTML = b1;
    btn3.innerHTML = b2;
    btn4.innerHTML = b7;
    
    btn6.innerHTML = b3;
    btn7.innerHTML = b8;
    btn8.innerHTML = b9;
    btn9.innerHTML = b6;
};

//--CSS------------------------------------------------------------------------------
#btns{
    width:75%;
}

.buttonClass{
    width:30%;
    height:48px;
    font-size:24px;
}
//--HTML-----------------------------------------------------------------------------
<!-- Enter your HTML code here -->
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Buttons Grid</title>
         <link rel="stylesheet" href="css/buttonsGrid.css" type="text/css">
    </head>
    <body>
         <div id="btns" class="buttonContainer">
            <button id="btn1" class="buttonClass">1</button>
            <button id="btn2" class="buttonClass">2</button>
            <button id="btn3" class="buttonClass">3</button>
            <button id="btn4" class="buttonClass">4</button>
            <button id="btn5" class="buttonClass">5</button>
            <button id="btn6" class="buttonClass">6</button>
            <button id="btn7" class="buttonClass">7</button>
            <button id="btn8" class="buttonClass">8</button>
            <button id="btn9" class="buttonClass">9</button>
        </div>
        <script src="js/buttonsGrid.js" type="text/javascript"></script>
    </body>
</html>


