"use strict";
const prompt = require("prompt-sync")();
let inputweater=String(prompt("type of weather"));
let weather=inputweater;
 if(weather=="hot"){
     console.log("wear sadal");
}else if(weather==="rain"){
    console.log("glosh");
} else if(weather==="snow"){
    console.log("wear boots");
}else {
    console.log("sneaker");   
}
console.log("hello");