#!/usr/bin/env node
// require node_modules
var _  								= require ('underscore')
var sugar							= require ('sugar')
var path 							= require ('path')

// require custom modules
var cron_ungzip				= require ('./modules/cron_ungzip')
var cron_unlink_gzip  = require ('./modules/cron_unlink_gzip')
var cron_mkdir				= require ('./modules/cron_mkdir')
var cron_scp					= require ('./modules/cron_scp')
var cron_mv						= require ('./modules/cron_mv')
var create_db_data    = require ('./modules/create_db_data')


// define variables
var yyyymm						= Date.create().format('{yyyy}{MM}')
var base_path 				= __dirname

_.map(process.argv, function(command) {
	switch (command) {
		case "cron_ungzip":
			cron_ungzip(base_path, yyyymm)
			break

		case "cron_mkdir":
			cron_mkdir(base_path, yyyymm)
			break
		
		case "cron_scp":
			cron_scp(base_path, yyyymm)
			break

		case "cron_mv":
			cron_mv(base_path, yyyymm)
			break

		case "cron_unlink_gzip":
			cron_unlink_gzip(base_path, yyyymm)
			break

		case "create_db_data":
			create_db_data(base_path, yyyymm)
			break
	}
})

