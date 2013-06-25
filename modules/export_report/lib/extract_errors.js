#!/usr/bin/env node

module.exports = function extract_errors(data) {

	var _   = require('underscore');
	
	var export_data = _.compact( 
		_.map( data.match(/^Started[\s\S]+?(?=^Started)/mg).slice(1), function(matched){
		
		  if( /Completed\s[45]/.test(matched) ){
		      return matched.replace(/\+0000/, "+0900");
		  }else{
		      return null;
		  }	
		})

	);

	return export_data;

}

