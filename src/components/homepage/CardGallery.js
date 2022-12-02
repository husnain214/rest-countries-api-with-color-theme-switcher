import React from 'react'

import Card from './Card'

const CardGallery = ({countries}) => {
    return (
        <section className='card-gallery grid'>
            {
                countries.map(country => <Card country = {country} key = {country.name.common} />)
            }
        </section>
    )
}

export default CardGallery