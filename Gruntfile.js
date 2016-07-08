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
    }
  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.registerTask('default', ["responsive_images"]);

};
