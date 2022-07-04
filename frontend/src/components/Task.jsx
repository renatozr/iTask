import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const excludeTask = (taskId) => axios.delete(`http://localhost:3001/tasks/${taskId}`);

function Task({ task }) {
  const [isTaskExcluded, setIsTaskExcluded] = useState(false);

  const handleClick = () => {
    setIsTaskExcluded(true);
    excludeTask(task.id);
  };

  if (isTaskExcluded) return undefined;

  const taskDate = new Date(task.createdAt).toLocaleDateString();
  return (
    <div>
      <span>{ `${task.name} - ${task.status} - ${taskDate}` }</span>
      <button type="button" onClick={handleClick}>X</button>
    </div>
  );
}

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    status: PropTypes.string,
    createdAt: PropTypes.string,
  }).isRequired,
};

export default Task;
