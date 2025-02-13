function PlanetStats({ planet }) {
  return (
    <div className="flex gap-[50px] mt-[200px] w-full justify-center">
      {[
        { label: "Rotation Time", value: planet.rotation },
        { label: "Revolution Time", value: planet.revolution },
        { label: "Radius", value: planet.radius },
        { label: "Temperature", value: planet.temperature },
      ].map((info, index) => (
        <div
          key={index}
          className="w-[255px] h-[128px] border border-white flex flex-col justify-center pl-[28px]"
        >
          <h2 className="text-white font-[Spartan] text-[11px] font-bold leading-[25px] tracking-[1px] uppercase opacity-50">
            {info.label}
          </h2>
          <h1 className="text-white font-[Antonio] text-[36px] font-normal leading-normal tracking-[-1.5px] uppercase">
            {info.value}
          </h1>
        </div>
      ))}
    </div>
  );
}

export default PlanetStats;
