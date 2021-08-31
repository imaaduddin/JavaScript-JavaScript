let nums = [1, 2, 3];
let mystery = [1, 2, 3];

nums === mystery; // will five you false // they look the same, but refer to different arrays 

let moreNums = nums;
moreNums === mystery; // will give you true because they are referring to same place in memory // these two arrays reference the exact same array, so we get true

const user = {
  username: "Sharingan13",
  email: "obitouchiha@gmail.com",
  notifications: []
};

if (!user.notifications.length) {
  console.log("No new notifications!");
}


