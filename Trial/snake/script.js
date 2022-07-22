var cvs=document.getElementById("canvas").getContext("2d")
sPosx=80;
sPosy=80;
nPosx=0;
nPosy=0;
fPosx=160;
fPosy=160;
var snakeTail=[]
var snakeSize=1;
var score=0;
var gamestatus="Ready"
window.onload=function(){
    document.addEventListener("keydown",pressingkey)
    game=setInterval(mainGame,200)
}

function mainGame(){
    document.getElementById("score").innerHTML=score;
    document.getElementById("game-status").innerHTML=gamestatus;
    sPosx+=nPosx;
    sPosy+=nPosy;

    if(sPosx>400){
        sPosx=0;
    }
    if(sPosy>400){
        sPosy=0
    }
    if(sPosx<0){
        sPosx=400
    }if(sPosy<0){
        sPosy=400
    }
    cvs.fillStyle="black"
    cvs.fillRect(0,0,400,400);
    for(var cl=0;cl<400;cl=cl+20){
        cvs.moveTo(cl,0);
        cvs.lineTo(cl,400);
       
    }
    for(var rl=0;rl<400;rl=rl+20){
        cvs.moveTo(0,rl);
        cvs.lineTo(400,rl)
    }
    cvs.strokeStyle="gray"
    cvs.stroke();
    
    //snake
    cvs.fillStyle="yellow"
    // cvs.fillRect(sPosx,sPosy,20,20)
    for(var i=0;i<snakeTail.length;i++){
       cvs.fillRect(snakeTail[i].x,snakeTail[i].y,20,20)
       if(sPosx == snakeTail[i].x && sPosy == snakeTail[i].y &&  snakeSize>1){
          clearInterval(game)
          gamestatus="Game Over"
          document.getElementById("game-status").innerHTML=gamestatus
       }

    
    }
    
    //fruit
    cvs.fillStyle="red"
    cvs.fillRect(fPosx,fPosy,20,20)

    if(sPosx == fPosx && sPosy == fPosy){
        snakeSize++;
        score=score+10;
         fPosx=Math.floor(Math.random()*20)*20;
         fPosy=Math.floor(Math.random()*20)*20;
         
    }
    snakeTail.push({x:sPosx,y:sPosy});
    while(snakeTail.length>snakeSize){
        snakeTail.shift()
    }
}
function pressingkey(e){
    switch(e.keyCode){
        case 37:
            nPosx-=20;
            nPosy=0;
            break;
        case 38:
            nPosy-=20;
            nPosx=0;
            break;
        case 39:
            nPosx+=20;
            nPosy=0;
            break;
        case 40:
            nPosy+=20;
            nPosx=0;
            break;
           
    }
    if(e.keyCode==37 || e.keyCode ==38 || e.keyCode== 39|| e.keyCode==40){
        gamestatus="Game Started"
        document.getElementById("game-status").innerHTML=gamestatus
    }
}



