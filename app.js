var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const compression = require('compression');
const helmet = require('helmet');
const cors = require('cors');
const nodemailer = require('nodemailer');


var indexRouter = require('./routes/index');
var userRouter = require('./routes/user');

var app = express();

app.use(helmet());
app.use(cors());
app.use(compression());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, './public')));

//app.use('/', indexRouter);
app.get('*', (req, res, next) => {
  res.sendFile(path.resolve(__dirname, './public/index.html'));
});
app.use('/user', userRouter);


module.exports = app;
