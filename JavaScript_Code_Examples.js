/**
 * @author Mark Burton
 */


// Declarative Function
function sayHello(toWhom) {
	alert.sayHello("Hello "+toWhom+"!");
}
sayHello("World");


function func(x, y) {
	return x * y;
}

// Primitives are passed by value.
// Objects are passed by reference.


// Anonymous Function
var sayHello = new Function("toWhom", "alert("Hello " + toWhom + "!");");
sayHello("World");

var func = new Function("x", "y", "return x * y");


// Function Literals
var str = new String("Learning Java");
document.writeln(str.replace(/Java/, "JavaScript"));

var func = function(x, y) {
	return x*y;
}
alert(func(3,3));



