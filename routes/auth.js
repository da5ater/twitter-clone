const express = require('express');
const router = express.Router();

// profile route
router.get('/login', (req, res) => {
  res.render('login', { title: 'Login', layout: 'login-layout' });
});

router.get('/register', (req, res) => {
  res.render('register', { title: 'Register' });
});

module.exports = router;
