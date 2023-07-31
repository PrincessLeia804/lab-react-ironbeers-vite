import { Link } from "react-router-dom";
import Image from "../assets/beers.png";
import Image2 from "../assets/random-beer.png";
import Image3 from "../assets/new-beer.png";
import "./HomePage.css";

function HomePage() {
  return (
    <>
      <div className="hp-card">
        <img src={Image}></img>
        <Link to={"/beers"}>
          <h3>All Beers</h3>
          <p>Lorem Ipsum</p>
        </Link>
      </div>

      <div className="hp-card">
        <img src={Image2}></img>
        <Link to={"/random-beer"}>
          <h3>Random Beer</h3>
          <p>Lorem Ipsum</p>
        </Link>
      </div>

      <div className="hp-card">
        <img src={Image3}></img>
        <Link to={"/new-beer"}>
          <h3>New Beer</h3>
          <p>Lorem Ipsum</p>
        </Link>
      </div>
    </>
  );
}

export default HomePage;
