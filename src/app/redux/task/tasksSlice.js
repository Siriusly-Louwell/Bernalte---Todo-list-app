import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
  },
  
  reducers: {
    addTask: (state, action) => {
      const {name, isCompleted, date} = action.payload;
      state.tasks.push({name, isCompleted, date});
    },
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter((_, i) => i !== action.payload);
    },
    toggleTaskCompletion: (state, action) => {
      const index = state.tasks.findIndex((_, i) => i === action.payload);

      if(index !== -1)
        state.tasks[index].isCompleted = !state.tasks[index].isCompleted;
    }
  },
});

// const taskRepository = new TaskRepository;
// const getTaskUseCase = new GetTasks(taskRepository);
// const addTaskUseCase= new AddTask(taskRepository);
// const removeTaskUseCase = new RemoveTask(taskRepository);
// const completeUseCase = new ToggleTaskCompletion(taskRepository);

// const tasksSlice = createSlice({
//   name: "tasks",
//   initialState: getTasksUseCase(),
//   reducers: {
//     addTask: (state, action) => {
//       addTaskUseCase(action.payload);
//       return [...getTasksUseCase()];
//     },
//     toggleTaskCompletion: (state, action) => {
//       completeUseCase(action.payload);
//       return [...getTasksUseCase()];
//     },
//     removeTask: (state, action) => {
//       removeTaskUseCase(action.payload);
//       return [...getTasksUseCase()];
//     }
//   },
// });

export const { addTask, toggleTaskCompletion, removeTask } = tasksSlice.actions;
export default tasksSlice.reducer;