//Problem 1 :
//Given an array find the unique items in the array
let arr= ["Mohit", "Aditya", "Abhinav", "Aayansh","Happy", "Mohit", "Aditya", "Aayansh"];
let unique_name= {};
for(let i=0; i<=arr.length-1;i++){
  unique_name[arr[i]]=1;
}
console.log(unique_name);