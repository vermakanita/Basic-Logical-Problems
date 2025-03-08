// let a =12522


// let rem =0;
// let sum =0;
//  while(a>0){
//     rem = a%10;
//     rev = rem;
//     a=Math.floor(a/10);

//     if(rev%2==0){

//       sum = sum+rev;
//     }

//  }
//   console.log(sum)


function occure() {
    let ar1 = "hello";
    let ar = ar1.split("")
    let obj = {}

    for (let i = 0; i < ar.length; i++) {
        let ele = ar[i];
        console.log(obj)

        if (!obj[ele]) {
            // console.log(obj)
            obj[ele] = 1;

        }
        else {
            obj[ele] = obj[ele] + 1;
        }
    }
    console.log(obj)




} occure();















