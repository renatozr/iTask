const taskService = require('../services/task');

const getAll = async (_req, res) => {
  const tasks = await taskService.getAll();

  res.status(200).json(tasks);
};

const create = async (req, res) => {
  const { name, statusId } = req.body;

  const task = await taskService.create(name, statusId);

  res.status(201).json(task);
};

const update = async (req, res) => {
  const { id } = req.params;
  const { name, status } = req.body;

  const task = await taskService.update(id, name, status);

  res.status(200).json(task);
};

const exclude = async (req, res) => {
  const { id } = req.params;

  await taskService.exclude(id);

  res.status(204).end();
};

module.exports = {
  getAll,
  create,
  update,
  exclude,
};
