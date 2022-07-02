const conn = require('./connection');

const getAll = async () => {
  const [tasks] = await conn.execute(
    `SELECT t.id, t.name, s.name AS status, t.created_at AS createdAt
    FROM iTask_DB.task AS t
    INNER JOIN iTask_DB.status AS s
    ON t.status_id = s.id;`,
  );

  return tasks;
};

module.exports = {
  getAll,
};
