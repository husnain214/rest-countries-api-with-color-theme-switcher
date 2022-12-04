import React from 'react'
import { useLocation } from 'react-router-dom'

import BackBtn from './BackBtn'
import CountryDetail from '../homepage/CountryDetail'
import BorderCountriesList from './BorderCountriesList'

const CountryPage = () => {
    const { country, countries } = useLocation().state

    const currencyKey = Object.keys(country.currencies)[0]
    const nameKey = Object.keys(country.name.nativeName)[0]

    const findCapital = () => {
        if (!Object.keys(country).includes('capital')) return
        
        return country.capital[0]
    }

    const countryData = {
        "Native Name": country.name.nativeName[nameKey].official,
        "Population": country.population.toLocaleString(),
        "Region": country.region,
        "Sub Region": country.subregion,
        "Capital": findCapital(),
        "Top Level Domain": Object.keys(country)
                                  .find(key => key === "tld") === undefined 
                                  ? "Not found" 
                                  : country.tld[0],
        "Currencies": country.currencies[currencyKey].name,
        "Languages": Object.values(country.languages).join(", ")
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
                        {
                            Object.keys(countryData)
                            .map(countryKey => <CountryDetail title = {countryKey} value = {countryData[countryKey]} />)
                        }                     
                    </div>

                    <BorderCountriesList country = {country} countries = {countries} />
                </div>
            </section>
        </main>
    )
}

export default CountryPage