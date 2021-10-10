import React, { useState } from 'react'
import styled from 'styled-components'
import useThemes from '../hooks/useThemes'

const Wrapper = styled.div`
  position: relative;
  width: 10rem;
  padding: ${(p) => p.theme.boxPad};
  border: 0.1rem solid ${(p) => p.theme.textContrast};
  border-radius: ${(p) => p.theme.boxRadius};
  cursor: pointer;
  ${(p) => p.isOpen && `border-bottom:none`};
`
const Container = styled.div`
  position: absolute;
  width: 10rem;
  left: -0.1rem;
  padding: ${(p) => p.theme.boxPad};
  background-color: ${(p) => p.theme.contrast};
  border: 0.1rem solid ${(p) => p.theme.textContrast};
  border-top: none;
`

const ThemeToggler = () => {
  const [isOpen, setIsOpen] = useState(false)

  const { themeName, containers, updateTheme } = useThemes()

  return (
    <Wrapper isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
      <p>{themeName}</p>
      {isOpen && (
        <Container>
          {containers.map((theme) =>
            theme === themeName ? null : (
              <p key={theme} onClick={() => updateTheme(theme)}>
                {theme}
              </p>
            )
          )}
        </Container>
      )}
    </Wrapper>
  )
}

export default ThemeToggler
