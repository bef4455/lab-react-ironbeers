import React, { useState, useEffect } from 'react'
import BeerCard from '../components/BeerCard';

const Beers = () => {

  const [beers, setBeers] = useState(null)

  useEffect(() => {
    fetch('https://ih-beers-api2.herokuapp.com/beers')
    .then((rawResponse) => rawResponse.json())
    .then((response) => { 
      setBeers(response)
    })
    .catch((e) => console.error(e))

  }, [])

  if (!beers) {
    return <h1>"Loading..."</h1>
  }



  return (
   
   <section className='all-beers'> 

      {beers.map((beer) => 
      // console.log(beer)

        <BeerCard key={beer._id} beer={beer} />
        
      )}

    </section>
  )
}

export default Beers