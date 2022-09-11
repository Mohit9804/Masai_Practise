//Problem 2 : Given an array of string count the overall total number of characters
let arr = ["Mohit","Aditya","Aman","Sparsh","Ashwani","Monty"];
let total_char=0;
for (let i=0;i<=arr.length-1;i++){
  total_char=total_char+arr[i].length;
}
console.log(total_char);