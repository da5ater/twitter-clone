const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const { engine } = require('express-handlebars');

// 1. Tell express to use the handlebars engine
app.engine(
  'hbs',
  engine({
    // 2. Define the file extension name
    extname: '.hbs',
    // 3. Set a default layout. It will look for this in the layoutsDir
    defaultLayout: 'main-layout',
    // 4. Tell handlebars where to find your layout files
    layoutsDir: path.join(__dirname, 'views/layout'),
    // 5. Tell handlebars where to find your partials
    partialsDir: path.join(__dirname, 'views/partials'),
  })
);

// 6. Set the view engine for your app
app.set('view engine', 'hbs');

// 7. Set the 'views' directory. This part was already correct.
app.set('views', path.join(__dirname, 'views/pages'));

// static files and body parser
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routes
app.use('/user', require('./routes/user'));
app.use('/auth', require('./routes/auth'));
app.use('/', require('./routes/index'));

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}/`);
});
