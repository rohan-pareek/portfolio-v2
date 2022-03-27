import React from 'react';
import css from './styles/PrimaryDetails.module.css';
import experience from '../../data/experience.json';
import Accordian from '../accordian';
import Contact from '../contact';

const PrimaryDetails = props => {
  return (
    <section>
      <section className='text-center md:text-left'>
        <div className='text-3xl'>Rohan Pareek</div>
        <div className='text-lg'>Associate Experience Technology, Publicis Sapient</div>
        <div className='mt-2 text-gray-500'>ReactJS | NextJS | Angular | NodeJS | MongoDB</div>
      </section>
      <section className='mt-8'>
        <div className={css.brief}>
          <p>Hi there!</p>
          <p>Welcome to my digital portfolio.</p>
          <p>
            I am a Software Engineer majored in Information Technology / Computers. Like most Software Engineers, I too like to build stuff
            and keep up with the latest technology trends. I build websites using exciting tech stack which includes ReactJS, NextJS, Angular,
            MongoDB, Git, Jest and many more.
          </p>
          <p>I am currently working with Publicis Sapient. Prior to this, I worked with Mindtree.</p>
        </div>
      </section>
      <section>
        <div className='p-4 border border-gray-300 rounded-md bg-white'>
          <h1 className='mb-4 text-lg'>Professional Experience</h1>
          <Accordian items={experience} />
        </div>
        <div className='p-4 border border-gray-300 rounded-md mt-4 bg-white'>
          <h1 className='mb-4 text-lg'>Contact</h1>
          <Contact />
        </div>
      </section>
    </section>
  )
}

export default PrimaryDetails;