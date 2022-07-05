import axios from 'axios';

const convertCreatedAtToDate = (task) => ({ ...task, createdAt: new Date(task.createdAt) });

export const getTasks = () => axios
  .get('http://localhost:3001/tasks').then((res) => res.data.map(convertCreatedAtToDate));

export const createTask = (name, statusId) => axios
  .post('http://localhost:3001/tasks', { name, statusId });

export const updateTask = (taskId, name, statusId) => axios
  .put(`http://localhost:3001/tasks/${taskId}`, { name, statusId });

export const excludeTask = (taskId) => axios
  .delete(`http://localhost:3001/tasks/${taskId}`);
