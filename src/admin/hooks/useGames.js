import { useContext, useState } from "react";
import { ToastContext } from "../context/toast/ToastProvider";
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createGame, deleteGame, modifyGame } from "../api/gamesApi";



export const useGames = () => {

    const { handleSuccess, handleError } = useContext(ToastContext)
    const [error, setError] = useState('')
    const queryClient = useQueryClient()

        // Mutations
        const mutationAddPost = useMutation({
            mutationFn: createGame,
            onSuccess: (data) => {
                // Invalidate and refetch
                // queryClient.invalidateQueries({ queryKey: ['posts'] })

                handleSuccess('Game added')

                const game = {
                    ...data.details,
                    price: `${data.details.price}`
                }

                queryClient.setQueryData(['games'], (old) => [ game, ...old.data])
                queryClient.invalidateQueries('games')
    
            },
            onError: (error) => {
                console.log(error, 'error');
                handleError('Error in the creation of the game')
                setError('Error al crear game' + error)
            }
        })
    
        const mutationModPost = useMutation({
          mutationFn: modifyGame,
          onSuccess: (data) => {
              console.log(data, 'success mod');
              
              handleSuccess('Game modified ')
              queryClient.setQueryData(['games'], (old) => {
    
                const indexMod = old.data.findIndex( p => p.id === data.game.id );
                old[indexMod] = data;
    
                return old
              })
            queryClient.invalidateQueries('games')
          },
          onError: (error) => {
              console.log(error, 'error');
              handleError('Error in the modify the game')
              setError('Error al modificar el juego ' + error)
          }
      })
    
      const mutationDelPost = useMutation({
        mutationFn: deleteGame,
        onSuccess: (data, variable, context) => {
            console.log(data, variable, context,'success mod');
            
            handleSuccess('Game deleted')
            queryClient.setQueryData(['games'], (old) => {
    
              const deletePost = old.data.filter( p => p.id !== variable.id );
      
              return deletePost
    
            })

            queryClient.invalidateQueries('games')
    
        },
        onError: (error) => {
            console.log(error, 'error');
            handleError('Error in the delete the game')
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
