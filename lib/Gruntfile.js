module.exports = function (grunt) {
    grunt.initConfig({
       browserify: {
          js: {
             src: ["../js/main.js"],
             dest: "../dist/app.js"
          },
          options: {
             browserifyOptions: {
                paths: [
                   "./node_modules"
                ]
             }
          }
       },
       watch: {
          javascripts: {
             files: ["../js/**/*.js"],
             tasks: ["jshint", "browserify"]
          },
          browserify: {
             files: ["../javascripts/*.js"],
             tasks: ["browserify"]
          }
       }
    });

    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);
    grunt.registerTask("default", ["jshint", "browserify", "watch"]);
 };