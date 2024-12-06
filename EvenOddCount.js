let a=[2,3,4,5,6,1];
let c=0;
for(let i=0;i<a.length;i++){
// if(a[i]%2==0){         //even count
if(a[i]%2!=0){             // odd count
    c++;
}
}
console.log(c);
