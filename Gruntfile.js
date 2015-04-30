module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),


		jshint: {
			options: {
				reporter: require('jshint-stylish')
			},
			build: ['Gruntfile.js', 'src/**/*.js']
		},

		sass: {
			option: {
				sourceMap: true
			},
			dist: {
				files: {
					'src/styles/main.css': 'src/styles/main.scss'
				}
			}
		},

		connect: {
			server: {
				options: {
					port: 9001,
					base: 'src'
				}
			}
		},

		watch: {

			// for stylesheets, watch css and less files
			// only run less and cssmin stylesheets: {
			files: ['src//styles/*.css', 'src//styles/*.scss'],
			tasks: ['sass'],
			options: {
				livereload: true,
			},
		},

		// for scripts, run jshint and uglify
		scripts: {
			files: 'src/**/*.js', tasks: ['jshint']
		},

	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	grunt.registerTask('serve', ['connect', 'watch']);
};