// function Array(){
//     let arr=[1,2,3,4,5]
//     let k=2;
//     for(let i=0;i<k;i++){
//         arr[0]=arr.length-1
//         return arr;
//     }
// }console.log(Array())




function Array(){
    let arr=[1,2,3,4,5]
    let k=2;
    for(let i=0;i<k;i++){
        let temp=arr[0]
        arr[0]=arr.length-1;
        arr[i+1]=temp
        return arr;
    }
}console.log(Array())