#!/usr/bin/env node
var _  										 = require ('underscore'),		
		path 									 = require ('path'),
		$ 										 = require ('jquery')
		
var backup_logs   				 = require ('./modules/backup_logs'),
		create_migration_files = require ('./modules/create_migration_files'),
		concat_files 					 = require ('./modules/concat_files'),
		decoration_file   		 = require ('./modules/decoration_file'),
		decoration_html   		 = require ('./modules/decoration_html')
		// path_factory					 = require ('./modules/lib/path_factory')

_.map(process.argv, function(command) {
	switch (command) {
		case "backup_logs" :		
			backup_logs()
			break

		case "create_migration_files":
			create_migration_files(path_factory())
			break

		case "concat_files":
			concat_files(command)
			break
		
		case "concat_files:decorate": 
			decoration_data(concat_files(command))
			break
				
		case "decoration_file":
			decoration_file(command)
			break
	
		case "decoration_html":
			decoration_html(command)
			break
	}


})

