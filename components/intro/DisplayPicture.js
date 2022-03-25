import Image from 'next/image';
import React from 'react';

const DisplayPicture = props => {
  return (
        <img src = '/images/dp.jpg' alt='Display Picture' className='w-48 aspect-square rounded-full object-cover' />
  );
}

export default DisplayPicture;