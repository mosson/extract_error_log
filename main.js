#!/usr/bin/env node
var _  										 = require ('underscore'),
		sugar									 = require ('sugar'),
		path 									 = require ('path'),

		gunzip_logs						 = require ('./modules/gunzip_logs'),
		unlink_gzip_files 		 = require ('./modules/unlink_gzip_files'),
		make_directories			 = require ('./modules/make_directories'),
		secure_coy						 = require ('./modules/secure_coy'),
		move_files						 = require ('./modules/move_files'),
		create_migration_files = require ('./modules/create_migration_files'),

		concat_files 					 = require ('./modules/concat_files'),
		decoration_file   		 = require ('./modules/decoration_file'),
		decoration_html   		 = require ('./modules/decoration_html'),

		formated_date					 = Date.create().format('{yyyy}{MM}'),
		base_path 						 = __dirname

_.map(process.argv, function(command) {
	switch (command) {
		case "gunzip_logs":
			gunzip_logs(base_path, formated_date)
			break

		case "make_directories":
			make_directories(base_path, formated_date)
			break
		
		case "secure_coy":
			secure_coy(base_path, formated_date)
			break

		case "move_files":
			move_files(base_path, formated_date)
			break

		case "unlink_gzip_files":
			unlink_gzip_files(base_path, formated_date)
			break

		case "create_migration_files":
			create_migration_files(base_path, formated_date)
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
