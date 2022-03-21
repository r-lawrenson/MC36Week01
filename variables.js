// // MASTER 36 DAY 02 NOTES VARIABLES==============================================
// // REMEMBER PRINT TO TERMINAL IS YOUR FRIEND... USE....
// // console.log("=================code from line 000 below is output=================\n");
// // replace the number 000 with the line number your code starts at.

// console.log("=================code from line 006 below is output=================\n");

// // use camel case when naming variables like this

// console.log("thisIsCamelCase");

// // use const when the value will not change, can't be changed during the program running
// // use let when the value will / might change in the code
// // don't use var it has issues but you might see it being used

// const firstName = "rob";
// let secondName = "lawrenson";
// var age = 44;

// console.log(firstName);
// console.log(secondName);
// console.log(age);

// firstname = "Rob"; // firstname is const so it will not change from the point it is declared
// console.log(firstName);

// secondName = "Lawrenson";
// console.log(secondName);

// age = "44";
// console.log(age);

// // Display 8th character of all Around the World.

// console.log("=================code from line 035 below is output=================\n");

// let text = "All Around the World";

// console.log(text.charAt(7).toUpperCase()); // remember the () at the end!

// // ARETHMETIC OPERATORS FOR CALCULATIONS======================================

// // + is to add numbers together
// // - is to subtract numbers from each other
// // * (asterix) is to multiply numbers together
// // ** (double asterix) is exponent / to the power of eg 5 ** 2 is 5 x 5 = 25
// // / is to divide numbers 
// // % gets the remainder of 2 divided numbers
// // ++ increments an interger by 1
// // -- decrements an interger by 1

// // ASSIGNMENT OPERATORS FOR STORING VALUES IN VARIABLES=======================

// // =
// // *=
// // +=
// // /=
// // -=
// // ++
// // --

// // TEST ARITHMETIC===============================================================

// console.log("=================code from line 064 below is output=================\n");

// let num1 = 5
// let num2 = 2

// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 * num2);
// console.log(num1 / num2);
// console.log(num1 ** num2);
// console.log(num1 % num2);

// // TEST ARITHMETIC===============================================================

// console.log("=================code from line 078 below is output=================\n");

// let i = 10;

// i = i +2; // plus 2 to i variable
// console.log(i);
// i+=2; // plus 2 to i variable
// console.log(i);
// i-=2;
// console.log(i);
// i*=2;
// console.log(i);
// i/=2;
// console.log(i);

// // ACTIVITY 1====================================================================
// // f IN PYTHON IS BACKTICKS IN JAVASCRIPT! AWESOME.TEMPLET LITERALS.
// // Create a program that stores someone’s name, age and favourite colour 
// // and log it to the console in a complete sentence using Template Literals.

// console.log(`=================code from line 098 below is output=================\n`);

// let myName = "Rob";
// let age = 44;
// let favoriteColour = "Korne Red";

// console.log(`Hello ${myName}, you are ${age} and your favorate colour is ${favoriteColour}.`)

// myName = "Doug"; // STRETCH
// age = 40;
// favoriteColour = "Macragge Blue";

// console.log(`Welcome ${myName}, it looks like youe are ${age} and your favorate colour is ${favoriteColour}.`);

// // ACTIVITY 2====================================================================
// // Create a program that stores what you eat today for breakfast, lunch and dinner. Log these to the console.

// console.log(`=================code from line 115 below is output=================\n`);

// let day = "Today";
// let breakfast = "coffee";
// let lunch = "pitta bread salad";
// let dinner = "tuna pasta";

// console.log(`${day} the menu is: ${breakfast} for breakfast, ${lunch} for lunch and ${dinner} for dinner.`);

// // STRETCH = Update each of these variables to what you will eat tomorrow. Log these to the console.

// day = "Tomorrow";
// breakfast = "more coffee";
// lunch = "ham salad";
// dinner = "sweet and sour chicken";

// console.log(`${day} on the menu is: ${breakfast} for breakfast, ${lunch} for lunch and ${dinner} for dinner.`);

// // ACTIVITY 3=======================================================================
// // Create a program that calculates the number of days from today to your birth date.

// console.log(`=================code from line 136 below is output=================\n`);

// const dateBirthday = new Date("08/30/2022");
// const dateToday = new Date();
// const millisecondsToDay = 24 *60 * 60 *1000;

// const daysLeft = (dateBirthday.getTime() - dateToday.getTime()) / millisecondsToDay;
// console.log(`There are ${Math.round(daysLeft)} days remaining until your your birthday.`);

// console.log(dateBirthday); // print birthday
// console.log(dateToday); // print today

// // console.log(dateBirthday.getTime());
// // console.log(dateToday.getTime());
// // console.log(daysLeft); // print days left

// // ACTIVITY 4 - x o board only 9 variables=============================================
// // Create 9 variables: space1, space2... space9. > Assign either the value ‘x’,’o’,’ ‘, 
// // to each of these variables. > Insert the variables into your board using the
// // ${varName} syntax and make it look like the displayed board.

// console.log(`=================code from line 157 below is output=================\n`);

// let space1 = "x";
// let space2 = "o";
// let space3 = " ";
// let space4 = "x";
// let space5 = "x";
// let space6 = " ";
// let space7 = "o";
// let space8 = " ";
// let space9 = " ";

// console.log(`   |   |   \n ${space1} | ${space2} | ${space3} \n   |   |   \n-----------`);
// console.log(`   |   |   \n ${space4} | ${space5} | ${space6} \n   |   |   \n-----------`);
// console.log(`   |   |   \n ${space4} | ${space5} | ${space6} \n   |   |   `);

// ACTIVITY 4 - x o board 11 variables=================================================

// console.log(`=================code from line 175 below is output=================\n`);

// const pattern1 = "   |   |   ";
// const pattern2 = "   |   |   \n-----------\n   |   |   ";

// // const pattern2 = `${pattern1}\n-----------\n${pattern1}`;

// let space1 = "x";
// let space2 = "o";
// let space3 = " ";
// let space4 = "x";
// let space5 = "x";
// let space6 = " ";
// let space7 = "o";
// let space8 = " ";
// let space9 = " ";

// console.log(`${pattern1}\n ${space1} | ${space2} | ${space3} \n${pattern2}\n ${space4} | ${space5} | ${space6} \n${pattern2}\n ${space7} | ${space8} | ${space9} \n${pattern1}`);

// // DONE