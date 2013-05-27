// 
//	Staging
//	copy.sh
// 
//////////////////////////////////////////////////////////// 

// MODULE IMPORT
var fs 		= require('fs');
var sugar = require('sugar');

var whichFile = ['production', 'staging'];
var path 			= __dirname;
var date 			= Date.create('1 days ago').format('{yyyy}{MM}{dd}');
var regexErr 	= /^Started.*?\n^Processing.*?\n(^\s.*?\n)+?Completed\s[400|500].*?\n\n^\n?(^.+?\n)+(^\n)/mg;


// CONCAT
for (var dname = 1; dname <= 1; dname ++) {
	// Production path
	var pathToDir = date + "/" + whichFile[0] + "/0" + dname;
	var regexLog = whichFile[0] + ".log-";
	var readFile = fs.readdirSync(pathToDir);
	
	for (i = 0; i < readFile.length ; i ++) {
		if (readFile[i].match(regexLog) != null) {
			data = fs.readFileSync(path + "/" + pathToDir + "/" + readFile[i], "ascii");
			fs.appendFileSync(path + "/" + date + "/" + whichFile[0] + "/" + whichFile[0] + ".log-" + date, data);
		}
	}
}




// GET ERROR LOGS, ADD LINE

var pathToDir = date + "/" + whichFile[0];
var regexLog = whichFile[0] + ".log-";
var readFile = fs.readdirSync(pathToDir);

for (fname = 0; fname < 2; fname ++) {
	// for (i = 0; i < readFile.length ; i ++) {
	// 	if (readFile[i].match(regexLog) != null) {
	// 		data = fs.readFileSync(path + "/" + pathToDir + "/" + readFile[i], "ascii");
	// 		fs.appendFileSync(path + "/" + date + "/" + whichFile[0] + "/" + whichFile[0] + ".log-" + date, data);
	// 	}
	// }

	var readFileNamePro = path + "/" + date + "/" + whichFile[fname] + "/" + whichFile[fname] + ".log-" + date;
	var writeFileNamePro = path + "/" + date + "/" + whichFile[fname] + "/export/" + whichFile[fname] + ".log-" + date;
	var data = fs.readFileSync (readFileNamePro, 'ascii');
	var matchedData = data.match(regexErr);
	var maxN = matchedData.length;
	var re = /^Started/g;

	for (j = 0; j < maxN; j ++) {
		str = matchedData[j];
		var newData = str.replace(re, "\n#######################################################################################################\n\n\nStarted");
		fs.appendFileSync(writeFileNamePro, newData);
	}
}	

