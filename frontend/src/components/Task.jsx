import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { excludeTask } from '../helpers/iTaskAPI';

function Task({ task }) {
  const [isTaskExcluded, setIsTaskExcluded] = useState(false);

  const handleClick = () => {
    setIsTaskExcluded(true);
    excludeTask(task.id);
  };

  if (isTaskExcluded) return undefined;

  return (
    <div>
      <span>{ `${task.name} - ${task.status} - ${task.createdAt.toLocaleDateString()}` }</span>
      <button type="button" onClick={handleClick}>X</button>
    </div>
  );
}

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    status: PropTypes.string,
    createdAt: PropTypes.instanceOf(Date),
  }).isRequired,
};

export default Task;
