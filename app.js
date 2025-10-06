const express = require('express');
const app = express();
const configureViewEngine = require('./config/viewEngine');
const path = require('path');
const { router } = require('./routes/index');

configureViewEngine(app);

// This one line handles all static files: CSS, JS, images, and fonts.
app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(router);

module.exports = app;
