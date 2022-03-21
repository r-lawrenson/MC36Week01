// // MASTER 36 DAY 04 NOTES FUNCTIONS==============================================
// // REMEMBER PRINT TO TERMINAL IS YOUR FRIEND... USE....
// // console.log("=================code from line 000 below is output=================\n");
// // replace the number 000 with the line number your code starts at.

// // EXAMPLE 1======================================================================
// // functions break up code into smaller, reusable chunks

// console.log("=================code from line 009 below is output=================\n");

// let coffeeIsGrinding = false;

// const pressGringBeans = () => {
//     if (coffeeIsGrinding) {
//         console.log("Stopping the grind");
//         coffeeIsGrinding = false;
//     }
//     else {
//         console.log("Grinding is about to begin");
//         coffeeIsGrinding = true;
//     }
// }

// pressGringBeans();

// // EXAMPLE CASH WITHDRAWAL=========================================================

// console.log("=================code from line 028 below is output=================\n");

// let accnum = 123456;
// let amount = 30

// const cashWithdrawel = (amount, accnum) => {
//     console.log(`Withdrawing £${amount} from account ${accnum}`);
// }

// cashWithdrawel(300, accnum);
// cashWithdrawel(30, 50449921);
// cashWithdrawel(200, 50447921);
// cashWithdrawel(amount, accnum);

// console.log("=================code from line 042 below is output=================\n");

// const addUp = (num1, num2) => {
//     return num1 + num2;
// }

// // addUp(15,5);

// console.log(addUp(12,3));

// // ACTIVITY 01 ======================================================================
// // Take this code and turn it into arrow function... syntax:

// console.log("=================code from line 055 below is output=================\n");

// function factorial (n) {
//     if ((n === 0) || (n === 1)) {
//         return 1;
//     }
//     else {
//         return (n * factorial(n-1));
//     }
// }

// console.log(factorial(33));

// const factorial = (num) => {
//     if ((num === 0) || (num === 1)) {
//         return 1;
//     }
//     else {
//         return (num * factorial(num-1));
//     }
// }

// console.log(factorial(33));

// // ACTIVITY 02 =====================================================================
// // Edit the below snippet to include two parameters and a
// // running order count updated when the function is called:

// console.log("=================code from line 083 below is output=================\n");

// let orderCount = 0;

// const takeOrder = (topping) => {
//     console.log(`Pizza with ${topping}`);
//     orderCount++
// }

// takeOrder("pineapple");

// // 2 parameters

// console.log("=================code from line 096 below is output=================\n");

// let orderCount = 0;

// const takeOrder = (topping1, topping2) => {
//     orderCount++
//     console.log(`Your ${orderCount} pizza with ${topping1} and ${topping2}`);
// }

// takeOrder("pineapple", "peppers");

// // ACTIVITY 03 Cash Machine=========================================================
// // Cash machine time! Let’s create one that:
// // Dispenses cash if your pin number is correct and your balance is equal to, 
// // or more than, the amount you’re trying to withdraw!

// console.log("=================code from line 112 below is output=================\n");

// let accountPin = 1234;
// let inputPin = 1234;
// let accBalance = 0;

// const cashMachine = (accountPin, inputPin, withdrawAmount) => {
//     if (inputPin == accountPin) {
//         accBalance = Math.round(Math.random()*100);
//         console.log(accBalance);    
//         if (withdrawAmount <= accBalance) {
//             console.log(`Your withdrawal of £${withdrawAmount} has completed and your balance is now £${accBalance - withdrawAmount}`);
//         }
//         else {
//             console.log(`Nope! Sorry! That's not going to happen, your balance is £${accBalance} and the £${withdrawAmount} you want to withdraw is more than your available balance.`);
//         }
//     }
//     else {
//         console.log("please enter your correct PIN number");
//     }
// };

// cashMachine(accountPin, inputPin, 50);

// // need to figure out inputs...