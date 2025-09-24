const express = require('express');
const router = express.Router();
const { loggedIn } = require('../middleware/LogedIn');

// home route
router.get('/', loggedIn, (req, res) => {
  let payload = {
    title: 'Home',
    message: 'Welcome to the Home Page!',
  };

  res.render('views/pages/home', payload);
});

module.exports = router;
