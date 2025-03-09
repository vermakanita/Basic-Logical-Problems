class Animal {
  constructor(name) {
    this.name = name;
  }
  
  eat() {
    console.log(`${this.name} is eating.`);
  }
}

class Dog extends Animal {
  bark() {
    console.log(`${this.name} is barking.`);
  }
}

const dog = new Dog("Buddy");
dog.eat(); // Output: Buddy is eating.
dog.bark(); // Output: Buddy is barking.
