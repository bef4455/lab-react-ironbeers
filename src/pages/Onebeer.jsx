import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import BeerCard from '../components/BeerCard'



const Onebeer = () => {
    
    const [beer, setBeers] = useState(null)
     const beerId = useParams().beerId


    useEffect(() => {
        fetch('https://ih-beers-api2.herokuapp.com/beers/' + beerId)
    .then((rawResponse) => rawResponse.json())
    .then((response) => { 
      setBeers(response)
    })

    .catch((e) => console.error(e))
    }, [beerId])

    if (!beer) {
        return <h1>"Loading..."</h1>
    }

  return (

    <section className='One-beer'>
        <BeerCard beer={beer} />
        <div>{beer.first_brewed}</div>
        <div>{beer.attenuation_level}</div>
        <p>{beer.description}</p>
    </section>
  )
}

export default Onebeer;