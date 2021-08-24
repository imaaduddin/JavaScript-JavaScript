const numbers = {
  100: "one hundred",
  16: "sixteen",
  7: "seven",
  six: 6
};

numbers[100]; // prints out "one hundred"
numbers["six"]; // prints out 6

// Adding and Updating Properties 
const userReviews = {};
userReviews["Uchiha97"] = 1.3;
console.log(userReviews); // this will update the userReviews object with Uchiha97: 1.3
userReviews.Sharingan13 = 98; // another way of writing above code

