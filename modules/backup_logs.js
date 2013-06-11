#!/usr/bin/env node
module.exports = function backup_logs () {

	var gunzip_and_unlink = require ('./gunzip_and_unlink'),
			make_directories	= require ('./make_directories'),
			secure_copy				= require ('./secure_copy'),
			move_files				= require ('./move_files'),
			path_factory			= require ('./path_factory')

	var $ 								= require ('jquery'),
			deferred 					= $.Deferred()
			
		// これを実現するやり方を考える
		deferred
			.then(function(arg) {
				setTimeout(function() {
					make_directories(path_factory())	
				}, 0)				
				console.log("make_directories Done")
			})
			.then(function(arg) {		
				setTimeout(function() {
					secure_copy(path_factory())				
				}, 1000)																	
				console.log("secure_copy Done")				
			})
			.then(function(arg) {
				setTimeout(function() {
					gunzip_and_unlink(path_factory())
				}, 2000)				
				console.log("gunzip_and_unlink Done")				
			})
			.then(function(arg) {					
				setTimeout(function() {
					move_files(path_factory())	
				}, 3000)				
				console.log("move_files Done")				
			})
									
		deferred.done()
	  deferred.resolve();
}

