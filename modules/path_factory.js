#!/usr/bin/env node

module.exports 	 = function path_factory(usage) {
	var _ 		  	 = require ('underscore'),
			path       = require ('path'),
			sugar			 = require ('sugar'),
			fs 				 = require ('fs')

	var path_array 			= [],
			formated_date		= Date.create().format('{yyyy}{MM}'),
			base_path 			= path.resolve(__dirname, ".."),
			envs     	 			= ["production", "staging"]

	var path_to_dir 		= _.map(envs, function(env) {
	var path_to_backup  = base_path + "/backup/" + env + "/" + formated_date
	var path_to_report  = base_path + "/report/" + env + "/" + formated_date

		switch (usage) {
			case "backup":			
				return path_to_backup
				break
			case "report":
				return path_to_report
				break

			case "path_to_files":
				var arr_backup_files = _.compact(_.map(fs.readdirSync(path_to_backup), function (file) {
				if (file.match(/(log-[0-9]{8})/)) {
						return path_to_backup + "/" + file
					} else {
						return null
					}
				}))
				
				var arr_report_files = _.map(arr_backup_files, function(file) {
					return (path_to_report + "/" + file.slice(-2)) + ".log"
				})
				
				return [arr_backup_files, arr_report_files]

			
			default :
				console.log("Invalid arguments specified.")

		}
	})
	return path_to_dir
}
