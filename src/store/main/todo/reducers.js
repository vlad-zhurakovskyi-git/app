import { TODO_COLLECTION, CREATE_NEW_TASK_NAME } from "./actions";

const defaultState = {
    collection: [],
    taskName: ''
};

export const todoReducer = (state = defaultState, action) => {
    switch (action.type) {
        case TODO_COLLECTION:
            return {
                ...state,
                collection: action.payload
            };

        case CREATE_NEW_TASK_NAME:
            return {
                ...state,
                taskName: action.payload
            };

        default: return state;
    }
}