#!/usr/bin/env node
module.exports 		= function unlink_gzip_files(path_to_dir, date_dir) {
	var fs					= require('fs.extra'),
			_ 					= require('underscore')

	var envs				= ["production", "staging"]

	_.each(envs, function(env) {

		var path_to_env = path_to_dir + "/backup/" + env + "/" + date_dir

		fs.readdir(path_to_env, function(err, files) {
			if (err) { console.log (err) }
				_.each(files, function(file) {
					if (file.match(/(.gz)/)) {
						fs.unlink(path_to_env + "/" + file, function (err) {
							if (err !== null) { console.log (err) }
							})
						} else {
							console.log("Files successfully deleted: " + path_to_env + "/" + file)
						}
					})
				})
			})
		}



