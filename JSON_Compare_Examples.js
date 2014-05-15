/**
 * @author Mark Burton
 */


var jsonA = {"a": "A", "b": "B"};
var jsonB = {"a": "A", "b": "B"};
var jsonC = {"b": "B", "a": "A"};
var jsonD = jsonC;
var jsonE = {"b": "X", "a": "Y"};

console.log("Compare JSONs A & B, same variables, values, and order: "+(jsonA === jsonB));  // is false
console.log("Compare JSONs B & C, same variables, and values, but differnt order: "+(jsonB === jsonC));  // is false
console.log("Compare JSONs A & B, same variables, values, and order, as String: "+(JSON.stringify(jsonA) === JSON.stringify(jsonB))); // is true
console.log("Compare JSON against itself: "+(jsonD === jsonC)); // is true

var i = 0;
for (var key in jsonA) {
	
	console.log("Key Number " + i + " = "+ key);
	console.log("The Value assigned to " + key + " = " + jsonA[key]); // works correctly for these simple values
	i += 1;

	console.log("Does jsonA contain the same value as jsonC for this key : " + (jsonA[key] === jsonC[key]));  // is true
	console.log("Does jsonA contain the same value as jsonE for this key : " + (jsonA[key] === jsonE[key])); // is false
		
}


