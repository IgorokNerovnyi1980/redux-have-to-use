import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useAuth from './useAuth'

const mockProfile = {
  name: 'Big',
  lastName: 'Bosovich',
  gendor: 'smile',
  age: '15',
  avatar:
    'https://365psd.com/images/istock/previews/2121/21212345-big-smile-emoticon.jpg',
}

export default () => {
  const dispatch = useDispatch()
  const { auth, setAuth } = useAuth()
  const profile = useSelector((s) => s.user)
  const [isProfile, setIsProfile] = useState(false)

  const setProfile = (profile) => dispatch({ type: 'SET_PROFILE', profile })

  const getProfile = () => {
    setProfile(mockProfile)
    setIsProfile(true)
  }

  const onLogout = () => {
    setIsProfile({})
    setAuth(false)
    localStorage.removeItem('timeAuth')
  }

  return {
    auth,
    profile,
    setAuth,
    isProfile,
    onLogout,
    getProfile,
  }
}
