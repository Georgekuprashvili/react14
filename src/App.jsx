import { BrowserRouter as Router, Routes, Route, Link } from "react-router";
import { useState } from "react";
import Home from "./Pages/HomePage/Home";
import PlanetDetails from "./Pages/PlanetsPage/components/PlanetDetails";
import data from "./data.json";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Router>
      <header className="bg-[#070724] text-white px-4 py-4 w-full border-b border-gray-600">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold uppercase">The Planets</h1>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden z-50">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          <nav className="hidden md:flex gap-8">
            {data.map((planet) => (
              <Link
                key={planet.name}
                to={`/planets/${planet.name.toLowerCase()}`}
                className="hover:text-gray-400 uppercase text-sm tracking-wide"
              >
                {planet.name}
              </Link>
            ))}
          </nav>
        </div>

        {isOpen && (
          <nav className="md:hidden mt-4 flex flex-col gap-4 bg-[#070724] border-t border-gray-700 pt-4">
            {data.map((planet) => (
              <Link
                key={planet.name}
                to={`/planets/${planet.name.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="hover:text-gray-400 uppercase px-2 py-2 border-b border-gray-700"
              >
                {planet.name}
              </Link>
            ))}
          </nav>
        )}
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/planets/:name" element={<PlanetDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
