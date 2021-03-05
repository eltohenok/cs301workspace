const prompt=require("prompt-sync")();
let num=prompt("enter number");
let arr=[];
for(let i=0;i<num;i++){
    let temp=arr[num];
    if(arr[num]<0){
        pop(temp);
        console.log(temp);
    }
    
}