import React from 'react';

const Contact = props => {
    return (
        <section className='w-full'>
            <div className='flex border rounded bg-slate-50'>
                <div className='p-2 px-4 flex-none'>
                    <i className="fa fa-envelope" style={{ width: '15px' }} aria-hidden="true"></i>
                </div>
                <div className='flex-1 border-l p-2 truncate'>
                    <a href="mailto:rpareek.2029@gmail.com">
                        rpareek.2029@gmail.com
                    </a>
                </div>
            </div>
            <div className='flex border rounded bg-slate-50 mt-2'>
                <div className='p-2 px-4 flex-none'>
                    <i className="fa fa-github" style={{ width: '15px' }} aria-hidden="true"></i>
                </div>
                <div className='flex-1 border-l p-2 truncate'>
                    <a href="https://github.com/rohan-pareek" target="_blank" rel="noreferrer">
                        https://github.com/rohan-pareek
                    </a>
                </div>
            </div>
            <div className='flex border rounded bg-slate-50 mt-2'>
                <div className='p-2 px-4 flex-none'>
                    <i className="fa fa-linkedin" style={{ width: '15px' }} aria-hidden="true"></i>
                </div>
                <div className='flex-1 border-l p-2 truncate'>
                    <a href="https://www.linkedin.com/in/rohan-pareek-6a915095/">
                    https://www.linkedin.com/in/rohan-pareek-6a915095
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Contact;