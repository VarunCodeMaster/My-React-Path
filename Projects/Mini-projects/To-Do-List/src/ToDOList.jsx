import React, {useState} from "react";

function ToDoList(){
  const [tasks, setTasks] = useState([
    {text: "Buy Milk", completed: false},
    {text: "Go to Gym", completed: false},
  ]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event){
    setNewTask(event.target.value);
  }

  function addTask(){
    if(newTask.trim() !== ""){
      setTasks(t => [...t, {text: newTask, completed: false}]);
      setNewTask("");
    }
  }

  function deleteTask(index){
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function moveTaskUp(index){
    if(index > 0){
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }

  function moveTaskDown(index){
    if(index < tasks.length - 1){
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1],updatedTasks[index]];
      setTasks(updatedTasks);

    } 
  }

  function toggleCheckbox(index){
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  }

  return(
    <div>
      <h1>To-Do-List</h1>
       <div>
          <input 
          type="text" 
          value={newTask}
          placeholder="Add new task"
          onChange={handleInputChange}
          />
          <button onClick={addTask}>Add Task</button>
       </div>

        <ul style={{listStyleType: "none"}}>
          {tasks.map((task, index) => (
            <li key={index}>
              <input 
              type="checkbox" 
              checked={task.completed}
              onChange={() => toggleCheckbox(index)}
              />

              <span style={{
                textDecoration: task.completed ? "line-through" : "none", marginRight: "10px"
              }}>{task.text}
              </span>
            <button onClick={() => deleteTask(index)}>Delete</button>
            <button onClick={() => moveTaskUp(index)}>Move Up</button>
            <button onClick={() => moveTaskDown(index)}>Move Down</button>
            </li>
          ))}
        </ul>
    </div>
   
  )
}

export default ToDoList