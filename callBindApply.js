// function s(msg){
//     console.log(`${msg},${this.name}`);
// }
 
// const person ={name:"kanita"}


// s.call(person, "hello")










// function s(msg , msg2){
//     console.log(`${msg},${msg2},${this.name}`);
// }
 
// const person ={name:"kanita"}

// s.apply(person,["hei","hello"])





// function s(msg , msg2){
//     console.log(`${msg},${msg2},${this.name}`);
// }
 
// const person ={name:"kanita"}

// const bindfunc = s.bind(person,"heyyy","oyyyy")
// bindfunc();




function s(msg, msg2) {
    console.log(`${msg}, ${msg2}, ${this.name}`);
}

const person = { name: "kanita" };

// Using call
s.call(person, "call", "world"); // Outputs: hello, world, kanita

// Using apply
s.apply(person, ["apply", "hello"]); // Outputs: hei, hello, kanita

// Using bind
const boundFunction = s.bind(person, "bind", "there");
boundFunction(); // Outputs: hi, there, kanita
