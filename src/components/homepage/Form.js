import React from 'react'

import SearchBar from './SearchBar'
import ContinentFilter from './ContinentFilter'

const Form = ({ setSearchCountry, setFilterContinent }) => {
    return (
        <form action = '' method = '' className = 'flex'>
            <SearchBar setSearchCountry = {setSearchCountry} setFilterContinent = {setFilterContinent} />
            <ContinentFilter setFilterContinent = {setFilterContinent} setSearchCountry = {setSearchCountry} />
        </form>
    )
}

export default Form