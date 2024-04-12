import { getApi } from "./getApi";



export const modifyUser = async (user) => {

    const {data} = await getApi.put(`/users/edit/${user.id}`, user);

    return data;

}

