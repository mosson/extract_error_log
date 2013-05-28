// GET ERROR LOGS, ADD LINE
var getError = function(fileName) {
	
	// MODULE IMPORT
	var fs 						= require('fs');
	var sugar 				= require('sugar');
	var _ 						= require('../node_modules/underscore');

	var date 					= Date.create('1 days ago').format('{yyyy}{MM}{dd}');
	var linePattern 	= /^#{100}[\s\S]*?Completed[\s\S]*?$\n\n\n/gm	;
	var path 					= __dirname + "/../";		
	var readFileName 	= path + "/" + date + "/" + fileName + "/export/concat-" + fileName + ".log-" + date;
	var writeFileName = path + "/" + date + "/" + fileName + "/export/error-" + fileName + ".log-" + date;	
	var data 					= fs.readFileSync (readFileName, 'ascii');
	var matchedData 	= data.match(linePattern);
	
	_.map(matchedData, function(element) {
		
		if (element.match(/(Completed[\s][4|5][0-9]{2})/) !== null) {
			fs.appendFileSync(writeFileName, element);
		}		
	});
}	

module.exports = getError;

