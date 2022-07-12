const quizData =[{
    question: "which language runs in a web browser?",
    a:"java",
    b:"C",
    c:"Python",
    d:"javaScript",
    correct:"d",
},
{
    question: "What does css stands for?",
    a:"Centrel Style sheets",
    b:"Cascading Style sheets",
    c:"Cascading Simple Sheets",
    d:"Central simple Sheets",
    correct:"b",
},
{
    question: "which does HTML stands for?",
    a:"Hyperttext Markup Language",
    b:"Hypertext Mardown Language",
    c:"Hypertext Machine language",
    d:"Hypertext Marking language",
    correct:"a",
},{
    question: "which year javascript launged?",
    a:"1996",
    b:"1995",
    c:"1994",
    d:"none of the above",
    correct:"b",
},

];
// const quiz=document.getElementById("quiz")
// const answerEls=document.querySelectorAll(".answer")
// const questionE1=document.getElementById("question")
// const submitBtn=document.getElementById("submit")

// const a_text=document.getElementById("a_text")
// const b_text=document.getElementById("b_text")
// const c_text=document.getElementById("c_text")
// const d_text=document.getElementById("d_text")


// let currentQuestionIndex=0;
// function deselectAll(){
//     answerEls.forEach(answer=>answer.checked=false)
// }
// function loadQuestion(){
//     deselectAll()
//     const currentQuesData=quizData[currentQuestionIndex]
//     questionE1.innerText=currentQuesData.question
    
//     a_text.innerText=currentQuesData.a
//     b_text.innerText=currentQuesData.b
//     c_text.innerText=currentQuesData.c
//     d_text.innerText=currentQuesData.d
// }
// loadQuestion()
// let score=0;
// function selectAns(){
//     let answer;
//     answerEls.forEach(answerEl=>{
//         if(answerEl.checked){
//             answer=answerEl.id
//         }
//     })
//     return answer;
// }
// submitBtn.addEventListener("click",()=>{
//     const answer=selectAns()
//     if(answer){
//         if(answer===quizData[currentQuestionIndex].correct){
//             score++;
//         }
//         currentQuestionIndex++;
//         if(currentQuestionIndex<quizData.length){
//             loadQuestion();
//         }else{
//             quiz.innerHTML=
//             `<h2>
//                 you answered ${score}/${quizData.length} question correctly
//             </h2>
//             <button onclick="location.reload()">Reload</button>`
            
//         }
//     }else{
//         alert("Please select an option")
//     }
// })
let questionIndex=0;

const quizContainer=document.getElementById("quiz")
const questionEls=document.getElementById("question")
const buttons=document.querySelectorAll(".answer")
const submitbtn=document.getElementById("submit")

const a_text=document.getElementById("a_text")
const b_text=document.getElementById("b_text")
const c_text=document.getElementById("c_text")
const d_text=document.getElementById("d_text")

function loadQuiz(){
    deselectAll()
    const current=quizData[questionIndex]
    questionEls.innerText=current.question;

    a_text.innerText=current.a;
    b_text.innerText=current.b;
    c_text.innerText=current.c;
    d_text.innerText=current.d;
}
function deselectAll(){
    buttons.forEach(button=>button.checked=false)
}
loadQuiz();
function isSelected(){
   
    let answer;
    buttons.forEach(button=>{
        if(button.checked){
            answer=button.id
        }
    })
    return answer;
    
}
let score=0;
submitbtn.addEventListener("click",()=>{
    const ans=isSelected();
    if(ans){
        if(ans === quizData[questionIndex].correct){
            score++;
        }
        questionIndex++;
        if(questionIndex<quizData.length){
            loadQuiz();

        }else{
            quizContainer.innerHTML=`
            <h2>
             you answered ${score}/${quizData.length} question correctly
           </h2>
            <button onclick="location.reload()">Reload</button>`
            
        }

    }
})