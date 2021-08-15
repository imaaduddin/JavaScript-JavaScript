// condition ? expIfTrue : expIfFalse 

let num = 7;

if (num === 7) {
  console.log("Lucky!");
} else {
  console.log("Bad!");
}

// Code above is same as below code:

num === 7 ? console.log("Lucky!") : console.log("Bad!");

let status = "offline";

let color;

if (status === "offline") {
  color = "red";
} else {
  color = "green";
}

// Same code as above:

let color = status === "offline" ? "red" : "green";

