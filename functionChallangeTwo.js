// Write a function to find the average value in an array of numbers 
// avg([0, 50]) will result in 25
// avg([75, 76, 80, 95, 100]) will result in 85.2

let total = 0;
let array = [99, 87, 65, 45, 34];

function avg(arr) {
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  console.log(total / arr.length);
}

avg(array);