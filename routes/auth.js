const express = require('express');
const { Value } = require('sass');
const router = express.Router();
const { datepayload } = require('../utils/dateHelper');
// login route
// router.get('/login', (req, res) => {
//   res.render('login', { title: 'Login', layout: 'main-layout' });
// });

// register route
router.get('/register', (req, res) => {
  console.log('Auth routes loaded');

  res.render('landing-page', {
    title: 'Register',
    layout: 'main-layout',
    datepayload,
    showSignupModal: true,
  });
});

module.exports = router;
