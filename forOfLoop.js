// FOR...OF

// A nice and easy way of iterating over arrays (or other iterable objects) 
let subreddits = ["apple", "gaming", "pcgaming", "battlestations"];

for (let i = 0; i < subreddits.length; i++) {
  console.log(subreddits[i]);
}

// Another way of writing this for loop is using the for of loop:
for (let sub of subreddits) {
  console.log(sub);
}

for (let char of "cockadoodledoo") {
  console.log(char.toUpperCase());
}



const magicSquare = [
  [2, 7, 6],
  [9, 5, 1],
  [4, 3, 8]
];

