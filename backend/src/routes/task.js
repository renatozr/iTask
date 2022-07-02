const express = require('express');
const taskController = require('../controllers/task');

const router = express.Router();

router.route('/')
  .get(taskController.getAll);

module.exports = router;
