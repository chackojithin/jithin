function btnclick(val){
    // console.log("working")
    //   document.getElementById("screen").value = document.getElementById("screen").value+val
    document.getElementById("screen").value +=val
   
}
function cleardisplay(){
    document.getElementById("screen").value=" "
}
function equalTo(){
    var text=document.getElementById("screen").value
    var res=eval(text)
    document.getElementById("screen").value=res

}