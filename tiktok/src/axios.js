import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:2953"
})

export default instance;