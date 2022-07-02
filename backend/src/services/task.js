const taskModel = require('../models/task');

const getAll = async () => {
  const tasks = await taskModel.getAll();

  return tasks;
};

const create = async (name, status) => {
  const task = await taskModel.create(name, status);

  return task;
};

module.exports = {
  getAll,
  create,
};
