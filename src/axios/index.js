import axios from "axios";

const service = axios.create({
    baseURL: process.env.baseURL,
    timeout: 3000
})

export default service;