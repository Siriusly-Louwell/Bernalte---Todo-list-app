import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../redux/task/tasksSlice";
import Task from "../../domain/entities/Task";
import TodoList from "../components/todo/TodoList";

const TodoForm = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);
  const [taskName, setTaskName] = useState("");
  const newTask = new Task(taskName);

  const handleInputChange = (e) => {
    setTaskName(e.target.value);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim()) {
      dispatch(addTask(newTask));
      setTaskName("");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-16">
      <div className="px-4 py-2">
        <h1 className="text-gray-800 font-bold text-2xl uppercase">Bernalte - To-Do List</h1>
      </div>
      <form onSubmit={handleSubmit} className="w-full max-w-sm mx-auto px-4 py-2 item-line">
        <div className="flex items-center border-b-2 border-teal-500 py-2">
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus-task unfocus"
            type="text"
            placeholder="Add a task"
            value={taskName}
            onChange={handleInputChange}
          />
          <button
            className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 no-border hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="submit"
          >
            Add
          </button>
        </div>
      </form>
      <TodoList tasks={tasks} />
    </div>
  );
};

export default TodoForm;
