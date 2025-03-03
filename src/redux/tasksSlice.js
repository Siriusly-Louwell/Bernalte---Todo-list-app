import { createSlice } from "@reduxjs/toolkit";
import TaskService from "../services/TaskService";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: TaskService.getTasks(),
  reducers: {
    addTask: (state, action) => {
      TaskService.addTask(action.payload);
      return [...TaskService.getTasks()];
    },
    toggleTaskCompletion: (state, action) => {
      TaskService.toggleTaskCompletion(action.payload);
      return [...TaskService.getTasks()];
    },
    removeTask: (state, action) => {
      TaskService.removeTask(action.payload);
      return [...TaskService.getTasks()];
    }
  },
});

export const { addTask, toggleTaskCompletion, removeTask } = tasksSlice.actions;
export default tasksSlice.reducer;