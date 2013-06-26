#!/usr/bin/env node

module.exports = function extract_errors(data) {

	var fs  = require('fs');
	var _   = require('underscore');

	var errors = _.compact(_.map(data.match(/^Started[\s\S]+?(?=^Started)/mg) , function (matched) {
		if(/Completed\s[45]/.test(matched)){
			return matched;
		} else {
			return null;
		}
	}))

	console.log(errors.join(""));
	return errors.join("");

}

