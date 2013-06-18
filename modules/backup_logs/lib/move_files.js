#!/usr/bin/env node
module.exports 		= function move_files(path_to_dir) {
	var fs					= require('fs.extra'),
			_ 					= require('underscore')

	var envs				= ["production", "staging"],
			pattern 		= [/(access.log-)|(error.log-)/, /(unicorn.log-)/]

	_.each(path_to_dir, function(path_to_date_dir) {		
		fs.readdir(path_to_date_dir, function(err, files) {			
			if (err) { console.log (err) }
			_.each(files, function(file) {
				if (file.match(pattern[0])) {
					fs.move (path_to_date_dir + "/" + file , path_to_date_dir + "/nginx/" + file , function (err) {
			    	if (err) { throw err; }
				    console.log ("Nginx Logs successfully moved: " + path_to_date_dir + "/nginx/" + file);
					});						
				}

				else if (file.match(pattern[1])) {
					fs.move (path_to_date_dir + "/" + file , path_to_date_dir + "/unicorn/" + file , function (err) {
			    	if (err) { throw err; }
				    console.log ("Unicorn Logs successfully moved: " + path_to_date_dir + "/nginx/" + file);
					});
				}				
			})					
		})
	})
}