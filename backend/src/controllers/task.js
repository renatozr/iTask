const taskService = require('../services/task');

const getAll = async (_req, res) => {
  const tasks = await taskService.getAll();

  res.status(200).json(tasks);
};

module.exports = {
  getAll,
};
