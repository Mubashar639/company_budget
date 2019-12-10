var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var mongoose = require("mongoose")   // for nosql database
var config  = require("./config")  // database links or some configuration 

var myCompany = require("./company/routes") 
var Budget = require("./budget/routes") 
var employee = require("./employee/routes") 
var project = require("./project/routes") 


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
mongoose.connect(config.myDburi,
  { useNewUrlParser: true,useUnifiedTopology:true,useCreateIndex:true },
   err => {
 if (err) return console.log(err);
 console.log("DB connected");
});


app.use(logger('dev'));    //for console on terminal
app.use(express.json());  // to parse the body request
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/api/v1/company", myCompany)   
app.use("/api/v1/budget", Budget)   
app.use("/api/v1/employee", employee)   
app.use("/api/v1/project", project)   


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
