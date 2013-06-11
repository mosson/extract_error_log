#!/usr/bin/env node

module.exports 	 = function path_factory() {	
	var _ 		  	 = require('underscore'),
			path       = require('path'),
			sugar			 = require ('sugar')

	var path_array 			= [],
			formated_date		= Date.create().format('{yyyy}{MM}'),
			base_path 			= path.resolve(__dirname, "../.."),
			envs     	 			= ["production", "staging"]


	var path_array = _.map(envs, function(env) {		
		var path_to_date_dir = base_path + "/backup/" + env + "/" + formated_date

		return path_to_date_dir
	})
	return path_array	
}
