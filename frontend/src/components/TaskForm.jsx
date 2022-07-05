import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { createTask, updateTask } from '../helpers/iTaskAPI';

function TaskForm({
  update, taskId, taskName, setIsCreatingTask, setIsUpdatingTask, renderTasks,
}) {
  const [name, setName] = useState(taskName);
  const [statusId, setStatusId] = useState('1');

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  const handleSelectChange = (event) => {
    setStatusId(event.target.value);
  };

  const handleUpdateClick = () => {
    updateTask(taskId, name, statusId)
      .then(() => {
        setIsUpdatingTask(false);
        renderTasks();
      });
  };

  const handleCreateClick = () => {
    createTask(name, parseInt(statusId, 10))
      .then(() => {
        setIsCreatingTask(false);
        renderTasks();
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
      {
        update ? (
          <button type="button" onClick={handleUpdateClick}>Atualizar</button>
        ) : (
          <button type="button" onClick={handleCreateClick}>Criar</button>
        )
      }
    </form>
  );
}

TaskForm.propTypes = {
  update: PropTypes.bool.isRequired,
  taskId: PropTypes.number.isRequired,
  taskName: PropTypes.string.isRequired,
  setIsCreatingTask: PropTypes.func,
  setIsUpdatingTask: PropTypes.func.isRequired,
  renderTasks: PropTypes.func.isRequired,
};

TaskForm.defaultProps = {
  setIsCreatingTask: PropTypes.func,
};

export default TaskForm;
