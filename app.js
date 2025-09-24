const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const hbs = require('hbs');

// Middleware setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
hbs.registerPartials(path.join(__dirname, 'views/partials'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use('/user', require('./routes/user'));
app.use('/auth', require('./routes/auth'));
app.use('/', require('./routes/index'));

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}/`);
});
