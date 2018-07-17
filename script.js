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
/*
// Function declaration
// function whatDoYouDo(job, firstName) {}

// Function expression
var whatDoYouDo = function(job, firstName) {
    switch (job) {
        case 'teacher':
            return firstName + ' teaches kids how to code.';
        case 'driver':
            return firstName + ' drives uber in Charlotte.';
        case 'designer':
            return  firstName + ' designs websites.';
        default:
            return firstName + ' is a ' + job;
    }
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('driver', 'Jane'));
console.log(whatDoYouDo('designer', 'Mark'));
console.log(whatDoYouDo('painter', 'Matt'));
*/
/*****************************
 Arrays
*****************************/
/*
// Initialize new array
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names[0], years[0]);
console.log(names.length);

// Mutate array data
names[1] = 'Ben';
names[names.length] = 'Mary';

console.log(names);

// Different data types
var john = ['John', 'Smith', 1990, 'teacher', false];
john.push('blue');
john.unshift('Mr');

console.log(john);

john.pop();

console.log(john);

john.shift();

console.log(john);

console.log(john.indexOf(1990));

var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a desinger' : 'John IS a designer';
console.log(isDesigner);
*/
/*****************************
 CODING CHALLENGE 3
*****************************/
/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

GOOD LUCK 😀
*/
/*
function tipCalculator(bill) {
    var percentage;
    if (bill < 50) {
        percentage = .2;
    } else if (bill >= 50 && bill < 200) {
        percentage = .15;
    } else if (bill >= 200) {
        percentage = .1;
    }
    return percentage * bill;
}

var bills = [124, 48, 268];

var tips = [tipCalculator(bills[0]),
            tipCalculator(bills[1]),
            tipCalculator(bills[2])];

var total = [tips[0] + bills[0],
             tips[1] + bills[1],
             tips[2] + bills[2]];

console.log(tips);
console.log(total);
*/
/*****************************
 Objects and properties
*****************************/
/*
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
};

// Object literal
console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);

john.job = 'designer';
john['isMarried'] = true;
console.log(john);

// new Object syntax
var jane = new Object();
jane.name = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);
*/
/*****************************
 Objects and methods
*****************************/
/*
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function(birthYear) {
        this.age = 2018 - this.birthYear;
    }
};

john.calcAge();
console.log(john);
*/
/*****************************
 Coding Challenge 4
*****************************/
/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

GOOD LUCK 😀

var john = {
    firstName: 'John',
    lastName: 'Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function(BMI) {
        this.BMI = this.mass / (this.height * this.height);
    }
}

john.calcBMI();
console.log(john);
*/
/*****************************
 Loops and iteration
*****************************/
/*
for (var i = 0; i < 10; i++) {
    console.log(i);
}
// i = 0, 0 < 10 true, log i to console, i++

// For loop
var john = ['John', 'Smith', 1990, 'designer', false, 'green'];

for (var i = 0; i < john.length; i++) {
    console.log(john[i]);
}

// While loop
var i = 0;
while (i < john.length) {
    console.log(john[i]);
    i++;
}
*/
/*
// Continue and break statements
var john = ['John', 'Smith', 1990, 'designer', false, 'green'];

for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') continue;
    console.log(john[i]);
}

for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') break;
    console.log(john[i]);
}


// Backwards looping
var john = ['John', 'Smith', 1990, 'designer', false, 'green'];

for (var i = john.length - 1; i >= 0; i--) {
    if (typeof john[i] !== 'string') continue;
    console.log(john[i]);
}

for (var i = john.length - 1; i >= 0; i--) {
    if (typeof john[i] !== 'string') break;
    console.log(john[i]);
}
*/
/*****************************
* CODING CHALLENGE 5
*/

/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.


EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average

GOOD LUCK 😀
*/

var john = {
    fullName: 'John Smith',
    bills: [124, 48, 268, 180, 42],
    calcTips: function() {
        this.tips = [];
        this.finalValues = [];

        for (var i = 0; i < this.bills.length; i++)
        {
            // Determine % based on tipping rules
            var percentage;
            var bill = this.bills[i];
            if (bill < 50) {
                percentage = .2;
            } else if (bill >= 50 && bill < 200) {
                percentage = .15;
            } else {
                percentage = .1;
            }

            // Add results to the corresponding arrays
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
        }
    }
}

var mark = {
    fullName: 'Mark Miller',
    bills: [77, 475, 110, 45],
    calcTips: function() {
        this.tips = [];
        this.finalValues = [];

        for (var i = 0; i < this.bills.length; i++)
        {
            // Determine % based on tipping rules
            var percentage;
            var bill = this.bills[i];
            if (bill < 100) {
                percentage = .2;
            } else if (bill >= 100 && bill < 300) {
                percentage = .1;
            } else {
                percentage = .25;
            }

            // Add results to the corresponding arrays
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
        }
    }
}

function calcAverage(tips) {
    var sum = 0;
    for (var i = 0; i < tips.length; i++) {
        sum = sum + tips[i];
    }
    return sum / tips.length;
}


mark.calcTips();
john.calcTips();

john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);
console.log(john, mark);

if (john.average > mark.average) {
    console.log(john.fullName + '\'s family pays higher tips, average of $' + john.average);
}   else if (mark.average > john.average) {
    console.log(mark.fullName + '\'s family pays higher tips, average of $' + mark.average);
}















