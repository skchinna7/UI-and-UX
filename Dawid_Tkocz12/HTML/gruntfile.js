module.exports = function(grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        jshint: {
            options: {
                globals: {

                }
            },
            files: [
                'gruntfile.js',
                'js/common.js'
            ]
        },

        uglify: {
            options: {
                banner: '/*!\n * Powered by DeMx (http://demx.info)\n */\n\n'
            },
            /*
                Сайт
            */
            front: {
                files: {
                    'js/vilio.min.js': [
                        'js/jquery-1.11.2.min.js',
                        'js/bootstrap.min.js',
                        'js/glide.min.js',
                        'js/jquery.jcarousel.min.js',
                        'js/common.js'
                    ]
                }
            }
        },

        cssmin: {
            options: {
                banner: '/*!\n * Powered by DeMx (http://demx.info)\n */\n',
                keepSpecialComments: 0
            },
            front: {
                files: {
                    'css/vilio.min.css': [
                        'css/bootstrap.min.css',
                        'css/main.css',
                        'css/glide.css',
                        'css/responsive.css'
                    ]
                }
            }
        },

        rev: {
            options: {
                encoding: 'utf8',
                algorithm: 'sha1',
                length: 10
            },
            files: {
                src: ['css/vilio.min.css', 'js/vilio.min.js']
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-rev');

    grunt.registerTask('default', [
        'jshint',
        'uglify:front',
        'cssmin:front',
        'rev'
    ]);

};