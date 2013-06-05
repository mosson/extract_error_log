#!/usr/bin/env node

module.exports = function write_file(readFile, writeFile) {
	
	var fs  = require('fs');	

	var data = fs.readFileSync(readFile, 'ascii');
	
	fs.writeFileSync(writeFile, data, 'ascii');
}
