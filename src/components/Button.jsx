import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.button`
  width: ${(p) => p.width};
  padding-top: 3%;
  padding-bottom: 3%;
  border: 0.1rem solid ${(p) => p.theme[p.type] || p.theme.contrast};
  border-radius: ${(p) => p.theme.boxRadius};
  color: ${(p) => p.theme.text};
  cursor: pointer;
  transition: 0.2s ease;
  :active {
    transform: scale(0.98);
  }
`

const Button = ({ title, onClick, style, type, width }) => {
  return (
    <Wrapper onClick={onClick} style={style} type={type} width={width}>
      {title}
    </Wrapper>
  )
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  style: PropTypes.object,
  type: PropTypes.string,
  width: PropTypes.string,
}

Button.defaultProps = {
  onClick: () => {},
  style: {},
  type: 'contrast', //base or contrast
  width: '100%',
}

export default Button
