import store from "../store";
import axios from  'axios';

export  function http() {
    return axios.create({
        baseURL: 'http://localhost:8004'
    });
}

export  function httpFile() {
    return axios.create({
        baseURL: 'http://localhost:8004',
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
}
