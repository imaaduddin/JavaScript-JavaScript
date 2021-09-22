function add(a, b) {
  return a + b;
}

const total = add(2, 9);
console.log(total);


fucntion isPurple(color) {
  if (color.toLowerCase() === "purple") {
    return true;
    console.log("Yes!");
  } else {
    return false;
  }
}

function containsBlack(arr) {
  for (let color of arr) {
    if (color === "black") {
      return true;
    }
  }
  return false;
}


console.log(containsBlack(["red", "blue", "black"]));