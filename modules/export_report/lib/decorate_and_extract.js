#!/usr/bin/env node

module.exports = function decorate_and_extract(data) {
	var _   	 = require ('underscore');
	var ejs 	 = require ('ejs');
	var fs  	 = require ('fs');

	var errors = _.compact( _.map( data.match(/^Started[\s\S]+?(?=^Started)/mg).slice(1), function(matched){

	    if( /Completed\s[45]/.test(matched) ){
	        return matched;
	    } else {
	        return null;
	    }
	}) );
	

	var data 		= fs.readFileSync('modules/export_report/decorate_data.ejs', 'ascii');
	var renderd = ejs.render(data, { errors: errors });	
  	
	return renderd;

}
