// browser me globle object windows hota h 
//  this keyword function ke andr current vari ko poit krta h 
// this node js me agr koi vari ya fun nhi h to this empty rhega glovble me 
// function ke and this undefined aata h 
// function this1(){
//     let name="chai";
//     console.log(this.name)//undefined

    
// }
// this1();


// const chai5=function(){
//     let uname="chai1";
//      console.log(this.uname)


// } chai5()

// const arro = () =>{
// let name="chai"
//      console.log(this.name)
// }
// arro()


// const arrofun=(n1,n2) =>{
//     return n1+n2;

// }
// console.log(arrofun(3,4))


const arrofun=(n1,n2) => (n1+n2);

console.log(arrofun(3,4))
// obj hamesh {} me hi return hoga 
