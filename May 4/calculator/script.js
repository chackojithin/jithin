const display=document.getElementById("display")
const btns=document.querySelectorAll(".btn")
display.style.color="red"
btns.forEach(btn=>{
   btn.addEventListener("click",()=>{
       if(btn.innerText==='C'){
            display.innerText="";
        }else if(btn.innerText==='←'){
            display.innerText=display.innerText.slice(0,-1);
        }else if(btn.innerText==='='){
            try{
                display.innerText=eval(display.innerText)
            }catch(err){
                display.innerText="error"
            }
        }else{
            display.innerText=display.innerText+btn.innerText;
        }
    })
})


// function buttonClick(btn){
//     btn.addEventListener("click",()=>{
//         switch(btn.innerText){
//             case 'C':
//                 display.innerText=""
//                 break;
//             case '←':
//                 display.innerText=display.innerText.slice(0,-1)
//                 break;
//             case '=':
//                 display.innerText=eval(display.innerText)
//                 break;
//             default:
//                 display.innerText=display.innerText+btn.innerText;
//         }
//     })
// }



// btns.forEach(btn=>{
//     // buttonClick(btn);
//     btn.addEventListener("click",()=>{
//         switch(btn.innerText){
//             case 'C':
//                 display.innerText=""
//                 break;
//             case '←':
//                 display.innerText=display.innerText.slice(0,-1)
//                 break;
//             case '=':
//                 try{
//                     display.innerText=eval(display.innerText)

//                 }catch(err){
//                     display.innerText="error"
//                 }
//                 break;
//             default:
//                 display.innerText=display.innerText+btn.innerText;
//         }
//     })
// })