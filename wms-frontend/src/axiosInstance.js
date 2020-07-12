import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://127.0.0.1:8000',
    timeout: 5000,
    headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
})