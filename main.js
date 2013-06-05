#!/usr/bin/env node

var _  	= require('underscore')

var concat_files 			= require ('./modules/concat_files')
var decoration_file   = require ('./modules/decoration_file')
var decoration_html   = require ('./modules/decoration_html')

argv = process.argv	

_.map(argv, function(command) {
	
	switch (command) {	
		case "concat_files" :
			concat_files(argv)
			break
		
		case "concat_files:decorate" : 
			decoration_data(concat_files(argv))
			break
				
		case "decoration_file" :
			decoration_file(argv)
			break
	
		case "decoration_html" :
			decoration_html(argv)
			break
	}	
})

