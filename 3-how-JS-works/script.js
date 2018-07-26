///////////////////////////////////////
// Lecture: Hoisting
/*
// functions
calculateAge(1965);


function calculateAge(year) {
    console.log(2016 - year);
    
}


// retirement(1990);

var retirement = function(year) {
    console.log(65 - (2016 - year));
    
}

// variables

console.log(age);
var age = 23;

function foo() {
    console.log(age);
    var age = 65;  
}
foo();
console.log(age);


*/
///////////////////////////////////////
// Lecture: Scoping

// Lexical scoping: when a function is written inside another function, it gets access to the variables inside the parent function

// First scoping example
/*

var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/

// Example to show the differece between execution stack and scope chain


var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}




///////////////////////////////////////
// Lecture: The this keyword














