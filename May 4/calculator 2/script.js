const display= document.getElementById("display")
const buttons=document.querySelectorAll(".btn")
function clearfunc(){
   display.innerText=""
}
function back(){
    display.innerText=display.innerText.slice(0,-1)
}
function equeltofunc(){
    try{
        let prev=display.innerText[display.innerText.length-1]
        if(isOperator(prev)){
            alert("Can't Print this value")
        }
        display.innerText=eval(display.innerText)
    }catch(err){
        display.innerText="error"
    }
}
function isOperator(op){
    if(op === "+" || op === '-' || op ==='/' || op === '*'){
        return true;
    }
    return false;
}
function isMulorDiv(op){
    if(op === '/' || op === '*'){
        return true;
    }
    return false;
}
function appendChar(char){
    if(display.innerText===""){
        if(char!=0 && !isMulorDiv(char)){
           display.innerText=display.innerText+char;

        }
    }else{
        let prev=display.innerText[display.innerText.length-1];
        if(isOperator(char) && isOperator(prev)){
          display.innerText=display.innerText.slice(0,-1)
        }

        display.innerText=display.innerText+char
    }
}
