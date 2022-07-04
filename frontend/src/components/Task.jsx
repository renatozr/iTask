import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const excludeTask = (taskId) => axios.delete(`http://localhost:3001/tasks/${taskId}`);

function Task({ task }) {
  const [isTaskExcluded, setIsTaskExcluded] = useState(false);

  const handleExcludeBtn = () => {
    setIsTaskExcluded(true);
    excludeTask(task.id);
  };

  if (isTaskExcluded) return undefined;

  return (
    <div>
      <span>{ `${task.name} - ${task.status}` }</span>
      <button type="button" onClick={handleExcludeBtn}>X</button>
    </div>
  );
}

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    status: PropTypes.string,
  }).isRequired,
};

export default Task;
