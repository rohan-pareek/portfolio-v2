import React from 'react';
import awards from '../data/awards.json';

const CertificateAwards = props => {
  return (
    <ul className='mt-10 lg:ml-10'>
      {awards.map((award) => (
        <li className='p-2 border my-2 font-semibold' key={award.name}>
          <i className="fa fa-trophy text-yellow-400 mr-2" aria-hidden="true"></i>
          {award.name}
        </li>
      ))}
    </ul>
  )
}

export default CertificateAwards;