import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Header from './Header'
import Footer from './Footer'

const Content = styled.div`
  width: 100vw;
  min-height: calc(100vh - 25vh);
  padding: ${(p) => p.theme.basePad};
  background-color: ${(p) => p.theme.base};
`

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.any.isRequired,
}

export default Layout
