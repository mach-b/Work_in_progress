/**
 * @author Mark Burton
 */

// NEED TO REFACTOR : for each loops may not be ideal

function compareJSONs(jsonA, jsonB) {
	
	for (var key in jsonA) {
		
		if (!(jsonA[key] instanceof Array)) {
			// Is regular Key Value pair.
			console.log("Key A = " +jsonA[key]+ " and Key B = " +jsonB[key]);
			console.log("Keys match = " + (jsonA[key] === jsonB[key]));
			
		}else {
			// Key references Array.
			for (var i = 0; i < (jsonA[key].length-1); i++) {
				for (var j = 0; j < (jsonB[key].length-1); j++) {
					console.log("Key A = " +jsonA[key][i][key]+ " and Key B = " +jsonB[key][j][key]);
					console.log("Keys match = " + (jsonA[key][i][key] === jsonB[key][j][key]));
				}
			}
		}
	}
	
}
