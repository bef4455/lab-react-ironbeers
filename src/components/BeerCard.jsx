import React from 'react'
import { Link } from 'react-router-dom'

const BeerCard = (props) => {

    const beer = props.beer

  return (

    <div className="BeerCard">
        <div className="imgContainer">
            <img height={90} src={beer.image_url} alt={beer.name}></img>
        </div>

        <Link to={'/beers/' + beer._id}>
            <h4>{beer.name}</h4>
        </Link>
        <p className="grey">{beer.tagline}</p>
        <p>{`Created by :${beer.contributed_by}`}</p>
    </div>
  )
}

export default BeerCard