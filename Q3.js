const prompt = require("prompt-sync")();
let totalBox=prompt("enter total number of box");
let inStackBox=prompt("enter number of box in one stack");
let z=totalBox/inStackBox;
if((totalBox%inStackBox)===0){
  //output==inStackBox/y;  
  console.log(z);
}else {
   z=Math.floor(totalBox/inStackBox)+1;
    console.log(z);
}
