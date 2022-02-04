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

  const deleteTask = async(id) => {
    const responseDel = await axios.delete(`http://localhost:6789/tasks/${id}`);
    return responseDel;
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
