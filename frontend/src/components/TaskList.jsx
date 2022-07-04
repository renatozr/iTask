import axios from 'axios';
import React, { useEffect, useState } from 'react';

import Loading from './Loading';

function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get('localhost:3001/tasks')
      .then((data) => data.json())
      .then((data) => setTasks(data));
  }, []);

  return (
    <div className="TaskList">
      <ul className="list">
        {
          tasks.length === 0 ? <Loading /> : tasks.map((task) => <li>{ task }</li>)
        }
      </ul>
    </div>
  );
}

export default TaskList;
