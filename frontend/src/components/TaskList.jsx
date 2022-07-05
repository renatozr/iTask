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

  useEffect(() => {
    getTasks().then((data) => setTasks(data));
  }, []);

  const handleClick = () => {
    setIsCreatingTask(true);
  };

  return (
    <div className="TaskList">
      <button type="button" onClick={handleClick}>Criar nova tarefa</button>
      <SortBySelect sortBy={sortBy} setSortBy={setSortBy} />
      {
        isCreatingTask ? (
          <TaskForm tasks={tasks} setTasks={setTasks} setIsCreatingTask={setIsCreatingTask} />
        ) : undefined
      }
      {
        [...tasks]
          .sort(compareFn[sortBy])
          .map((task) => <Task key={task.id} task={task} />)
      }
    </div>
  );
}

export default TaskList;
