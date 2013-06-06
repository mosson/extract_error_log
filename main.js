#!/usr/bin/env node
var _  										 = require ('underscore'),
		sugar									 = require ('sugar'),
		path 									 = require ('path'),
		
		gunzip_and_unlink 		 = require ('./modules/gunzip_and_unlink'),
		make_directories			 = require ('./modules/make_directories'),
		secure_copy						 = require ('./modules/secure_copy'),
		move_files						 = require ('./modules/move_files'),
		create_migration_files = require ('./modules/create_migration_files')

var concat_files 					 = require ('./modules/concat_files'),
		decoration_file   		 = require ('./modules/decoration_file'),
		decoration_html   		 = require ('./modules/decoration_html'),
		path_adapter					 = require ('./modules/path_adapter')

_.map(process.argv, function(command) {
	switch (command) {
		case "gunzip_and_unlink":
			gunzip_and_unlink(path_adapter())
			break

		case "make_directories":
			make_directories(path_adapter())
			break
		
		case "secure_copy":
			secure_copy(path_adapter())
			break

		case "move_files":
			move_files(path_adapter())
			break
	
		case "create_migration_files":
			create_migration_files(path_adapter)
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
