import React from 'react'
import styled from 'styled-components'
import Input from '../components/Input'
import Button from '../components/Button'
import useAuth from '../hooks/useAuth'

const Wrapper = styled.div`
  width: 90%;
  min-width: 30rem;
  max-width: 64rem;
  padding: ${(p) => p.theme.basePad};
  background-color: ${(p) => p.theme.contrast};
  border-radius: ${(p) => p.theme.boxRadius};
`

const Auth = () => {
  const { inputs, store, onChange, onSubmit } = useAuth()

  return (
    <Wrapper>
      {inputs?.length > 0 &&
        inputs.map((inputName) => (
          <Input
            key={inputName}
            title={inputName}
            onChange={onChange}
            value={store[inputName]}
          />
        ))}
      <Button
        title="login"
        type="base"
        style={{ marginTop: '2.5rem' }}
        onClick={onSubmit}
      />
    </Wrapper>
  )
}

export default Auth
