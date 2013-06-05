#!/usr/bin/env node

module.exports 			= function cron_scp(path_to_dir, date_dir) {
	var scp 					= require('scp');
	var sugar 				= require('sugar')
	var _ 						= require('underscore')
	var path 					= require('path')
	
	var which_env			= ["production", "staging"]

	_.each([process.env["PATH_TO_LOGS"], process.env["PATH_TO_NGINX_LOGS"]], function(kind_of_logs) {
		
		// CONFIGRATION OF PRODUCTION and STAGING
		// SEE conf/conf.yml

		var which_conf 	= [
		conf_production	= {
			user: process.env["PRODUCTION_USER"],
		  file: kind_of_logs,
		  host: process.env["PATH_TO_PRODUCTION"],
		  path: path_to_dir + "/backup/" + which_env[0] + "/" + date_dir
		}, conf_staging = {
			user: process.env["STAGING_USER"],
		  file: kind_of_logs,
		  host: process.env["PATH_TO_STAGING"],
		  path: path_to_dir + "/backup/" + which_env[1] + "/" + date_dir
		}]
		
		_.each(which_conf, function(conf) {		
			scp.get(conf, function(err) {			
				if (err) console.log("ERROR! SCP Couldn't finish" + err)
				else console.log(kind_of_logs + " Logs have successfuly transferred.")
			})
		})
	})	
}
