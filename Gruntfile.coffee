module.exports = (grunt) ->

  # load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks)

  grunt.initConfig

    pkg: grunt.file.readJSON 'package.json'

    uglify:
      min:
        files:
          'app/js/main.js': [
            'app/js/src/libs/*.js',
            'app/js/src/*.js'
          ]

    compass:
      dist:
        options:
          config: 'app/css/config.rb'
          sassDir: 'app/css/sass'
          imagesDir: 'app/img'
          cssDir: 'app/css'
          environment: 'production'
          outputStyle: 'compressed'
          force: true

    browserSync:
      files:
        src: 'app/css/screen.css'
      options:
          host: "localhost"
          watchTask: true

    watch:
      options:
        livereload: true
      scripts:
        files: ['app/js/src/libs/*.js', 'app/js/src/*.js']
        tasks: ['uglify']
      styles:
        files: ['app/css/**/*.{sass,scss}','app/img/ui/*.png']
        tasks: ['compass']

  # Development task checks and concatenates JS, compiles SASS preserving comments and nesting, runs dev server, and starts watch
  grunt.registerTask 'default', ['compass', 'uglify', 'browserSync', 'watch']
