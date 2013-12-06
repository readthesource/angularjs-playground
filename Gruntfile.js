module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    connect: {
      server : {
        options : {
          port : 9001,
          keepalive: true,
          base: [ ".", "app" ],
          livereload: true,
          open: true
        },
        middleware: function(connect, options) {
          return [ connect.static(options.base) ];
        }
      }

    },
  });

  grunt.loadNpmTasks('grunt-contrib-connect');

  return grunt.registerTask('default', [ "connect" ]);
};