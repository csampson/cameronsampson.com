'use strict';

import express from 'express';
import path    from 'path';
import logger  from 'morgan';

let app = express();

let routes = new Map();

routes.set('index', (req, res, next) => {
  res.render('index');
});

/**
 * Main page
 */
app.get('/', routes.get('index'));

/**
 * Logging
 */
app.use(logger('dev'));


/**
 * Static assets
 */
app.use(express.static(path.join(__dirname, 'public')));

/**
 * Views
 */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

/**
 * Handle errors (development env)
 */
if (app.get('env') === 'development') {
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

/**
 * Handle errors (production env)
 */
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

/**
 * Catch 404s
 * @todo Custom error page
 */
app.use(function(req, res, next) {
  var err = Error('Not Found');
  err.status = 404;
  next(err);
});

export default app;
