"use strict";
const prompt = require("prompt-sync")();
let cost=+prompt("enter the cost");
let downpayment;
if(0<cost && cost<50000){
    downpayment=cost*0.05;
    console.log(downpayment);
}else if(50000<cost && cost<100000){
    downpayment=1000+0.01*(cost-50000)
        console.log(downpayment);
    }else if(100000<cost && cost<200000){
        downpayment=2000+0.15*(cost-100000)
        console.log(downpayment);

    }else{
        downpayment=5000+0.01*(cost-200000)
        console.log(downpayment);
    }


