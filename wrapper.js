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

            var opts = {
                file: path
            };

            for(var n in config) {
                opts[n] = opts[n] || config[n];
            }

            sass.render(opts, function(error, result) {
                if (error) {
                    var message = '! - Unable to compile Sass file %s into CSS';
                    console.log(String.prototype.hasOwnProperty('red') && message.red || message, path);
                    console.log(error.status);
                    console.log(error.column);
                    console.log(error.message);
                    console.log(error.line);
                } else {
                    cb(result.css.toString());
                }
            });
        }
    };
};
