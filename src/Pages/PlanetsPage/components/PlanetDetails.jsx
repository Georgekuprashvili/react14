import { useParams } from "react-router";
import { useState } from "react";
import data from "../../../data.json";
import bgimage from "../../../assets/background-stars.svg";
import PlanetImage from "./PlanetImage";
import PlanetStats from "./PlanetStats";
import "../../../App.css";

const planetColors = {
  mercury: "bg-[#419EBB]",
  venus: "bg-[#EDA249]",
  earth: "bg-[#6D2ED5]",
  mars: "bg-[#D14C32]",
  jupiter: "bg-[#D83A34]",
  saturn: "bg-[#CD5120]",
  uranus: "bg-[#1EC1A2]",
  neptune: "bg-[#2D68F0]",
};

function PlanetDetails() {
  const { name } = useParams();
  const planet = data.find((p) => p.name.toLowerCase() === name);
  const [selectedSection, setSelectedSection] = useState("overview");

  return (
    <div
      key={name}
      className="text-white h-screen  bg-[#070724] bg-cover bg-center"
      style={{ backgroundImage: `url(${bgimage})` }}
    >
      <hr />
      <div className="  w-full  justify-around items-center h-[500px] pt-[126px] flex  ">
        <PlanetImage name={name} selectedSection={selectedSection} />

        <div className="flex flex-col gap-[30px]  ">
          <h1 className="text-white font-[Antonio] text-[80px] font-normal leading-none uppercase max-md:text-[60px]">
            {planet.name}
          </h1>
          <p className="w-[350px] h-auto text-white font-[Spartan] text-[14px] font-normal leading-[25px] max-md:text-[8px] max-md:w-[200px]">
            {planet[selectedSection].content}
          </p>

          <a
            href={planet[selectedSection].source}
            target="_blank"
            className="opacity-50 text-white font-[Spartan] text-[14px] font-bold leading-[25px] underline"
          >
            Source: Wikipedia
          </a>

          <div className="flex flex-col gap-4">
            {["overview", "structure", "geology"].map((key) => (
              <button
                key={key}
                onClick={() => setSelectedSection(key)}
                className={`w-[350px] h-[48px] border border-white text-white transition-all cursor-pointer max-md:w-[200px] ${
                  selectedSection === key
                    ? `${planetColors[name.toLowerCase()]} text-black`
                    : "bg-transparent border-white"
                }`}
              >
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      <PlanetStats planet={planet} />
    </div>
  );
}

export default PlanetDetails;
