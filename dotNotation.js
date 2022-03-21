// // MASTER 36 DAY 01 NOTES DOT NOTATION===========================================
// // REMEMBER PRINT TO TERMINAL IS YOUR FRIEND... USE....
// // console.log("=================code from line 000 below is output=================\n");
// // replace the number 000 with the line number your code starts at.

// console.log("=================code from line 006 below is output=================\n");

// console.log("Hello World!, Don't forget to save in VSC before you run your code!");

// console.log("hello.".toUpperCase()); // change string to UPPERCASE

// console.log(" helloo .".length); // get length of a string... INCLUDES SPACES " "

// console.log(" hello World.".length); // get length of a string... INCLUDES SPACES " "

// // math library
// console.log("=================code from line 017 below is output=================\n");

// console.log(Math.random()); // use Math.random() function to create a random number (float) between 0 and 1 INCLUDES DECIMALS, don't FORGET () at the end!

// console.log(Math.random()*10); // use Math.random()*10 function to create a random number (float) between 0 to 10 INCLUDES DECIMALS.

// console.log(Math.random()*4); // use Math.random()*4 to create a random number *4 between 0 to 4 INCLUDES DECIMALS.

// console.log("=================code from line 025 below is output=================\n");

// console.log(Math.round(Math.random()*100));

// Math.ceil() retrns a number rounded to its highest number
// Math.floor() retrns a number rounded to its lowest number
// Math.round() retrns a number rounded to its nearest whole number / integer

// console.log(Math.floor(Math.random()*10)); // use Math.random() function inside Math.floor() to create a number between 0 to 10 NO DECIMALS.

// console.log(Math.ceil(Math.random()*10)); // use Math.random() function inside Math.floor() to create a number between 0 to 10 NO DECIMALS.

// console.log(Math.round(Math.random()*10)); // use Math.random() function inside Math.round() to create a number between 0 to 10 NO DECIMALS.

// // ACTIVITY - LOGGING A GRID ====================================================

// // GRID 1 using console.log()====================================================
// console.log("=================code from line 042 below is output=================\n");

// console.log("   |   |   ");
// console.log("   |   |   ");
// console.log("   |   |   ");
// console.log("-----------");
// console.log("   |   |   ");
// console.log("   |   |   ");
// console.log("   |   |   ");
// console.log("-----------");
// console.log("   |   |   ");
// console.log("   |   |   ");
// console.log("   |   |   ");

// // GRID 2 using two variables====================================================
// console.log("=================code from line 057 below is output=================\n");

// var pattern1 = "   |   |   ";
// var pattern2 = "-----------";

// console.log(pattern1 + "\n" + pattern1 + "\n" + pattern1 + "\n" + pattern2 + "\n" + pattern1 + "\n" + pattern1 + "\n" + pattern1 + "\n" + pattern2 + "\n" + pattern1 + "\n" + pattern1 + "\n" + pattern1);

// // GRID 3 using two variables, one inside another for less variables in the console
// console.log("=================code from line 065 below is output=================\n");

// let pattern1 = "   |   |   ";
// let pattern2 = pattern1 + "\n-----------\n" + pattern1; // 11

// console.log(pattern1 + "\n" + pattern1 + "\n" + pattern2 + "\n" + pattern1 + "\n" + pattern2 + "\n" + pattern1 + "\n" + pattern1);

// //GRID 4 using an array =========================================================
// console.log("=================code from line 073 below is output=================\n");

// var gridArray = [
// "   |   |   ",
// "   |   |   ",
// "   |   |   ",
// "-----------",
// "   |   |   ",
// "   |   |   ",
// "   |   |   ",
// "-----------",
// "   |   |   ",
// "   |   |   ",
// "   |   |   "];

// console.log(gridArray) // dosen't work... prints array on 1 line...

// for(grid = 0; grid < gridArray.length; grid++){
//     console.log(gridArray[grid]) // add [grid] or infinate loop
// };

// // Extra Activity 1 - Can you log me, three lines to the console. First line should tell me your name. Second line should tell me your age. Third line should tell me your star sign. 
// console.log("=================code from line 095 below is output=================\n");

// console.log("Rob");
// console.log("44");
// console.log("Virgo");

// // or one log
// console.log("Rob\n44\nVirgo");

// console.log("My name is Rob.\nMy age is 44.\nMy starsign is Virgo.");

// // PRINT USING AN ARRAY==========================================================
// console.log("=================code from line 107 below is output=================\n");

// var details = [
// "Rob",
// "44",
// "virgo"];

// console.log(details); // prints the whole array on one line...

// for(d = 0; d < details.length; d++){ // watch where you put the semicolon ;
//     console.log(details[d]); // prints the array items on separate lines.
// };

// // Extra Activity 2 - Research another String Method=============================
// console.log("=================code from line 121 below is output=================\n");

// console.log("This Is A String.");
// console.log("This Is A String in Uppercase.".toUpperCase()); // return string in Uppercase characters
// console.log("This Is A String in Lowercase.".toLowerCase()); // return string in lowercase characters

// // don't forget zero index!!!
// console.log("This Is A String number for character 6 = s.".charCodeAt(6)); // return "s" ascii character code for lowercase "s" at character 6
// console.log("This Is A String number for character 10 = S.".charCodeAt(10)); // return "S" ascii character code for uppercase "S" at character 10

// // DONE

// // FURTHER READING
// // What is the difference between let & const?
// // use const when the value will not change, can't be changed during the program running
// // use let when the value will / might change in the code

// // What mathematical operator returns the remainder?
// // %