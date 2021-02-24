const prompt = require("prompt-sync")();
let startingOdoMeter = prompt('please enter the begnning odometer');
 let lastOdoMeter = prompt('please enter the ending odometer');
 let NumberOfGalonUsed = prompt('please enter nomber of galon of gas used');
 let reading = (lastOdoMeter - startingOdoMeter)/NumberOfGalonUsed;
 console.log(reading);