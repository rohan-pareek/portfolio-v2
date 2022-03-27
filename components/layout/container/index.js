import React from 'react'
import PropTypes from 'prop-types'

const Container = ( { children } ) => {
  return (
    <div className='w-5/6 h-full ml-auto mr-auto flex flex-col'>
        {children}
    </div>
  )
}

Container.propTypes = {
    children: PropTypes.node.isRequired
}

export default Container;