import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddBeerPage.css";

function AddBeerPage() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [first_brewed, setFirstBrewed] = useState("");
  const [brewers_tips, setBrewersTips] = useState("");
  const [attenuation_level, setAttenuationLevel] = useState(0);
  const [contributed_by, setContributedBy] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        "https://ih-beers-api2.herokuapp.com/beers/new",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            tagline,
            description,
            first_brewed,
            brewers_tips,
            attenuation_level,
            contributed_by,
          }),
        }
      );

      if (response.status === 200) {
        navigate(`/`);
      }
    } catch (error) {
      console.log("an error occured: ", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <label>Tagline</label>
        <input
          name="tagline"
          value={tagline}
          onChange={(event) => setTagline(event.target.value)}
        />

        <label>Description</label>
        <input
          name="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          className="description-box"
        />

        <label>First brewed</label>
        <input
          name="first_brewed"
          value={first_brewed}
          onChange={(event) => setFirstBrewed(event.target.value)}
        />

        <label>{`Brewer's Tips`}</label>
        <input
          name="brewers_tips"
          value={brewers_tips}
          onChange={(event) => setBrewersTips(event.target.value)}
        />

        <label>Attenuation Level</label>
        <input
          name="attenuation_level"
          type="number"
          value={attenuation_level}
          onChange={(event) => setAttenuationLevel(event.target.value)}
        />

        <label>Contributed By</label>
        <input
          name="contributed_by"
          value={contributed_by}
          onChange={(event) => setContributedBy(event.target.value)}
        />

        <button type="submit">ADD NEW</button>
      </form>
    </div>
  );
}

export default AddBeerPage;
