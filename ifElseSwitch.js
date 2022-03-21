// // MASTER 36 DAY 02 NOTES IF ELSE SWITCH=========================================
// // REMEMBER PRINT TO TERMINAL IS YOUR FRIEND... USE....
// // console.log(`=================code from line 000 below is output=================\n`);
// // replace the number 000 with the line number your code starts at.

// console.log(`=================code from line 006 below is output=================\n`);

// let weather = "sunny";

// if (weather == "sunny") {
//     console.log("Well, better wear some sunscream!");
// } 
// else if (weather == "rainy") {
//     console.log("Get an umbrella!");
// }
// else{
//     console.log("Anything else");
// }

// // == equal check if the value is equal
// // === strict equal, checks if value and data type match
// // != not equal, checks if the values are not equal
// // !== strict not equal, checks if value and data type do not match

// // TRY them======================================================================

// console.log(`=================code from line 027 below is output=================\n`);

// if (1==="1") {
//     console.log(true);
// }
// else {
//     console.log(false);
// }

// if (1!="1") {
//     console.log(true);
// }
// else {
//     console.log(false);
// }

// // TRY them======================================================================
// // && and... all conditions must br true

// console.log(`=================code from line 046 below is output=================\n`);

// let place = "Manc";
// let weather = "Cloudy";

// if (place == "Manc" && weather == "Sunny") {
//     console.log("Check again");
// }

// else if (place == "Manc" && weather == "rain") {
//     console.log("Ovbious");
// }
// else {
//     console.log(" what it isn't raining");
// }

// // LOGICAL OPERATORS=============================================================

// // && and, both conditions hav to be met to return true
// // || or, if either condition is true, returns true

// // ACTIVITY 01===================================================================
// // Create a variable called age. Write an if statement that logs “Yes I can serve you”
// // if the age is greater than 17 and else logs “You aren’t old enough”.

// console.log(`=================code from line 071 below is output=================\n`);

// let age = 17;
// let country = "UK";

// if (age > 17 && country == "UK") {
//     console.log(`Yes I can serve you in the ${country}.`);
// }
// else {
//     console.log(`You aren't old enough to be served in the ${country}.`);
// }

// // ACTIVITY 02 - Pizza toppings==================================================
// // Create a variable for any pizza topping.

// console.log(`=================code from line 086 below is output=================\n`);

// let topping = "Pepperoni";

// switch(topping) { 
//     case "Pepperoni": // important toppings 
//     case "Spicy beef":
//     case "Red peppers":
//         console.log(`These are important ingredients for my pizza.`);
//         break
//     case "Green peppers": // don't mind toppings
//     case "Gherkins":
//     case "jalapenos":
//         console.log(`I don't mind having ${topping} on my pizza.`);
//         break
//     default: // any other topping, don't want it
//         console.log(`${topping} should not be on a pizza.`);
// }

// // ACTIVITY 03 - password========================================================
// // Create a variable called password. Check how many letters are in the password,
// // if there are less than 8, log to the console that the password is too short.
// // Otherwise log the password to the console.

// console.log(`=================code from line 110 below is output=================\n`);

// let password = "12345678"; // set pasword

// if (password.length >= 8) {
//     console.log(`Your password is "${password}".`);
// }
// else {
//     console.log(`Your password is too short.`);
// }

// // ACTIVITY 04 - divide by 3 or 5================================================
// // Create a variable called num. Check if the variable is divisible by 3 or 5.
// // If it is, log “This number is divisible by 3 or 5”. Otherwise log something else.

// console.log(`=================code from line 125 below is output=================\n`);

// let num = 7;

// if (num % 3 == 0 && num % 5 == 0){
//     console.log(`This number ${num} is divisible by 3 and 5.`);
// }
// else if (num % 3 == 0) {
//     console.log(`This number ${num} is divisible by 3.`);
// }
// else if (num % 5 == 0) {
//     console.log(`This number ${num} is divisible by 5.`);
// }
// else {
//     console.log(`The number ${num} is not divisable by 3 or 5.`);
// }

// // ACTIVITY 05 - Fizz Buzz=======================================================
// // Create a variable called num. If num is divisible by 3 log “fizz” to the console,
// // if it’s divisible by 5 log “buzz” to the console, if it’s divisible by both 3 and
// // 5 log “fizz buzz” to the console. Otherwise log num to the console.

// console.log(`=================code from line 147 below is output=================\n`);

// let num = 60;

// if( num % 3 == 0 && num % 5 == 0) { // if divisible by 3 AND 5
//     console.log(`Fizz Buzz, this number ${num} is divisible by 3 and 5.`);
// }
// else if(num % 3 === 0) { // if not both above check if divisible by 3
//     console.log(`Fizz, this number ${num} is divisible by 3.`);
// }
// else if(num % 5 === 0) {// if not divisible by 3 above check if divisible by 5
//     console.log(`Buzz, this number ${num} is divisible by 5.`);
// }
// else {
//     console.log(`This number ${num} is not divisible by 3 or 5.`); // if none of above number is not divisible by 3 or 5
// }

// // ACTIVITY 05 - Fizz Buzz=======================================================
// // does this work with using switch...

// console.log(`=================code from line 167 below is output=================\n`);

// let num = 71;

// switch(true) {
//     case num % 3 == 0 && num % 5 == 0:
//         console.log(`Fizz Buzz, this number ${num} is divisible by 3 and 5.`);
//         break
//     case num % 3 === 0:
//         console.log(`Fizz, this number ${num} is divisible by 3.`);
//         break
//     case num % 5 === 0:
//         console.log(`Buzz, this number ${num} is divisible by 5.`);
//         break
//     default:
//         console.log(`This number ${num} is not divisible by 3 or 5.`);
// }

// // ACTIVITY 06===================================================================
// // Create a variable called num. Check if the number is a palindrome 
// // (looks the same forward as it does backwards e.g. 1001 or 20202).

// console.log(`=================code from line 189 below is output=================\n`);

// let num1 = 43211234;
// let num2 = num1.toString();
// let reverseNum = num2.split('').reverse().join(''); // don't put a space in between ''

// console.log(num1);
// console.log(reverseNum);

// if(num1 == reverseNum) {
//     console.log("this is a palindrome!");
// }
// else {
//     console.log("this is not a palindrome.");
// }

// // ACTIVITY 07===================================================================
// // Create a variable called time, a variable called placeOfWork and a variable called townOfHome.
// // Create an if statement that logs to the console where someone is at times of the day.
// // E.g. if the time is 7 I’m at home, at 8 I’m commuting, at 9 I’m at work.

// console.log(`=================code from line 210 below is output=================\n`);

// let time = 8;
// let placeOfWork = "Liverpool";
// let townOfHome = "Aregate";

// if(time == 7) {
//     console.log(`I am at home in ${townOfHome}.`);
// }
// else if(time == 8) {
//     console.log(`I am commuting to work in ${placeOfWork}.`);
// }
// else if(time == 9) {
//     console.log(`I am at work in ${placeOfWork}.`);
// }
// else {
//         console.log(`Until 5pm I will be in work, please leave a message after the...`);
// }

// // ACTIVITY 08 - Skipped - DONE SEE LINE 265=====================================

// // ACTIVITY 09===================================================================
// // Create a variable called word that takes a string. 
// // Create an if statement that checks if the last letter is the same as the first.
// // If it is return true, otherwise return false.

// console.log(`=================code from line 236 below is output=================\n`);

// let word = "HanhjhjnaHh";

// if (word.charAt(0) == word.charAt(word.length-1)) {
//     console.log(`${true} = the first character matches the last character`);
// }
// else {
//     console.log(`${false} = the first character does not match the last character`);
// }

// // ACTIVITY 10===================================================================
// // Create two variables called num1 and num2. 
// // Create an if statement that checks if the result of the sum is even. 
// // If it is return the number, otherwise return the numbers multiplied together.

// console.log(`=================code from line 252 below is output=================\n`);

// let num1 = 3;
// let num2 = 3;
// let sumTotal = num1 + num2;

// if(sumTotal % 2 == 0) {
//     console.log(`The sum total of ${sumTotal} is even.`);
// }
// else {
//     console.log(`${num1} * ${num2}`);
// }

// // ACTIVITY 08 - find a vowel====================================================
// // Take the string
// // “jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi”.
// // Find the index of a last vowel in the string.

// console.log(`=================code from line 270 below is output=================\n`);

// let theString = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi";
// let theVowels = "aeiou";
// let theIndex = [];
// for (i = 0; i < theVowels.length; i++){
//     // console.log(theVowels[i]);
//     // console.log(theString.lastIndexOf(theVowels[i]));
//     // theIndex = theString.lastIndexOf(theVowels[i]);

//     theIndex.push(theString.lastIndexOf(theVowels[i])); // create new array with index values of vowels
//     theIndex.sort(); // sort lowest to highest
//     theIndex = theIndex.reverse(); // reverse the sort highest to lowest...
// }
// // console.log(theIndex);
// // console.log(theIndex[0]); 
// // console.log(theString);
// console.log(theString[theIndex[0]]); // print the letter in the string at the index value, for highest vowel
// console.log(theIndex[0]); // print the index of 0, this should be the highest value

// // DONE
