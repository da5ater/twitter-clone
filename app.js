const express = require('express');
const app = express();
const configureViewEngine = require('./config/viewEngine');
const path = require('path');
const routes = require('./routes/index');

configureViewEngine(app);

// static files and body parser
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);

module.exports = app;
