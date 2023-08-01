import React, { useEffect, useState } from 'react'
import { fetchBeer, fetchRandomBeer } from '../functions/functions';

function RandomBeerPage() {
  const [beer, setBeer] = useState(null);
  const [randomBeer, setRandomBeer] = useState(null);
  const beerApi = `https://ih-beers-api2.herokuapp.com/beers`

  useEffect(() => {
    fetchBeer(setBeer, beerApi)
  }, []);

  useEffect(() => {
    if(beer){
      fetchRandomBeer(beer, setRandomBeer);
    }
  }, [beer])
  
  return randomBeer ? (
    <div key={randomBeer._id} className="beer-flex-container">
      <div className="beer-details">
        <div className="image">
          <img
            src={randomBeer.image_url}
            alt="Picture of Beer"
            className="beer-img"
          />
        </div>
        <div className="beer-content-row">
          <div>
            <h1>{randomBeer.name}</h1>
          </div>
          <div>
            <h3>{randomBeer.attenuation_level}</h3>
          </div>
        </div>
        <div className="beer-content-row">
          <div>
            <h2>{randomBeer.tagline}</h2>
          </div>
          <div>
            <h4>{randomBeer.first_brewed}</h4>
          </div>
        </div>
        <div>
          <p>{randomBeer.description}</p>
        </div>
        <h5>{randomBeer.contributed_by}</h5>
      </div>
    </div>
  ) : (
    <h1>Loading...</h1>
  );
}

export default RandomBeerPage