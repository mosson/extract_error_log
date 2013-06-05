#!/usr/bin/env node

var errors = function(readFile, writeFile) {

	var fs  = require('fs');
	var _   = require('../node_modules/underscore');

	var ascii_data = fs.readFileSync(readFile, 'ascii');
	var data = _.compact( _.map( ascii_data.match(/^Started[\s\S]+?(?=^Started)/mg).slice(1), function(matched){
		
	  if( /Completed\s[45]/.test(matched) ){
	      return matched;
	  }else{
	      return null;
	  }	
	}) );

	fs.writeFileSync(writeFile, data, 'ascii');

}

module.exports = errors;