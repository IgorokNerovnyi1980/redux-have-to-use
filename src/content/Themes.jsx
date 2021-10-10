import React from 'react'
import styled from 'styled-components'
import useThemes from '../hooks/useThemes'
import localThemes from '../styles/themes'

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`
const Container = styled.div`
  width: 6rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`
const Square = styled.div`
  width: 4rem;
  height: 4rem;
  margin-top: 1rem;
  background-color: ${(p) => p.bg};
  :last-child {
    margin-bottom: 1rem;
  }
`

const Themes = () => {
  const { colors, containers } = useThemes()

  return (
    <Wrapper>
      {containers?.length > 0 &&
        containers.map((theme) => {
          const currentTheme = localThemes[theme]
          return (
            <Container key={theme}>
              <p>{theme}</p>
              {colors.map((color) => (
                <Square key={`${theme}_${color}`} bg={currentTheme[color]} />
              ))}
            </Container>
          )
        })}
    </Wrapper>
  )
}

export default Themes
