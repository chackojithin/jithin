//1.variable declaration
var cvs=document.getElementById("canvas")
var ctx=cvs.getContext('2d')
var sPosx=80;
var sPosy=80;
var nPosx=0;
var nPosy=0;
var fPosx=140;
var fPosy=140;

var snakeTail=[]
var snakeSize=1;
var score=0;
var gameStatus="Ready"

//2.Onload Function
window.onload = function() {
    document.addEventListener("keydown",inputControl);
     game=setInterval(mainGame,200)
}


//3.Main Game Function


function mainGame(){
    document.getElementById("game-status").innerHTML=gameStatus;
   document.getElementById("score").innerHTML=score;
   sPosx+=nPosx;
   sPosy+=nPosy;


   //control snake Movement

   if(sPosx>400){
    sPosx=0;
   } if(sPosy>400){
    sPosy=0;
   }
   if(sPosx<0){
    sPosx=400;
   }
   if(sPosy<0){
    sPosy=400;
   }
   ctx.fillStyle="black"
    ctx.fillRect(0, 0, 400, 400)

    for(var cl=0;cl<400;cl=cl+20){
        ctx.moveTo(cl,0)
        ctx.lineTo(cl,400)
    }
    for(var rl=0;rl<400;rl=rl+20){
        ctx.moveTo(0,rl)
        ctx.lineTo(400,rl)
    }
    ctx.strokeStyle='grey'
    ctx.stroke()

    ctx.fillStyle="white"
    // ctx.fillRect(sPosx,sPosy,20,20)
    for(var i=0;i<snakeTail.length;i++){
        ctx.fillRect(snakeTail[i].x,snakeTail[i].y,20,20);
        if(sPosx==snakeTail[i].x && sPosy ==snakeTail[i].y && snakeSize>1){
            clearInterval(game);
            gameStatus="Game Over"
            document.getElementById("game-status").innerHTML=gameStatus;
        }
    }

    ctx.fillStyle="red"
    ctx.fillRect(fPosx,fPosy,20,20)
    

    //if snake eat fruit
    if(sPosx === fPosx && sPosy === fPosy){
        snakeSize++;
        score+=5;
        fPosx=Math.floor(Math.random()*20)*20
        fPosy=Math.floor(Math.random()*20)*20
    }
    snakeTail.push({x:sPosx,y:sPosy})
    while(snakeTail.length>snakeSize){
        snakeTail.shift();
    }
}

//4.Input Control Function
function inputControl(e){
    console.log(e.keyCode);
    console.log(e.key)
    switch(e.keyCode){
        case 38:
            //up
            nPosy=nPosy-20;
            nPosx=0;
            break;
        case 40:
            //down
            nPosy=nPosy+20
            nPosx=0;
            break;
        case 39:
            //right
            nPosy=0;
            nPosx=nPosx+20;
            break;
        case 37:
            //left
            nPosy=0;
            nPosx=nPosx-20;
            break;

           
    }
    if(e.keyCode==37 || e.keyCode==38 || e.keyCode==39 ||e.keyCode==40){
        gameStatus="Game Started"
        document.getElementById("game-status").innerHTML=gameStatus;
    }



}      
 
