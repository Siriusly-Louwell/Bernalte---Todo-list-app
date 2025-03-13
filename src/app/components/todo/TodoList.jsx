import React from "react";
import TodoItem from "./TodoItem";
import { toggleTaskCompletion, removeTask } from "../../redux/task/tasksSlice";
import { useDispatch, useSelector } from "react-redux";

const TodoList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);

  return (
    <ul className="divide-y divide-gray-200 px-4">
      {tasks.map((task, index) => (
        <TodoItem
          key={index}
          task={task}
          toggleTaskCompletion={() => dispatch(toggleTaskCompletion(index))}
          toggleRemoveTask={() => dispatch(removeTask(index))}
        />
      ))}
    </ul>
  );
};

export default TodoList;