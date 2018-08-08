var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'public')));

app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function(req, res){
    // res.render('index', {title: 'Computer Not Working?'});
    // res.send('Hello Wanker');
    // anything in bracket means it is an object. 
    res.render('index', {title: 'Computer Not Working?'});
});

app.listen(3000);
console.log('Server is running on port 3000');

