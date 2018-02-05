module.exports = function(grunt) {
  //configure task(s)
  grunt.initConfig({
    pkg:grunt.file.readJSON('package.json'),
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            /* Change these */
            width: 1600,
            suffix: '_large_2x',
            quality: 30},
            {width: 800,
            suffix: '_large_1x',
            quality: 30},
            {width: 1000,
            suffix: '_medium',
            quality: 30},
            {width: 400,
            suffix: '_small',
            quality: 30,},
            {width: 250,
            suffix: '_xsmall',
            quality: 30
          }]
        },

        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'images_src/',
          dest: 'images/'
        }]
      }
    },

    /* Clear out the images directory if it exists */
    clean: {
      dev: {
        src: ['images'],
      },
    },

    /* Generate the images directory if it is missing */
    mkdir: {
      dev: {
        options: {
          create: ['images']
        },
      },
    },

  });

  //load plugins
  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-mkdir');

  //register task(s)
  grunt.registerTask('default', ['clean', 'mkdir', 'responsive_images']);

};
