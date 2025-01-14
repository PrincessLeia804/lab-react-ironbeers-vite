import { Route, Routes } from "react-router-dom";
import "./App.css";
import AllBeersPage from "./pages/AllBeersPage"
import RandomBeerPage from "./pages/RandomBeerPage"
import AddBeerPage from "./pages/AddBeerPage"
import BeerDetailsPage from "./pages/BeerDetailPage"
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";


function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage   />} />
        <Route path="/beers" element={<AllBeersPage   />} />
        <Route path="/random-beer" element={<RandomBeerPage   />} />
        <Route path="/new-beer" element={<AddBeerPage   />} />
        <Route path="/beers/:beerId" element={<BeerDetailsPage   />} />
        <Route path="*" element={<h1>404 page</h1>} />
      </Routes>
    </div>
  );
}

export default App;
