let t1 = 0 ;
let t2 = 1
let t3=1;
let n=5
let nt= 2;
console.log(t1)
console.log(t2)
console.log(t3)
while (n>0){
    console.log(nt);
    t1=t2;
    t2=t3;
    t3=nt;
    nt=t1+t2+t3;
    n--;

}
