const express = require('express');
const router = express.Router();

// login route
router.get('/login', (req, res) => {
  res.render('login', { title: 'Login', layout: 'main-layout' });
});

// register route
router.get('/register', (req, res) => {
  res.render('register', { title: 'Register', layout: 'main-layout' });
});

console.log('Auth routes loaded');

module.exports = router;
