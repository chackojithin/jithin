// const textE1=document.getElementById("text")
// const speedE1=document.getElementById("speed")
 

// const text="We love programming"

// let idx=1;
// let Num=500;
// let time=Num/speedE1.value;
// function writeText(){
//     textE1.innerHTML=text.slice(0,idx)
//     idx++;
    
//     if(idx>text.length){
//         idx=1;
//     }
//     setTimeout(writeText,time)
// }
// writeText()

// speedE1.addEventListener("input",(event)=>{
//     time=Num/event.target.value;
// })

const textE1=document.getElementById("text")
const speedE1=document.getElementById("speed");

const text="My Name is jithin chacko"

let idx=1;
const NUM=500;
time=NUM/speedE1.value;
function writeText(){
    textE1.innerHTML=text.slice(0,idx);
    idx++;

    if(idx>text.length){
        idx=1;
    }
    setTimeout(writeText,time)
}
writeText()
speedE1.addEventListener("input",(eve)=>{
    console.log(eve)
    time=NUM/eve.target.value;
})