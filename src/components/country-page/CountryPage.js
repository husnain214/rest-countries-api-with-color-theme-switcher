import React from 'react'
import { useLocation } from 'react-router-dom'

import BackBtn from './BackBtn'
import CountryDetail from '../homepage/CountryDetail'

const CountryPage = () => {
    const { country } = useLocation().state

    // Because the names of these keys are different for each entry
    const currencyKey = Object.keys(country.currencies)[0]
    const nameKey = Object.keys(country.name.nativeName)[0]

    console.log(country)

    const findCapital = () => {
        if (!Object.keys(country).includes('capital')) return
        
        return <CountryDetail title = {"Capital"} value = {country.capital[0]} />
    }

    return (
        <main className = 'country-main container grid'>
            <BackBtn />

            <section className='country-section flex'>
                <aside className='flag'>
                    <img 
                        src = {country.flags.svg}
                        alt = {`${country.name.common} flag`}
                    />
                </aside>

                <div className = 'country-content'>
                    <h2 className = 'fs-600 fw-600 text-color-strong'>{country.name.common}</h2>

                    <div className='details grid'>
                        <CountryDetail title = "Native Name" value = {country.name.nativeName[nameKey].official} />
                        <CountryDetail title = "Population" value = {country.population.toLocaleString()} />
                        <CountryDetail title = "Region" value = {country.region} />
                        <CountryDetail title = "Sub Region" value = {country.subregion} />
                        {findCapital()}
                        <CountryDetail title = "Top Level Domain" value = {country.tld[0]} />
                        <CountryDetail title = "Currencies" value = {country.currencies[currencyKey].name} />
                        <CountryDetail title = "Languages" value = {Object.values(country.languages).join(", ")} />                     
                    </div>
                </div>
            </section>
        </main>
    )
}

export default CountryPage