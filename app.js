const express = require('express');
const app = express();
const { loggedIn } = require('./middleware/LogedIn');
const port = 3000;
const userRoutes = require('./routes/user');

// Middleware setup
app.set('view engine', 'pug');
app.set('views', './views');
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use('/user', userRoutes);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}/`);
});
