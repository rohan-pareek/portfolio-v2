import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'

const CustomMeta = ({ title, description }) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name='description' content={description} />
        </Head>
    )
}

CustomMeta.propTypes = {}

export default CustomMeta;