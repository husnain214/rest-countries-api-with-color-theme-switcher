import React from 'react'
import { Link } from 'react-router-dom'

import CountryDetail from './CountryDetail'

const Card = ({ country, countries }) => {
    const findCapital = () => {
        if (!Object.keys(country).includes('capital')) return
        
        return <CountryDetail title = {"Capital"} value = {country.capital[0]} />
    }

    return (
        <Link to = {`/${country.name.common}`} state = {{ country, countries }}>
            <article className = 'grid elements-bg'>
                <div className = 'card-img'>
                    <img 
                        src = {country.flags.svg}
                        alt = '' 
                    />
                </div>

                <div className = 'card-body'>
                    <h3 className = 'fw-700 text-color-strong fs-500'>{country.name.common}</h3>

                    <CountryDetail title = {"Population"} value = {country.population.toLocaleString()} />
                    <CountryDetail title = {"Region"} value = {country.region} />
                    {findCapital()}
                </div>
            </article>
        </Link>
    )
}

export default Card