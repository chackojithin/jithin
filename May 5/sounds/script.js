const buttons=document.querySelectorAll(".btn")

buttons.forEach(btn=>{
    btn.addEventListener("click",()=>{
        removeAllSounds();
        const id=btn.innerText;
        document.getElementById(id).play()

    })
})
const removeAllSounds=()=>{
    buttons.forEach(btn=>{
        const sound=document.getElementById(btn.innerText)
        sound.pause();
        
    })
}
document.querySelector(".stop").addEventListener("click",()=>{
    removeAllSounds();
})