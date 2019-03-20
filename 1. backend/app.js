// #19 var 을 const로 변경: 이유 모름
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const db = require('./db.json')
// #19
const session = require('express-session') // https://velopert.com/406 로그인 구현시 사용

// #41
const MySQLStore = require('express-mysql-session')(session);
const sessionStore = new MySQLStore(db);

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// #41
app.use(session({
    key: 'session_cookie_name',
    secret: 'session_cookie_secret',
    store: sessionStore,
    resave: false,
    saveUninitialized: false,
    expiration: {maxAge: 60000*30},
}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// #42 express-session 

// #19 routes
const memberRouter = require('./routes/member');
const categoryRouter = require('./routes/category');
const chatRouter = require('./routes/chat');
const memberFriendRouter = require('./routes/member-friend');
const participantRouter = require('./routes/participant');
app.use('/', participantRouter);
app.use('/', memberFriendRouter);
app.use('/', chatRouter);
app.use('/', categoryRouter);
app.use('/', memberRouter);


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
