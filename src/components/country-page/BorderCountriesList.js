import React from "react"
import { Link } from 'react-router-dom'

const BorderCountriesList = ({ country, countries }) => {
    let borderCountries = []

    if(country.borders === undefined) return 
    
    country.borders.forEach(border => countries.map(count => {
        if (count.cca3 === border) borderCountries.push(count.name.common)
    }))

    return (
        <div className = "border-countries flex">
            <h4 className = "fs-300 fw-500 text-color-strong">Border Countries:</h4>

            <ul className = "border-countries-list flex">
                {                                    
                    borderCountries.map(borderCountry => {
                        const country = countries.filter(country => country.name.common === borderCountry)[0]

                        return (
                            <Link to = {`/${borderCountry}`} state = {{ country , countries }} key = {borderCountry}>
                                <li 
                                    className = "fs-300 fw-300 text-color-strong" 
                                >{borderCountry}</li>
                            </Link>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default BorderCountriesList