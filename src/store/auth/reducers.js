import { AUTH_CHANGE_EMAIL_TEXT, AUTH_CHANGE_PASSWORD_TEXT, AUTH_SESSION } from "./actions";

const defaultState = {
    email: '',
    password: '',
    session: false
};

export const authReducer = (state = defaultState, action) => {
    switch (action.type) {
        case AUTH_CHANGE_EMAIL_TEXT:
            return {
                ...state,
                email: action.payload
            };

        case AUTH_CHANGE_PASSWORD_TEXT:
            return {
                ...state,
                password: action.payload
            };

        case AUTH_SESSION:
            return {
                ...state,
                session: action.payload
            };

        default: return state;
    }
}