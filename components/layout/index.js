import React from 'react'
import PropTypes from 'prop-types'
import Navigation from './header/navigation'
import Container from './container'
import Footer from './footer'

const Layout = ({ children }) => {
  return (
    <Container>
      <Navigation />
      <section className='flex-grow'>
        {children}
      </section>
      <Footer />
    </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout;