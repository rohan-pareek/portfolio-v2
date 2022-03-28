import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';

const AccordianItem = ({ title, subTitle, sideText, currentCompany }) => {

    const [open, setOpen] = useState(false);

    return (
        <div className={`flex flex-col md:flex-row justify-between flex-wrap shadow border-l-4 border-gray-400 rounded mb-4 p-2 bg-slate-50`}>
            <div className='w-full md:w-1/2 truncate'>
                <div className='font-bold truncate'>{title}
                    { currentCompany && <span className='text-xs font-normal ml-2'>
                        (<i className="fa fa-check text-green-400 mr-1" aria-hidden="true"></i>
                        Current Company)
                    </span> }
                </div>
                <div className='text-base text-gray-500 truncate'>{subTitle}</div>
            </div>
            <div className='w-full md:w-1/2 md:text-right text-sm text-gray-500 truncate'>{sideText}</div>
            <section className='w-full mt-2'>
                <button className='text-brand-dark text-sm' onClick={() => setOpen(prev => !prev)}>{ open ? 'Hide description...' : 'Read description...'}</button>
                {open && <div className='mt-2 text-sm'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac blandit tortor. Fusce sit amet nulla magna. Praesent at enim quis massa pretium laoreet. Aenean ullamcorper tristique ligula, nec ornare turpis hendrerit a. Integer at nisi elit. Donec vulputate tellus vitae enim volutpat cursus. Phasellus sed feugiat libero, eget egestas ipsum. In non justo id nulla elementum gravida at eu nisl. Pellentesque luctus sagittis mi, at accumsan mauris rutrum a. Phasellus sollicitudin pulvinar urna. Donec rutrum ultrices lobortis. Nunc efficitur vel massa sed dapibus. Integer eu blandit magna. Duis efficitur dolor eu nibh gravida vestibulum.
                </div>}
            </section>
        </div>
    )
}

AccordianItem.propTypes = {
    title: PropTypes.string.isRequired,
    sideText: PropTypes.string
}

export default AccordianItem;