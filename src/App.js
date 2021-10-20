import React, { useMemo } from 'react'
import { ThemeProvider } from 'styled-components'
import MainStyles from './styles/mainStyles'
import Router from './Router'
import themes from './styles/themes'
import useThemes from './hooks/useThemes'
import useAuth from './hooks/useAuth'

const App = () => {
  const { themeName, setDefaultTheme } = useThemes()
  const { auth, checkAuthTime } = useAuth()

  useMemo(() => {
    setDefaultTheme()
  }, []) //eslint-disable-line react-hooks/exhaustive-deps

  useMemo(() => {
    if (localStorage?.getItem('timeAuth') && !auth) {
      checkAuthTime()
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
