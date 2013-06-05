#!/usr/bin/env node
var fs   = require('fs');
var path = require('path'); 

module.exports = function mkdirParent (dirPath, mode, callback) {
  fs.mkdir(dirPath, mode, function(error) {
    if (error && error.errno === 34) {
      fs.mkdirParent(path.dirname(dirPath), mode, callback);      
      fs.mkdirParent(dirPath, mode, callback);
    }
    callback && callback(error);
  });
};

