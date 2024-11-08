//  globle variable ke polutions se function ko bachane ke liye iife me fanction ko reppapkiya jata h
// Immediately invoked function expressions(iife)
(function rappap(){
    console.log(`iife me rappap`)
})();// ; must important to excute next function

// phle iife ko end krne semicolon lagana chahiye ;
((name)=>{
    console.log(`arro me iffe ${name}`);
})("iris")