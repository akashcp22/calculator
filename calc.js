function display(n){
   result.value+=n
}
function findOutput(){
    if(result.value==""){
        result.value=""
    }
    else{
        result.value=eval(result.value)
    }
}
function Allclear(){
    result.value=""
}
function Backspace(){
   result.value= (result.value).slice(0,-1)
}