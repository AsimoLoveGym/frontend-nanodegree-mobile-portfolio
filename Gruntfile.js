/*
 After you have changed the settings under responsive_images
 run this with one of these options:
  "grunt" alone creates a new, completed images directory
  "grunt clean" removes the images directory
  "grunt responsive_images" re-processes images without removing the old ones
*/
// ‘use strict’;

module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {                          // Task
      dev: {
        options: {
          sizes: [{
            width: 100
          }]
        },
        files: [{
          expand: true,
          src: ['img/**/*.{gif,jpg,png}'],
          cwd: 'src/',
          dest: 'dist/'
        }]
      }
    },
    imagemin: {                          // Task
        options: {
          progressive: true,                       // Target options
          optimizationLevel: 7

        },

        dist: {                // Another target
        files: [{
          expand: true,                  // Enable dynamic expansion
          cwd: 'src/',                   // Src matches are relative to this path
          src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
          dest: 'dist/'                // Destination path prefix
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.registerTask('default', ["imagemin"]);

};
