
    let k="Kanita@123#"
     
    let a=0;
    let s=0;
    let n=0;
    for( i=0;i<k.length;i++){
         let c=k.charAt(i);
            let char=k[i]

        
              if( (c >=65 && c<=90)||(c >=97 && c<=122)){
                   a++;
        
        }
        // if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
        //     //         a++;
        //     //     }
        else if(char=='@'||char=='#'||char=='$'||char=='%'){
            s++;
    
    }
    else if(c>= 48&&c<=57){
        n++
    }
}
 
console.log("alphabate"+a);
console.log("symbol"+s);
console.log("number"+n);

// let k = "Kanita@123#";
// let a = 0;
// let s = 0;
// let n = 0;

// for (let i = 0; i < k.length; i++) {
//     let charCode = k.charCodeAt(i);
//     let char = k[i];
    
//     // Check if the character is an alphabet (uppercase or lowercase)
//     if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
//         a++;
//     }
//     // Check if the character is a symbol
//     else if (char === '@' || char === '#' || char === '$' || char === '%') {
//         s++;
//     }
//     // Check if the character is a number
//     else if (charCode >= 48 && charCode <= 57) {
//         n++;
//     }
// }

// console.log("alphabate: " + a);
// console.log("symbol: " + s);
// console.log("number: " + n);
 