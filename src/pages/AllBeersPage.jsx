import React, { useEffect, useState } from "react";
import "./AllBeersPage.css";
import { Link } from "react-router-dom";
import { fetchBeer } from "../functions/functions";

function AllBeersPage() {
  const [allBeers, setAllBeers] = useState(null);
  const [query, setQuery] = useState("");
  const beerApi = `https://ih-beers-api2.herokuapp.com/beers/search?q=`;

  useEffect(() => {
    fetchBeer(setAllBeers, `${beerApi}${query}`);
  }, [query]);

  return allBeers ? (
    <div className="all-beers-container">
      <div>
      <label className="search-label">Search Beer</label>
      </div>
      <input
        name="query"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <div className="beer-container">
        {allBeers.map((beer) => {
          return (
            <Link to={`/beers/${beer._id}`} key={beer._id} className="link">
              <div className="beer-card">
                <div>
                  <img src={beer.image_url} className="beer-img" />
                </div>
                <div className="beer-info">
                  <h1>{beer.name}</h1>
                  <h2>{beer.tagline}</h2>
                  <p>Created by: {beer.contributed_by}</p>
                </div>
              </div>
            </Link>
          );
        })}
        <hr></hr>
      </div>
    </div>
  ) : (
    <h1>Loading...</h1>
  );
}

export default AllBeersPage;
