let express = require('express');
let router = express.Router();

const userRouter = require('./user');
const authRouter = require('./auth');

router.use('/user', userRouter);
router.use('/auth', authRouter);

module.exports = router;
