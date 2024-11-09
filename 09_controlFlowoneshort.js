if(2==="2"){
    console.log("true")
}
//falsy values: false,-0,bigInt,0,"",null,undifined,Nan,0n
// truly: "0",'false'," ",[],{},function(){}
let user=90;
// if(user.length===0){
//     console.log("Array is emty");
// }
// else{
//     console.log("k")
// }


// const emp={}
// if(Object.keys(emp).length === 0){
//     console.log("object id empty");

// }

// Nullish Coalescing Operator (??):null undefined
let v;
// v=5??10;
// v=null??2
// v=undefined??9
// v=null??9??7

console.log(v)




// terniary operation
//condition ? true:false
let p =100;
p<=80? console.log("less than 80"):console.log("more than 80");
