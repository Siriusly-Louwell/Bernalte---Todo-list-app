import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ tasks, toggleTaskCompletion, toggleRemoveTask }) => {
  return (
    <ul className="divide-y divide-gray-200 px-4">
      {tasks.map((task, index) => (
        <TodoItem
          key={index}
          task={task}
          toggleTaskCompletion={() => toggleTaskCompletion(index)}
          toggleRemoveTask={() => toggleRemoveTask(index)}
        />
      ))}
    </ul>
  );
};

export default TodoList;