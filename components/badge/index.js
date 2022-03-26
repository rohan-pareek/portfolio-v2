import React from 'react';
import PropTypes from 'prop-types';

const Badge = ({ data, classes = '' }) => {
    return (
        <div className={`${classes} bg-gray-400 text-white rounded-full p-1 px-3 inline-block text-sm`}>
            {data}
        </div>
    )
}

Badge.propTypes = {
    data: PropTypes.string.isRequired,
    classes: PropTypes.string
};

export default Badge;