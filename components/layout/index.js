import React from 'react'
import PropTypes from 'prop-types'
import Navigation from './header/navigation'
import Container from './container'
import Footer from './footer'

const Layout = ({ children }) => {
  return (
    <Container>
      <div className='flex flex-col lg:flex-row'>
        <Navigation />
        <section className='flex-grow mb-4'>
          {children}
        </section>
      </div>
      <Footer />
    </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout;