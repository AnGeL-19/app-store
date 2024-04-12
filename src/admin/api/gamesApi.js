import { getApi } from "./getApi";
import { getToken } from '../context/storage-login/storageLogin';

export const postGamesSearch = async (search = "") => {

    const {data} = await getApi.post(`/games/search${search.length !== 0 ? `?name=${search}`: ''}`, {
        headers: {
            'Authorization': `Bearer ${getToken()}`
        }
    });
    return data;

}

export const getGameById = async (id) => {

    const { data }  = await getApi.get(`/games/${id}`);
    return data;

}



export const createGame = async (game) => {

    const {data} = await getApi.post('/games/create', game);

    return data;

}

export const modifyGame = async (game) => {

    const {data} = await getApi.post(`/games/update/${game.id}`, game);

    return data;

}

export const deleteGame = async (id) => {

    const {data} = await getApi.post(`/games/delete/${id}`, id);

    return data;

}