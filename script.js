/*****************************
 Variables and data types
*****************************/
/*
var firstName = 'Brendan';
console.log(firstName);

var lastName = 'Lindsay';
var age = 27;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'analyst';
console.log(job);

// Variable naming rules
var _3years = 3;
var johnMark = 'Jon and Mark';
var if = 23;
*/
/*****************************
 Variable mutation and type coercion
*****************************/
/*
var firstName = 'Brendan';
var age = 28;

//Type coercion
console.log(firstName, age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' +  isMarried);

//Variable mutation
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' +  isMarried);
var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);
*/
/*****************************
 Basic operators
*****************************/
/*
var now, yearJohn, yearMark;
now = 2018;
ageJohn = 28;
ageMark = 33;

// Math operators
yearJohn = now - ageJohn;
yearMark = now - ageMark;
console.log(yearJohn);
console.log(yearMark);

console.log(now + 2);
console.log(now * 2);
console.log(now / 2);

// Logical operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

// Typeof operators
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');
var x;
console.log(typeof x);
*/
/*****************************
 Operator precedence
*****************************/
/*
var now = 2018;
var yearJohn = 1989;
var yearMark = 1983;
var fullAge = 18;

// Multiple operators
var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

// Grouping
var ageJohn = now - yearJohn;
var ageMark = now - yearMark;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6;
console.log(x, y);

// More operators
x *= 2;
console.log(x);
x += 10;
console.log(x);
x++;
console.log(x);
x--;
console.log(x);
*/

/*****************************
 CODING CHALLENGE 1
*****************************/
/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).




1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true").

GOOD LUCK 😀
*/
/*
var massMark = 78; // kg
var heightMark = 1.69; // meters

var massJohn =  92; // kg
var heightJohn = 1.95; // meters

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIJohn, BMIMark);

var isHigher = BMIMark > BMIJohn;

console.log("Is Mark's BMI higher than John's? " + isHigher);
*/
/*****************************
 If / else statements
*****************************/
/*
var firstName = 'John';
var civilStatus = 'single';
if (civilStatus === 'married') {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' is not married! :(');
}

var isMarried = true;
if (isMarried) {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' is not married! :(');
}
*/

// Using what I learned to make code challenge solution more efficient
/*
var massMark = 78; // kg
var heightMark = 1.69; // meters

var massJohn =  92; // kg
var heightJohn = 1.95; // meters

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIJohn, BMIMark);

if (BMIMark > BMIJohn) {
    console.log("Mark's BMI is higher than John's!");
} else {
    console.log("John's BMI is higher than Mark's!");
}
*/
/*****************************
 Boolean logic
*****************************/
/*
var firstName = 'John';
var age = 35;
if (age < 13) {
    console.log('John is a boy.');
} else if (age >= 13 && age < 20) { // Between 13 and 20
    console.log('John is a teenager.');
} else if (age >= 20 && age <30) {
    console.log('John is a young adult.');
} else {
    console.log('John is an old man!');
}
*/
/*****************************
 The ternary operator and switch statements
*****************************/
/*
var firstName = 'John';
var age = 21;
var legalAge = 18;

// Ternary operator
age >= legalAge ? console.log(firstName + ' drinks beer.')
: console.log(firstName + ' drinks juice.');

var drink = age >= legalAge ? 'beer.' : 'juice.';
console.log(firstName, 'drinks', drink);
*/
/*
if (age >= legalAge) {
    var drink = 'beer.';
} else {
    var drink = 'juice.';
}
console.log(firstName, 'drinks', drink);
*/

// Switch statement
/*
var job = 'cop';

switch (job) {
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drives an uber in Charlotte.');
        break;
    case 'designer':
        console.log(firstName + ' designs websites.');
        break;
    default:
        console.log(firstName, 'is a', job + ".");
}
*/

// Using what I learned to make code challenge solution more efficient
/*
var firstName = 'John';
var age = 10;

if (age < 13) {
    stage = 'a boy.';
} else if (age >= 13 && age < 20) { // Between 13 and 20
    stage = 'a teenager.';
} else if (age >= 20 && age <30) {
    stage = "a young adult.";
} else {
    stage = "an old man!";
}
console.log(firstName, 'is', stage);

switch (true) {
    case age < 13:
        console.log('John is a boy.');
        break;
    case age >= 13 && age <20:
        console.log('John is a teenager.');
        break;
    case age > 20 && age < 30:
        console.log('John is a young adult.');
        break;
    default:
        console.log('John is an old man!');
}
*/
/*****************************
 Truthy and falsy values and equality operators
*****************************/

// falsy values: undefined, bull, 0, '', NaN
// truthy values: NOT falsy values
/*
var height;
height = 23;

if (height || height === 0) {
    console.log('Variable is defined.');
} else {
    console.log('Variable has NOT been defined.');
}
console.log(height);

// Equality operators
if (height === '23') {
    console.log('The == operator does type coercion!');
} else {
    console.log('The === operator does NOT type coercion!');
}
*/
/*****************************
 CODING CHALLENGE 2
*****************************/
/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK 😀
*/
/*
var scoreJohn = (89 + 120 + 103) / 3;
var scoreMike = (116 + 94 + 123) / 3;
var scoreMary = (97 + 134 + 105) / 3;
console.log(scoreJohn, scoreMike, scoreMary);

// Using if else

if (scoreJohn > scoreMike && scoreJohn > scoreMary) {
    console.log('John has the highest average score of', scoreJohn);
} else if (scoreMike > scoreJohn && scoreMike > scoreMary) {
    console.log('Mike has the highest average score of', scoreMike);
} else if (scoreMary > scoreJohn && scoreMary > scoreMike) {
    console.log('Mary has the highest average score of', scoreMary);
} else {
    console.log("It's a tie!");
}

// Using switch case

switch (true) {
    case scoreJohn > scoreMike && scoreJohn > scoreMary:
        console.log('John has the highest average score of', scoreJohn);
        break;
    case scoreMike > scoreJohn && scoreMike > scoreMary:
        console.log('Mike has the highest average score of', scoreMike);
        break;
    case scoreMary > scoreJohn && scoreMary > scoreMike:
        console.log('Mary has the highest average score of', scoreMary);
        break;
    default:
        console.log("It's a tie!");
}
*/
/*****************************
 Functions
*****************************/
/*
function calculateAge(birthYear) {
    return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);

console.log(ageJohn, ageMike, ageJane);

function yearsUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;

    if (retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years.');
    } else {
        console.log(firstName + ' retired ' + (retirement * -1) + ' years ago.');
    }
}

yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1948, 'Mike');
yearsUntilRetirement(1969, 'Jane');
*/
/*****************************
 Function statements and expressions
*****************************/























