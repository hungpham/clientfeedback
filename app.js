require('dotenv').config();
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// Connect DB
var DB_CONNECTION = process.env.DB_HOST + process.env.DB_NAME;
console.log(DB_CONNECTION);
console.log('mongodb://localhost/csdev');
mongoose.connect(DB_CONNECTION);
var db = mongoose.connection;
db.on('error', function () {
  throw new Error('unable to connect to database at ' + DB_CONNECTION);
});

// Init Router
var routes = require('./routes/index');
var forbidden = require('./routes/forbidden');
var feedback = require('./routes/feedback');
var satisfied = require('./routes/satisfied');
var dissatisfied = require('./routes/dissatisfied');
var display = require('./routes/display');



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/forbidden', forbidden);
app.use('/feedback', feedback);
app.use('/satisfied', satisfied);
app.use('/dissatisfied', dissatisfied);
app.use('/display', display);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
