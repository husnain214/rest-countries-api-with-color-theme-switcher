import React from 'react'

const CountryDetail = ({title, value}) => {
    return ( 
        <div className = 'flex'>
            <p className = 'fs-300 fw-600 text-color-strong'>{title}:</p>
            <span className = 'fs-300 text-color-weak'>{value}</span>
        </div>
    )
}

export default CountryDetail