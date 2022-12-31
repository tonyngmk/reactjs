import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ToDoList() {
  const [tasks, setTasks] = useState([]);

  const addTask = task => {
    setTasks([...tasks, { task, completed: false }]);
  };

  const toggleCompleted = index => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const removeTask = index => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div className="container">
      <h1 className="text-center mt-5">To-Do List</h1>
      <form
        className="form-inline justify-content-center"
        onSubmit={e => {
          e.preventDefault();
          addTask(e.target.task.value);
          e.target.task.value = '';
        }}
      >
        <input
          className="form-control mr-2"
          name="task"
          placeholder="Add a task"
        />
        <button className="btn btn-primary" type="submit">
          Add Task
        </button>
      </form>
      <ul className="list-group mt-5">
        {tasks.map((task, index) => (
          <li key={index} className="list-group-item">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleCompleted(index)}
            />
            {task.task}
            <button
              className="btn btn-danger btn-sm float-right"
              onClick={() => removeTask(index)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
