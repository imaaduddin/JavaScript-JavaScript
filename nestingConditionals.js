// NESTING - We can nest conditionals inside conditionals 
let password = "fireice123";

if (password.length >= 10) {
  if (password.indexOf(" ") !== -1) {
    console.log("Password cannot include spaces.");
  } 
  else {
    console.log("Valid Password!!");
  }
}
else {
  console.log("Password is too short!");
}