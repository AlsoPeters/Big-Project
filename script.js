var myvar1 = "13";
var myvar2 = 23;
    console.log(`${myvar1}${myvar2}`);
    console.log(`${myvar1} is less than ${myvar2}.`)

if (myvar1 < myvar2) {
    console.log("It's true!"); 
} else { 
    console.log("It's false!");
};

var favoriteColor = 'blue';
    console.log(`My favorite color is ${favoriteColor}.`);
    favoriteColor = 'red';
    console.log(`My favorite color changed to ${favoriteColor}.`);

// array = [ 1, 2, 3, 4, 5 ];
// for (index = 0; index < array.length; index++) {
//   console.log(array[index]);
// }

var myArray = [ 1, 2, 3, 4, 5 ];
console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray[2]);
console.log(myArray[3]);
console.log(myArray[4]);

let myNewTotal = 0

for (index = 0; index < myArray.length; index++) {
    myNewTotal = myNewTotal + myArray[index]
}
console.log(myNewTotal)

//?
const arrayTotal = myArray.reduce(add,0);

function add(accumulator, a ) {
    return accumulator + a;
}
console.log(arrayTotal);




const rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
console.log(`The colors rainbow include ${rainbow.join(', ')}.`);

var a = 1000;
var b = 20;
var c = 41;

var d = (a / b)
console.log(d);

var e = (a % c)
console.log(e);

let person = {first_name:"Kyle", last_name:"Garcia", age:34,};
console.log(`My name is ${person.first_name} ${person.last_name} and I am ${person.age} years old.`);
person.location = "Japan"
console.log(`My name is ${person.first_name} ${person.last_name} and I am ${person.age} years old and i live in ${person.location}.`);

var a1 = true;
var a2 = false;

if (a1 === true) {
    console.log("This should show in the log.")
};

if (a2 === true) {
    console.log("This false boy should not show in the log.")
};

if (a2 === false) {
    console.log("This false boy should show in the log.")
};

a1 = false

if (a1 === true) {
    console.log("I swear this BETTER NOT show in the log")
} else {
    console.log("I know how to make an else statement work.")
};

const goodBoy = "*Pats self on back*";
    console.log(goodBoy);

var newArray = [true, false, false, true, false, true, true];
for (index = 0; index < newArray.length; index++) { 
    if (newArray[index] === true) {
    console.log(newArray[index], index)   
    };
}
let tally = 0;
    for (index = 0; index < newArray.length; index++) {
    // if (newArray[index] === true) {
    // newArray[index] = newArray[index];
    
    if (newArray[index] === true) {
    tally = tally + 1
    console.log(newArray[index], tally)    
}}

const trueCounter = tally 
    console.log(`There were ${trueCounter} true's in the array.`)

let amigay = false

if (trueCounter > 3) {
    amigay = true
    console.log(`Kiru is gay: ${amigay}`)
};

function printFullName(name1, name2) {
    console.log(`Printing full name: ${name1} ${name2}`)  
}
printFullName(person.first_name, person.last_name);

let numberHelper = 0

function printNumbers(array) {
    for (index = 0; index < array.length; index++) {
        console.log(array[index])
    }
}
printNumbers(myArray);

function printItAll(name1, name2, numArray) {
    printFullName(name1, name2);
    printNumbers(numArray);
}
printItAll(person.first_name, person.last_name, myArray);

function iAmACodingGod() {
    console.log("My name is Kiru and i am the coding god")
} 

iAmACodingGod()
    
