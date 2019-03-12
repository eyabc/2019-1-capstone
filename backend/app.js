// #19 var 을 const로 변경: 이유 모름
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

// #19
const session = require('express-session') // https://velopert.com/406 로그인 구현시 사용

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// #19 express-session 설정 ~~~
app.use(session({
	secret: 'keyboard cat', 
	cookie: {maxAge: 60000*30}
}))

const memberRouter = require('./routes/member');
const categoryRouter = require('./routes/category');
const chatRouter = require('./routes/chat');
const member-friendRouter = require('./routes/member-friend');
const pariticipantRouter = require('./routes/pariticipant');

app.use('/', pariticipantRouter);
app.use('/', member-friendRouter);
app.use('/', chatRouter);
app.use('/', categoryRouter);
app.use('/', memberRouter);

// ~~~ #19

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
