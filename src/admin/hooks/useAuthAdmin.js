import axios from 'axios';
import { useEffect, useState } from 'react';
import {useMutation} from '@tanstack/react-query';
import { login, useStoreLogin } from '../context/storage-login/storageLogin';


const URL_BASE = 'http://127.0.0.1:8000/auth/login'

export const useAuthAdmin = () => {

    
    const [error, setError] = useState('')
    
    const mutationLogin = useMutation({
      mutationFn: ({data}) => {
          return axios.post(URL_BASE, data)
      },
      onError: (error) => {
          console.error('Error en la petición:', error);
          setError(error.response.data.message);
      },
      onSuccess: (response) => {
          console.log(response)
          if (response.data.success){
            login(response.data.user, response.data.success, response.data.access_token )
          }
      },

      
  });


  return { mutationLogin, error };
}
