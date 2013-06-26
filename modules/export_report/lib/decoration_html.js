#!usr/bin/env node

module.exports = function decoration_html(fileName) {
	
	var fs  			= require('fs');
	var _   			= require('../node_modules/underscore');	

	_.map(fileName.slice(3), function(item) {
		var ascii_data = fs.readFileSync(item, 'ascii');
		var errors = _.compact( _.map( ascii_data.match(/^Started[\s\S]+?(?=^Started)/mg).slice(1), function(matched){
			
	    return matched;
			
		}) );
				
		errors.unshift("<pre>");		
		errors.push("</pre>");
		
		data = errors.join("\n</pre>\n\n##################################################\n\n<pre>\n")	
		console.log(data.replace(/^\<pre\>(\n)?\<\/pre\>$/gm, ""))
		return data
	})		
}