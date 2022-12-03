import React from 'react'
import { useState } from 'react'

import Form from './Form'
import CardGallery from './CardGallery'

const Home = ({countries}) => {
    const [searchCountry, setSearchCountry] = useState('')
    const [filterContinent, setFilterContinent] = useState('')

    return (
        <main className = 'container'>
            <Form 
                searchCountry = {searchCountry} 
                setSearchCountry = {setSearchCountry} 
                filterContinent = {filterContinent}
                setFilterContinent = {setFilterContinent}
            />
            <CardGallery 
                countries = {countries} 
                searchCountry = {searchCountry} 
                filterContinent = {filterContinent}
                setFilterContinent = {setFilterContinent}
                setSearchCountry = {setSearchCountry} 
            />
        </main>
    )
}

export default Home