var express = require('express');
var app = new express();
 app.set('view engine', 'ejs'); //when we inform view engine to convert ejs file then no need to add extension to any files
//if we dont add then add extension. ex. index.ejs

app.get('/', function (req,res){
    res.render('./../app/index', {});
        })
    .listen(7777);

