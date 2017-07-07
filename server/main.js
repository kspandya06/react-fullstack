var express = require('express');
var app = new express();
var parser = require('body-parser');

require('./database.js');

 app.set('view engine', 'ejs'); //when we inform view engine to convert ejs file then no need to add extension to any files
//if we dont add then add extension. ex. index.ejs

app.get('/', function (req,res){
    res.render('./../app/index.ejs', {});
        })
      // .use(express.static(__dirname + '/../app'))
    .use(express.static(__dirname + '/../.tmp'))
    .listen(7777);
    
    app.use(parser.json());
    app.use(parser.urlencoded({extended:false}));
    
    require('./routes/items.js')(app);

