import React, { useContext, useEffect } from 'react'
import { HeaderContext } from '../../context/header/HeaderContext';

export const GamesHome = () => {

  const { handleHandleTitle } = useContext(HeaderContext)

  useEffect(() => {
      handleHandleTitle('Games', false)
      return () => {
          handleHandleTitle('', false)
      }
  }, []);

  return (
    <div>GamesHome</div>
  )
}
