const taskModel = require('../models/task');

const getAll = async () => {
  const tasks = await taskModel.getAll();

  return tasks;
};

module.exports = {
  getAll,
};
