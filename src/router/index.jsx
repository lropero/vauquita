import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'

import ProtectedRoute from './protected-route'
import routes from './routes'
import { NotFound } from 'vauquita/components'

const Router = () => {
  const isAuthenticated = true

  return (
    <BrowserRouter>
      <Switch>
        {routes.public.map((route, index) => (
          <Route exact key={`public-${index}`} path={route.path}>
            {route.redirect ? (
              <Redirect to={route.redirect} />
            ) : route.path === '/login' && isAuthenticated ? (
              <Redirect to='/' />
            ) : (
              <Route component={route.component} />
            )}
          </Route>
        ))}
        {routes.protected.map((route, index) => (
          <ProtectedRoute exact isAuthenticated={isAuthenticated} key={`protected-${index}`} path={route.path}>
            {route.redirect ? <Redirect to={route.redirect} /> : <Route component={route.component} />}
          </ProtectedRoute>
        ))}
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
