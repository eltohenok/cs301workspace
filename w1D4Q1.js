"use strict";
const prompt = require("prompt-sync")();
let number=+prompt("enter any number");
for(let i=2;i<number;i++){
    if(number%i===0){
    console.log("it is not prime");
    break;
    } else{
        console.log("it is prime number");
        break;
    }
 
    }
    