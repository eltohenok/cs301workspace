function getMidle(arr){
    let midle;
    if(arr.length%2!==0){
        midle=arr[Math.floor(arr.length/2)];
        return midle;
    }else{
    let average=(arr[Math.floor((arr.length-1)/2)]+arr[arr.length/2])/2;
    midle=average;
    return midle;
  }
}
  let arr=[1,2,3,4,5];
  console.log(getMidle(arr));