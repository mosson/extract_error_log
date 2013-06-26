#!/usr/bin/env node

module.exports =  function concat_files(files) {
	
	var fs  = require('fs');
	var _   = require('underscore');

	var data = _.map(files, function(fileName) {
		if(fileName.match(/(log-[0-9]{8})/)) {
			var ascii_data = fs.readFileSync(fileName, 'ascii');
			return ascii_data;
		}
	});

	console.log(data.join("\n"));
	return data.join("\n");

}

