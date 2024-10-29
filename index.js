import {sum} from "/sum.js"
import {minus} from "/minus.js"
import { multiply } from "/multiply.js"
import { divide } from "/divide.js"
import { getNumber } from "./getNumber.js"

let btnEl= document.getElementById("btn");
const errorEl=document.getElementById("error");
const resultEl=document.getElementById("result");


function calculateInput(event) {
  if (event.key === "Enter") {/*
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("myBtn").click();*/

    calculate();
  }
}

calculus.addEventListener("keypress", calculateInput)

btnEl.addEventListener("click", calculate);


let result;


function detectCalculus(calculus){
    let count=0;
    for(let i=0;i<calculus.length;i++)
        {
        if(calculus[i]==="+" || calculus[i]==="-"|| calculus[i]==="*"|| calculus[i]==="/")
        count++;    

}

return count;
/*  
if(count >1)return "several calculus"
if(count ===1)return "one calculus"
if(count ===0)return "none calculus"*/
    }




function calculate() {
resultEl.textContent="";
errorEl.innerText="";

let calculusEl=document.getElementById("calculus");
let calculus=calculusEl.value
calculusEl.value="";


console.log(calculus);

if( (isNaN(calculus[0]) ) || (isNaN(calculus[calculus.length-1]) ) )
    {errorEl.innerText="An error occurs, please retry !" ; return }

if(!calculus) 
    {errorEl.innerText="The field is empty!" ; return }


let operation=detectCalculus(calculus)

console.log(operation)

if(operation!==1)
{errorEl.textContent="The operation isn't correct, please retry !" ;return}

for(let i=0;i<calculus.length;i++)
{
if(calculus[i]=="+")
result=sum(getNumber(calculus,i))

if(calculus[i]=="-")
    result=minus(getNumber(calculus,i))

if(calculus[i]=="*")
    result=multiply(getNumber(calculus,i))


if(calculus[i]=="/")
    result=divide(getNumber(calculus,i))


console.log(result);

resultEl.textContent=result;
}

}




