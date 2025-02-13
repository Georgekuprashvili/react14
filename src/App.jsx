import { BrowserRouter as Router, Routes, Route, Link } from "react-router";
import Home from "./Pages/HomePage/Home";
import PlanetDetails from "./Pages/PlanetsPage/components/PlanetDetails";
import data from "./data.json";
import "./App.css";

function App() {
  return (
    <Router>
      <nav className=" w-[100%] bg-[#070724]  p-4 text-white flex justify-between  ">
        <h1 className="text-xl font-bold">The Planets</h1>
        <div className="flex gap-[33px] w-[640px] ">
          {data.map((planet) => (
            <Link
              key={planet.name}
              to={`/planets/${planet.name.toLowerCase()}`}
              className=" hover:text-gray-400"
            >
              {planet.name}
            </Link>
          ))}
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/planets/:name" element={<PlanetDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
