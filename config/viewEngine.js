const path = require('path');
const { engine } = require('express-handlebars');

const configureViewEngine = app => {
  app.engine(
    'hbs',
    engine({
      extname: '.hbs',
      defaultLayout: 'main-layout',
      layoutsDir: path.join(__dirname, '../views/layout'), // Note the '../'
      partialsDir: path.join(__dirname, '../views/partials'),
    })
  );
  app.set('view engine', 'hbs');
  app.set('views', path.join(__dirname, '../views/pages')); // Note the '../'
};

module.exports = configureViewEngine;
