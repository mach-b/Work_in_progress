/**
 * A function for inserting values into a JSON object
 *
 * @author Mark Burton
 * 16-5-2014
 */

// CLONING OBJECT... maybe use - JSON.parse(JSON.stringify(obj))

/**
 * QUESTIONS for Guy:
 * How often should we check a variable is valid?
 * Does he think it's worth checking hash is valid, or trust the process that generates it?
 */

/**
 * Inserts a key and value into a JSON object.
 * @param {Object} json
 * @param {String} key
 * @param {String} value
 * @return {boolean} indicating success
 */
function insertValueIntoJSON(json, key, value) {
	// JSON object passed by reference, return boolean indicating success.

	// is key valid? (is it a String?)
	if (!( key instanceof String) || !(typeof key == "string")) {
		console.log("Insertion failed, Key is not a String.")  // TODO Remove once tested and approved?
		return false;
	}
	// is value valid?  (is it SHA265?)
	if (!( value instanceof String) || !(typeof value == "string")) {  // Could also check length and valid characters, but is it worth it?
		console.log("Insertion failed, Value is not a String.")  // TODO Remove once tested and approved?
		return false;
	}
	// is key already present?
	if (isKeyPresent(json, key)) {
		// does key reference an array?
		if (doesKeyReferToArray(json, key)) {
			// if so, add value to array.
			return addValueToArray(json, key, value);
		} else {
			// Array does not exise
			convertKeyToObjectArray(json, key);
			// Will convert existing entry to reference Array and insert that entry as the first value.
			return addValueToArray(json, key, value);
		}

	} else {
		// Key does not already exist.
		return json[key] = value;
	}// Is key present?
	
}

/**
 * Is the Key already present in the JSON.
 * @param {Object} json
 * @param {String} key
 * @return {boolean}  indicating success
 */
function isKeyPresent(json, key) {// Could omit paramaters, but makes clearer and allows reuse.
	if (json.hasOwnProperty(key)) {
		return true;
		// key already exists, return true.
	}
	return false;
	// key not present, return false.
}

/**
 * Adds a Key Value pair (object) to an Array. 
 * @param {Object} json
 * @param {String} key
 * @param {String} value
 * @return {boolean}  indicating success
 */
function addValueToArray(json, key, value) {// Could omit paramaters, but makes clearer and allows reuse.
	if (json[key] instanceof Array) {
		console.log("Key references an Array, pushing object.");  // TODO Remove once tested and approved?
		//var obj = {key: value};  // Create JSON to push to Array.
		json.key.push[ {
			key : value
		}];  // How bad is it using the same key for the array as well as in the array contents?  Seems pretty dodgy...
		return true;
		// JSONlint says it's valid format, hopefully that means it's OK.
	}
	console.log("Key does not reference an Array, object not added.");  // TODO Remove once tested and approved?
	return false;
	// Not added
}

/**
 * Establishes if Key references an Array.
 * @param {Object} json
 * @param {String} key
 * @return {boolean}  indicating yes or no.
 */
function doesKeyReferToArray(json, key) {
	return (json[key] instanceof Array);
}

/**
 * Converts a Key Value pair into the first entry in an array referenced by that Key in the JSON.
 * @param {Object} json
 * @param {String} key
 */
// TODO : Make more robust, check key exists, check it references something???
function convertKeyToObjectArray(json, key) {
	if (!(json[key] instanceof Array)) {
		console.log("Converting Key to reference Array");  // TODO Remove once tested and approved?
		json[key] = [{
			key : json[key]
		}];
		// ??? This simple? Lets hope so, don't let me down now JS!
		return true
	}
	console.log("Failed, Key already references an Array.");  // TODO Remove once tested and approved?
	return false;
}
