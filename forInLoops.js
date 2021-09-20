// FOR...IN
// Loop over the keys in an object

const winnings = {
  "Player 1": 9876,
  "Player 2": 8756,
  "Player 3": 3456,
  "Player 4": 7685
}

for (let prop in winnings) {
  console.log(prop);
  console.log(winnings[prop]);
}

let total = 0;
for (let prop in winnings) {
  total += winnings[prop];
}

console.log(`Total earnings: ${total}`);
