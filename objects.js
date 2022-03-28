// // MASTER 36 DAY 04 NOTES OBJECTS================================================
// // REMEMBER PRINT TO TERMINAL IS YOUR FRIEND... USE....
// // console.log("=================code from line 000 below is output=================\n");
// // replace the number 000 with the line number your code starts at.

// // TASK PERSON===================================================================

// console.log("=================code from line 008 below is output=================\n");

// const person = {
//         name: "Rob",
//         age: 44,
//         songs: ["Purple Rain", "Sleeping Sun"]
// };

// console.log(person); // returns all values
// console.log(person.name); // returns name only
// console.log(person.age); // returns age only
// console.log(person.songs); // returns all values for songs

// console.log(person.songs); // returns all values for songs
// console.log(person.songs[0]); // returns value in songs at index 0

// // // BRACKET NOTATION
// console.log(person["name"]); // returns name only
// console.log(person["age"]); // returns age only
// console.log(person["songs"]); // returns all values for songs
// console.log(person["songs"][1]); // returns value in songs at index 1

// // ACTIVITY ALARM ===============================================================

// console.log("=================code from line 032 below is output=================\n");

// let day = "Sunday";

// const alarms = {
//     weekendAlarm: "no alarm needed",
//     weekdayAlarm: "get up at 7am"
// };

// // console.log(alarms);

// if(day == "Saturday" || day == "Sunday"){
//     alarm = alarms.weekendAlarm;
//     console.log(alarm);
// }
// else {
//     alarm = alarms.weekdayAlarm;
//     console.log(alarm);
// }

// // ACTIVITY 1 ===================================================================
// // Let’s edit our person object to include... 
// // A function called sayHi and when it’s called, it should return “Hello my name is ${this.name}”
// console.log("=================code from line 054 below is output=================\n");

// const person = {
//     name: "Rob",
//     age: 44,
//     songs: ["Purple Rain", "Sleeping Sun"],
//     sayHi: function() {
//         return `Hello my name is ${this.name}`;
// }
// };

// console.log(person.sayHi());

// // ACTIVITY 2 PET================================================================
// // Create an object called pet with the key values of: name, typeOfPet, age, colour
// // And methods called eat and drink. They should return a string saying [Your Pet Name] is eating/drinking.

// console.log("=================code from line 072 below is output=================\n");

// const pet = {
//     name: "Blue",
//     typeOfPet: "Dog",
//     age: 14,
//     colour: "Black with white paws",
//     eat: function(){
//         return `Your pet ${this.name} is eating`;
//     },
//     drink: function(){
//         return `Your pet ${this.name} is drinking`;
//     }
// };

// console.log(pet.name);
// console.log(pet.eat());
// console.log(pet.drink());

// // ACTIVITY 3 COFFESHOP========================================================================
// // Create an object called coffeeShop with key values of:
// // branch, drinks with prices, food with prices And methods called drinksOrdered and foodOrdered.
// // They should return a string saying [Your order] is ... with all items chosen with costs and total costs.

// console.log("=================code from line 096 below is output=================\n");

// let yourOrder = [];
// let orderTotal = 0;

// const coffeeShop = {
//     branch: "The Kitchen",

//     drinks: {
//         // Flat_White: 2.05,
//         Espresso: 1.99,
//         Macchiato: 2.69,
//         // Caffe_Mochha: 2.39,
//         // Skinny_Latte: 2.59,
//         Hazelnut_Latte: 2.69,
// },    
//     food:  {      
//         BLT: 1.99,
//         // Tuna_and_Mayo: 2.39,
//         BBQ_Chicken: 2.99,
//         // Ham_and_Cheese: 2.69,
//         Steak_and_Cheese: 3.69
// },
//     foodOrdered(){
//         for (let price of Object.values(coffeeShop.food)){orderTotal += price
//         };

//         yourOrder.push(Object.entries(coffeeShop.food))
//         return(`${Object.entries(coffeeShop.food)}`);
//     },

//     drinksOrdered(){
//         for (let price of Object.values(coffeeShop.drinks)){orderTotal += price
//         };

//         yourOrder.push(Object.entries(coffeeShop.food))
//         return(`${Object.entries(coffeeShop.drinks)}`);
//     }
// }

// coffeeShop.foodOrdered();
// coffeeShop.drinksOrdered();

// // console.log(`Your order from: ${branch}\n${yourOrder}`);
// console.log(`Your order of:\n\n${yourOrder}\n`);
// console.log(`Your order total is: £${orderTotal.toFixed(2)}`);

