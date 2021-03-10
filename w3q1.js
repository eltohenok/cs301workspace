function powerRecursion(num,pwr){

    if(num > 0 && pwr === 0){
      return 1;
      }else{
        return num*powerRecursion(num,pwr-1);
      }
}
console.log(powerRecursion(3,2));