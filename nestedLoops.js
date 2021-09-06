// NESTED LOOPS
let str = "LOL";
for (let i = 0; i <= 4; i++) {
  console.log("Outer:", i);
  for (let j = 0; j < str.length; j++) {
    console.log("   Inner:", str[j]);
  }
}

const gameBoard = [
  [4, 32, 8, 4],
  [64, 8, 32,2],
  [8, 32, 16, 4],
  [2, 8, 4, 2]
];

let totalScore = 0;
for (let i = 0; i < gameBoard.length; i++) {
  let row = gameBoard[i];
  for (let j = 0; j < row.length; j++) {
    totalScore += row[j];
  }
}

console.log(totalScore);