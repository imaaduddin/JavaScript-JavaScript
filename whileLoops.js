// WHILE LOOPS
// A while loop continues to run as long as its test condition is true 

let num = 0;
while (num < 10) {
  console.log(num);
  num++
}

const target = Math.floor(Math.random() * 10);
let guess = Math.floor(Math.random() * 10);

while (guess !== target) {
  console.log(`Target: ${target} Guess: ${guess}`);
  guess = Math.floor(Math.random() * 10);
}
console.log(`Target: ${target} Guess: ${guess}`);
console.log(`CONGRATS YOU WIN!!!`);

// Break down while loop above:
// while(some condition)
// in the loop, update or attempt to make that condition 
// false 

