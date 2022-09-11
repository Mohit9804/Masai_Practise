//PROBLEM 1
//Problem 1 : Given a string count the number of words in that string
let string="I can and will Speak English fluently";
let count=0;

for(let i=0;i<=string.length-1;i++){
  if (string[i] ==" "){
    count++;
  }
}
if (string.length==0){
  console.log(0);
}else{
  console.log(count+1);
}