import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';

const AccordianItem = ({ title, subTitle, sideText, currentCompany, description }) => {

    const [open, setOpen] = useState(false);

    return (
        <div className={`flex flex-col md:flex-row justify-between flex-wrap shadow border-l-4 border-gray-400 rounded mb-4 p-2 bg-slate-50`}>
            <div className='w-full md:w-1/2 truncate'>
                <div className='font-bold truncate'>{title}
                    {currentCompany && <span className='text-xs font-normal ml-2'>
                        (<i className="fa fa-check text-green-400 mr-1" aria-hidden="true"></i>
                        Current Company)
                    </span>}
                </div>
                <div className='text-base text-gray-500 truncate'>{subTitle}</div>
            </div>
            <div className='w-full md:w-1/2 md:text-right text-sm text-gray-500 truncate'>{sideText}</div>
            <section className='w-full mt-2'>
                <button className='text-brand-dark text-sm' onClick={() => setOpen(prev => !prev)}>{open ? 'Hide description...' : 'Read description...'}</button>
                {open && <div className='mt-2 text-sm'>
                    {description}
                </div>}
            </section>
        </div>
    )
}

AccordianItem.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string,
    sideText: PropTypes.string,
    currentCompany: PropTypes.bool,
    description: PropTypes.string
}

export default AccordianItem;