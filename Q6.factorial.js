// 6. If the given input is a number, you should return the factorial of that number. The factorial of a natural number n is the product of the positive integers less than or equal to n. So, 2! = 2, 3! = 6, 4! = 24 and so on.

// const input = 6;
// output: 720


let array =5;
let fact =1;
if(array>0){
for(let i=1;i<=array;i++){
    fact=fact*i;
    } 
}
else if(array===0){
    console.log("number is zero")
}
else{
    console.log("number is nagative ")
}
 if(fact!=1){
console.log(fact)
 }