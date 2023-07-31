import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./BeerDetailPage.css";

function BeerDetailPage() {
  const { beerId } = useParams();
  const [beer, setBeer] = useState(null);

  const fetchOneBeer = async (setter, id) => {
    const response = await fetch(
      `https://ih-beers-api2.herokuapp.com/beers/${id}`
    );

    if (response.status === 200) {
      const beer = await response.json();
      setter(beer);
      console.log("beers: ", beer);
    }
  };

  useEffect(() => {
    fetchOneBeer(setBeer, beerId);
  }, [beerId]);

  return beer ? (
    <div key={beer._id} className="beer-flex-container">
      <div className="beer-details">
        <div className="image">
          <img
            src={beer.image_url}
            alt="Picture of Beer"
            className="beer-img"
          />
        </div>
        <div className="beer-content-row">
          <div>
            <h1>{beer.name}</h1>
          </div>
          <div>
            <h3>{beer.attenuation_level}</h3>
          </div>
        </div>
        <div className="beer-content-row">
          <div>
            <h2>{beer.tagline}</h2>
          </div>
          <div>
            <h4>{beer.first_brewed}</h4>
          </div>
        </div>
        <div>
          <p>{beer.description}</p>
        </div>
        <h5>{beer.contributed_by}</h5>
      </div>
    </div>
  ) : (
    <h1>Loading...</h1>
  );
}

export default BeerDetailPage;
