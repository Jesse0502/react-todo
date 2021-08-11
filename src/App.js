import React, { useState, useRef, useEffect } from "react";
import "./app.css";
import Overview from "./components/Overview";
function App() {
  const [task, setTask] = useState([]);
  const taskInput = useRef();
  const [id, setId] = useState(0);

  function addTask() {
    setTask([...task, { title: taskInput.current.value, id: id }]);
    setId(id + 1);
    taskInput.current.value = null;
  }
  const stored = localStorage.getItem("tasks");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(task));
  }, [task]);

  useEffect(() => {
    if (stored) {
      setTask(JSON.parse(stored));
    }
  }, []);

  function taskDel(id) {
    const newList = task.filter((task) => task.id !== id);
    setTask(newList);
    localStorage.removeItem("task", !newList);
  }

  return (
    <div className="app">
      <h2 className="title">Tasks</h2>
      <input placeholder="Add a task" type="text" ref={taskInput} />
      <button onClick={addTask} className="submit-btn">
        Submit
      </button>
      <Overview tasks={task} delete={taskDel} />
    </div>
  );
}

export default App;
