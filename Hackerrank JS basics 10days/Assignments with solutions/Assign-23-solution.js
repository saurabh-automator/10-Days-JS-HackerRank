//-JavaScript------------------------------------------------------------------------------------------------------------------------------------------------------------

var res = document.getElementById("res");


function zero() {
    res.innerHTML +='0';
}
  
function one() {
    res.innerHTML +='1';
}

var regexp=new RegExp(/([+\-*/])$/);

function sum() {
    if(res.innerHTML.length > 0 && !regexp.test(res.innerHTML))
     {
         res.innerHTML +='+';
     }
}

function sub() {
    if(res.innerHTML.length > 0 && !regexp.test(res.innerHTML))
     {
         res.innerHTML +='-';
     }
}

function mul() {
    if(res.innerHTML.length > 0 && !regexp.test(res.innerHTML))
     {
         res.innerHTML +='*';
     }
}

function div() {
    if(res.innerHTML.length > 0 && !regexp.test(res.innerHTML))
     {
         res.innerHTML +='/';
     }
}
  
function eql() {
    if(!regexp.test(res.innerHTML) )
    {
      let n = res.innerHTML.match(/\d+/g);
      let o = res.innerHTML.match(/[\+\-\*\/]+/g);
      while(o.length>0) 
      {
          if(o.includes('*')) {
            let m = o.indexOf('*');
            let mul = ( m!=0 ? 
                       parseInt(n[m-1],2) : 
                       parseInt(n[m],2) ) * parseInt(n[m+1],2);
            n.splice(m,2);
            n.splice(m,0,mul.toString(2));
            o.splice(m,1);
          }
          else if (o.includes('/')) {
            let d = o.indexOf('/');
            let division = ( d!=0 ? 
                            parseInt(n[d-1],2) : 
                            parseInt(n[d],2) ) / parseInt(n[d+1],2);
              n.splice(d,2);
              n.splice(d,0,division.toString(2));
              o.splice(d,1);
          } 
          else if (o.includes('+')) {
            let s = o.indexOf('+');
            let sum = ( s!=0 ? 
                       parseInt(n[s-1],2) : 
                       parseInt(n[s],2) ) + parseInt(n[s+1],2);
            n.splice(s,2);
            n.splice(s,0,sum.toString(2));
            o.splice(s,1);
          }
          else {
            let ss = o.indexOf('-');
            let sub = ( ss!=0 ? 
                       parseInt(n[ss-1],2) : 
                       parseInt(n[ss],2) )- parseInt(n[ss+1],2);
            n.splice(ss,2);
            n.splice(ss,0,sub.toString(2));
            o.splice(ss,1);
          }  
      }
      res.innerHTML = n[0].toString(2);
    } 
    else 
    {
      alert("Line must ends with number.")
    }
}
  
function clr() {
    res.innerHTML = '';
}

//--CSS------------------------------------------------------------------------------
body {
  width: 33%;
}

#res {
  background-color: lightgray;
  border: solid;
  height: 48px;
  font-size: 20px;
}

#btns button {
  width: 25%;
  height: 36px;
  font-size: 18px;
  margin:0;
  float: left;
}

#btn0, #btn1 {
  background-color: lightgreen;
  color: brown;
}

#btnClr, #btnEql {
  background-color: darkgreen;
  color: white;
}

#btnSum, #btnSub, #btnMul, #btnDiv {
  background-color: black;
  color: red;
}
//--HTML-----------------------------------------------------------------------------
<!-- Enter your HTML code here -->
<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="css/binaryCalculator.css" type="text/css">
    </head>
    
    <body>
        <div id="res"></div>
        <div id="btns">
            <button id="btn0" onclick="zero()">0</button>
            <button id="btn1" onclick="one()">1</button>
            <button id="btnClr" onclick="clr()">C</button>
            <button id="btnEql" onclick="eql()">=</button>        
            <button id="btnSum" onclick="sum()">+</button>
            <button id="btnSub" onclick="sub()">-</button>
            <button id="btnMul" onclick="mul()">*</button>
            <button id="btnDiv" onclick="div()">/</button>
        </div>
        <script src="js/binaryCalculator.js" type="text/javascript"></script>
    </body>
</html>