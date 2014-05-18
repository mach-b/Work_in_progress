/**
 * A function for inserting values into a JSON object
 * 
 * @author Mark Burton
 * 16-5-2014
 */


// CLONING OBJECT... maybe use - JSON.parse(JSON.stringify(obj))

function insertValueIntoJSON(json, key, value) {
	var proceed = false
	// is key valid? (is it a String?)
	
	// is value valid?  (is it SHA265?)
	
	
	// is key already present?
	proceed = isKeyPresent(json, key);
	if (proceed) {	
	// does key reference an array?
	// if so, add value to array.
	
	}else {
		
	}  // Is key present?
	return success; // JSON object passed by reference, return boolean indicating success.
}

function isKeyPresent(json, key) {  // Could omit paramaters, but makes clearer and allows reuse. 
	if (json.hasOwnProperty(key))  {
		return true;  // key already exists, return true.
	}
	return false; // key not present, return false.
}

function addValueToArray(json, key, value) {  // Could omit paramaters, but makes clearer and allows reuse.
	if (json[key] instanceof Array) {
		console.log("Key references an Array, pushing object.");
		//var obj = {key: value};  // Create JSON to push to Array.
		json.key.push[{key: value}];  // How bad is it using the same key for the array as well as in the array contents?  Seems pretty dodgy...
		return true;	
	}
	console.log("Key does not reference an Array, object not added.");
	return false;  // Not added
}

function doesKeyReferToArray(json, key) { 
	return (json[key] instanceof Array);
}

// TODO : Make more robust, check key exists, check it references something.
function convertKeyToObjectArray(json, key) { 
	if(!(json[key] instanceof Array)) {  
		console.log("Converting Key to reference Array");
		json[key] = [{key: json[key]}];  // ??? This simple? Lets hope so, don't let me down now JS!
		return true
	}
	console.log("Failed, Key already references an Array.");
	return false;
}
