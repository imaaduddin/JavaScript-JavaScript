// For Loops + Arrays 
// To loop over an array, start at 0 and continue to the last index (length - 1)

const animals = ["lions", "tigers", "bears"];

for (let i = 0; i < animals.length; i++) {
  console.log(i, animals[i]);
}


const examScores = [87, 98, 99, 78, 100, 89, 88];

for (let i = 0; i < examScores.length; i++) {
  console.log(examScores[i]);
}

const word = "uchiha";

for (let i = 0; i < word.length; i++) {
  console.log(word[i].toUpperCase());
}