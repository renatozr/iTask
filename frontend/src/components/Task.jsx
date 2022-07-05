import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { excludeTask } from '../helpers/iTaskAPI';
import TaskForm from './TaskForm';

function Task({ task, renderTasks }) {
  const [isTaskExcluded, setIsTaskExcluded] = useState(false);
  const [isUpdatingTask, setIsUpdatingTask] = useState(false);

  const handleExcludeClick = () => {
    setIsTaskExcluded(true);
    excludeTask(task.id);
  };

  const handleUpdateClick = () => {
    setIsUpdatingTask(true);
  };

  if (isTaskExcluded) return undefined;

  if (isUpdatingTask) {
    return (
      <TaskForm
        update
        taskName={task.name}
        renderTasks={renderTasks}
        taskId={task.id}
        setIsUpdatingTask={setIsUpdatingTask}
      />
    );
  }

  return (
    <div>
      <span>{ `${task.name} - ${task.status} - ${task.createdAt.toLocaleDateString()}` }</span>
      <button type="button" onClick={handleExcludeClick}>X</button>
      <button type="button" onClick={handleUpdateClick}>Editar</button>
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
  renderTasks: PropTypes.func.isRequired,
};

export default Task;
