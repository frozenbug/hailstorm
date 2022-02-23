var bodyParser = require('body-parser');
var express = require('express');
// var ejs = require('ejs');
// var path = require('path');

var app = express();

// app.use(express.static(path.join(__dirname,'public')));

// app.set('view engine','ejs');
// app.set('views',path.join(__dirname,'views'));

//Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'expanded':false}));

app.get('/',function(req,res){
  res.send('Hello World!');
})

app.listen(3001,function(){
  console.log('Server Started');
})
