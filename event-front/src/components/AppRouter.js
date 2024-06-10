import React from 'react'
import { useSelector } from 'react-redux'
import { Routes, Route } from 'react-router-dom'

import { privateRoutes, publicRoutes } from '../router'
import ProtectedRoute from './ProtectedRoute'

const AppRouter = () => {
  const session = useSelector((state) => state.authentication)

  return (
    <Routes>
      <Route element={<ProtectedRoute session={session} />}>
        {privateRoutes.map((route) => (
          <Route path={route.path} element={route.element} key={route.path} />
        ))}
      </Route>

      {publicRoutes.map((route) => (
        <Route path={route.path} element={route.element} key={route.path} />
      ))}
    </Routes>
  )
}

export default AppRouter
