#!/usr/bin/env node

module.exports = function cron_mkdir(path_to_dir, date_dir) {
  
  var fs      = require('fs')
  var sugar   = require('sugar')
  var _       = require('underscore')
  var path    = require('path');
  
  var which_env     = ["production", "staging"]
   
  fs.mkdirParent = function(dirPath, mode, callback) {
    fs.mkdir(dirPath, mode, function(error) {
      if (error && error.errno === 34) {
        fs.mkdirParent(path.dirname(dirPath), mode, callback);      
        fs.mkdirParent(dirPath, mode, callback);
      }
      callback && callback(error);
    });
  };

  _.each(which_env, function(env) {
    fs.mkdirParent(path_to_dir + "/backup/" + env + "/" + date_dir + "/nginx")
    fs.mkdirParent(path_to_dir + "/backup/" + env + "/" + date_dir + "/unicorn")
  })  
}

