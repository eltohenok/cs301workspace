function rotateArray(arr,n){
    for(let i=0;i<arr.length;i++){
    let temp=arr[arr.length-1];
    arr[arr.length-1]=arr[i];
    arr[i]=temp;
    return arr;
   }
}
arr=[1,2,3];
console.log(rotateArray(arr,1));