import { getApi } from "./getApi";


export const getCompanies = async() => {

    const {data} = await getApi.get('/companies/all');
    return data;

}


export const getCompanyById = async (id) => {

    const { data }  = await getApi.get(`/companies/${id}`);
    return data;

}
