import React from 'react'
import { RouterProvider } from "react-router-dom"
import { router } from './router/routes'




function AppStore() {

  return (
      <RouterProvider router={router} />
  )
}

export default AppStore
