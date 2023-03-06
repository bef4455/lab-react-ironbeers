import React, { useEffect } from 'react'
import { useState } from 'react';
import BeerCard from '../components/BeerCard';
import { useParams } from 'react-router-dom';

const RandomBeer = () => {
    const [beer, setBeers] = useState(null)
     const beerId = useParams().beerId


    useEffect(() => {
        fetch('https://ih-beers-api2.herokuapp.com/beers/random')
    .then((rawResponse) => rawResponse.json())
    .then((response) => { 
      setBeers(response)
    })
    
    
    .catch((e) => console.error(e))
}, [])

    if (!beer) {
        return <h1>"Loading..."</h1>
    }

  return (

    <section className='Random-Beer'>
        <BeerCard beer={beer} />
        <div>{beer.first_brewed}</div>
        <div>{beer.attenuation_level}</div>
        <p>{beer.description}</p>
    </section>
  )
}


export default RandomBeer