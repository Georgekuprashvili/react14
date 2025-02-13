import { motion } from "framer-motion";
import {
  planetImages,
  planetInternalImages,
  planetGeologyImages,
} from "./PlanetImages";

function PlanetImage({ name, selectedSection }) {
  return (
    <div className="relative w-[450px] h-[450px]">
      <motion.img
        key={name}
        src={
          selectedSection === "structure"
            ? planetInternalImages[name.toLowerCase()]
            : planetImages[name.toLowerCase()]
        }
        className="w-full h-full"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      />
      {selectedSection === "geology" && (
        <motion.img
          key={`${name}-geology`}
          src={planetGeologyImages[name.toLowerCase()]}
          className="absolute bottom-[-40px] left-[50%] transform -translate-x-1/2 w-[180px]"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
      )}
    </div>
  );
}

export default PlanetImage;
