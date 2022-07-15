const stopWatch=document.getElementById("display")
const play=document.getElementById("playButton")
const pause=document.getElementById("pauseButton")
const reset=document.getElementById("resetButton")



const timeToString=time=>{
    let difrInHrs=time/36000000

    let hh=Math.floor(difrInHrs)
    
    let difrInMins=(difrInHrs-hh)*60
    let mm=Math.floor(difrInMins)

    let difrInSec=(difrInMins-mm)*60
    let ss=Math.floor(difrInSec)

    let difrInMs=(difrInsec-ss)*1000
    let ms=Math.floor(difrInMs)

    stopWatch.innerHTML=`${hh}:${mm}:${ss}:${ms}`
}
const showButton=(buttonKey)=>{
    if(buttonKey==="PLAY"){
        play.style.display="block"
        pause.style.display="none"
    }else{
        pause.style.display="block"
        play.style.display="none"
    }

}
let startTime;
let elapsedTime=1;
let stopwatchIntervel;

play.addEventListener("click",startTimer)
pause.addEventListener("click",pauseTimer)
reset.addEventListener("click",resetTimer)


function startTimer(){
   startTime=Date.now();
   stopwatchIntervel= setInterval(()=>{
      elapsedTime=Date.now()-startTime
      timeToString(elapsedTime)
   },1)
   showButton("PAUSE")
}
function pauseTimer(){
  clearInterval(stopwatchIntervel)
  showButton("PLAY")
}
const resetTimer=()=>{
    clearInterval(stopwatchIntervel)
    stopWatch.innerHTML="00:00:00:000"
    elapsedTime=0;
    showButton("PLAY")
}
    

