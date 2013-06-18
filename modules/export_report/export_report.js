#!/usr/bin/env node
module.exports = function export_report(path_to_files) {

	// var decoration_data 	= require ('./lib/decoration_data');
	// var extract_errors		= require ('./lib/extract_errors');
	var decorate_and_extract = require ('./lib/decorate_and_extract');

	var $ 								= require ('jquery');
	var _									= require ('underscore');
	var fs 								= require ('fs');
							
	var production_files  = path_to_files[0];
	var staging_files		  = path_to_files[1];

	var import_index 		  = 0;
	var export_index      = 1;

	var import_files = production_files[import_index].add(staging_files[import_index]);
	var export_files = production_files[export_index].add(staging_files[export_index]);

	_(import_files.length).times(function(n) {
		data = fs.readFileSync(import_files[n], "ascii");
				
		decorated_data = decorate_and_extract(data);
				
		console.log(decorated_data);
		fs.writeFileSync(export_files[n], decorated_data, "ascii");

	})
}

