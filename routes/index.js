let express = require('express');
let router = express.Router();
const { datepayload } = require('../utils/dateHelper');

const userRouter = require('./user');
const authRouter = require('./auth');

router.use('/user', userRouter);
router.use('/auth', authRouter);

router.get('/', (req, res) => {
  res.render('landing-page', {
    title: 'Home',
    layout: 'main-layout',
    datepayload,
  });
});

module.exports.router = router;
