#!/usr/bin/env node

var concat = function() {
	
	var fs  = require('fs');
	var _   = require('underscore');

	var errorFiles = _.each(process.argv.slice(2, -1), function (fileName) {
		
		var ascii_data = fs.readFileSync(fileName, 'ascii');
		var errors = _.compact( _.map( ascii_data.match(/^Started[\s\S]+?(?=^Started)/mg).slice(1), function(matched){
			
	    return matched;
		
		}) );
		
		fs.appendFileSync(process.argv.slice(-1).toString(), errors.join("\n\n##################################################\n\n"));			

	});
}

module.exports = concat;
