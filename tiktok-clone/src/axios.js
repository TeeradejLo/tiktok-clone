import axios from "axios";

const instance = axios.create({
    baseURL: "https://tiktok-backend-01.herokuapp.com/",
});

export default instance;