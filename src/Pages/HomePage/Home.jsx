import { useNavigate } from "react-router";
import data from "../../data.json";
import bgimage from "../../assets/background-stars.svg";

function Home() {
  const navigate = useNavigate();

  return (
    <div
      className="bg-[#070724] w-[100%] h-full flex justify-center items-center"
      style={{ backgroundImage: `url(${bgimage})` }}
    >
      <h1 className="text-neutral-50 text-[80px]">
        Planets of the Solar System
      </h1>
    </div>
  );
}

export default Home;
