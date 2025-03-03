import React from "react";

const TodoItem = ({ task, toggleTaskCompletion, toggleRemoveTask }) => {
  return (
    <li className="py-4">
      <div className="flex items-center item-line space-between">
        <div className="flex items-center">
          <input
            type="checkbox"
            className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
            checked={task.isCompleted}
            onChange={toggleTaskCompletion}
          />
          <span className={`ml-3 text-lg font-medium ${task.isCompleted ? "line-through" : ""}`}>
            {task.name}
          </span>
          <span className="text-xsm c-gray">&nbsp;&nbsp;&nbsp;{task.date}</span>
        </div>
        <button
          className="flex-shrink-0 bg-red no-border text-sm border-4 text-white py-1 px-2 rounded"
          onClick={toggleRemoveTask}
        >
          Remove
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
