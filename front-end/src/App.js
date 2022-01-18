import React from 'react';
import './App.css';

function App() {
  const createTask = () => {
  };

  const deleteTask = (id) => {
  };

  return (
    <>
        <h1>ToDo List</h1>
        <div id="menu">
            <label>Your new to-do</label>
            <input type="text" placeholder="enter new task"/>
            <button onClick={createTask}>add task</button>
        </div>
        <div id="list">
            <div>
                <button onClick={() => deleteTask(1)}>delete</button>
                <li style={{ display: 'inline' }}>
                      buy milk
                </li>
                <br></br>
            </div>
        </div>
    </>
  );
}

export default App;
