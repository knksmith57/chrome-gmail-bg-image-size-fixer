module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    chromeDesc: grunt.file.readJSON('src/manifest.json'),
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['src/**/jquery.min.js', 'src/**/*.js'],
        dest: 'dist/<%= pkg.name %>.js'
      }
    },
    copy: {
      dist: {
        files: [{
          expand: true,
          flatten: true,
          src: ['src/**/*.json'],
          dest: 'dist'
        }]
      }
    },
    uglify: {
      options: {
        preserveComments: 'some',
        banner:
          '/*! <%= chromeDesc.name %> v<%= chromeDesc.version %> | <%= chromeDesc.homepage_url %> */\n'
      },
      dist: {
        files: {
          'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
        }
      }
    },
    clean: {
      dist: {
        files: [{
          dot: true,
          src: ['dist/*', '!dist/.git*']
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('default', ['clean', 'concat', 'uglify', 'copy']);
};
