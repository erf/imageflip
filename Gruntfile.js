module.exports = function(grunt) {
  grunt.initConfig({

    uglify: {
      my_target: {
        files: {
          'imageflip.min.js': ['imageflip.js']
        }
      }
    },

    jshint: {
      all: ['Gruntfile.js', 'imageflip.js']
    }

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['jshint', 'uglify']);

};
