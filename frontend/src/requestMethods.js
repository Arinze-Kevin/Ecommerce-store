import axios from "axios";
import { token } from "./redux/apiCalls";

// const user = JSON.parse(localStorage.getItem('persist:root'));
// const currentUser = JSON.parse(user?.user || '');
// const auth = currentUser?.currentUser?.user?.tokens?.slice(-1)
// console.log('authhhhh',auth)

const BASE_URL = "https://ecommerce-app-79uw.onrender.com/";
// const TOKEN = !auth ? '' : auth[0].token
// const TOKEN = !TOKENS ? [] : TOKENS 


export const publicRequest = axios.create({
    baseURL: BASE_URL,
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    // headers: { "Authorization": `Bearer ${token}` }
})