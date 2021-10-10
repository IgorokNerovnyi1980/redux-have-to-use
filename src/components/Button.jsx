import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.button`
  width: 100%;
  padding: ${(p) => p.theme.basePad};
  border: 0.1rem solid ${(p) => p.theme[p.type] || p.theme.contrast};
  border-radius: ${(p) => p.theme.boxRadius};
  color: ${(p) => p.theme.text};
  cursor: pointer;
  transition: 0.2s ease;
  :active {
    transform: scale(0.98);
  }
`

const Button = ({ title, onClick, style, type }) => {
  return (
    <Wrapper onClick={onClick} style={style} type={type}>
      {title}
    </Wrapper>
  )
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  style: PropTypes.object,
  type: PropTypes.string,
}

Button.defaultProps = {
  onClick: () => {},
  style: {},
  type: 'contrast', //base or contrast
}

export default Button
