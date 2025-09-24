let express = require('express');
let router = express.Router();

router.get('/', (req, res) => {
  res.render('pages/landingPage');
});

module.exports = router;
