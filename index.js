var d1 = Math.floor(Math.random()*6)+1;
var d2 = Math.floor(Math.random()*6)+1;
var p1 = "dice"+d1+".png";
var tp = "images/"+p1;
var p2 = "dice"+d2+".png";
var tp2 = "images/"+p2;
document.getElementById("d1").src=tp;
document.getElementById("d2").src=tp2;

if(d1>d2)
{
    document.getElementById("result").innerHTML="PLAYER_1 WINS";
}
else if(d1<d2)
{
    document.getElementById("result").innerHTML="PLAYER_2 WINS";
}
else{
    document.getElementById("result").innerHTML="DRAW";
}