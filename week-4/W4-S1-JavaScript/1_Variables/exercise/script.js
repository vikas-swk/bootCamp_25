var firstName = "John";
var surName = "Smith";

//const surName = "Doe";
//surName = "Doe";

var age = 25;
var retirementAge = 67;

console.log(firstName + " " + surName); //logs full name

console.log(`Hello ${firstName}`); //logs first name

console.log(firstName + " " +surName + "and I am" + ' ' + age +  ' ' + "years old"); //logs full name and age

console.log('I have' + ' ' + (retirementAge - age) + ' ' + 'years until retirement'); //logs retirement age

var a = 12; // stored 12 in a
var b = 5; // stored 5 in b

sum = a + b; // sum of a and b is stored in sum
console.log(sum); //logging in console

const c = 'Apple '; // stored Apple in c
const d = 'Orange'; //stored Orange in d
const e = 'Fruits'; //stored Fruits in e

console.log('These are' + ' ' + e + ' ' + c + '&' + ' ' + d) //logging in console and concatenating the strings


// TODO: log out the full name "John Smith" by concatenating the variables firstName and surName
/* Solution: console.log(firstName + " " + surName); */

// TODO: log out "John Smith and I amd 25 years old"
/* Solution console.log(firstName + " " +surName + "and I am" + age + "years old"); */

// TODO: Create a variable to store the number of years until retirement
/* Solution: var = yearsUntilRetirement = retirementAge - age; */

// TODO: log out "I have 42 years until retirement"
// Solution: console.log("I have" + (retirementAge - age) + "years unitl retirement");
