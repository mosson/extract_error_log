#!/usr/bin/env node

module.exports = function make_directories(path_to_dir) {

  var fs      = require('fs'),
      sugar   = require('sugar'),
      _       = require('underscore'),
      path    = require('path')

  fs.mkdirParent = function(dirPath, mode, callback) {
    fs.mkdir(dirPath, mode, function(error) {
      if (error && error.errno === 34) {
        fs.mkdirParent(path.dirname(dirPath), mode, callback);
        fs.mkdirParent(dirPath, mode, callback);
      }
      callback && callback(error);
    });
  };

  _.each(path_to_dir, function(path_to_date_dir) {
    fs.mkdirParent(path_to_date_dir + "/nginx")
    fs.mkdirParent(path_to_date_dir + "/unicorn")
  })
}

