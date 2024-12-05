let a=[10,20,30,40,50];
let s=40;
 let f=0;l=a.length-1;
 
 while(f<l){
    let m=parseInt((f+l)/2);
    console.log("outer")
    if(s==m){
        console.log("hire")
    }
    else if (m<s){
        f=m+1;
        console.log("2")
    }
    else if(m>s){
        l=m-1;
        console.log("3")
    }
 }