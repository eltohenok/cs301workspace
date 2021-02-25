"use strict";
const prompt = require("prompt-sync")();
let credit=+prompt("the amout of credit")
if(0<credit && credit<30){
        console.log("fresh man")
}else if(30<=credit && credit<60){
    console.log("sophore");
}else if(60<=credit && credit<90){
    console.log("junior")
}else {
    console.log("senior")
}
