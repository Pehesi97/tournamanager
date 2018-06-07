var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');

var index = require('./routes/index');
var users = require('./routes/users');
var tournaments = require('./routes/tournaments');
var statistics = require('./routes/statistics');
var matches = require('./routes/matches');

var app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'frontend/build')));

mongoose.connect('mongodb://tournamanager:tournamanager@ds015924.mlab.com:15924/tournamanager').then(() => {
  console.log('connected to mongoDB');
}, err => {
  console.log('error connecting to mongoDB');
});

app.use('/api/users', users);
app.use('/api/tournaments', tournaments);
app.use('/api/statistics', statistics);
app.use('/api/matches', matches);
app.use('/', index);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send(res.locals);
});

module.exports = app;
