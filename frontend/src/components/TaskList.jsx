import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SortingSelect from './SortingSelect';
import Task from './Task';

const fetchTasks = () => axios.get('http://localhost:3001/tasks').then((res) => res.data);

const compareFunctions = {
  alfabetica: (a, b) => {
    if (a.name > b.name) return 1;
    if (b.name > a.name) return -1;
    return 0;
  },
  data: (a, b) => {
    const aDateTime = new Date(a.createdAt).getTime();
    const bDateTime = new Date(b.createdAt).getTime();

    return aDateTime - bDateTime;
  },
  status: (a, b) => {
    const statusWeight = {
      pendente: 1,
      'em andamento': 2,
      pronto: 3,
    };

    return statusWeight[a.status] - statusWeight[b.status];
  },
};

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [sortType, setSortType] = useState('data');

  useEffect(() => {
    fetchTasks().then((data) => setTasks(data));
  }, []);

  return (
    <div className="TaskList">
      <span>
        Ordenar Por:
        <SortingSelect sortType={sortType} setSortType={setSortType} />
      </span>
      {
        tasks.sort(compareFunctions[sortType]).map((task) => <Task key={task.id} task={task} />)
      }
    </div>
  );
}

export default TaskList;
