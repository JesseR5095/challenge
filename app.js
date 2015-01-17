var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');

var app = express();

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

app.get('/', routes.index);
app.get('/index', routes.index);
app.get('/categories/', routes.categories);
app.get('/categories/:number', routes.categories);
app.get('/contact', routes.contact);

var server = app.listen(app.get('port'), function() {
  debug('Express server listening on port ' + server.address().port);
});