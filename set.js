// it store the only unique values duplicate remove 
const uniqueNumber = new Set();
uniqueNumber.add(5)
uniqueNumber.add(10);
uniqueNumber.add(5);
console.log(uniqueNumber);

// size
console.log("size :"+uniqueNumber.size)
console.log("has : "+uniqueNumber.has(10))
console.log(uniqueNumber.delete(10));
console.log(uniqueNumber);