// LOGICAL OPERATORS
// && - And, || - OR, ! - NOT

// AND (&&) - Both sides must be true in order for the whole thing to be true
1 <= 4 && "a" === "a"; // true 
9 > 10 && 9 >= 9; // false
"abc".length === 3 && 1 + 1 === 4; // false

let password = "Sasuke Uchiha";

if (password.length >= 8 && password.indexOf(" ") === -1) {
  console.log("VALID PASSWORD");
} else {
  console.log("GET OUT");
}

let num = 3;

if (num >=1 && num <= 10) {
  console.log("Number is between 1 and 10");
} else {
  console.log("Please guess a number between 1 and 10");
}

// OR (||) - (pipe character above the enter or return key). If one side is true, the whole thing is true
// Only one side o be true!
1 !== 1 || 10 === 10; // true
10 / 2 === 5 || null; // true
0 || undefined; // false

let age = 76;

if (age < 6 || age >= 65) {
  console.log("You get in for free!");
} else {
  console.log("Cough up that money");
}

// NOT (!) - !expression returns true if the expression is false
!null; // true
!(0 === 0) // false
!(3 <= 4) // false 

let loggedInUser;

// If there is NOT a logged in user...
if (!loggedInUser) {
  console.log("GET OUTTA HERE!");
}

let flavor = "mango";
 if (flavor !== "orange" && flavor !== "lemon") {
   console.log("Don't have that flavor buddy");
 }

// Operator Precedence 
let x = 7;
x == 7 || x === 3 && x > 10;
// && takes precedence over ||

// NOT (!) has a higher precedence than AND (&&) and OR (||)


