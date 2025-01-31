let arr=[1,2,3,2,1,1,2];
let arr1=[];
let arr2=[];
for(let i=0;i<arr.length;i++){
    if(!arr1==arr[i]){
        arr1.push(arr[i])
    // console.log("k")
    }
    // else{
    //     arr2.push(arr[i])
    // }
}
console.log(arr1);
console.log(arr2)
