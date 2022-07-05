const taskModel = require('../models/task');

const getAll = async () => {
  const tasks = await taskModel.getAll();

  return tasks;
};

const create = async (name, statusId) => {
  const task = await taskModel.create(name, statusId);

  return task;
};

const update = async (id, name, statusId) => {
  const task = await taskModel.update(id, name, statusId);

  return task;
};

const exclude = async (id) => {
  await taskModel.exclude(id);
};

module.exports = {
  getAll,
  create,
  update,
  exclude,
};
