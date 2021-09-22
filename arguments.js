// function greet(nickname) {
//   console.log(nickname);
//   console.log("Hi");
// }

// greet("Imaad");


function rollDie() {
  let roll = Math.floor(Math.random() * 6) + 1;
  console.log(`Rolled: ${roll}`);
}

function throwDice(numRolls) {
  for (let i = 1; i < numRolls; i++) {
    rollDie();
  }
}

throwDice(3)