#!/usr/bin/env node
module.exports = function decoration_data(data) {	
	
	var _   			= require('underscore');
	var entry = _.compact( _.map( data.match(/^Started[\s\S]+?(?=^Started)/mg).slice(1), function(matched){			

		return matched;
    
	}) );
	
	return entry.join("\n\n##################################################\n\n")
	
}


