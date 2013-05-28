// CONCAT
function concat(fileName) {

	// MODULE IMPORT
	var fs 						= require('fs');
	var sugar					= require('sugar');
	var _ 						= require('../node_modules/underscore/underscore');

	var path 					= __dirname + "/../";		
	var date 					= Date.create('1 days ago').format('{yyyy}{MM}{dd}');	

	var pathToDir 		= date + "/" + fileName;
	var logFilePattern= fileName + ".log-";
	var readFile 			= fs.readdirSync(pathToDir);
	
	for (var i = 0; i < readFile.length ; i ++) {
		if (readFile[i].match(logFilePattern) != null) {
			var data 				= fs.readFileSync(path + "/" + pathToDir + "/" + readFile[i], "ascii");
			var matchedData = data.match(/(^Started[\s\S]*?Completed[\s\S]*?$)/gm);
			var slicedData 	= matchedData.slice(1);

			_.map(slicedData, function (element) {
				re 						= /^Started/g
				replacedData  = element.replace(re, "\n\n\n#######################################################################################################\n\n\nStarted");				
				fs.appendFileSync(path + "/" + date + "/" + fileName + "/export/concat-" + fileName + ".log-" + date, replacedData);
			});
		}
	}
}

module.exports = concat;