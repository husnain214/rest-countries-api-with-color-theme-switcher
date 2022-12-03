import React from 'react'

const Continent = ({ continentName, setFilterContinent }) => {
    const dropdownClickEvent = document.querySelector("#dropdown-click-event")
    
    return (
        <li 
            className = 'fs-300 text-color-strong fw-400'
            data-type = 'continent'
            onClick = {() => setFilterContinent(continentName)}
        >{continentName}</li>
    )
}

export default Continent