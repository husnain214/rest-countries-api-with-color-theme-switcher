import React from 'react'

const ContinentFilter = () => {
    return (
        <div className = 'continent-filter'>
            <div 
                className='menu-title elements-bg flex' 
                aria-label = 'clickable-dropdown-menu'
            >
                <p className = 'fs-300 text-color-strong fw-400' data-type = 'showMenu'>Filter by Region</p>

                <svg 
                    xmlns = 'http://www.w3.org/2000/svg' 
                    fill = 'none' 
                    viewBox = '0 0 24 24' 
                    strokeWidth = '1.5' 
                    stroke = 'hsl( var(--clr-text) )' 
                    className ='w-6 h-6'
                    height = '20'
                    width = '20'
                >
                    
                    <path 
                        strokeLinecap = 'round' 
                        strokeLinejoin = 'round' 
                        d = 'M19.5 8.25l-7.5 7.5-7.5-7.5' 
                    />
                </svg>

                <input 
                    type = 'checkbox' 
                    name = 'dropdown-click-event' 
                    className = 'dropdown-click-event'
                    onBlur = {e => e.target.checked = false}
                />
            </div>

            <ul className = 'dropdown-menu elements-bg'>
                <li className = 'fs-300 text-color-strong fw-400'>Africa</li>
                <li className = 'fs-300 text-color-strong fw-400'>America</li>
                <li className = 'fs-300 text-color-strong fw-400'>Asia</li>
                <li className = 'fs-300 text-color-strong fw-400'>Europe</li>
                <li className = 'fs-300 text-color-strong fw-400'>Europe</li>
            </ul>
        </div>
    )
}

export default ContinentFilter