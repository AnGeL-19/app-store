import { useContext, useState } from "react";
import { ToastContext } from "../context/toast/ToastProvider";
import { useMutation, useQueryClient } from "@tanstack/react-query"

import { createCompany, deleteCompany, modifyCompany } from "../api/companiesApi";
import { modifyUser } from "../api/userApi";
import { updateUser } from "../context/storage-login/storageLogin";



export const useProfile = () => {

    const { handleSuccess, handleError } = useContext(ToastContext)
    const [error, setError] = useState('')
   
        const mutationModPost = useMutation({
          mutationFn: modifyUser,
          onSuccess: (data) => {
              console.log(data, 'success mod');
              
              updateUser(data.user)

              handleSuccess('Profile modified ')
             
          },
          onError: (error) => {
              console.log(error, 'error');
              handleError('Error in the modify the profile')
              setError('Error al modificar el juego ' + error)
          }
      })
    


    return {
        error,
        mutationModPost,
    }

}
