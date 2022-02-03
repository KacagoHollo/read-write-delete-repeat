import React, {useState, useEffect} from 'react';
import './App.css';
// import axios from 'axios'

const axios = require('axios').default;

function App() {

  const [manageTask, setManageTask] = useState([]);
  const [addTask, setAddTask] = useState("");

  const getData = async () => {
    const response = await axios.get('http://localhost:6789/tasks/');
    setManageTask(response.data)
   
  }
  // console.log(getData());
  useEffect(() => {
    getData();
  }, []);
  console.log(manageTask);
  
  const createTask = () => {
    setAddTask([...addTask])
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
          <button onClick={() => deleteTask(1)}>delete</button>
          <li style={{ display: 'inline' }}>
                buy milk
          </li>
          <br></br>
        </div>
        {manageTask.map((task, id) => (
          <div key={id}>
            <ul>
              <li>{task.title}</li>
            </ul>
          </div>
        ))
        }
    </>
  );
}

export default App;
