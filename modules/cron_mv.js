#!/usr/bin/env node
module.exports 		= function cron_mv(path_to_dir, date_dir) {
	var fs					= require('fs.extra');
	var _ 					= require('underscore')		
	var which_env		= ["production", "staging"]	
	
	var pattern = [/(access.log-)|(error.log-)/, /(unicorn.log-)/]

	_.each(which_env, function(env) {
		
		var path_to_env = path_to_dir + "/backup/" + env + "/" + date_dir
		
		fs.readdir(path_to_env, function(err, files) {			
			if (err) { console.log (err) }
			_.each(files, function(file) {
				if (file.match(pattern[0])) {
					fs.move (path_to_env + "/" + file , path_to_env + "/nginx/" + file , function (err) {
			    	if (err) { throw err; }
				    console.log ("Nginx Logs successfully moved: " + path_to_env + "/nginx/" + file);
					});						
				}

				else if (file.match(pattern[1])) {
					fs.move (path_to_env + "/" + file , path_to_env + "/unicorn/" + file , function (err) {
			    	if (err) { throw err; }
				    console.log ("Unicorn Logs successfully moved: " + path_to_env + "/nginx/" + file);
					});
				}				
			})					
		})
	})
}