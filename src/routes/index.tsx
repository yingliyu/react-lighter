import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import routesConfig from './config'

function getRoutes(routes = routesConfig) {
  return routes.map(route => {
    const { key, redirect, children, component } = route
    const Cmp = component as any;

    if (children) {
      return (
        <Cmp key={key}>
          <Switch>{getRoutes(children)}</Switch>
        </Cmp>
      )
    }

    return redirect ? <Redirect key={key} to={redirect} {...route} /> : <Route key={key} {...route} />
  })
}

export default <Switch>{getRoutes()}</Switch>
