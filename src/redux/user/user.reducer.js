import UserActionTypes from './user.types'

const INITIAL_STATE = {
    currentUser: null,
    error: null
};


const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.SIGN_IN_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                error: null
            };
        case UserActionTypes.SIGN_OUT_FAILURE:
        case UserActionTypes.SIGN_IN_FAILURE:
        case UserActionTypes.SIGN_UP_FAILURE:    
            return {
                ...state,
                error: action.payload
            };
        case UserActionTypes.GOOGLE_SIGN_IN_START:
            return {
                ...state
                // ...state,
                // emailAndPassword: action.payload
            };
        case UserActionTypes.EMAIL_SIGN_IN_START:
            return {
                ...state,
                emailAndPassword: action.payload
            };
        case UserActionTypes.SIGN_UP_START:
            return {
                ...state,
                userCredentials: action.payload
            };
        case UserActionTypes.SIGN_OUT_START:
            return {
                ...state
            };
        case UserActionTypes.SIGN_OUT_SUCCESS:
            return {
                ...state,
                currentUser: null,
                error: null
            };
        case UserActionTypes.SIGN_UP_SUCCESS:
            return {
                ...state
            };
        default:
            return state;
    }
};

export default userReducer;


