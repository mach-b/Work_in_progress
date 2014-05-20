/**
 * @author Mark Burton
 */

function testJSONComparison() {


var jsonA = {
	"html" : "123456html",
	"head" : "123456head",
	"body" : "123456body",
	"script" : [{
		"script" : "123456script1"
	}, {
		"script" : "123456script2"
	}]
}

var jsonB = {
	"html" : "123456html",
	"head" : "123456head",
	"body" : "123456body",
	"script" : [{
		"script" : "123456script1"
	}, {
		"script" : "123456script2"
	}]
}

var jsonC = {
"html": "123456htmlx",
"head": "123456head",
"script": [
{"script": "123456script1x"},
{"script": "123456script2"}
]
}

compareJSONs(jsonA, jsonB);

//compareJSONs(jsonA, jsonC);

}

