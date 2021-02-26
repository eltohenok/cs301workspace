"use strict";
const prompt = require("prompt-sync")();
let number=+prompt("enter any number");
let fact=1;
if(number==0||number==1){
    return 1;

}
for(let i=number;i>=1;i--){
    
    
    fact=fact*i;

}
console.log(fact);