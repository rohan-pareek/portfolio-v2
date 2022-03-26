import React from 'react';
import PropTypes from 'prop-types';
import Badge from '../badge';
import Link from 'next/link';

const ProjectCard = ({ name, gitUrl, liveUrl, techstack, description, personal }) => {
    return (
        <div className='p-4 shadow w-full mb-4'>
            <div className='mb-2 text-lg font-bold'>{name}</div>
            {personal && <div>
                {gitUrl && <Link href={gitUrl}>
                    <a target="_blank">
                        <Badge data='Source Code' classes='bg-brand-dark mr-2 mb-2' />
                    </a>
                </Link>}
                {liveUrl && <Link href={liveUrl}>
                    <a target="_blank">
                        <Badge data='Live URL' classes='bg-brand-dark mr-2 mb-2' />
                    </a>
                </Link>}
            </div>}
            <div className='mb-2'>
                <ul>
                    {techstack.map((tech, index) => (
                        <Badge data={tech} classes='bg-brand-light text-black mr-2 mb-2' key={`${tech}-${index}`} />
                    ))}
                </ul>
            </div>
            <div>
                {description}
            </div>
        </div >
    )
}

ProjectCard.propTypes = {
    name: PropTypes.string.isRequired,
    gitUrl: PropTypes.string,
    liveUrl: PropTypes.string,
    techstack: PropTypes.array.isRequired,
    description: PropTypes.string.isRequired,
    personal: PropTypes.bool
}

export default ProjectCard;