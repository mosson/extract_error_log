#!/usr/bin/env node

module.exports = function decorate_and_extract(data) {
	var _   = require('underscore');

	var errors = _.compact( _.map( data.match(/^Started[\s\S]+?(?=^Started)/mg).slice(1), function(matched){

	    if( /Completed\s[45]/.test(matched) ){
	        return matched;
	    } else {
	        return null;
	    }
	}) );
	
  	return errors.join("\n\n##################################################\n\n")

}
