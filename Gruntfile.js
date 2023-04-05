module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                files: {
                    './build/styles/main.css' : './src/styles/main.less'
                }
            },

            production: {
                options: {
                    compress: true,
                },

                files: {
                    './build/styles/styles_min/main.min.css' : './src/styles/main.less'
                }
            }
        },

        watch: {
            less: {
                files: ['./src/styles/**/*.less'],
                tasks: ['less:development']
            }
        },

        uglify: {
            target: {
                files: {
                    './build/scripts_min/main.min.js' : './src/scripts/main.js'
                }
            }
        }

    
    })

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('watch', ['less:development', 'less:production', 'uglify']);
}