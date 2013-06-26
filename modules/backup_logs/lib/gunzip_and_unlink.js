#!/usr/bin/env node
module.exports 		= function gunzip_and_unlink(path_to_dir) {
	var fs					= require('fs.extra'),
	_ 					= require('underscore'),
	zlib				= require ('zlib')

	_.each(path_to_dir, function(path_to_date_dir) {
		fs.readdir(path_to_date_dir, function(err, files) {

			if (err) { console.log (err) }
				_.each(files, function(file) {
					if (file.match(/(.gz)/)) {

						var input = fs.createReadStream(path_to_date_dir + "/" + file);
						var out = fs.createWriteStream(path_to_date_dir + "/" + file.slice(0, -3));

						input.pipe(zlib.createGunzip()).pipe(out);

						fs.unlink(path_to_date_dir + "/" + file, function (err) {
							if (err !== null) { console.log (err) }
							console.log("Files successfully deleted: " + path_to_date_dir + "/" + file)
						})
					}
				})
			})
		})
	}






