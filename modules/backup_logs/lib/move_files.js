#!/usr/bin/env node
module.exports 		= function move_files(path_to_dir) {
	var fs					= require('fs.extra');
	var _ 					= require('underscore');

	var envs						= ["production", "staging"];
	var pattern_nginx 	= /(access.log-)|(error.log-)/;
	var pattern_unicorn = /unicorn.log-/;

	_.each(path_to_dir, function(path_to_date_dir) {

		fs.readdir(path_to_date_dir, function moveFiles(err, files) {			
			if (err) { console.log (err) }

			_.each(files, function(file) {

				if (file.match(pattern_nginx)) {
					
					fs.move (path_to_date_dir + "/" + file , path_to_date_dir + "/nginx/" + file , function (err) {
			    	if (err) { throw "Couldn't move files"; }
				    console.log ("Nginx Logs successfully moved: " + path_to_date_dir + "/nginx/" + file);
					});						

				}

				else if (file.match(pattern_unicorn)) {

					fs.move (path_to_date_dir + "/" + file , path_to_date_dir + "/unicorn/" + file , function (err) {
			    	if (err) { throw "Couldn't move files."; }
				    console.log ("Unicorn Logs successfully moved: " + path_to_date_dir + "/nginx/" + file);

					});
				}				
			})					
		})
	})

	try {
		moveFiles();
	} catch(err) {
		console.log(err)
	}

}