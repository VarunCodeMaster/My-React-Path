// Topic: Conditional Rendering + List
// Level: Boss-Level
// Problem: If a list of tasks is empty, show "You have no tasks 💤".  
// If it has tasks, render the list.

import { useState } from "react";
import '../App.css';

function TaskList(){
  const [task, setTask] = useState(["Water the plants", "Feed the dragon"]);
  const [newTask, setNewTask] = useState("");

  function handleAddTask(){
    if(newTask.trim() !== ""){
      setTask([...task, newTask]);
      setNewTask("");
    }
  }

  function handleClearTask(){
    if(newTask.trim() === ""){
      setTask([]);
      setNewTask("");
    }
  }

  return(
    <div className="container">

      <h2 className="title">Your Tasks</h2>

      <input 
      type="text" 
      value={newTask}
      onChange={(e) => setNewTask(e.target.value)}
      placeholder="Enter a new task"
      className="input-field"
      />

      <button className="add-btn" onClick={handleAddTask}>Add Task</button>
      <button className="clear-btn" onClick={handleClearTask}>Clear the tasks</button>

     {task.length === 0 ? (
      <p className="no-task">You have no tasks</p>
     ):(
     <ul className="task-list">
      {task.map((tasks, index)=> 
        (
          <li key={index}>{tasks}</li>
        )
      )}
      </ul>)}
    </div>
  )
}

export default TaskList