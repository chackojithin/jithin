const buttons=document.querySelectorAll(".btn")

buttons.forEach(btn=>{
    btn.addEventListener("click",()=>{
       stopAllsounds();
       const id=btn.innerText;
       document.getElementById(id).play()
    })
})
const stopAllsounds=()=>{
    buttons.forEach(btn=>{
        const sound=document.getElementById(btn.innerText)
        sound.pause();
        sound.currentTime=0;
    })
}
document.querySelector(".stop").addEventListener("click",()=>{
    stopAllsounds();
})
