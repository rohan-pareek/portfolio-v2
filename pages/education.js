import React from 'react';

const Education = ( props ) => {
  return (
    <section className='mt-10 ml-10'>
      <div className='mb-2 shadow p-4 bg-white'>
        <div className='text-lg font-bold'>
          Bachelor of Engineering <span className='text-sm font-normal ml-2'>Jun 2013 - May 2017</span>
          </div>
        <div className='text-gray-400'>Information Technology</div>
        <div className='mt-2 text-gray-500'>Chhattigarh Swami Vivekanand Technical University</div>
      </div>
      <div className='mb-2 shadow p-4 bg-white'>
        <div className='text-lg font-bold'>
          Higher Secondary School <span className='text-sm font-normal ml-2'>Jun 2012 - May 2013</span>
          </div>
        <div className='text-gray-400'>Science</div>
        <div className='mt-2 text-gray-500'>Shri Balaji Vidya Mandir</div>
      </div>
      <div className='mb-2 shadow p-4 bg-white'>
        <div className='text-lg font-bold'>
          Senior Secondary School <span className='text-sm font-normal ml-2'>Jun 2010 - May 2011</span>
          </div>
        <div className='text-gray-400'>Science</div>
        <div className='mt-2 text-gray-500'>Shri Balaji Vidya Mandir</div>
      </div>
    </section>
  )
}

export default Education;