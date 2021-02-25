"use strict";
const prompt = require("prompt-sync")();
let age=+prompt("enter the age ob baby");
let season=prompt("enter season here");
if(age<=5){
    if(season==="sumer" ||season==="fall"){
        console.log("bed time is:8:30");
    }else if(season==="winter" ||season==="spring"){
        console.log("bed time is:8:00");
    }

}else if(6<age&&age<12){
    if(season==="sumer"){
        console.log("bed time is:9:30");
    }else if(season==="winter" ||season==="spring"||season==="fall"){
        console.log("bed time is:8:30");
    }

    }else if(age>=13){
        if(season==="sumer"){
            console.log("bed time is:10:30");
        }else if(season==="winter" ||season==="spring"||season==="fall"){
            console.log("bed time is:9:30");
        }

    }
    
