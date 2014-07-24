module.exports = (grunt) ->

  # load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks)

  grunt.initConfig

    pkg: grunt.file.readJSON 'package.json'

    # concat:
    #   min:
    #     files:
    #       'public/js/main.js': ['public/js/src/libs/*.js','public/js/src/*.js']

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

    imagemin:
      dynamic:
        files: [
          expand: true
          cwd: 'app/img/src'
          src: ['*.{png,jpg,gif}']
          dest: 'app/img/'
        ]

    browser_sync:
      files:
        src: 'app/css/screen.css'
      options:
          host: "localhost"
          watchTask: true

    watch:
      options:
        livereload: true
      # scripts:
      #   files: ['public/js/src/*.js','public/js/src/libs/*.js']
      #   tasks: ['concat']
      styles:
        files: ['app/css/**/*.{sass,scss}','app/img/ui/*.png']
        tasks: ['compass']
      images:
        files: ['app/img/src/*.{png,jpg,gif}']
        tasks: ['imagemin']

  # Development task checks and concatenates JS, compiles SASS preserving comments and nesting, runs dev server, and starts watch
  grunt.registerTask 'default', ['compass', 'imagemin', 'browser_sync', 'watch']
