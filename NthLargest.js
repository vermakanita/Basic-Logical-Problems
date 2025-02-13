// function Nth(arr){
//      max=arr[0];
//      k=2
    
//     for(let i=0;i<arr.length;i++){
        
    
//     if(max<arr[i]){

//         max=arr[i];

//     }
//     let index = findIndex(arr,max);
//         arr.splice(index,1)
//         return max 
// }
// let ans = 0;
// for(let k=0;k<ans.length;k++){
//     ans=Nth(arr)
// }
    
//     // Nth([1,2,3,5,3,9])
//     // console.log(max)
//     // return final
// }
// // console.log(max)
// Nth([1,2,3,5,3])
// console.log(max)
// console.log(ans)













    function NthLargest(arr, k) {
      let max;
    
      for (let j = 0; j < k; j++) {
        max = -Infinity;
        let maxIndex = -1;

        // Find the largest element in the current iteration
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
                maxIndex = i;
            }
        }

        // Remove the largest element by setting it to -Infinity
        if (maxIndex !== -1) {
            arr[maxIndex] = -Infinity;
        }
    }

    return max;
}

const result = NthLargest([1, 2, 3, 5, 3, 9],2);
console.log("2nd Largest Element:", result);
