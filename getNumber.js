export function getNumber(string, index) {
let numbers=[]
let tempon="";
for(let i=0;i<index;i++){

tempon+=string[i];

}


numbers.push(Number(tempon));

tempon="";
for(let i=index+1;i<=string.length-1;i++){
    
    tempon+=string[i];
    
    }

numbers.push(Number(tempon));   

return numbers;

}
