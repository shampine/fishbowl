module.exports = (grunt) ->

  # load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks)

  grunt.initConfig

    pkg: grunt.file.readJSON 'package.json'

    concat:
      min:
        files:
          'app/js/main.js': [
            'public/js/services/*.js',
            'public/js/controllers/*.js',
            'public/js/config.js',
            'public/js/app.js'
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

    imagemin:
      dynamic:
        files: [
          expand: true
          cwd: 'app/img/src'
          src: ['*.{png,jpg,gif}']
          dest: 'app/img/'
        ]

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
        files: ['public/js/app.js', 'public/js/config.js', 'public/js/controllers/*.js', 'public/js/services/*.js']
        tasks: ['concat']
      styles:
        files: ['app/css/**/*.{sass,scss}','app/img/ui/*.png']
        tasks: ['compass']
      images:
        files: ['app/img/src/*.{png,jpg,gif}']
        tasks: ['imagemin']

  # Development task checks and concatenates JS, compiles SASS preserving comments and nesting, runs dev server, and starts watch
  grunt.registerTask 'default', ['compass', 'concat', 'imagemin', 'browserSync', 'watch']
