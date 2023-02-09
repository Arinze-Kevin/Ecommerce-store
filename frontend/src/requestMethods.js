import axios from "axios";

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