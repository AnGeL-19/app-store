import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createGame, deleteGame, modifyGame } from "../api/gamesApi";


export const useGames = () => {

    const [error, setError] = useState('')
    const queryClient = useQueryClient()

        // Mutations
        const mutationAddPost = useMutation({
            mutationFn: createGame,
            onSuccess: (data) => {
                // Invalidate and refetch
                // queryClient.invalidateQueries({ queryKey: ['posts'] })

                const game = {
                    ...data.details,
                    price: `${data.details.price}`
                }

                queryClient.setQueryData(['games'], (old) => [ game, ...old.data])
                queryClient.invalidateQueries('games')
    
            },
            onError: (error) => {
                console.log(error, 'error');
                setError('Error al crear un post ' + error)
            }
        })
    
        const mutationModPost = useMutation({
          mutationFn: modifyGame,
          onSuccess: (data) => {
              console.log(data, 'success mod');
              
            //   queryClient.setQueryData(['games'], (old) => {
    
            //     const indexMod = old.findIndex( p => p.id === data.id );
            //     old[indexMod] = data;
    
            //     return old
            //   })
            queryClient.invalidateQueries('games')
          },
          onError: (error) => {
              console.log(error, 'error');
              setError('Error al modificar un post ' + error)
          }
      })
    
      const mutationDelPost = useMutation({
        mutationFn: deleteGame,
        onSuccess: (data, variable, context) => {
            console.log(data, variable, context,'success mod');
            
            queryClient.setQueryData(['games'], (old) => {
    
              const deletePost = old.data.filter( p => p.id !== variable.id );
      
              return deletePost
    
            })

            queryClient.invalidateQueries('games')
    
        },
        onError: (error) => {
            console.log(error, 'error');
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
