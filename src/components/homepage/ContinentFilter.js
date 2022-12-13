import React from 'react'

import Continent from './Continent'

const ContinentFilter = ({ setFilterContinent }) => {
    const continents = ['Africa', 'America', 'Asia', 'Europe', 'Oceania']

    return (
        <div className = 'continent-filter'>
            <button 
                className='menu-title elements-bg flex' 
                type = 'button'
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
            </button>

            <ul className = 'dropdown-menu elements-bg' role = 'listbox'>
                {
                    continents.map(continent => 
                        <Continent 
                            continentName = {continent} 
                            setFilterContinent = {setFilterContinent} 
                            key = {continent}
                        />)
                }
            </ul>
        </div>
    )
}

export default ContinentFilter