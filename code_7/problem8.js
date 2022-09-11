//Problem 4: Given stored username and password and input username and password, Print if the user can login or not.
let reg_email= "abc123@gmail.com";
let reg_pass = 1234455;

let ent_email = "abc123@gmail.com";
let ent_pass = 1234455;
if (reg_email==ent_email){
  if (reg_pass==ent_pass){
    console.log("login");
  }else {
    console.log("No");

  }
}