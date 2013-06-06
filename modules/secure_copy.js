#!/usr/bin/env node

module.exports 			= function secure_copy(path_to_dir) {
	var scp 					= require('scp'),
			sugar 				= require('sugar'),
			_ 						= require('underscore'),
			path 					= require('path')

	var envs					= ["production", "staging"]

	// CONFIGRATION OF PRODUCTION and STAGING
	// SEE conf/conf.yml


	var which_conf 	= [
		conf_production	= {
			user: process.env["PRODUCTION_USER"],
			file: process.env["PATH_TO_LOGS"],
			host: process.env["PATH_TO_PRODUCTION"],
			path: path_to_dir[0]
		}, conf_staging = {
			user: process.env["STAGING_USER"],
			file: process.env["PATH_TO_NGINX_LOGS"],
			host: process.env["PATH_TO_STAGING"],
			path: path_to_dir[1]
		}]

		_.each(which_conf, function(conf) {
			scp.get(conf, function(err) {
				if (err) console.log("ERROR! SCP Couldn't finish" + err)
				else console.log(path_to_dir + " Logs have successfuly transferred.")
				})
			})

		}
