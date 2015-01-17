var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var routes = require('./routes/index');

var app = express();

//var _500px_OAUTH_KEY = "Xwv1mwJGf7mIqqq0RzQGj64tVazv5zGe1nhGSk46";
//var _500px_OAUTH_SECRET = "k6KXzjGDA3ROCzinbN3kVvQs5eaxXZWVR66hGwnz";

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(function (req, res, next) {
    res.set('X-Powered-By', 'Jesse');
    next();
});

app.get('/', routes._500px);
app.get('/example/:number', routes.example);
app.put('/example/:number/arrived', routes.arrived);
app.get('/list', routes.list);

app.listen(3000);

/**
 each example, index in examples
            - example = example
            li= example.name + ' ' + example.last + ' - ' + example.address + ' - ' + example.phone
**/