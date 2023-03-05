import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
   <>
   <section className='AllBeers'>
   <img src={require(`../assets/beers.png`)} alt="AllBeers" />
    <Link to="/beers">All Beers</Link>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi deserunt aliquid in aliquam nostrum? Maiores deleniti eum accusamus voluptates architecto excepturi ducimus id eius expedita aliquid, aspernatur nostrum quibusdam deserunt.</p>
   </section>
   <section className='RandomBeer'>
   <img src={require(`../assets/random-beer.png`)} alt='RandomBeers'></img>
    <Link to="/random-beer">Random Beer</Link>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi deserunt aliquid in aliquam nostrum? Maiores deleniti eum accusamus voluptates architecto excepturi ducimus id eius expedita aliquid, aspernatur nostrum quibusdam deserunt.</p>
   </section>
   <section className='NewBeer'>
   <img src={require(`../assets/new-beer.png`)} alt='NewBeers'></img>
    <Link to="/new-beer">New Beer</Link>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi deserunt aliquid in aliquam nostrum? Maiores deleniti eum accusamus voluptates architecto excepturi ducimus id eius expedita aliquid, aspernatur nostrum quibusdam deserunt.</p>
   </section>
   </>
  )
}

export default Home