
import { useNavigate } from "react-router";
import data from "../../data.json";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="text-center p-8">
      <h1 className="text-4xl font-bold text-white">Explore the Planets</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
        {data.map((planet) => (
          <button
            key={planet.name}
            className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700"
            onClick={() => navigate(`/planets/${planet.name.toLowerCase()}`)}
          >
            {planet.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Home;
