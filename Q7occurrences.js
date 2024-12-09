// 7. Count the occurrences of distinct elements in the given 2D array. The given input is an array, 
// the elements of which are arrays of strings. The result is an object whose property names are the values from the
//  arrays and their value is the number of their occurrences.

// const input = [
//   ["a", "b", "c"],
//   ["c", "d", "f"],
//   ["d", "f", "g"],
// ];
// output:   {
//     a: 1,
//     b: 1,
//     c: 2,
//     d: 2,
//     f: 2,
//     g: 1,
//   }





// const input = [
//     ["a", "b", "c"],
//     ["c", "d", "f"],
//     ["d", "f", "g"],
//   ];
  
//   const flattened = input.flat();
  
//   const uniqueItems = []; // Array to track unique items
//   const output = {};
  
//   // Iterate through the flattened array
//   flattened.forEach(item => {
//     console.log(flattened)
//     console.log(item)
//     // Check if the item is already processed
//     if (!uniqueItems.includes(item)) {
//       uniqueItems.push(item); // Add to unique items
//       output[item] = 1; // Initialize the count to 1
//     } else {
//       output[item] += 1; // Increment the count
//     }
//   });
  
//   console.log(output);
  
  // Output:
  // {
  //   a: 1,
  //   b: 1,
  //   c: 2,
  //   d: 2,
  //   f: 2,
  //   g: 1,
  // }



 //occurance
//  with for loop
  let  input = [
        ["a", "b", "c"],
        ["c", "d", "f"],
        ["d", "f", "g"],
      ];

      console.log(input)
      let array = input.flat();
      console.log(array);
      
      let r={};

      for(let i=0;i<array.length;i++){
        let element = array[i];
        
        if(!r[element]){
          
          r[element]=1;
          

        }
        else{
          r[element]=r[element]+1;
        
        }
      }console.log(r)




      //with foreach method
  // array.forEach((element) => {
  //   r[element] = (r[element] || 0) + 1;
  // });
  
  //     console.log(r)





// let newA = [];

// for (let i = 0; i < array.length; i++) {
//   let element = array[i];
//   if (!r[element]) {
//     r[element] = 1;
//     newA.push(element); // Add unique element
//   } else {
//     r[element] += 1;
//   }
// }

// console.log("Unique Elements:", newA);
// console.log("Element Counts:", r);














// const input = [
//   ["a", "b", "c"],
//   ["c", "d", "f"],
//   ["d", "f", "g"],
// ];

// // console.log(input)
// let array = input.flat();
// // console.log(array);

// let r={};

//     for(let i=0;i<array.length;i++){
//       let element = array[i];
  
//       if(!r[array[i]]){
    
//         r[array[i]]=1;
    

//       }
//       else{
//         r[array[i]]=r[array[i]]+1;
  
//       }
//     }
//     console.log(r)