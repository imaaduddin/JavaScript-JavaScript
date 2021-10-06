// A pangram is a sentence that contains every letter of the alphabet 
// Write a function called isPangram, which checks to see if a given sentence contains every letter of the alphabet. make sure ot ignore string casing 

// function isPangram(str) {
//   let lowercase = str.toLowerCase();
//   for (let char of "abcdefghijklmnopqrstuvwxyz") {
//     if (lowercase.indexOf(char) === -1) {
//       return false;
//     }
//   }
//   return true;
// }

function isPangram(str) {
  let lowercase = str.toLowerCase();
  for (let char of "abcdefghijklmnopqrstuvwxyz") {
    if (!lowercase.includes(char)) {
      return false;
    }
  }
  return true;
}

console.log(isPangram("The five boxing wizards jump quicly"));