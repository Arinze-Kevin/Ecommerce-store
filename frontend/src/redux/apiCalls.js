import { loginFailure, loginStart, loginSuccess, registerStart, registerSuccess, registerFailure, logoutStart, logoutSuccess, logoutFailure } from "./userRedux";
import { publicRequest } from "../requestMethods";

export const login = async (dispatch, auth) => {
    dispatch(loginStart())
    try {
        const res = await publicRequest.post('/users/login', auth)
        dispatch(loginSuccess(res.data))
    } catch (err) {
        dispatch(loginFailure())
    }
}

export const register = async (dispatch, auth) => {
    dispatch(registerStart())
    try {
        const res = await publicRequest.post('/users/', auth)
        dispatch(registerSuccess(res.data))
    } catch (err) {
        dispatch(registerFailure())
    }
}

export const logout = async (dispatch, user) => {
    dispatch(logoutStart())
    try {
        const res = await publicRequest.post('/auth/users/logout', user)
        dispatch(logoutSuccess(res.data))
    } catch (err) {
        dispatch(logoutFailure())
    }
}