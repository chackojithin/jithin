
const sounds=["applause","gasp","tada","victory","wrong","boo"]

const removeAllSounds=()=>{
    sounds.forEach(sound=>{
        const snd=document.getElementById(sound)
        snd.pause();
        
    })
}
sounds.forEach(sound=>{
    const btn=document.createElement("button");
    btn.classList.add("btn")
    btn.innerText=sound;
    btn.addEventListener("click",()=>{
        removeAllSounds();
        document.getElementById(sound).play()
    })
    const newbutton=document.querySelector(".buttons")
    newbutton.appendChild(btn)

})