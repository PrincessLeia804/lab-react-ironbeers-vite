import { Link } from "react-router-dom";
import "./Navbar.css";
import HomeIcon from "../assets/home-icon.png";

function Navbar() {
  return (
    <Link to="/">
      <nav>
        <div className="home-image">
          <img src={HomeIcon} alt="Home Icon" />
        </div>
      </nav>
    </Link>
  );
}

export default Navbar;
