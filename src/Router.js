import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Home from './pages/Home'
import Auth from './pages/Auth'
import Themes from './pages/Themes'
import Profile from './pages/Profile'
import NotFound from './pages/NotFound'
import useAuth from './hooks/useAuth'

export default () => {
  const { auth } = useAuth()
  return (
    <Switch>
      <Route
        path="/"
        exact
        render={() => (auth ? <Home /> : <Redirect to="/authorization" />)}
      />
      <Route
        path="/authorization"
        exact
        render={() => (auth ? <Redirect to="/" /> : <Auth />)}
      />

      <Route
        path="/themes-example"
        exact
        render={() => (auth ? <Themes /> : <Redirect to="/authorization" />)}
      />
      <Route
        path="/user"
        exact
        render={() => (auth ? <Profile /> : <Redirect to="/authorization" />)}
      />

      <Route
        component={() =>
          auth ? <NotFound /> : <Redirect to="/authorization" />
        }
      />
    </Switch>
  )
}
