const container=document.querySelector(".container")

var squares=800;
for(var i=0;i<squares;i++){
    const square=document.createElement("div");
    square.classList.add("square");
    square.addEventListener("mouseover",()=>setColorr(square))
    square.addEventListener("mouseout",()=>removeColor(square))
    container.appendChild(square)
}
function setColorr(element){
    const color=randomColor()
    element.style.backgroud=color
    element.style.boxShadow=`0 0 2px ${color}, 0 0 10px ${color}`
}
function removeColor(element){ 
    element.style.background="#1d1d1d";
    // element.style.boxShadow="0 0 2px #000"
}
function getRandomInteger(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
}
function randomColor(){
    return `rgb(${getRandomInteger(0,255)},${getRandomInteger(0,255)},${getRandomInteger(0,255)})`
    // return `rgb(0,5,224)`
}