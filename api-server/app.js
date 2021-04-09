var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const axios = require('./api/requset.js')
var indexRouter = require('./routes/index');
var app = express();
var proxy = require('http-proxy-middleware');

app.use(require('body-parser').urlencoded({
  extended: false
}))
app.use(require('body-parser').json())

app.all('*', function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,PUT,POST,DELETE,PATCH');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
  res.setHeader("Content-Type", "application/json;charset=utf-8");
  next();
});


app.use('/', indexRouter)
var restream = function (proxyReq, req, res, options) {
  console.log(req.body, 'body');
  if (req.body) {
    let bodyData = JSON.stringify(req.body);
    // incase if content-type is application/x-www-form-urlencoded -> we need to change to application/json
    proxyReq.setHeader('Content-Type', 'application/json');
    proxyReq.setHeader('Content-Length', Buffer.byteLength(bodyData));
    // stream the content
    proxyReq.write(bodyData);
  }
}
app.use('/', proxy({
  // 代理跨域目标接口
  target: global.baseUrl,
  changeOrigin: true,
  secure: false,
  onProxyReq: restream
}));



// catch 404 and forward to error handler
// app.use(function (req, res, next) {
//   next(createError(404));
// });

// error handler
app.use(function (err, req, res, next) {
  console.log(req.body, 'body');
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(logger('dev'));
// app.use(express.urlencoded({
//   extended: true
// }));

// app.use(express.json());

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;