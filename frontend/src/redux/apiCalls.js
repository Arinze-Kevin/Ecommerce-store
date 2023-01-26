import { loginFailure, loginStart, loginSuccess, registerStart, registerSuccess, registerFailure, logoutStart, logoutSuccess, logoutFailure } from "./userRedux";
import { publicRequest, userRequest } from "../requestMethods";
import { createOrderFailure, createOrderStart, createOrderSuccess } from "./orderRedux"
import { addProduct } from "./cartRedux";
import axios from "axios";
import { Link } from "react-router-dom";

// Login User
export const login = async (dispatch, user) => {
    dispatch(loginStart())
    try {
        const res = await publicRequest.post('/users/login', user)
        if (res.data) {
            localStorage.setItem('user', JSON.stringify(res.data))
        }
        return dispatch(loginSuccess(res.data))
    } catch (err) {
        dispatch(loginFailure())
    }
}

// Register User
export const register = async (dispatch, user) => {
    dispatch(registerStart())
    try {
        const res = await userRequest.post('/users/', user)
        dispatch(registerSuccess(res.data))
    } catch (err) {
        dispatch(registerFailure())
    }
}

// Get user token
export const token = () => {
    const user = JSON.parse(localStorage.getItem('persist:root'))
    const currentUser = JSON.parse(user.user)
    const auth = currentUser?.currentUser?.user?.tokens?.slice(-1)
    const TOKEN = auth[0].token
    return token
}
// Add order to backend
export const order = async (dispatch, product) => {
    const BASE_URL = "http://localhost:5000/";
    const {_id, quantity} = product
    const user = JSON.parse(localStorage.getItem('persist:root'))
    const currentUser = JSON.parse(user.user)
    const auth = currentUser?.currentUser?.user?.tokens?.slice(-1)
    const TOKEN = auth[0].token
    const userAuth = axios.create({
        baseURL: BASE_URL,
        headers: { "Authorization": `Bearer ${TOKEN}` }
    })

    const payload = {
        userId: currentUser.currentUser.user._id,
        products: [{
            productId: _id,
            quantity: quantity
        }
        ]
    }
    try {
        const res = await userAuth.post('/orders', payload)
        if(res.data) alert('Successful')
        dispatch(addProduct(product))
    } catch (err) {
        console.log(err)
    }
    // console.log('payloadxxxxxxxxxxxxxxxx', currentUser)
}


// Add carts to backend
export const cart = async (dispatch, product) => {
    const BASE_URL = "http://localhost:5000/";
    const {_id, quantity} = product
    const user = JSON.parse(localStorage.getItem('persist:root'))
    const currentUser = JSON.parse(user.user)
    const auth = currentUser?.currentUser?.user?.tokens?.slice(-1)
    const TOKEN = auth[0].token
    const userAuth = axios.create({
        baseURL: BASE_URL,
        headers: { "Authorization": `Bearer ${TOKEN}` }
    })

    const payload = {
        userId: currentUser.currentUser.user._id,
        products: [{
            productId: _id,
            quantity: quantity
        }
        ]
    }
    try {
        const res = await userAuth.post('/carts', payload)
        if(res.data) alert('Successful')
        dispatch(addProduct(product))
    } catch (err) {
        console.log(err)
    }
    // console.log('payloadxxxxxxxxxxxxxxxx', currentUser)
}

// export const logout = async (dispatch, user) => {
//     dispatch(logoutStart()) 
//     try {
//         const res = await publicRequest.post('/auth/users/logout', user)
//         dispatch(logoutSuccess(res.data))
//     } catch (err) {
//         dispatch(logoutFailure())
//     }
// }

const logout = () => localStorage.removeItem('user')

const apiCalls = {
    logout,
}

export default apiCalls