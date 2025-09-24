const express = require('express');
const router = express.Router();
const { loggedIn } = require('../middleware/LogedIn');

// profile route
router.get('/login', (req, res) => {
  res.render('pages/login.pug', { title: 'Login' });
});

module.exports = router;
