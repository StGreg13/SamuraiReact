import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";


const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:

            return {
                ...state,
                ...action.data,
            }

        default:
            return state;
    }
}


export const setAuthUserData = (userId, email, login, isAuth) =>
    ({type: SET_USER_DATA, data: {userId, email, login, isAuth}  })

export const getAuthUserData = () => (dispatch) => {
    return authAPI.me()
        .then(res => {
            if (res.data.resultCode === 0) {
                let {id, login, email} = res.data.data;
                dispatch(setAuthUserData(id, email, login, true));
            }
        });
    return "it-incubator"
}
export const login = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe)
        .then(res => {
            console.log("res", res)
            if (res.data.resultCode === 0) {
                dispatch(getAuthUserData())
            } else {
                let message = res.data.messages.length > 0 ? res.data.messages[0] : "Some error";
                dispatch(stopSubmit("login", {_error: message}));
            }
        });
}
export const logout = () => (dispatch) => {
    authAPI.logout()
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(getAuthUserData(null, null, null, false))
            }
        });
}
export default authReducer;