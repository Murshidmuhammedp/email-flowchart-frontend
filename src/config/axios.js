import axios from "axios";

export const customAxios = axios.create({
    // baseURL:'http://localhost:5689'
    baseURL: 'https://email-flowchart-backend-2.onrender.com'
});