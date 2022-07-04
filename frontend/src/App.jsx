import React from 'react';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>iTask</h1>
      </header>
      <section>
        <TaskList />
      </section>
    </div>
  );
}

export default App;
