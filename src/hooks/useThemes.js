import { useDispatch, useSelector } from 'react-redux'
import localThemes from '../styles/themes'

export default () => {
  const dispatch = useDispatch()
  const themeName = useSelector((s) => s.app.theme)
  const colors = ['base', 'contrast', 'text', 'textContrast', 'accent']
  const containers = Object.keys(localThemes)

  const setTheme = (theme) => dispatch({ type: 'SET_THEME', theme })

  const updateTheme = (theme) => {
    localStorage.setItem('app-theme', theme)
    setTheme(theme)
  }

  const setDefaultTheme = () => {
    const currentTheme = localStorage.getItem('app-theme')

    if (currentTheme) {
      setTheme(currentTheme)
    } else {
      setTheme('base')
    }
  }

  return {
    themeName,
    colors,
    containers,
    updateTheme,
    setDefaultTheme,
  }
}
