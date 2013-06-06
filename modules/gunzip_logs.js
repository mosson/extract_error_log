#!/usr/bin/env node
module.exports 		= function gunzip_logs(path_to_dir, date_dir) {
	var fs					= require('fs.extra'),
			_ 					= require('underscore'),
			zlib				= require ('zlib')

	var envs				= ["production", "staging"]

	_.each(envs, function(env) {
		fs.readdir(path_to_dir + "/backup/" + env + "/" + date_dir, function(err, files) {
			if (err) { console.log (err) }
				_.each(files, function(file) {
					if (file.match(/(.gz)/)) {
						var zip_file = file
						var dest_file = file.slice(0, -3)

						var input = fs.createReadStream(path_to_dir + "/backup/" + env + "/" + date_dir + "/" + zip_file);
						var out = fs.createWriteStream(path_to_dir + "/backup/" + env + "/" + date_dir + "/" + dest_file);

						input.pipe(zlib.createGunzip()).pipe(out);
					}
				})
			})
		})
	}
