#!/usr/bin/env node
module.exports = function decoration_file_plain(fileName) {
	
	var fs  			= require('fs');
	var _   			= require('../node_modules/underscore');	

	_.map(fileName.slice(3), function(item) {
		var ascii_data = fs.readFileSync(item, 'ascii');
		var errors = _.compact( _.map( ascii_data.match(/^Started[\s\S]+?(?=^Started)/mg).slice(1), function(matched){
			
	    return matched;
		
		}) );
		
		console.log(errors.join("\n\n##################################################\n\n"))
		return errors.join("\n\n##################################################\n\n")

	})		
}

