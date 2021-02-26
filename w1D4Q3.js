"use strict";
const prompt = require("prompt-sync")();

let trial=0;
while(trial<3){
    let guess=  +prompt("enter guess number");
    const pin=123;
    if(guess===pin){
        console.log("correct,well come back")
        }else if(guess!==pin){
        console.log("incorrect,try again");
        }
        if(guess!==pin && trial===2){  
             console.log("you are already locked");
    }
    
    trial++;
}