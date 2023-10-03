// Exercise #1: Debugging
// Start code here
let accountBalance = 400;
let depositAmountFromUser = "10";

<<<<<<< Updated upstream
=======
console.log(typeof accountBalance);
console.log(typeof depositAmountFromUser);
depositAmountFromUser = Number(depositAmountFromUser);
console.log(typeof depositAmountFromUser);

>>>>>>> Stashed changes
accountBalance = accountBalance + depositAmountFromUser;

let accountBalanceMessage = `Your account balance is ${accountBalance}`;

console.log(accountBalanceMessage);