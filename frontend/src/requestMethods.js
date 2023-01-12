import axios from "axios";

const BASE_URL = "http://localhost:5000/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2JjODJiYjJkYjVhZTM5MWM4NTUxOTEiLCJpYXQiOjE2NzMzMzk0NzUsImV4cCI6MTY3MzU5ODY3NX0.MK8r5QkHNKBceo73E_zhprbXD6Xe93m9HGCoU-MpTYk"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer  ${TOKEN}`}
})