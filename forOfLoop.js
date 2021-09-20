// FOR...OF

// A nice and easy way of iterating over arrays (or other iterable objects) 
// let subreddits = ["apple", "gaming", "pcgaming", "battlestations"];

// for (let i = 0; i < subreddits.length; i++) {
//   console.log(subreddits[i]);
// }

// Another way of writing this for loop is using the for of loop:
// for (let sub of subreddits) {
//   console.log(sub);
// }

// for (let char of "cockadoodledoo") {
//   console.log(char.toUpperCase());
// }



// const magicSquare = [
//   [2, 7, 6],
//   [9, 5, 1],
//   [4, 3, 8]
// ];

// for (let i = 0; i < magicSquare.length; i++) {
//   let row = magicSquare[i];
//   let sum = 0;
//   for (let j = 0; j < row.length; j++) {
//     sum += row[j];
//   }
//   console.log(`${row} summed to ${sum}`);
// }

// for (let row of magicSquare) {
//   let sum = 0;
//   for (let num of row) {
//     sum += num;
//   }
//   console.log(`${row} summed to ${sum}`);
// }

// const words1 = ["mail", "milk", "bath", "black"];
// const words2 = ["box", "shake", "tub", "berry"];

// for (let i = 0; i < words1.length; i++) {
//   console.log(`${words1[i]}${words2[i]}`);
// }




// FOR OF WITH OBJECTS 
// Objects are NOT iterable

const movieReviews = {
  "Spider-Man": 9,
  "Spider-Man 2": 10,
  "Spider-Man 3": 9.5,
  "Amazing Spider-Man": 9.3,
  "Amazing Spider-Man 2": 10
};

for (let movie of Object.keys(movieReviews)) {
  console.log(movie, movieReviews[movie]);
}

const ratings = Object.keys(movieReviews);
let total = 0;
for (let rating of ratings) {
  total += rating;
}
let average = total / ratings.length;
console.log(average);