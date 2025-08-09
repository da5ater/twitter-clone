const express = require('express');
const router = express.Router();

// home route
router.get('/', loggedIn, (req, res) => {
    let payload = {
        title: 'Home',
        message: 'Welcome to the Home Page!',
    };

    res.render('home', payload);
});

// profile route
router.get('/login', (req, res) => {
    res.render('login', { title: 'Login' });
});

module.exports = router;
