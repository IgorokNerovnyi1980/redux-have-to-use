import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Wrapper = styled.div`
  margin-right: 1rem;
  cursor: pointer;
  transition: 0.2s ease;
  :hover {
    font-weight: 600;
  }
  :active {
    transform: scale(0.98);
  }
  ${(p) =>
    p.isActive &&
    `
        color:${p.theme.textContrast}
  `}
`

const Tab = ({ onClick, title, isActive }) => {
  return (
    <Wrapper onClick={onClick} isActive={isActive}>
      {title}
    </Wrapper>
  )
}

Tab.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
}

Tab.defaultProps = {
  isActive: false,
  onClick: () => {},
  title: '',
}
export default Tab
