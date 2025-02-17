function normal(a,b){
    return a+b
}
// console.log(normal(4,4))


// fun curring 
function curring(a){
    return function  n(b){
        return a+b
    }

}
const outerf= curring(4)
// console.log(outerf(4))


const arrow = a=>b=> a+b;
const r = arrow(5);
console.log(r(10))