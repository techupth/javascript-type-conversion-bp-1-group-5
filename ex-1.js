let accountBalance = 400;
let depositAmountFromUser = "10";

console.log(typeof accountBalance)
console.log(typeof depositAmountFromUser)

depositAmountFromUser = Number(depositAmountFromUser)
console.log(typeof depositAmountFromUser)
accountBalance = accountBalance + depositAmountFromUser;

let accountBalanceMessage = "Your account balance is " + accountBalance;

console.log(accountBalanceMessage);
