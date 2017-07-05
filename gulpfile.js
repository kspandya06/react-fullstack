var gulp = require('gulp');
var LiveServer = require('gulp-live-server');
var browserSync = require('browser-sync');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');

//call for any task at gulp => call gulp live-server with main.js as function

    gulp.task('live-server', function(){
        var server = new LiveServer('server/main.js');
        server.start();

   })

    gulp.task('bundle',['copy'], function(){
        return browserify({
            entries: 'app/main.jsx',
            debug:true,
        })
        .transform(reactify)
        .bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest('./.tmp'));
     })

     gulp.task('copy',function(){
         gulp.src(['app/*.css'])
         .pipe(gulp.dest('./.tmp'))
     })
       
     
       //giving gulp a new task with name'serve',dependent on LiveServer. in task to have function that
   //returns browserSync.init has first parameter null i.e. server is started already and 2nd parameter 
   //pass proxy to see server and pass port number for new connection.

    gulp.task('serve', ['bundle','live-server'], function(){
         browserSync.init(null,{
             proxy:"http://localhost:7777",
             port:9001 })
    })
