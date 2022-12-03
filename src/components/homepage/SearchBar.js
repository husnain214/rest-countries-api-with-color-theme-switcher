import React from 'react'

const SearchBar = ({ setSearchCountry, setFilterContinent }) => {
    return (
        <div className ='search-bar elements-bg flex'>
            <svg 
                xmlns = 'http://www.w3.org/2000/svg' 
                fill = 'none' 
                viewBox = '0 0 24 24' 
                strokeWidth = '2' 
                stroke = 'hsl( var(--clr-text) )' 
                className = 'w-6 h-6'
                height = '20'
                width = '20'
            >
                <path 
                    strokeLinecap = 'round' 
                    strokeLinejoin = 'round' 
                    d = 'M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z' 
                />
            </svg>
            

            <input 
                type = 'text'
                name = 'search country'
                id = 'search-country'
                className = 'fs-300 elements-bg fw-400 text-color-strong'
                placeholder = 'Search for a country...'
                aria-label = 'country search bar'
                onChange = {e => {
                    setSearchCountry(e.target.value)
                    setFilterContinent('')
                }
                }
            />
        </div>
    )
}

export default SearchBar