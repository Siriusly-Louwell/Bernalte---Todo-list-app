import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, toggleTaskCompletion, removeTask } from "./redux/tasksSlice";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const App = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-16">
      <div className="px-4 py-2">
        <h1 className="text-gray-800 font-bold text-2xl uppercase">To-Do List</h1>
      </div>
      <TodoForm addTask={(taskName) => dispatch(addTask(taskName))} />
      <TodoList 
        tasks={tasks} 
        toggleTaskCompletion={(index) => dispatch(toggleTaskCompletion(index))}
        toggleRemoveTask={(index) => dispatch(removeTask(index))}
      />
    </div>
  );
};

export default App;