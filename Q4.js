// 4. Find the difference in age between the oldest and youngest family members, and return their respective ages and the age difference.
   const input = [
  {
    name: "John",
    age: 13,
  },
  {
    name: "Mark",
    age: 56,
  },
  {
    name: "Rachel",
    age: 45,
  },
  {
    name: "Nate",
    age: 67,
  },
  {
    name: "Jennifer",
    age: 65,
  },
];



let x = input.map((x)=>x.age)
let y=[Math.min(...x),Math.max(...x),Math.max(...x)-Math.min(...x)];
console.log(y);
// output:- [13, 67, 54];