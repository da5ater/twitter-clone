const express = require('express');
const router = express.Router();
const { loggedIn } = require('../middleware/LogedIn');

// profile route
router.get('/login', (req, res) => {
  res.render('login', { title: 'Login' });
});

router.get('/register', (req, res) => {
  res.render('register', { title: 'Register' });
});

module.exports = router;
