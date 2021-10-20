import React from 'react'
import styled, { keyframes } from 'styled-components'
import useRouter from '../hooks/useRouter'
import NavMenu from './NavMenu'
import ThemeToggler from './ThemeToggler'
import reduxLogo from '../assets/img/reduxLogo.png'

const rotate = keyframes` 
  from { 
    transform: rotate(0deg); 
  } 
 
  to { 
    transform: rotate(360deg); 
  } 
`

const Wrapper = styled.div`
  width: 100vw;
  height: 10vh;
  padding-left: ${(p) => p.theme.basePad};
  padding-right: ${(p) => p.theme.basePad};
  background-color: ${(p) => p.theme.contrast};
  display: flex;
  justify-content: space-between;
  align-items: center;
  .header--logo {
    width: 2rem;
    cursor: pointer;
    animation: ${rotate} 8s linear infinite;
  }
`

export default () => {
  const router = useRouter()

  const onRedirect = (path) => {
    router.push(path)
  }

  return (
    <Wrapper>
      <img
        src={reduxLogo}
        alt="redux logo"
        className="header--logo"
        onClick={() => onRedirect('/')}
      />

      <NavMenu />
      <ThemeToggler />
    </Wrapper>
  )
}
