import { getApi } from "./getApi";
import { getToken } from '../context/storage-login/storageLogin';

export const getProducts = async() => {



    const {data} = await getApi.get('/company-games', {
        headers: {
            'Authorization': `Bearer ${getToken()}`
        }
    });

    return data;

}


export const createProduct = async (product) => {

    const {data} = await getApi.post('/games/create', product);

    return data;

}