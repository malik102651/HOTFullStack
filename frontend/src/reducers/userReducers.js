import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAIL, USER_LOGOUT, USER_REGISTERED_REQUEST, USER_REGISTERED_SUCCESS, USER_REGISTERED_FAIL } from "../constants/userConstants";


export const userLoginReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return { loading: true };
        case USER_LOGIN_SUCCESS:
            console.log(action)
            return {  loading: false, userInfo: action.payload };
        case USER_LOGIN_FAIL:
            return { loading: false, error: action.payload };
        case USER_LOGOUT:
            return {};
        default:
            return state;
    }
}

export const userRegisteredReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_REGISTERED_REQUEST:
            return { loading: true };
        case USER_REGISTERED_SUCCESS:
            return { loading: false, userInfo: action.payload };
        case USER_REGISTERED_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

