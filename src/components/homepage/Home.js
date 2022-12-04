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
                setSearchCountry = {setSearchCountry} 
                setFilterContinent = {setFilterContinent}
            />
            <CardGallery 
                countries = {countries} 
                searchCountry = {searchCountry} 
                filterContinent = {filterContinent}
            />
        </main>
    )
}

export default Home