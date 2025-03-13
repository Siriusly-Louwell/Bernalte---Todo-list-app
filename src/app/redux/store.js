import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./task/tasksSlice";
import { thunk } from "redux-thunk";

// const store = configureStore({
//   reducer: {
//     tasks: tasksReducer,
//   },
// });

const store = configureStore({
  reducer: {
    tasks: tasksReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunk)
})

export default store;
