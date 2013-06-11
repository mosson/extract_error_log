#!/usr/bin/env node
module.exports = function export_report(path_to_files) {

	var concat_files 			= require ('./lib/concat_files'),
			decoration_file   = require ('./lib/decoration_file'),
			decoration_html   = require ('./lib/decoration_html'),
			decoration_data 	= require ('./lib/decoration_data')

	var $ 								= require ('jquery'),
			deferred 					= $.Deferred(),
			_									= require ('underscore'),
			fs 								= require ('fs')			
			
			_.each(path_to_files, function(files) {
				var import_files = files[0]
				var export_files = files[1]
				
			})

	// _.each(importFile, function(dirs) {
	// 	files = fs.readdirSync(dirs)	
	// 	_.each(files, function(file) {			
	// 		// var ascii_data = fs.readFileSync(file, 'ascii')
	// 		// console.log(decoration_data(ascii_data))
	// 		console.log(dirs)

	// 	})
		
	// })
	

	// _.each(files, function(file) {
		
		// console.log(file.match(/(log-[0-9]{8})/))

	// })

	// switch(command)
	// 	case "concat_files":
	// 		concat_files(command)
	// 		break
		
	// 	case "concat_files:decorate":
	// 		decoration_data(concat_files(command))
	// 		break
				
	// 	case "decoration_file":
	// 		decoration_file(command)
	// 		break
	
	// 	case "decoration_html":
	// 		decoration_html(command)
	// 		break
			// console.log(importFile)
}

