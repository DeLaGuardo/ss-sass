// Sass 'CSS' wrapper for SocketStream 0.3

var fs = require('fs'),
    sass = require('node-sass');

exports.init = function(root, config) {

  return {

    name: 'Sass',

    extensions: ['sass', 'scss'],

    assetType: 'css',

    contentType: 'text/css',

    compile: function(path, options, cb) {

      var success = function(css) {
        cb(css);
      };

      var error = function (err) {
        console.log('! - Unable to compile Sass file %s into CSS', path);
        console.log(err);
      };

      sass.render({
        file: path,
        success: success,
        error: error
      });
    }
  };
};
