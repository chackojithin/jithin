const RANDOM_QUOTE_API_URL = 'http://api.quotable.io/random'
const quoteDisplayElement=document.getElementById('quoteDisplay')
const quoteInputElement=document.getElementById('quoteInput')
const timerElement=document.getElementById('timer')


quoteInputElement.addEventListener('input',()=>{
    const arrayQuote= document.querySelectorAll('span')
    const arrayValue = quoteInputElement.value.split('')
    let correct=true;
   arrayQuote.forEach((characterSpan,index)=>{
     const character=arrayValue[index]
     if(character == null){
        characterSpan.classList.remove('correct')
        characterSpan.classList.remove('incorrect')
        correct=false;
     }
     else if(character===characterSpan.innerText){
        characterSpan.classList.add('correct')
        characterSpan.classList.remove('incorrect')
     }else{
        characterSpan.classList.remove('correct')
        characterSpan.classList.add('incorrect')
        correct=false
     }
   })
   if(correct) getNextQuote()
})
function getRandomQuote(){
   return fetch(RANDOM_QUOTE_API_URL)
    .then(Response=>Response.json())
    .then(data=> data.content)
}
async function getNextQuote(){
    // timerElement.innerText=0
    const quote=await getRandomQuote()
    quoteDisplayElement.innerHTML=''
    quote.split('').forEach(character =>{
        const characterSpan=document.createElement("span");
        characterSpan.innerText=character;
        quoteDisplayElement.appendChild(characterSpan)
    })
    quoteInputElement.value=null
    startTimer()
}
let startTime;
function startTimer(){
    // var i=0;
    // function count(){
    //     timerElement.innerText=i;
    //     i++;
    //     setTimeout(count,1000)
        // if(i==101){
        //    clearTimeout(myTimeout)
        // }
//     }
//     count()
// }
    timerElement.innerText=0;
    startTime=new Date()
    setInterval(()=>{
       timerElement.innerText=getTimerTime()
    },1000)

}
function getTimerTime(){
    return Math.floor((new Date() -startTime) /1000)
}
getNextQuote()

