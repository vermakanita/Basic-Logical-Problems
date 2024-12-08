// 1. Square the value of every element in the array. Presume that you will only get numbers in the input array.
//  const input = [1, 2, 3, 4, 5];
//  output: - [1, 4, 9, 16, 25];



//  const input = [1, 2, 3, 4, 5];
// // output: - [1, 4, 9, 16, 25];

// let x=input.map((input)=>{
// return input*input;
// })
// console.log(x);



// const input = [1, -4, 12, 0, -3, 29, -150];
// const input = [ 1,2,-4,-3,-150];
// let v=0;
// let x= input.filter((input)=>{
//     if(input>0){
//         return  v=v+input;
//     }
//     else{
//         return 0;
//     }
// })
// console.log(x)
  




// 3. The given input is a string of multiple words with a single space between each of them. Abbreviate the name and return the name initials.

//  const input = "George Raymond Richard Martin";
//  output :- "GRRM";

const input = "George Raymond Richard Martin";
let c="";
let x = input.split(" ")
let z=x.filter((word)=>{
    c=c+word[0];

})
console.log(c)
// console.log(x)
// console.log(input)


