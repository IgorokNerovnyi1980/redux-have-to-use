import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin-top: 1.5rem;
  :first-child {
    margin-top: 0;
  }
`

const Label = styled.p`
  margin-bottom: 1rem;
  padding-left: 0.4rem;
`

const Content = styled.input`
  width: 100%;
  padding: ${(p) => p.theme.basePad};
  border: 0.1rem solid ${(p) => p.theme.base};
  border-radius: ${(p) => p.theme.boxRadius};
`

const Input = ({ title, onChange, style, value }) => {
  return (
    <Wrapper style={style}>
      <Label className="input--label">{title}</Label>
      <Content
        onChange={onChange}
        value={value}
        name={title}
        autoComplete="off"
      />
    </Wrapper>
  )
}

Input.propTypes = {
  title: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  style: PropTypes.object,
}

Input.defaultProps = {
  style: {},
}

export default Input
