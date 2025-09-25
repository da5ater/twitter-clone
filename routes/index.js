let express = require('express');
const { loggedIn } = require('../middleware/LogedIn');
let router = express.Router();

router.get('/', loggedIn, (req, res) => {
  res.render('pages/home');
});

module.exports = router;
