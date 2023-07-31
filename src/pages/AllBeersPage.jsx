import React, { useEffect, useState } from "react";
import "./AllBeersPage.css"

function AllBeersPage() {
  const [allBeers, setAllBeers] = useState(null);

  const fetchAllBeers = async (setter) => {
    const response = await fetch(`https://ih-beers-api2.herokuapp.com/beers`);

    if (response.status === 200) {
      const beers = await response.json();
      setter(beers);
      console.log('beers: ', beers);
    }
  };

  useEffect(() => {
    fetchAllBeers(setAllBeers);
  }, []);

  return allBeers ? (
    <div className="beer-container">
        {allBeers.map((beer) => {
          return (
            <div key={beer._id} className="beer-card">
              <div>
                <img src={beer.image_url} className="beer-img" />
              </div>
              <div className="beer-info">
                <h1>{beer.name}</h1>
                <h2>{beer.tagline}</h2>
                <p>Created by: {beer.contributed_by}</p>
              </div>
            </div>
          );
        })}
        <hr></hr>
    </div>
  ) : (
    <h1>Loading...</h1>
  );
}

export default AllBeersPage;
