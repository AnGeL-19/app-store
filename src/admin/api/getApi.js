import axios from "axios"
import { getToken } from '../context/storage-login/storageLogin';

export const getApi = axios.create({
    baseURL: 'http://127.0.0.1:8000/api',
    headers: {
        'Authorization': `Bearer ${getToken()}`
    }
    
});

