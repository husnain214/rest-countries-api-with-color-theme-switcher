import React from 'react'

import Form from './Form'
import CardGallery from './CardGallery'

const Home = ({countries}) => {
    return (
        <main className = 'container'>
            <Form />
            <CardGallery countries = {countries} />
        </main>
    )
}

export default Home