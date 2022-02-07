import React, {useState, useEffect} from 'react';
import './App.css';
// import axios from 'axios'

const axios = require('axios').default;

function App() {

  const [manageTask, setManageTask] = useState([]);
  const [addTask, setAddTask] = useState("");

  const getData = async() => {
    const response = await fetch('http://localhost:6789/tasks/');
    const data = await response.json()
    return data;
  }
  // console.log(getData());
  useEffect(() => {
    const init = async() => {
      const data = await getData();
    setManageTask(data);
  }
  init();
  console.log(manageTask);
  }, []);
  
  const createTask = async(title) => {
    const responseCre = await fetch(`http://localhost:6789/tasks/`,
    {method: "POST",
    headers: {
      'Accept': 'application/json, text/plain, /',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({title:title})
    }
    );
    return responseCre;
  };

  const deleteTask = async(id) => {
    const responseDel = await axios.delete(`http://localhost:6789/tasks/${id}`);
    return responseDel;
  };

  return (
    <>
        <h1>ToDo List</h1>
        <div id="menu">
          <label>Your new to-do</label>
          <input type="text" placeholder="enter new task" value={addTask} onChange={(e) => setAddTask(e.target.value)}/>
          <button disabled={addTask === ""} onClick={async() => {
            await createTask(addTask);
            const data = await getData();
            setAddTask("");
            setManageTask(data);
          }}>add task</button>
        </div>
        <div id="list">
          <li style={{ display: 'inline' }}>
                buy milk
          </li>
          <br></br>
        </div>
        <ul>
        {
        manageTask ?
        manageTask.map((task) => (
        <div key={task.id}>
          <li>{task.title}</li>
          <button onClick={async() => {
            await deleteTask(task.id);
            const data = await getData();
            setManageTask(data)
            }
          }>delete</button>
        </div>)) : <p>Loading tasks</p>
        
        }
      </ul>
    </>
  );
}

export default App;
