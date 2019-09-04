import * as express from 'express';
import createError from 'http-errors';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';

import { createServer } from './config/http-config';

import routes from './routes';

require('dotenv').config();
require('./config/db');

const app = express();

app.use(cors({ origin: ['https://localhost:4200', 'http://localhost:4200'], credentials: true }));

app.use(logger('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', routes);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

createServer(app);
