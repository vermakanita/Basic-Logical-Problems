 let str = 'kanita';
 let i=0;
 let j=str.length-1;
 while(i<j){
    let t = i;
    i=j;
    j=t;
    i++;
    j--;
    console.log(i)
    console.log(j)
    console.log(str)
 }
//  console.log(str)