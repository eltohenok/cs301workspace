function rotateArrayright(arr){
    for(let i=0;i<arr.length;i++){
    let temp=arr[i];
    arr[i]=arr[i+1];
    arr[i+1]=temp;
    return arr;
   }
}
arr=[1,2,3];
console.log(rotateArray(arr))