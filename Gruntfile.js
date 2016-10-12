module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    webfont : {
        icons : {
            src : 'svg/**/*.svg',
            dest : 'fonts',
            destCss : 'css',
            options : {
                font : 'rental-icon',
                styles : 'font,icon,extra',
                types : 'eot,woff2,woff,ttf,svg',
                syntax : 'bootstrap',
                templateOptions : {
                    classPrefix: 'ri-'
                },
                htmlDemo : false,
                normalize : true,
                fontFamilyName: 'Rental Icon - Astuanax',
                stylesheets : ['css', 'scss']
                
            }
        }
    },
      
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-webfont');
  // Default task(s).
  grunt.registerTask('default', ['webfont']);

};