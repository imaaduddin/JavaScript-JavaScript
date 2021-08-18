// Array Methods 
// Push - add to end
// Pop - remove from end
// Shift - remove from start 
// Unshift - add to start 

let colors = ["red", "orange", "yellow", "blue", "purple", "green"];


colors.push("gold"); // "gold" will be at the end of the array

colors.pop() // will remove "gold" from the end of the array as it was added with the method above 

colors.unshift("silver"); // adds "silver" to the start of the array

colors.shift(); // will remove first element in array so it will remove "silver" as it was added from the method above 

// MORE METHODS!
// concat - merge arrays 
// includes - look for a value 
// indexOf - just like str.indexOf
// join - creates a string from array 
// reverse - reverses an array 
// slice - cop portion of an array 
// splice - remove/replace elements 
// sort - sorts an array 

let fruits = ["apples", "oranges"];
let veggies = ["carrots", "spinach"];
fruits.concat(veggies); // combines both arrays 

colors.includes("black"); // will give false because the colors array does not have "black"

colors.indexOf("orange"); // tells you where "orange" is in the array

colors.reverse(); // returns the array backwards 

colors.join("-"); // separates whatever is in the array by "-"

let animals = ["tiger", "lion", "lizard", "snake", "shark", "eagle", "bear"];
// animals.slice(0, 3); // will return "tiger", "lion", "lizard"
// animals.slice(2, 4); // will return "lizard", "snake"

// splice(startIndex, deleteCount, itemToInsert)
animals.splice(1, 0, "cheetah");
console.log(animals);


let ninja = ["Naruto", "Kiba", "Shino", "Neji", "Choji"];
ninja.sort();
console.log(ninja); // sorts in alphabetical order