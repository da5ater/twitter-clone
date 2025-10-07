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

router.post('/register', (req, res) => {
  const {
    name,
    email,
    'dob[month]': month,
    'dob[day]': day,
    'dob[year]': year,
  } = req.body;

  console.log('Received registration data:', {
    name,
    email,
    month,
    day,
    year,
  });
});

module.exports = router;
