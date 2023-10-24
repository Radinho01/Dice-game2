var randomNumber1 = Math.random();
randomNumber1=Math.floor(randomNumber1*6)+1;

document.querySelector(".img1").setAttribute("src","./images/dice"+randomNumber1+".png");

var randomNumber2 = Math.random();
randomNumber2=Math.floor(randomNumber2*6)+1;

document.querySelector(".img2").setAttribute("src","./images/dice"+randomNumber2+".png");

if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").innerHTML="Player 1 is winner"

}
else if(randomNumber2>randomNumber1)
{
    document.querySelector("h1").innerHTML="Player 2 is winner"
}
else
{
    document.querySelector("h1").innerHTML="It's a draw"
}
function refreshPage(){
    window.location.reload();
}