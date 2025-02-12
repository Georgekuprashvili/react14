import { useParams } from "react-router";
import data from "../../data.json";

function PlanetDetails() {
  const { name } = useParams();
  const planet = data.find((p) => p.name.toLowerCase() === name);

  if (!planet) {
    return <h2 className="text-center text-red-500">Planet Not Found</h2>;
  }

  return (
    <div className="p-8 text-white h-[100vh] bg-[#070724]">
      <h1 className="text-4xl font-bold">{planet.name}</h1>
      <p className="mt-4">{planet.overview.content}</p>
      <a
        href={planet.overview.source}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 underline"
      >
        Wikipedia Source
      </a>

      <div className="mt-6 flex flex-col items-center">
        <img src={planet.images.planet} className="w-40 h-40" />
        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="bg-gray-800 p-4 rounded-lg">
            <h2 className="text-sm text-gray-400">Rotation Time</h2>
            <p className="text-xl">{planet.rotation}</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <h2 className="text-sm text-gray-400">Revolution Time</h2>
            <p className="text-xl">{planet.revolution}</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <h2 className="text-sm text-gray-400">Radius</h2>
            <p className="text-xl">{planet.radius}</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <h2 className="text-sm text-gray-400">Temperature</h2>
            <p className="text-xl">{planet.temperature}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlanetDetails;
