import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100vw;
  height: 15vh;
  padding-left: ${(p) => p.theme.basePad};
  padding-right: ${(p) => p.theme.basePad};
  background-color: ${(p) => p.theme.contrast};
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export default () => {
  return (
    <Wrapper>
      <div />
      <p>footer</p>
      <div />
    </Wrapper>
  )
}
