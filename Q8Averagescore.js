// 8. You are given an array of objects representing a group of students, each with a name and an array of test 
// scores. Your task is to use map, filter, and reduce to calculate the average test score for each student, and then 
// return an array of objects containing only the students who have an average score above 90.


const students = [
  { name: "Alice", scores: [90, 85, 92] },
  { name: "Bob", scores: [75, 80, 85] },
  { name: "Charlie", scores: [90, 95, 85] },
  { name: "David", scores: [100, 100, 100] }
];
// output:-
// [ 
//   { name: 'David', average: 100 }
// ]   
 let names = students.map(s=>s.name);
 console.log(names);