import React from 'react'

import { Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'

import axios from 'axios'

import Home from './components/homepage/Home'
import Navbar from './components/homepage/Navbar'
import CountryPage from './components/country-page/CountryPage'

const App = () => {
    const [countries, setCountries] = useState([]) 

    const countriesApiCall = async () => {
        console.log('effect')
        
        let apiResponse
        
        try {
            apiResponse = await axios
            .get('https://restcountries.com/v3.1/all')
            .then(response => {
                console.log('promise fulfilled')
                return response.data
            })   
        }
        catch {
            return <p>Could Not connect to API</p>
        }

        setCountries(apiResponse)
    }

    useEffect( () => { countriesApiCall() }, [])

    console.log(`Rendered ${countries.length} countries`)

    return (
        <>
            <Navbar />
            
            <Routes>
                <Route path = '/' element = {<Home countries = {countries} />}></Route>
                <Route path = '/:countryName' element = {<CountryPage />}></Route>
            </Routes>
        </>
    )
}

export default App
