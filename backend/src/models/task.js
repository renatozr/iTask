const conn = require('./connection');

const status = ['Pendente', 'Em andamento', 'Pronto'];

const getAll = async () => {
  const [tasks] = await conn.execute(
    `SELECT t.id, t.name, s.name AS status, t.created_at AS createdAt
    FROM iTask_DB.task AS t
    INNER JOIN iTask_DB.status AS s
    ON t.status_id = s.id;`,
  );

  return tasks;
};

const create = async (name, statusId) => {
  const [{ insertId }] = await conn.execute(
    'INSERT INTO iTask_DB.task (name, status_id, created_at) VALUES (?, ?, NOW());',
    [name, statusId],
  );

  return {
    id: insertId, name, status: status[statusId - 1], createdAt: new Date().toISOString(),
  };
};

const update = async (id, name, statusId) => {
  await conn.execute(
    'UPDATE iTask_DB.task SET name=?, status_id=? WHERE id=?',
    [name, statusId, id],
  );

  return { id, name, status: status[statusId - 1] };
};

const exclude = async (id) => {
  await conn.execute(
    'DELETE FROM iTask_DB.task WHERE id=?',
    [id],
  );
};

module.exports = {
  getAll,
  create,
  update,
  exclude,
};
