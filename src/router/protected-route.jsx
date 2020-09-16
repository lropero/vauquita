import React from 'react'
import { Redirect, Route } from 'react-router-dom'

const ProtectedRoute = ({ children, isAuthenticated, ...props }) => {
  return <Route {...props} render={({ location }) => (isAuthenticated ? children : <Redirect to={{ pathname: '/login', state: { from: location } }} />)} />
}

export default ProtectedRoute
