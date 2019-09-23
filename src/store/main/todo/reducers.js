import { TODO_COLLECTION } from "./actions";

const defaultState = {
    collection: [],
};

export const todoReducer = (state = defaultState, action) => {
    switch (action.type) {
        case TODO_COLLECTION:
            return {
                ...state,
                collection: action.payload
            };

        default: return state;
    }
}