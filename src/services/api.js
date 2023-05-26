import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_URL;

function signup(body){
    const promise = axios.post(`${BASE_URL}/signup`, body);
    console.log(`${BASE_URL}/signup`)
    return promise;
}

const api = {
    signup,
}

export default api;