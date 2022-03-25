import React from 'react'
import DisplayPicture from './DisplayPicture';
import PrimaryDetails from './PrimaryDetails';

const Intro = props => {
    return (
        <section className='flex flex-col lg:flex-row mt-10'>
            <div className='w-48 self-center md:self-start'>
                <DisplayPicture />
            </div>
            <div className='flex-1 lg:ml-8 mt-6'>
                <PrimaryDetails />
            </div>
        </section>
    )
}

export default Intro;
