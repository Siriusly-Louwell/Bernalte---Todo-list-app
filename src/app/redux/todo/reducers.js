import { ADD_TASK, REMOVE_TASK, IS_COMPLETED } from "./types";

const initialState = {
    tasks: []
}

export default function taskReducer(state = initialState, action) {
    switch(action.type) {
        case ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            };
        case REMOVE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter((task) => task.id !== action.payload)
            }
        case IS_COMPLETED:
            const index = state.tasks.findIndex((_, i) => i === action.payload);

            if(index !== -1) {
                const completed = state.tasks.map((task, i) =>
                    i === index ? { ...task, isCompleted: !task.isCompleted } : task
                );

                return {
                    ...state,
                    tasks: completed
                }
            }

            return state;
            
        default:
            return state;
    }
}