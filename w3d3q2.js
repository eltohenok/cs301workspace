function countDigits(dig){
    if(dig===0){
      return 0; 
     }else{
      return  1 + countDigits(Math.floor(dig/10));
     }
    }
    console.log(countDigits(22123));