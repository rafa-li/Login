var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var session = require('express-session')

var app = express();

// 设置views路径和模板，__dirname是node.js里面的全局变量，即取得执行的js所在的路径
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
/**
*app.use 设置
*/
// uncomment after placing your favicon in /public
//指定完整图标存放位置
app.use(favicon(path.join(__dirname, 'public/images/', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//指定上传文件存放的文件夹
app.use(bodyParser({uploadDir:'./uploads'}));

app.use(cookieParser("An"));
app.use(session({
  secret:'an',
  resave:false,
  saveUninitialized:true
}));

//express.static()也是一个Connect內建的中间件来处理静态的requests，例如css、js、img文件等。所以static()里面指定的文件夹中的文件会直接作为静态资源吐出来。
app.use(express.static(path.join(__dirname, 'public')));

//app.router()是route requests，但express.js的官方文件是这句可有可无，并且经过测试还真的是这样，不过还是写上吧。
app.use('/', routes);
app.use('/users', users);

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
