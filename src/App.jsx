import React, { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskName) => {
    setTasks([...tasks, {
      name: taskName,
      isCompleted: false,
      date: new Date().toLocaleDateString()
    }]);
  };

  const toggleTaskCompletion = (index) => {
    const newTasks = [...tasks];
    newTasks[index].isCompleted = !newTasks[index].isCompleted;
    setTasks(newTasks);
    console.log(newTasks, tasks[0]);
  };

  const toggleRemoveTask = (index)=> {
    setTasks(tasks.filter((task, i) => i !== index));
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-16">
      <div className="px-4 py-2">
        <h1 className="text-gray-800 font-bold text-2xl uppercase">To-Do List</h1>
      </div>
      <TodoForm addTask={addTask} />
      <TodoList tasks={tasks} toggleTaskCompletion={toggleTaskCompletion} toggleRemoveTask={toggleRemoveTask} />
    </div>
  );
};

export default App;
