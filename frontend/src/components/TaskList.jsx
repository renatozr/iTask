import React, { useEffect, useState } from 'react';

import SortBySelect from './SortBySelect';
import TaskForm from './TaskForm';
import Task from './Task';
import { getTasks } from '../helpers/iTaskAPI';
import compareFn from '../helpers/compareFunctions';

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [sortBy, setSortBy] = useState('data');
  const [isCreatingTask, setIsCreatingTask] = useState(false);

  const renderTasks = () => {
    getTasks().then((data) => setTasks(data));
  };

  useEffect(() => {
    renderTasks();
  }, []);

  const handleClick = () => {
    setIsCreatingTask(true);
  };

  return (
    <div className="TaskList">
      <button type="button" onClick={handleClick}>Criar nova tarefa</button>
      <SortBySelect sortBy={sortBy} setSortBy={setSortBy} />
      {
        isCreatingTask ? ((
          <TaskForm taskName="" renderTasks={renderTasks} setIsCreatingTask={setIsCreatingTask} />
        )) : undefined
      }
      {
        [...tasks]
          .sort(compareFn[sortBy])
          .map((task) => <Task renderTasks={renderTasks} key={task.id} task={task} />)
      }
    </div>
  );
}

export default TaskList;
