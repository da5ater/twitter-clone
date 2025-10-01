let express = require('express');
let router = express.Router();

const userRouter = require('./user');
const authRouter = require('./auth');

router.use('/user', userRouter);
router.use('/auth', authRouter);

router.use('/', (req, res) => {
  res.render('landing-page', { title: 'Home', layout: 'main-layout' });
});

module.exports = router;
