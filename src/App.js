import React, { useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import MainStyles from './styles/mainStyles'
import Router from './Router'
import themes from './styles/themes'
import useThemes from './hooks/useThemes'
import useAuth from './hooks/useAuth'

const App = () => {
  const { themeName, setDefaultTheme } = useThemes()
  const { auth, checkAuthTime, limitAuth } = useAuth()
  useEffect(() => {
    setDefaultTheme()
  }, []) //eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    let timer
    if (auth) {
      timer = setInterval(() => checkAuthTime(), limitAuth)
    }

    if (localStorage?.getItem('timeAuth')) {
      checkAuthTime()
    }

    return () => {
      clearInterval(timer)
    }
  }, [auth]) //eslint-disable-line react-hooks/exhaustive-deps

  return (
    <ThemeProvider theme={themes[themeName]}>
      <MainStyles />
      <Router />
    </ThemeProvider>
  )
}

export default App
