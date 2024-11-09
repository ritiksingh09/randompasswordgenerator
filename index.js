//ERROR

let error=document.getElementById("error");

//RESULT

let input1=document.getElementById("input1");

//INPUT2

let input2=document.getElementById("input2");

//Checkbox

let lowercheck1=document.getElementById("check1");
let uppercheck2=document.getElementById("check2");
let symbolcheck3=document.getElementById("check3");
let numbercheck4=document.getElementById("check4");

//button

let btn=document.getElementById("btn");



btn.addEventListener("click",function(){
    let str=""
    let randomPassword=""

    if (uppercheck2.checked) {
        str+="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    }
    if(lowercheck1.checked){
        str+="abcdefghijklmnopqrstuvwxyz"
    }
    if (symbolcheck3.checked) {
        str+="~!@#$%^&*()_+"
    }
    if (numbercheck4.checked) {
        str+="0123456789"
    }

    if (str==""||input2.value=="") {
        error.innerText="*Please Select At Least One Type*"
        input1.value="Loading..."
    }
    else if(input2.value<5||input2.value>30){
         error.innerText="*Please Select Range between 5-30*"

         input1.value="Loading..."
    }

    else{
        for(let i=0; i<input2.value; i++){
            let index=Math.trunc(Math.random()*str.length)
            randomPassword+= `${str.at(index)}`
        }

        input1.value=randomPassword;
        error.innerText=""
        
    }
})