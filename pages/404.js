import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import CustomMeta from '../components/meta';

const Custom404 = props => {
  return (
    <>
      <CustomMeta title='404 - Page not found' description='404 - Page not found' />
      <div className='flex flex-col justify-center items-center h-full'>
        <h1 className='text-4xl font-bold'>404</h1>
        <p className='text-lg'>Page not found</p>
        <Link href="/">
          <a className='border-b border-b-4 border-brand-dark'>Return to Home</a>
        </Link>
      </div>
    </>
  )
}

export default Custom404;