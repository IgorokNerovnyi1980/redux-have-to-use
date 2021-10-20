import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

export default ({ children, revert, ...rest }) => {
  const { auth } = useAuth()

  if (revert) {
    return (
      <Route render={() => (auth ? <Redirect to="/" /> : children)} {...rest} />
    )
  }

  return (
    <Route
      render={() => (auth ? children : <Redirect to="/authorization" />)}
      {...rest}
    />
  )
}
