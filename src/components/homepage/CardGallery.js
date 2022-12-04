import React from 'react'

import Card from './Card'

const CardGallery = ({ countries, searchCountry, filterContinent, }) => {
    const checkSearchResults = () => {
        if(filterContinent !== '') {
            return (
                countries.map(country => {
                    if(country.continents[0].includes(filterContinent))
                    return <Card country = {country} countries = {countries} key = {country.name.common} />
                })
            )
        }

        if (searchCountry) {
            return (
                countries.map(country => {
                    if(country.name.common.toLowerCase().includes(searchCountry))
                        return <Card country = {country} countries = {countries} key = {country.name.common} />
                })
            )
        }
        else {
            return (
                countries.map(country => <Card country = {country} countries = {countries} key = {country.name.common} />)
            )
        }
    }

    return (
        <section className='card-gallery grid'>
            {
                checkSearchResults()
            }
        </section>
    )
}

export default CardGallery