import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { createTask } from '../helpers/iTaskAPI';

function TaskForm({ tasks, setTasks, setIsCreatingTask }) {
  const [name, setName] = useState('');
  const [statusId, setStatusId] = useState('1');

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  const handleSelectChange = (event) => {
    setStatusId(event.target.value);
  };

  const handleClick = () => {
    createTask(name, parseInt(statusId, 10))
      .then(({ data }) => {
        setTasks([...tasks, { ...data, createdAt: new Date(data.createdAt) }]);
        setIsCreatingTask(false);
      });
  };

  return (
    <form>
      <input type="text" value={name} onChange={handleInputChange} placeholder="tarefa" />
      <label htmlFor="statusSelect">
        Status:
        <select id="statusSelect" value={statusId} onChange={handleSelectChange}>
          <option value="1">Pendente</option>
          <option value="2">Em andamento</option>
          <option value="3">Pronto</option>
        </select>
      </label>
      <button type="button" onClick={handleClick}>Criar</button>
    </form>
  );
}

TaskForm.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    status: PropTypes.string,
    createdAt: PropTypes.instanceOf(Date),
  })).isRequired,
  setTasks: PropTypes.func.isRequired,
  setIsCreatingTask: PropTypes.func.isRequired,
};

export default TaskForm;
