function clearScreen()
{
    document.getElementById("result").value="";
}

function display(value)
{
    document.getElementById("result").value+= value;
}

function calculate()
{
    var p= document.getElementById("result").value
    var q= eval(p);
    document.getElementById("result").value=q;
}

function percent()
{
    var p= document.getElementById("result").value
    var q= p/100;
    document.getElementById("result").value=q;
}

function root()
{
    var p= document.getElementById("result").value
    var q= Math.sqrt(p);
    document.getElementById("result").value=q;
}
