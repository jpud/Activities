// create a constant variable (const)
const demo;

// create a variable that can be reassigned (let)
let example;

// create three variables and assign them values of different data types (=)
const string = "this is a string";
const number = 23;
const boolean = true;
let juice = false;
// print the types of two variables that reference two different data types (typeof)
// TIP: console.log() prints a value in the console/terminal
console.log(typeof string);
console.log(typeof boolean);

// change the value referenced by a variable (dynamic typing)
juice = true;

// print the type of the variable you just changed (typeof)
console.log(typeof juice);

// create variables and give them values to complete the sentences that will print  below.
// Which variables need to be created?
// What type of data needs to go in each variable?
const name = "Jake";
const language = "javascript";
const length = 2;
const truth = false;

console.log("Hello, my name is " + name + ", and I am learning " + language + ". I have been practicing for only " +  length + " weeks, so my status as a master is: " + truth + ".");