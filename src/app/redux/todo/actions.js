import { ADD_TASK, REMOVE_TASK, IS_COMPLETED } from "./types";

export const addTask = (task) => ({
    type: ADD_TASK,
    payload: task
});

export const removeTask = (id) => ({
    type: REMOVE_TASK,
    payload: id
});

export const isCompleted = (task) => ({
    type: IS_COMPLETED,
    payload: task
});