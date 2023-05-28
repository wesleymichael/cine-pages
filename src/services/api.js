import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_URL;

function createConfig(token) {
    return { headers: { Authorization: `Bearer ${token}` } };
}

function signup(body){
    const promise = axios.post(`${BASE_URL}/signup`, body);
    return promise;
}

function signin(body){
    const promise = axios.post(`${BASE_URL}/signin`, body);
    return promise;   
}

function logout(token){
    const config = createConfig(token);
    const promise = axios.post(`${BASE_URL}/logout`, null, config);
    return promise;
}

function getPosts(token){
    const config = createConfig(token);
    const promise = axios.get(`${BASE_URL}/posts`, config);
    return promise;
}

function addPost(token, body){
    const config = createConfig(token);
    const promise = axios.get(`${BASE_URL}/new-post`, body, config);
    return promise;
}

const api = {
    signup,
    signin,
    logout,
    getPosts,
    addPost,
}

export default api;