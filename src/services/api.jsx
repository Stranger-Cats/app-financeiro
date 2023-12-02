import axios from "axios";

const api = axios.create({
    baseURL: "http://172.24.160.1:3333",
});

export default api;
