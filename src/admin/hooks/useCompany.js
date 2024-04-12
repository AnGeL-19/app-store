import { useContext, useState } from "react";
import { ToastContext } from "../context/toast/ToastProvider";
import { useMutation, useQueryClient } from "@tanstack/react-query"

import { createCompany, deleteCompany, modifyCompany } from "../api/companiesApi";



export const useCompany = () => {

    const { handleSuccess, handleError } = useContext(ToastContext)
    const [error, setError] = useState('')
    const queryClient = useQueryClient()

        // Mutations
        const mutationAddPost = useMutation({
            mutationFn: createCompany,
            onSuccess: (data) => {
                // Invalidate and refetch
                // queryClient.invalidateQueries({ queryKey: ['posts'] })

                handleSuccess('Company added')

                queryClient.invalidateQueries('companies')
    
            },
            onError: (error) => {
                console.log(error, 'error');
                handleError('Error in the creation of the game')
                setError('Error al crear game' + error)
            }
        })
    
        const mutationModPost = useMutation({
          mutationFn: modifyCompany,
          onSuccess: (data) => {
              console.log(data, 'success mod');
              
              handleSuccess('Company modified ')
             
            queryClient.invalidateQueries('companies')
          },
          onError: (error) => {
              console.log(error, 'error');
              handleError('Error in the modify the company')
              setError('Error al modificar el juego ' + error)
          }
      })
    
      const mutationDelPost = useMutation({
        mutationFn: deleteCompany,
        onSuccess: (data, variable, context) => {
            console.log(data, variable, context,'success mod');
            
            handleSuccess('Company deleted')
           
            queryClient.invalidateQueries('companies')
    
        },
        onError: (error) => {
            console.log(error, 'error');
            handleError('Error in the delete the company or have a realation')
            setError('Error al eliminar un post ' + error)
        }
    })


    return {
        error,
        mutationAddPost,
        mutationModPost,
        mutationDelPost
    }

}
