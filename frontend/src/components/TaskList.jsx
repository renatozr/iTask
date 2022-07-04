import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Task from './Task';

const fetchTasks = () => axios.get('http://localhost:3001/tasks').then((res) => res.data);

function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks().then((data) => setTasks(data));
  }, []);

  return (
    <div className="TaskList">
      {
        tasks.map((task) => <Task key={task.id} task={task} />)
      }
    </div>
  );
}

export default TaskList;
