import React, { useContext, useEffect } from 'react'
import { HeaderContext } from '../../context/header/HeaderContext';

export const CompaniesHome = () => {
  const { handleHandleTitle } = useContext(HeaderContext)

  useEffect(() => {
      handleHandleTitle('Company', false)
      return () => {
          handleHandleTitle('', false)
      }
  }, []);

  return (
    <div>Companies</div>
  )
}
