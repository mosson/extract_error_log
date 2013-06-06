#!/usr/bin/env node

module.exports = function make_directories(path_to_dir, date_dir) {

  var fs      = require('fs'),
      sugar   = require('sugar'),
      _       = require('underscore'),
      path    = require('path')

  var envs    = ["production", "staging"]

  fs.mkdirParent = function(dirPath, mode, callback) {
    fs.mkdir(dirPath, mode, function(error) {
      if (error && error.errno === 34) {
        fs.mkdirParent(path.dirname(dirPath), mode, callback);
        fs.mkdirParent(dirPath, mode, callback);
      }
      callback && callback(error);
    });
  };

  _.each(envs, function(env) {
    fs.mkdirParent(path_to_dir + "/backup/" + env + "/" + date_dir + "/nginx")
    fs.mkdirParent(path_to_dir + "/backup/" + env + "/" + date_dir + "/unicorn")
  })
}

