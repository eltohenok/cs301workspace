const prompt = require("prompt-sync")();
let age = prompt('please enter your age');
 let range = 220 - age;
 let slowest = range * 0.65;
 let fastest = range * 0.85;
 console.log('the slowest heart beat per minute is = ' + slowest);
 console.log('the fastest heart beat per minute is = ' + fastest);