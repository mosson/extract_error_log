#!/usr/bin/env node

var fs  = require('fs');
var _   = require('underscore');

var ascii_data = fs.readFileSync(process.argv[2], 'ascii');

var errors = _.compact( _.map( ascii_data.match(/^Started[\s\S]+?(?=^Started)/mg).slice(1), function(matched){

    if( /Completed\s[45]/.test(matched) ){
        return matched;
    } else {
        return null;
    }
}) );


fs.writeFileSync(process.argv[3], errors.join("\n\n##################################################\n\n"), 'ascii');
