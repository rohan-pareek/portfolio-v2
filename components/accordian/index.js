import React from 'react';
import PropTypes from 'prop-types';
import AccordianItem from './accordian-item';

const Accordian = ( { items } ) => {
  return (
    <section className='w-full'>
        { items.map( ( item ) => (
            <AccordianItem key = { item.id } title = { item.company } subTitle = { item.role } sideText = { item.duration } currentCompany = { item.currentCompany } />
        ) ) }
    </section>
  )
}

Accordian.propTypes = {
    items: PropTypes.array.isRequired
}

export default Accordian;