import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment'

export default () => {
  const dispatch = useDispatch()
  const store = useSelector((s) => s.auth)
  const inputs = ['login', 'password']
  const limitAuth = 30000
  const encryption = {
    first: 'test',
    second: '123',
  }

  const setAuth = (isAuth) => dispatch({ type: 'SET_AUTH', isAuth })
  const clearInput = () => dispatch({ type: 'CLEAR_INPUT' })

  const onChange = (e) => {
    const name = e.target.name
    const value = e.target.value

    dispatch({ type: 'CHANGE_AUTH_INPUT', name, value })
  }

  const onSubmit = () => {
    const { login, password } = store
    const { first, second } = encryption
    if (login === first && password === second) {
      setAuth(true)
      clearInput()
      const now = moment().valueOf()
      localStorage.setItem('timeAuth', now)
    } else {
      clearInput()
    }
  }

  const isMoreLimit = (now, timeLastIn, limit) => {
    return now - timeLastIn > limit
  }

  const checkAuthTime = () => {
    const now = moment().valueOf()
    const lastIn = localStorage?.getItem('timeAuth')

    if (isMoreLimit(now, lastIn, limitAuth)) {
      setAuth(false)
      localStorage.removeItem('timeAuth')
      dispatch({ type: 'SET_PROFILE', profile: {} })
    }
    setAuth(true)
  }

  return {
    store,
    auth: store.isAuth,
    limitAuth,
    inputs,
    setAuth,
    onChange,
    onSubmit,
    checkAuthTime,
  }
}
