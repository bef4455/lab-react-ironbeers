import React, { useState } from 'react'
import axios from 'axios'

const NewBeer = () => {

    const [name, setName] = useState('')
    const [tagline, setTagline] = useState('')
    const [description, setDescription] = useState('')
    const [first_brewed, setFirst_brewed] = useState('')
    const [brewers_tips, setBrewers_tips] = useState('')
    const [attenuation_level, setAttenuation_level] = useState('')
    const [contributed_by, setContributed_by] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();

        const createBeer = {
            name: name,
            tagline: tagline,
            description: description,
            first_brewed: first_brewed,
            brewers_tips: brewers_tips,
            attenuation_level: attenuation_level,
            contributed_by: contributed_by,
        }
try {
    await axios.post(
        'https://ih-beers-api2.herokuapp.com/beers/new',
        createBeer
    )
    console.log(createBeer)
    
} catch (error) {
    console.log(error);
    
}

    }

  return (
    <form onSubmit={handleSubmit}>
           <div>
          <label htmlFor="name">Name:</label>
          <input
            onChange={(event) => setName(event.target.value)}
            value={name}
            type="text"
            name="name"
          />
        </div>
        <div>
          <label htmlFor="name">Tagline:</label>
          <input
            onChange={(event) => setTagline(event.target.value)}
            value={tagline}
            type="text"
            name="tagline"
          />
        </div>
        <div>
          <label htmlFor="name">Description:</label>
          <input
            onChange={(event) => setDescription(event.target.value)}
            value={description}
            type="text"
            name="description"
          />
        </div>
        <div>
          <label htmlFor="name">First brewed:</label>
          <input
            onChange={(event) => setFirst_brewed(event.target.value)}
            value={first_brewed}
            type="text"
            name="firstBrewed"
          />
        </div>
        <div>
          <label htmlFor="name">Brewers tips:</label>
          <input
            onChange={(event) => setBrewers_tips(event.target.value)}
            value={brewers_tips}
            type="text"
            name="brewersTips"
          />
        </div>
        <div>
          <label htmlFor="name">Attenuation level:</label>
          <input
            onChange={(event) => setAttenuation_level(event.target.value)}
            value={attenuation_level}
            type="number"
            name="attenuation"
            min={0}
          />
        </div>
        <div>
          <label htmlFor="name">Contributed by:</label>
          <input
            onChange={(event) => setContributed_by(event.target.value)}
            value={contributed_by}
            type="text"
            name="contributed"
          />
        </div>

        <button>Add new</button>
      </form>
    
  );
}

export default NewBeer