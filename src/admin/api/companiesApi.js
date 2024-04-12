import { getApi } from "./getApi";


export const getCompanies = async() => {

    const {data} = await getApi.get('/companies/all');
    return data;

}


export const getCompanyById = async (id) => {

    const { data }  = await getApi.get(`/companies/${id}`);
    return data;

}

export const createCompany = async (company) => {

    const {data} = await getApi.post('/companies/create', company);

    return data;

}

export const modifyCompany = async (game) => {

    const {data} = await getApi.post(`/companies/update/${game.id}`, game);

    return data;

}

export const deleteCompany = async (id) => {

    const {data} = await getApi.post(`/companies/delete/${id}`, id);

    return data;

}