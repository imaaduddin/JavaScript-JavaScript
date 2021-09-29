// Write isValidPasssword function 
// It accepts 2 arguments: password and username 
// Password must:
// be at least 8 characters 
// cannot contain spaces 
// cannot contain the username 
// If all requirements are met, return true, otherwise return false 

function isValidPassword(password, username) {
  let newPassWord = password.split(" ").join("");

  if (newPassWord !== username && newPassWord.length >= 8) {
    return true;
  } else {
    return false;
  }
}

console.log(isValidPassword("asdfgh", "asdfgh"));