const taskService = require('../services/task');

const getAll = async (_req, res) => {
  const tasks = await taskService.getAll();

  res.status(200).json(tasks);
};

const create = async (req, res) => {
  const { name, status } = req.body;

  const task = await taskService.create(name, status);

  res.status(201).json(task);
};

const update = async (req, res) => {
  const { id } = req.params;
  const { name, status } = req.body;

  const task = await taskService.update(id, name, status);

  res.status(200).json(task);
};

module.exports = {
  getAll,
  create,
  update,
};
