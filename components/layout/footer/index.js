import React from 'react';
import Link from 'next/link';

const Footer = props => {
  return (
    <footer className='flex flex-col items-center p-4 border-t border-t-1 border-dark text-sm'>
      <div>Developed by <Link href='https://github.com/rohan-pareek'>
        <a className='text-brand-dark' target='_blank'>
          Rohan Pareek
        </a>
      </Link></div>
      <p className='text-xs text-gray-600 mt-1'>&copy;Copyright {new Date().getFullYear().toString()}</p>
    </footer>
  )
}

export default Footer;