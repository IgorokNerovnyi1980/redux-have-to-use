import React from 'react'
import { Switch } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'
import Home from './pages/Home'
import Auth from './pages/Auth'
import Themes from './pages/Themes'
import Profile from './pages/Profile'
import Pokemons from './pages/Pokemons'
import NotFound from './pages/NotFound'

export default () => (
  <Switch>
    <PrivateRoute exact path={['/', '/home']}>
      <Home />
    </PrivateRoute>

    <PrivateRoute exact path="/themes-example">
      <Themes />
    </PrivateRoute>

    <PrivateRoute exact path="/user">
      <Profile />
    </PrivateRoute>

    <PrivateRoute exact path="/poke-api">
      <Pokemons />
    </PrivateRoute>

    <PrivateRoute exact revert path="/authorization">
      <Auth />
    </PrivateRoute>

    <PrivateRoute>
      <NotFound />
    </PrivateRoute>
  </Switch>
)
