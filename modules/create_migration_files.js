#!/usr/bin/env node
module.exports = function create_migration_files(path_to_dir) {
	var fs  				 = require('fs'),
	_   				 = require('../node_modules/underscore'),
	YAML 				 =	require('yamljs'),
	envs		 		 = ["production", "staging"],

	i 					 = 0,
	test_db_data = []

	_.each(path_to_dir, function(path_to_date_dir) {
		var read_dir     = path_to_date_dir		

		fs.readdir(read_dir, function(err, files) {				
			_.each(files, function(file) {
				if (file.match(/log/gm)) {
					var read_file 	 = path_to_date_dir	+ "/" + file
					var ascii_data   = fs.readFileSync(read_file , 'ascii');	
				
				
				var entries 	 	 = _.compact( _.map( ascii_data.match(/^Started[\s\S]+?(?=^Started)/mg), function(matched){
					if( /Completed\s[45]/.test(matched) ){
						// 正規表現の先読み(?<=pattern)が使えない？
						test_db_data[0] = matched
						test_db_data[1] = matched.match(/[0-9]{4}-([0-9]{2}-?){2}\s([0-9]{2}:?){3}\s\+[0-9]{4}/mg)
						test_db_data[2] = matched.match(/(Completed\s)[0-9]{3}/gm)[0].slice(10)

						entries = [test_db_data[0], test_db_data[1], test_db_data[2]]
						return entries
					} else {
						return null;
					}
				}))

				_.each(entries, function(entry) {
					function hash(key, value) {
						var h = {};
						h[key] = value;
						return h;
					}

					var key = "id_" + i;

					var h = hash(key, {
						"entry" : entry[0],
						"timestamp": entry[1],
						"error_status" : entry[2],
						"environment" : env
					});

					yamlString = YAML.stringify(h , 4)

					console.log(yamlString)
					fs.appendFile("db/" + env + "-" + read_file.slice(-8) + ".yml", yamlString ,function(err) {
						console.log(err)
					})

					i ++

				
				})
				}


			})
		})
	})
}
