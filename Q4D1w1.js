"use strict";
const prompt = require("prompt-sync")();
let borrower=prompt("enter who borrow the book");
let overdue=prompt("enter overdue");
let student;
let facult;
let others;
if(borrower==="student"){
    if(overdue===0) {
       console.log("lending duration is:" +6);
    }else if(overdue<3){
        console.log("lending duration is:" +4)
     }else{
        console.log("lending duration is:" +2)
     }
}else if(borrower==="facult"){
    if(overdue===0){
        console.log("lending duration is:" +12)
    }else if(overdue<3){
        console.log("lending duration is:" +10)
    } else{
        console.log("lending duration is:" +8)

    }
} else if(borrower==="others"){
    if(overdue===0){
        console.log("lending duration is:" +4)
    }else if(overdue<3){
        console.log("lending duration is:" +3)
    } else{
        console.log("lending duration is:" +2)

    }

}