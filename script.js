var start_button=document.getElementById("start");
var restart_button=document.getElementById("restart");
var tip=document.getElementById("tip");

function starting(){
start_button.style.display="none";
tip.style.display="none";

document.getElementById("score").innerHTML=0;

var character=document.getElementById("character");
var block=document.getElementById("blocks");

block.className="blocks2"
var score=0;

function jump(){
    var top = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        character.style.top = top -30 + "px";
}
function down(){
    var top = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        character.style.top = top +150 + "px";
}

document.addEventListener("keypress",event=>{
    if(parseInt(event.keyCode)==32){
        setTimeout(jump,100);
        setTimeout(jump,100);
        setTimeout(jump,100);
        setTimeout(jump,100);
        setTimeout(jump,100);
        setTimeout(down,600);
    }
    
});
setInterval(() => {
    var charactertop=parseInt(window.getComputedStyle(character).getPropertyValue("top"));
var blockleft=parseInt(window.getComputedStyle(block).getPropertyValue("left"));
if(blockleft>55 && blockleft<92 && charactertop>280){
    block.className="blocks1";
    restart_button.style.display="block";
    tip.style.display="block";
}
if(block.className !="blocks1"){score++;}
}, 3);
  sc=setInterval(() => {
    document.getElementById("score").innerHTML=parseInt(score/100);
}, 1);

}

function restart(){clearInterval(sc);
    restart_button.style.display="none";
    starting();
        block.className="blocks2";
    }
    
