const express = require('express');
const taskRoute = require('./task');

const router = express.Router();

router.use('/tasks', taskRoute);

module.exports = router;
