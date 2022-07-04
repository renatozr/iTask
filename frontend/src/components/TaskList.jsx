import axios from 'axios';
import React, { useEffect, useState } from 'react';

function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/tasks')
      .then(({ data }) => setTasks(data));
  }, []);

  return (
    <div className="TaskList">
      <ul className="list">
        { tasks.map((task) => <li key={task.id}>{ `${task.name} - ${task.status}` }</li>) }
      </ul>
    </div>
  );
}

export default TaskList;
