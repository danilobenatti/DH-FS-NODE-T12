var createError = require('http-errors');
var express = require('express'); // <= importante
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// npm install method-override --save
var methodOverride = require('method-override'); // <= para manipular dados com PUT e DELETE.

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var produtosRouter = require('./routes/produtos'); // <= inclusão de rota para produtos

var app = express(); // <= importante

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json()); // <= importante, transforma em obj JSON se necessário
app.use(express.urlencoded({ extended: false })); // <= importante
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method')); // <= sobrescrever a URL

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/produtos', produtosRouter); // <= direciona a URL para a rota

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
