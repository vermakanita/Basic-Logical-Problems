
//potional arguments 
function num (a,b){
    return a+b;
}
console.log(num(2,3));



//named argument
      var person={
        name :"kanita",
         role:"MERN stack"
    }
 

function named(person){
    console.log(person.name + person.role)
}

named(person)


sum (1,2,3)

function sum (){
    console.log(arguments[0])
    console.log(arguments[3])
    console.log(arguments.length)
}






function defaults( name ="kanita"){
    console.log(name)


}
defaults("verma")