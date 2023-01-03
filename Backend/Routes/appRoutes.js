const express = require('express');
const { schedule } = require('../Controllers/appControllers');

const router = express.Router();

router.route('/schedule').post(schedule)

module.exports=router;