// // MASTER 36 DAY 03 NOTES LOOPS ARRAYS===========================================
// // REMEMBER PRINT TO TERMINAL IS YOUR FRIEND... USE....
// // console.log("=================code from line 000 below is output=================\n");
// // replace the number 000 with the line number your code starts at.

// console.log("=================code from line 006 below is output=================\n");

// let marines = [
//     "Ultramarine",
//     "Blood Angels",
//     "Grey Knights",
// ];

// console.log(marines);

// console.log(marines[2]);

// marines[2] = "Black Templars";

// console.log(marines[2]);

// console.log(marines.length);

// // .push adds a new item to the end of the array

// marines.push("Stormhosts");

// console.log(marines);

// // .pop removes the last item in the array

// marines.pop("Stormhosts");

// console.log(marines);

// // Activity 01===================================================================
// // Make an array of 3 your favourite songs. 3 of them. Log them to the console.

// console.log("=================code from line 039 below is output=================\n");

// let songs = [
//     "Sleeping sun",
//     "Amused to death",
//     "House of the rising sun",
// ];

// console.log(songs);

// songs.push("Nothing else matters");

// console.log(songs);

// songs.push("");

// console.log(songs);

// songs.pop();

// console.log(songs);

// // ACTIVITY 02===============================================================
// // Using MDN choose one of the following methods:
// // map(), shift(), unshift(), splice(), unsplice().
// // Create a program to demonstrate the use of the method.

// console.log("=================code from line 066 below is output=================\n");

// let songs = [
//     "Sleeping sun",
//     "Amused to death",
//     "House of the rising sun",
// ];

// songs.shift(); // remove first item in array

// console.log(songs);

// songs.unshift("Purple Rain"); // add item to the start of the array

// console.log(songs);

// songs.reverse(); // reverse the order of items in the array

// console.log(songs);

// // LOOPS=========================================================================
// //
// console.log("=================code from line 088 below is output=================\n");

// let songs = [ // random songs last listened to
//     "Sleeping sun",
//     "Amused to death",
//     "House of the rising sun",
// ];

// for(let i = 0; i < songs.length; i++) {
//     console.log(songs[i]);
//     console.log(`i = ${i} = ${songs[i]}`);
// }

// let multiplesTwo = [];

// for(let number = 0; number < 20; number++) {
//     if(number % 2 == 0) {
//         multiplesTwo.push(number);
//     }
// }

// console.log(`Numbers divisable by 2 are ${multiplesTwo}.`);

// WHILE LOOP=======================================================================

// console.log("=================code from line 113 below is output=================\n");

// let age = 15;

// while(age < 18) {
//     console.log("You're a child!");
//     age++
// }
// console.log("You're an adult!");

// // CARDS

// console.log("=================code from line 125 below is output=================\n");

// let current_card = "Clubs";
// let cards = ["Diamonds", "Spade", "Clubs", "Hearts" ];

// while(current_card != "Spade") {
//     console.log(current_card);
//     current_card = cards[Math.floor(Math.random()*4)];
// }

// console.log(current_card);


// ACTIVITY 01 - loop through the films array=======================================

// // Create an array that lists your favourite films, up to 5 elements.
// // Add 2 more using a method. Use a loop to cycle through the array

// console.log("=================code from line 143 below is output=================\n");

// let films = [
//     "Interstellar",
//     "Ready Player One",
//     "Pacific Rim",
//     "Project Power",
// ];
// // add film with a method
// films.push("Chappie"); // add new item to END of the array list

// films.unshift("The Hogfather"); // add item to the START of the array list

// // loop throught the array and print to terminal
// for(let i = 0; i < films.length; i++){ // i is 0 so start counting from 0
//     console.log(films[i]);
// }

// // TESTING
// // loop through the array and print to terminal with array index (i) counter before the film

// console.log("=================code from line 164 below is output=================\n");

// console.log(`\n i = 0`);
// for(let i = 0; i < films.length; i++){ // i = 0
//     console.log(`Index = ${i} = ${films[i]}`);
// } // this will show the value of {i} as the index number and return the film name at index number [i] in the array

// console.log(`\n i = 1`); // new line
// // loop through the array and print to terminal with array index (i) counter before the film
// for(let i = 1; i < films.length; i++){ // i = 1
//     console.log(`Index = ${i} = ${films[i]}`);
// } // this will show the value of {i} as the index number and return the film name at index number [i] in the array

// console.log(`\n i = 2`)  // new line
// // loop through the array and print to terminal with array index (i) counter before the film
// for(let i = 2; i < films.length; i++){ // i = 2
//     console.log(`Index = ${i} = ${films[i]}`);
// } // this will show the value of {i} as the index number and return the film name at index number [i] in the array

// // loop throught the array and print to terminal
// for(let i = 0; i < films.length -1; i++){ // i is 0 so start counting from 0
//     console.log(films[i]);
// }

// // ACTIVITY 02 - Generate 6 random numbers between 1 and 50======================

// console.log("=================code from line 190 below is output=================\n");

// // first attempt
// let randNumber = 0;
// for(let i = 0; i < 6; i++){
//     randNumber = Math.floor(Math.random()*50+1);
//     if(randNumber == 50){
//         console.log(`${randNumber} = You found FIFTY`);
//     }
//     else {
//     console.log(randNumber);
//     }
// }

// // ACTIVITY 02 ==================================================================
// // second attempt using variables for a min and max value

// console.log("=================code from line 207 below is output=================\n");

// let min = 1; // set minimum starting value
// let max = 50; // set maximum end value

// function randNumberGenerator(min, max){ // random number gererator with min and max
//     return Math.floor(Math.random() * (max - min +1) + min);
// }

// for(let i = 0; i < 6; i++){ // set the number of iterations / loops
//     let randNumber = randNumberGenerator(min, max); 
//     console.log(randNumber);
// }

// // ACTIVITY 03 - loop to put 0-9 and 9-0 in terminal=============================
// // basic forwards

// console.log("=================code from line 224 below is output=================\n");

// for(let i = 0; i <= 9; i++){ // <= 9 to include the number 9
//     console.log(i);
// }

// // 0 to 9 with variables

// let iStart = 0;
// let iEnd = 9;

// for(let i = iStart; i <= iEnd; i++){  // <= iEnd to include the iEnd number value
//     console.log(i);
// }

// // ACTIVITY 03 loop to put 0-9 and 9-0 in terminal===============================
// // basic reverse

// console.log("=================code from line 242 below is output=================\n");

// for(let i = 9; i > -1; i--){ // > -1 to include the number 9
//     console.log(i);
// }

// // 9 to 0 is in reverse = swap the iStart and iEnd values and and iEnd math operator to > -1 to include zero
// // and change the increment ++ to decrement -- to decrease the value of i

// let iStart = 9;
// let iEnd = -1;

// for(let i = iStart; i > iEnd; i--){
//     console.log(i);
// }

// // ACTIVITY 04 check 3rd film in list, it's not ghostbusters=====================

// console.log("=================code from line 260 below is output=================\n");

// let findFilm = "Pacific Rim"; // the film to find

// let films = [
//     "Interstellar",
//     "Ready Player One",
//     "Pacific Rim",
//     "Project Power",
// ];
// // console.log(films);

// if(films[2] == findFilm){ // check if film in index 2, 3rd film is array matches findFilm
//     console.log(`Yay ${findFilm} is the 3rd film!`);
// }
// else { // if no match
//     console.log(`Boo! it's not ${findFilm}.`);
// }

// // ACTIVITY 05 - Generate a random number between 1 and 30 six times.
// // For each random number generated, check if this number of divisible by 7 or not.
// // Log out a message to the console if it is divisible by 7 or not.
// // first attempt

// console.log("=================code from line 284 below is output=================\n");

// let randNumber = 0;
// for(let i = 0; i < 6; i++){
//     randNumber = Math.floor(Math.random()*30+1);
//     if(randNumber % 7 == 0){
//         console.log(`The number ${randNumber} is divisable by 7`);
//     }
//     else {
//     console.log(`The number ${randNumber} is not divisable by 7`);
//     }
// }

// // ACTIVITY 05 ==================================================================
// // second attempt

// console.log("=================code from line 300 below is output=================\n");

// let min = 1; // set minimum value
// let max = 30; // set maximum value
// let iterations = 6; // set the number of iterations / loops
// let divideBy = 7; // set the number to divide by

// function randNumberGenerator(min, max){ // random number gererator with min and max
//     return Math.floor(Math.random() * (max - min +1) + min);
// }

// // ACTIVITY 03 OUTPUT OPTION 1 multi console log output =========================
// // THERE ARE TWO OUTPUT OPTIONS I WAS TESTING.

// console.log("=================code from line 314 below is output=================\n");

// for(let i = 0; i < iterations; i++){ // set the number of iterations / loops
//     let randNumber = randNumberGenerator(min, max); // generate random number using function
//     // console.log(randNumber);
//         if(randNumber % divideBy == 0){ // log if number is divisable by divideBy variable
//             console.log(`Iteration ${i}, The number ${randNumber} is divisable by ${divideBy}.`);
//         }
//         else { // log if number is not divisable by divideBy variable
//             console.log(`Iteration ${i}, The number ${randNumber} is not divisable by ${divideBy}.`);
//         }
// }

// // ACTIVITY 03 OUTPUT OPTION 2 single console log output ========================

// let divideState = "" set a division state as string to return in console log terminal

// for(let i = 0; i < iterations; i++){ // set the number of iterations / loops
//     let randNumber = randNumberGenerator(min, max); // generate random number using function
//     // console.log(randNumber);
//         if(randNumber % divideBy == 0){ // check if number is divisable by divideBy variable
//             divideState = "is"; // set divide state variable to "is"
//         }
//         else {
//             divideState = "is not";  // set divide state variable to "is not"
//         } // log to terminal with divideState variable
//         console.log(`Iteration ${i}, The number ${randNumber} ${divideState} divisable by ${divideBy}.`);
// }

// // ACTIVITY 06 - Social media matching followers between arrays==================
// // SURELY THIS IS NOT THIS EASY!! WHERE HAVE I GONE WRONG?

// console.log("=================code from line 346 below is output=================\n");

// let bobsFollowers = [
//     "Adam",
//     "Benny",
//     "Charles",
//     "Doug",
//     // "Ellie",
//     // "Frank",
//     // "George",
// ];

// let hannahsFollowers = [
//     "Adam",
//     "Ellie",
//     "Frank",
//     "Doug",
//     // "George",
//     // "Benny",
// ];

// for(let b = 0; b < bobsFollowers.length; b++){ // loop through bobs followers
//     for(let h = 0; h < hannahsFollowers.length; h++){ // loop through all hannahs followers for each 1 of bobs
//         if(bobsFollowers[b] == hannahsFollowers[h]){ // loop all hannahs followers to compare to bobs
//             console.log(`${hannahsFollowers[h]} follows Bob and Hannah.`); // if true log to terminal
//         }
//     }
// }

// // DONE


