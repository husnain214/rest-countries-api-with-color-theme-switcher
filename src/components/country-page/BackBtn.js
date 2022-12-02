import React from 'react'
import { Link } from 'react-router-dom'

const BackBtn = () => {
    return (
        <Link to = '/'>
            <button className = 'back-btn flex body-bg'>
                <svg 
                    xmlns = 'http://www.w3.org/2000/svg' 
                    fill = 'none' 
                    viewBox = '0 0 24 24' 
                    strokeWidth = '1.5' 
                    stroke = 'hsl( var(--back-svg-stroke) )' 
                    className = 'w-6 h-6'
                    height = '3ch'
                    width = '3ch'
                >

                    <path 
                        strokeLinecap='round' 
                        strokeLinejoin='round' 
                        d='M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18' 
                    />
                </svg>              
                
                <span className = 'text-color-strong'>Back</span>
            </button>
        </Link>
    )
}

export default BackBtn