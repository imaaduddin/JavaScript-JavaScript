let nums = [1, 2, 3];
let mystery = [1, 2, 3];

nums === mystery; // will five you false 

let moreNums = nums;
moreNums === mystery; // will give you true because they are referring to same place in memory 
