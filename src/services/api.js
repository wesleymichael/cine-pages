import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_URL;

function signup(body){
    const promise = axios.post(`${BASE_URL}/signup`, body);
    return promise;
}

function signin(body){
    const promise = axios.post(`${BASE_URL}/signin`, body);
    return promise;   
}

const api = {
    signup,
    signin,
}

export default api;