// 1.	Declare two variables: admin and name. Assign the value "Umair Azmat" to name.
//  Copy the value from name to admin. Show the value of admin using alert (must output Name).

var admin;
var name;
name = "Umar Azmat"
admin = "Umar Azmat"
alert(admin);

// 2.	Create a variable with the name of our planet.
//  How would you name such a variable?

var earth;


// 3.	Create a variable to store the name of a current visitor
//  to a website. How would you name that variable?

var yourName;
yourName = prompt("Enter your Name")

// 4.	Create a string variable called favDrink and assign a value to it.

var favDrink;
favDrink = "Coke";

// 5.	Create a number variable called favNum and assign a value to it

var favNum;
favNum = 07;

// 6.	Create a function block called myFavs that console logs your
//  answers, don't forget to invoke the myFavs function.

function myFavs () {

console.log ("myfavourite drink is"+favDrink+"and My favourite number is"+favNum );
}

// 7.	Create an object called person, with name set to Umair and age set to 20.

Object person = {name:"Umair", age:20};


// 8. write a JS program, define two variables and sum those two
//  variable and save result in third variable and print in console?



var x = 10
var y = 20
var z = x + y;
console.log(z)

// 9.	write a JS program, that can divide two numbers 
// and show the result in console? console.log("result of firstProgram", a)


var a = 10
var b = 20
var c = x / y;
console.log(c)


// 10.	write a JS program, that can add two number, divide result by 5
//  and show in console?console.log("result of firstProgram", a);

var d = 10;
var e = 20;
var f = d + e;
var g = f / 5;
console.log (g)


// 11.	write a JS program, that can convert temp from F into C and show into console, using
//  C = (F − 32) * 5/9. use if F = 50, what will be the value of C? console.log("Divide two number", a);

var F = 50
var C = (F-32)* 5/9
console.log (C)


// 12.	Write a JavaScript program to find the sum of two numbers
//  obtained from prompt and display the result using alert.

var j =parseInt (prompt("Enter first number"));
var k =parseInt (prompt("Enter second number"));
var l = j+k
alert (l)



// 13.	Write a JavaScript program to find the difference of two numbers
//  obtained from prompt and display the result using console.log

var m =parseInt (prompt("Enter first number"));
var n =parseInt (prompt("Enter second number"));
var o = m-n
alert (o)


// 14.	Write a JavaScript program to find the product of two numbers 
// obtained from prompt and display the result using alert.

var p =parseInt (prompt("Enter first number"));
var q =parseInt (prompt("Enter second number"));
var r = p*q
alert (r)

// 15.	Write a JavaScript program to find the quotient of two numbers
//  obtained from prompt and display the result using console.log.

var s =parseInt (prompt("Enter first number"));
var t =parseInt (prompt("Enter second number"));
var quotient = s/t;
alert (quotient)


// 16.	Write a JavaScript program to find the remainder of two numbers obtained from
//  prompt using the modulus operator and display the result using alert.


var u =parseInt (prompt("Enter first number"));
var v =parseInt (prompt("Enter second number"));
var w = u%v
alert (w)
