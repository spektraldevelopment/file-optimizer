module.exports = function(grunt) {

    // configure the tasks
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        dot: true,
        copy: {
            opted: {
                files: [{
                    expand: true,
                    cwd: 'src/',
                    src: ['**'],
                    dest: 'opted/'
                }]
            }
        },
        clean: {
            opted: ["opted"]
        },
        uglify: {
            opted: {
                files: [{
                    expand: true,
                    cwd: 'src/js',
                    src: '**/*.js',
                    dest: 'opted/js'
                }]
            }
        },
        cssmin: {
            opted: {
                files: [{
                    expand: true,
                    cwd: 'opted/css',
                    src: ['*.css'],
                    dest: 'opted/css',
                    ext: '.css'
                }]
            }
        },
        imagemin: {
            opted: {
                files: [{
                    expand: true,
                    cwd: 'src',
                    src: ['**/*.{png,jpg,gif,svg}'],
                    dest: 'opted'
                }]
            }
        }
    });

    //EVENTS
    grunt.event.on('watch', function(action, filepath, target) {
        grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
    });

    //LOAD TASKS

    //Copies files from source folder to opted folder
    grunt.loadNpmTasks("grunt-contrib-copy");

    //Wipes the opted folder clean of files
    grunt.loadNpmTasks("grunt-contrib-clean");

    //Minifies js files
    grunt.loadNpmTasks("grunt-contrib-uglify");

    //Minifies css files
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    //Minifies images
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    //REGISTER TASKS

    //Default - command: grunt default
    grunt.registerTask(
        "default",
        "Optimize files.", ["clean", "copy", "uglify", "cssmin", "imagemin"]
    );
};
